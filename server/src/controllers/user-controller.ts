import type { Request, Response } from 'express';
import User from '../models/User.js';
import { signToken } from '../utils/auth.js';

// Create a user, sign a token, and send it back
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong' });
    }

    const token = signToken(user.username, user.email, user._id);
    return res.json({ token, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'server error' });
  }
};

// Login a user, sign a token, and send it back
export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });

    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong login info' });
    }

    const token = signToken(user.username, user.email, user._id);
    return res.json({ token, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'server error' });
  }
};

// Save a destination to a user's `savedDestinations` field
export const saveDestination = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(400).json({ message: 'User information is missing' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $addToSet: { savedDestinations: req.body } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user" });
    }

    return res.json(updatedUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'server error' });
  }
};

  }
};