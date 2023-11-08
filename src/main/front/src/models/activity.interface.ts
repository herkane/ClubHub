// user.interface.ts
export interface ActivityInterface {
  id: number;
  title: string;
  content: string;
  participants: string;
  image: string;
  eventDate: string;
  participantsNumber: number;
  participantsLimit: number;
  proposedBy: string;
  status: string;
  proposalDate: string;
}
