/* Defines the user entity */
export interface IUser {
    id: number;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    regDate: Date;
  
}
