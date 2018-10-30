import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Post } from '../models/Post';
import { Observable } from 'rxjs/observable';
@Injectable()
export class PostsService {

  constructor(public afs: AngularFirestore) {

  }

   getPosts(): Observable<Post[]> {
    let postsCollection: AngularFirestoreCollection<Post>;
    let posts: Observable<Post[]>;
    postsCollection = this.afs.collection<Post>('posts');
    posts = postsCollection.valueChanges();
    return posts;
   }

   getPostsByType(type: string): Observable<Post[]> {
    let postsCollection: AngularFirestoreCollection<Post>;
    let posts: Observable<Post[]>;
    postsCollection = this.afs.collection<Post>('posts', ref => ref.where('postType', '==', type));
    posts = postsCollection.valueChanges();
    return posts;
   }

   // tslint:disable-next-line:member-ordering
   clickedPost = new EventEmitter<string>();




}

