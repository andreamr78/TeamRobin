import User from "../models/User.js";
import { AuthenticationError, signToken } from "../utils/auth.js";

interface AddUserArgs {
  input:{
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface addDestinationArgs{
  travelData:{
    photos: string[]
    price: number
    description: string
    weather: number
    activities: number[]
    videos: any[]
    temperature: number
    country: string
    city: string
  }
}


const resolvers = {
    Query: {
      me: async (_parent: any, _args: any, context: any) => {
        // If the user is authenticated, find and return the user's information along with their thoughts
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('savedDestinations');
        }
        // If the user is not authenticated, throw an AuthenticationError
        throw new AuthenticationError('Could not authenticate user.');
        },
      getSavedDestinations: async (_: any, __: any, context: any) => {
        if (!context.user) {
          throw new AuthenticationError('Not logged in');
        }
    
        const user = await User.findById(context.user._id).select('savedDestinations');
        return user?.savedDestinations || [];
      },
      },

    Mutation: {
      addUser: async (_: any, { username, email, password }: any) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user.username, user.email, user._id);
        return { token, user };
      },
      
      login: async (_parent: any, { email, password }: LoginUserArgs) => {
        // Find a user with the provided email
        const user = await User.findOne({ email });
      
        // If no user is found, throw an AuthenticationError
        if (!user) {
          throw new AuthenticationError('Could not authenticate user.');
        }
      
        // Check if the provided password is correct
        const correctPw = await user.isCorrectPassword(password);
      
        // If the password is incorrect, throw an AuthenticationError
        if (!correctPw) {
          throw new AuthenticationError('Could not authenticate user.');
        }
      
        // Sign a token with the user's information
        const token = signToken(user.username, user.email, user._id);
      
        // Return the token and the user
        return { token, user };
      },
      
      saveDestination: async (_: any, { travelData }: addDestinationArgs, context: any) => {
        if (!context.user) {
          throw new AuthenticationError('Not logged in');
        }
  
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedDestinations: travelData } },
          { new: true, runValidators: true }
        );
  
        return updatedUser;
      },
      
      removeDestination: async (_: any, { travelId }: { travelId: string }, context: any) => {
        if (!context.user) {
          throw new AuthenticationError('Not logged in');
        }
  
        if (!travelId) {
          throw new Error('Book ID is required'); 
        }
  
        return User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedDestinations: { travelId } } },
          { new: true }
        );
      },
        
    }
}
export default resolvers;