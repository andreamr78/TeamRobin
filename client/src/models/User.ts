//import type { Book } from './Book';
import type { Travel } from "./Travel";

export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  savedDestinations: Travel[];
}