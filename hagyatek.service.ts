import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HagyatekService {

  constructor(private angularFirestore: AngularFirestore) { }

  getHagyatekList(){
    return this.angularFirestore
    .collection("HagyatekColl")
    .snapshotChanges();
  }
}
