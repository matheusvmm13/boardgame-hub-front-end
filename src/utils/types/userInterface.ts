export interface UserLoginDataInterface {
  name?: string;
  username: string;
  password: string;
  id?: string | null;
  loggedIn?: boolean;
}

export interface UserMiscDataInterface extends UserLoginDataInterface {
  matches: [];
  baordgames: [];
}
