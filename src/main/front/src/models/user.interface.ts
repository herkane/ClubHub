// user.interface.ts
export interface User {
  id: number | null;
  name: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  image: string | null;
  phone: string | null;
  roles: string[] | null;
}
