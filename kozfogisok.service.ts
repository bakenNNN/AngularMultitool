import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kozfogisok } from './kozfogisok.model';

@Injectable({
  providedIn: 'root'
})
export class KozfogisokService {
  
  constructor(private angularFirestore: AngularFirestore) { }
  
  getKozfogiDoc(id){
    return this.angularFirestore
    .collection('kozfogi-collection')
    .doc(id)
    .valueChanges()
  }

  getKozfogiList(){
    return this.angularFirestore
    .collection("kozfogi-collection")
    .snapshotChanges();
  }

  createKozfogis(kozfogi:Kozfogisok){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore
          .collection("kozfogi-collection")
          .add(kozfogi)
          .then(response => {console.log(response)}, error=> reject(error));
    });
  }
    
  deleteKozfogis(kozfogi){
    return this.angularFirestore
    .collection("kozfogi-collection")
    .doc(kozfogi.id)
    .delete();
  }

  updateKozfogis(kozfogi: Kozfogisok, id){
    return this.angularFirestore
    .collection("kozfogi-collection")
    .doc(id)
    .update({
      Neev: kozfogi.Neev,
      SzuletesiHely: kozfogi.SzuletesiHely,
      program: kozfogi.program,
      Szabadnapok: kozfogi.Szabadnapok,
      Orvosi: kozfogi.Orvosi,
      Anyja: kozfogi.Anyja
    });

  }



}
