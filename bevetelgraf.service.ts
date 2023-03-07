import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BevetelgrafService {

  constructor(private angularFirestore: AngularFirestore) { }

  getGrafDoc(id){
    return this.angularFirestore
    .collection('BevetelGraf')
    .doc(id)
    .valueChanges()
  }

  getGrafList(){
    return this.angularFirestore
    .collection("BevetelGraf")
    .snapshotChanges();
  }
  getGraf23List(){
    return this.angularFirestore
    .collection("BevetelGraf2023")
    .snapshotChanges();
  }
}
