import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kozfogis-pdf',
  templateUrl: './kozfogis-pdf.component.html',
  styleUrls: ['./kozfogis-pdf.component.scss']
})
export class KozfogisPdfComponent implements OnInit {
  public href: string = "";
  public pdfSrc:String;
  constructor(private router: Router,private act: ActivatedRoute) {
    var Neev = this.act.snapshot.paramMap.get('Neev');
    Neev = Neev.toLowerCase();
    let é=/é/gi;
    let á=/á/gi;
    let ó=/ó/gi;
    let ő=/ő/gi;
    let ö=/ö/gi;
    let í=/í/gi;
    let ú=/ú/gi;
    let ü=/ü/gi;
    let ű=/ű/gi;
    Neev = Neev.replace(é, "e");
    Neev = Neev.replace(á, "a");
    Neev = Neev.replace(ó, "o");
    Neev = Neev.replace(ő, "o");
    Neev = Neev.replace(ö, "o");
    Neev = Neev.replace(í, "i");
    Neev = Neev.replace(ú, "u");
    Neev = Neev.replace(ü, "u");
    Neev = Neev.replace(ű, "u");
    console.log(Neev);
    this.pdfSrc= "../../assets/img/"+Neev+".PDF";
   }
  
  ngOnInit() {
    
    

  }

}
