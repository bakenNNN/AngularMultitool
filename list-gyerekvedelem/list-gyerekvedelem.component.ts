import { Component, OnInit } from '@angular/core';
import { GyerekvedelemModel } from '../gyerekvedelem-model.model';
import { GyerekvedelemServiceService } from '../gyerekvedelem-service.service';
@Component({
  selector: 'app-list-gyerekvedelem',
  templateUrl: './list-gyerekvedelem.component.html',
  styleUrls: ['./list-gyerekvedelem.component.scss']
})
export class ListGyerekvedelemComponent implements OnInit {
  kepviseloString:string;
  gyerekvedelem: GyerekvedelemModel[];
  constructor(private gyerekvedelemService: GyerekvedelemServiceService) { }

  ngOnInit() {
    this.gyerekvedelemService.getGyList().subscribe(res=>{
      this.gyerekvedelem = res.map(e=>{
        return{
          /*...e.payload.doc.data() as{}*/
          hatarozatszam: e.payload.doc.data()['Hatarozatszam'],
          kepviselo:e.payload.doc.data()['Kepviselo'],
          tipus:e.payload.doc.data()['Tipus'],
          sorszam:e.payload.doc.data()['Sorszam']


        } as GyerekvedelemModel
      })
    });

   /* hatarozatszam= new MatTableDataSource(GyerekvedelemModel);*/
   

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
 

}
