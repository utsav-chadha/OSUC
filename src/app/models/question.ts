import { Timestamp } from '@firebase/firestore-types';

export class Question {
id: string;
answerCount: number;
description: string;
followerCount: number;
status: string;
tags: string[];
text: string;
timestamp: Timestamp;
uid: string;
viewCount: number;
}
