import { Timestamp } from '@firebase/firestore-types';
import { Expert } from './expert';
export class Answer {
  eid: string;
  likeCount: number;
  qid: string;
  status: string;
  text: string;
  timestamp: Timestamp;
  expert: Expert;
}
