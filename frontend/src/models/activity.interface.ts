// user.interface.ts
import {User} from "./user.interface";

export interface ActivityInterface {
  id: number;
  title: string;
  content: string;
  members: User[];
  image: string;
  departure_date: Date;
  arrival_date: string;
  participantsNumber: number;
  participantsLimit: number;
  author: string;
  status: string;
  proposalDate: string;
}
