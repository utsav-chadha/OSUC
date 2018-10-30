import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { map } from 'rxjs/operators';



@Injectable()

 export class AuthService {
  public user: Observable<User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  loginWithGoogle(): Observable<any> {
    return Observable.fromPromise(
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    );
  }

   signUp(email: string, password: string) {
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(
       error => console.log(error)
     );
   }

   signIn(email: string, password: string): Observable<any> {
    return Observable.fromPromise(
    this.afAuth.auth.signInWithEmailAndPassword(email, password),
     );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean>  {
    return this.user.pipe(map(user => user && user.uid !== undefined));
  }

  // getPosts(callback){
  //   db.collection('posts').get().then((snapshots)=>{
  //     arrray = []
  //     snapshots.forEach((snapshot)=>{
  //       arrray.push(snapshot.data());
  //     })
  //     callback(arrray);
  //   }).catch((error)=>{

  //   });
  //   user = {
  //     name: "gygyug"
  //   }
  //   db.collection('users').doc(user.uid).set(user).then(()=>{

  //   })
  // }


 }
