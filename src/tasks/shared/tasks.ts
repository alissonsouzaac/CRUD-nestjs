import { Document } from 'mongoose';

export class Tasks extends Document {
  description: string;
  completed: boolean;
}
