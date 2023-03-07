import { Component, OnInit } from '@angular/core';

import { BevetelModel } from '../bevetel-model.model';
import { BevetelServiceService } from '../bevetel-service.service';
@Component({
  selector: 'app-list-bevetel',
  templateUrl: './list-bevetel.component.html',
  styleUrls: ['./list-bevetel.component.scss']
})


export class ListBevetelComponent implements OnInit {
  bevetel: BevetelModel[];
  arr1: boolean[] = [];
  constructor(private bevetelService: BevetelServiceService) { }

  ngOnInit(){
  
    this.bevetelService.getBevetelList().subscribe(res=>{
      this.bevetel = res.map(e=>{
        return{
          honap: e.payload.doc.id,
          ...e.payload.doc.data() as{}
          
        } as BevetelModel
      })
    });
    
    
    
    
  }
  
  


}

