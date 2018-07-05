import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Asset } from '../models/asset'
import { CreatedAsset } from '../models/created-asset';
import { AcquiredAssets } from '../models/acquired-assets'
import 'rxjs/add/observable/combineLatest';
import { TwitterAuthProvider_Instance } from '@firebase/auth-types';


@Injectable()
export class FirebaseService {
  users: Observable<any[]>;
  assets: Observable<any[]>;
  videos : Observable<any[]>;
  acquiredAssets: Observable<AcquiredAssets[]>;
  UserAddress : string;




  constructor(public db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getUserAddress(address: string){
    this.UserAddress = address;
    this.getUserInfo();
  }

  getUserInfo(){
    if(this.UserAddress){
      return this.users = this.db.collection('Users',  ref => ref.where('address', '==', this.UserAddress)).valueChanges();
    }
  }

  getContent(){
    return this.videos = this.db.collection<Asset>('Assets').valueChanges();
  }

  addNewUser(user: User){
    const usersColection = this.db.collection<User>('Users');
    usersColection.add(user);
  }

  getSpecificUser(email : string){
    if(email){
      return this.users = this.db.collection('Users',  ref => ref.where('email', '==', email)).valueChanges();
    }
  }

  addNewContent(asset : Asset){
    const assetCollection = this.db.collection<Asset>('Assets');
    assetCollection.add(asset);
  }

  findAsset(sha256Hash : string){
    if(sha256Hash){
      return this.assets = this.db.collection<Asset>('Assets', ref => ref.where('assetSha256Hash', '==', sha256Hash)).valueChanges();
    }
  }

  registerCreation(createdAsset: CreatedAsset){
    const creationCollection = this.db.collection<CreatedAsset>('createdAsset');
    creationCollection.add(createdAsset);
  }


  registerNewSell(acquiredAssets: AcquiredAssets){
    const boughtAssetsCollection = this.db.collection<AcquiredAssets>('acquiredAssets');
    boughtAssetsCollection.add(acquiredAssets)
  }

  myAcquiredAssets(currentUserAddress: string){
    if(currentUserAddress){
      return this.acquiredAssets = this.db.collection<AcquiredAssets>('acquiredAssets', ref => ref.where('buyerAddress', "==", currentUserAddress)).valueChanges();
    }
  }
}
