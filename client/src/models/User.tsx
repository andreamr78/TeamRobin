import { Travel } from "./Travel";

export interface User {
  username?: string | null;
  email: string | null;
  password: string | null;
  savedDestinations: Travel[]; 
}