// user.interface.ts
export interface User {
  id: number | null;
  fullName: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  image: string | null;
  phone: string | null;
  roles: string[] | null;
}
