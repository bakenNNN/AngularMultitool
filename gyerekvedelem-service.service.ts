import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GyerekvedelemModel } from './gyerekvedelem-model.model';
@Injectable({
  providedIn: 'root'
})
export class GyerekvedelemServiceService {

  constructor(private angularFirestore: AngularFirestore) { }


  getGyDoc(id){
    return this.angularFirestore
    .collection('Gyermekvedelem')
    .doc(id)
    .valueChanges()
  }

  getGyList(){
    return this.angularFirestore
    .collection("Gyermekvedelem")
    .snapshotChanges();
  }
}
