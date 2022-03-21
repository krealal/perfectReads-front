export interface User {
  username: string;
  password: string;
}

export interface UserRegister extends User {
  name: string;
  image: string;
  about: string;
  email: string;
}
