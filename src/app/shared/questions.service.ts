import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { DocumentSnapshot } from '@firebase/firestore-types';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable()
export class QuestionsService {

  constructor(public afs: AngularFirestore) { }



getQuestions():  Observable<DocumentChangeAction[]> {
  let questionCollection:  AngularFirestoreCollection<Question>;
  // let questions: Observable<Question[]>;
  questionCollection = this.afs.collection<Question>('questions');
  const questions = questionCollection.snapshotChanges();
  return questions;

}

getQuestion(qid: string): Observable<Question> {
  const expertDoc = this.afs.doc<Question>('questions/' + qid);
  const question = expertDoc.valueChanges();
  return question;
}


getAnswers(qid: string): Observable<Answer[]> {
  let answersCollection: AngularFirestoreCollection<Answer>;
  let answers: Observable<Answer[]>;
  answersCollection = this.afs.collection<Answer>('answers', ref => ref.where('qid', '==', qid));
  answers = answersCollection.valueChanges();
  return answers;
 }

}
