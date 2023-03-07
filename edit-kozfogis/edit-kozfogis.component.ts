import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KozfogisokService } from '../kozfogisok.service';

@Component({
  selector: 'app-edit-kozfogis',
  templateUrl: './edit-kozfogis.component.html',
  styleUrls: ['./edit-kozfogis.component.scss']
})
export class EditKozfogisComponent implements OnInit {
  public editForm: FormGroup;
  kozfogisRef: any;

  constructor(
    public kozfogisokService: KozfogisokService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
      this.editForm = this.formBuilder.group({
        Neev:[''],
        SzuletesiHely:[''],
        program:[''],
        Szabadnapok:[''],
        Orvosi:[''],
        Anyja:['']
      })


   }

  ngOnInit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.kozfogisokService.getKozfogiDoc(id).subscribe(res =>{
      this.kozfogisRef = res;
      this.editForm= this.formBuilder.group({
        Neev:[this.kozfogisRef.Neev],
        SzuletesiHely:[this.kozfogisRef.SzuletesiHely],
        program:[this.kozfogisRef.program],
        Szabadnapok:[this.kozfogisRef.Szabadnapok],
        Orvosi:[this.kozfogisRef.Orvosi],
        Anyja:[this.kozfogisRef.Anyja]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');
 
    this.kozfogisokService.updateKozfogis(this.editForm.value, id);
    this.router.navigate(['list-kozfogis']);
  };
  onCancel(){
    this.router.navigate(['list-kozfogis']);
  };

}
