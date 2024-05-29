export enum userRoles {
  CLIENT = "client",
  ADMIN = "admin",
  SELLER = "seller",
}
export type userType = {
  userId?: string;
  name: string;
  email: string;
  avatar: string;
  role: userRoles;
};
