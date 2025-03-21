import { Document } from 'mongoose';

export interface IProfile extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}
