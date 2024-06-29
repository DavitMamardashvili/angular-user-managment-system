export class User {
    id: number = 0;
    email!: string;
    firstName!: string;
    lastName!: string;
    roles: string[] = [];
    status!: string;
  }
