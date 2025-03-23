import type  {Travel}  from './Travel.js';

export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  savedDestinations: Travel[];
}