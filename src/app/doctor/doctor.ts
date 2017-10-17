import { IUser } from '../user/user';

/**
 * Defines the doctor entity
 */
export interface IDoctor extends IUser {
  
  description: string;
  
}
