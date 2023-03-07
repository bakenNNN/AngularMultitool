import { Component, OnInit } from '@angular/core';
import { HagyatekService } from '../hagyatek.service';
import { Hagyatek } from '../hagyatek.model';
@Component({
  selector: 'app-list-hagyatek',
  templateUrl: './list-hagyatek.component.html',
  styleUrls: ['./list-hagyatek.component.scss']
})
export class ListHagyatekComponent implements OnInit {
  hagyatek: Hagyatek[];
  constructor(private hagyatekService: HagyatekService) { }

  ngOnInit() {
    this.hagyatekService.getHagyatekList().subscribe(res=>{
      this.hagyatek = res.map(e=>{
        return{
          
          foglalkozasa: e.payload.doc.data()['foglalkozasa'],
          lakhely:e.payload.doc.data()['lakhely'],
          mappa:e.payload.doc.data()['mappa'],
          meghalt:e.payload.doc.data()['meghalt'],
          nev:e.payload.doc.data()['nev'],
          szuletett:e.payload.doc.data()['szuletett']


        } as Hagyatek
      })
    });
    

    

  }
  func(){
    // Declare variables
  var input, filter, table, tr, td, i, txtValue,txtValue2,txtValue3,txtValue4,svalt,ta,tb,tc,tbody;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tbody=document.getElementById("adatok");
  tr = table.getElementsByTagName("tr");
  svalt=table.getElementsByTagName("td");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    
    td = tr[i].getElementsByTagName("td")[0];
    ta = tr[i].getElementsByTagName("td")[1];
    tb = tr[i].getElementsByTagName("td")[2];
    tc = tr[i].getElementsByTagName("td")[3];
    if (td || ta || tb||tc) {
      txtValue = td.textContent || td.innerText;
      txtValue2 =ta.textContent|| ta.innerText;
      txtValue3 =tb.textContent|| tb.innerText;
      txtValue4 =tc.textContent|| tc.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 ||txtValue2.toUpperCase().indexOf(filter) > -1||txtValue3.toUpperCase().indexOf(filter) > -1||txtValue4.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    
  }
  

  }
  }
  FilterValues(value:string):void{
    var input, filter, table, tr, td, i,chosenOp, txtValue,svalt,tbody;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    chosenOp=value;
    tbody=document.getElementById("adatok");
    tr = table.getElementsByTagName("tr");
    svalt=table.getElementsByTagName("td");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        
        if (td){
          txtValue = td.textContent || td.innerText;
          if (chosenOp==txtValue) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }}
        
            }}



