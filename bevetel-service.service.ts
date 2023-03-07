import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

import { BevetelModel } from './bevetel-model.model';

@Injectable({
  providedIn: 'root'
})
export class BevetelServiceService {

  constructor(private angularFirestore: AngularFirestore) { }

  getBevetelList(){
    return this.angularFirestore
    .collection("BevetelProg")
    .snapshotChanges();
  }



}
