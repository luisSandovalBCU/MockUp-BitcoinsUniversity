
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user'


@Injectable()
export class FirebaseService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('tasks').valueChanges();
    this.usersCollection = this.afs.collection('Users', ref => ref.orderBy('Name', 'asc'));

    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

}
