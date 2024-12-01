export interface User {
  id: string;
  name: string;
  email: string;
  role: 'mentor' | 'mentee';
  avatar?: string;
  skills: string[];
  experience?: string;
  bio?: string;
}

export interface Session {
  id: string;
  mentorId: string;
  menteeId: string;
  date: Date;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  topic: string;
}