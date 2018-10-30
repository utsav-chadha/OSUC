import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Action } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { Expert } from '../models/expert';

import { DocumentSnapshot } from '@firebase/firestore-types';

@Injectable()
export class ExpertService {
  // expertMap = {};
  constructor(public afs: AngularFirestore) { }

  // eids: string[] = [];
  // experts: Observable<Action<DocumentSnapshot>>[] = [];
  // expertMap: {};

  getExpert(eid: string): Observable<Action<DocumentSnapshot>> {
    const expertDoc = this.afs.doc<Expert>('experts/' + eid);
    const expert = expertDoc.snapshotChanges();
    // this.expertMap[eid] = expert;
    return expert;
  }
}



