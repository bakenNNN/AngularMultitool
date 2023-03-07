import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KozfogisokService } from '../kozfogisok.service';


@Component({
  selector: 'app-create-kozfogis',
  templateUrl: './create-kozfogis.component.html',
  styleUrls: ['./create-kozfogis.component.scss']
})
export class CreateKozfogisComponent implements OnInit {
  public kozfogiForm : FormGroup;
  constructor( 
    public kozfogisokService: KozfogisokService,
    public formBuilder: FormBuilder,
    public router: Router

   ) { 
      this.kozfogiForm = this.formBuilder.group({
          Neev:[''],
          SzuletesiHely:[''],
          program:[''],
          Szabadnapok:[''],
          Orvosi:[''],
          Anyja:['']
      }

      )



   }

  ngOnInit(): void {
  }

  onSubmit(){ 
    this.kozfogisokService.createKozfogis(this.kozfogiForm.value);
    this.router.navigate(['list-kozfogis']);


   }


}
