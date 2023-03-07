import { Component, OnInit } from '@angular/core';
import { Kozfogisok } from '../kozfogisok.model';
import { KozfogisokService } from '../kozfogisok.service';


@Component({
  selector: 'app-list-kozfogis',
  templateUrl: './list-kozfogis.component.html',
  styleUrls: ['./list-kozfogis.component.scss']
})
export class ListKozfogisComponent implements OnInit {
  kozfogisok: Kozfogisok[];
  abc:string;
  isCheckedBool:boolean;
  
  
  
  constructor( private kozfogisokService: KozfogisokService) { }

  ngOnInit(){
    
    
    this.kozfogisokService.getKozfogiList().subscribe(res=>{
      this.kozfogisok = res.map(e=>{
        return{
          id: e.payload.doc.id,
          Neev:e.payload.doc.data['Neev'],
          ...e.payload.doc.data() as{}
        } as Kozfogisok;
      })
    });
    

    setTimeout(() => 
    {this.highlightdatefunc();},500);
    
    
  }
  OpenCorrespondingPdf(KozfogisNeve:string){
    var url:string;
    url= KozfogisNeve+'.pdf';
    
    window.open(url, '_blank');
  }



  addMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
  
    return date;
  }
  
  highlightdatefunc(){
    const mainap= new Date();
    const harmoho= new Date();
    const koviho= new Date();
    var haromhonapmulva = this.addMonths(3,harmoho);
    var kovetkezohonap = this.addMonths(1,koviho);

    

    
    var input, filter, table, tr, td, i, txtValue,svalt,tbody;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tbody=document.getElementById("adatok");
    tr = table.getElementsByTagName("tr");
    svalt=table.getElementsByTagName("td");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
        if(td){

        txtValue =td.textContent || td.innerText;
        const [year,month,day] = txtValue.split('.');
        const dateInField = new Date(+year, +month - 1, +day);
        const dateInFieldWithoutTime=new Date(dateInField.toDateString());
        if (dateInFieldWithoutTime<=mainap || dateInFieldWithoutTime<=kovetkezohonap) {
          td.style.backgroundColor = "red";
        }
        if (dateInFieldWithoutTime>kovetkezohonap && dateInFieldWithoutTime<=haromhonapmulva) {
          td.style.backgroundColor = "#bf8211";
          
        }
      
      }
    
    
    
  
    }
  }
  ShowOnlyRed(values:any):void{
    var input, filter, table, tr, td, i, txtValue,svalt,tbody;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tbody=document.getElementById("adatok");
    tr = table.getElementsByTagName("tr");
    svalt=table.getElementsByTagName("td");
    if (values.currentTarget.checked==true){
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td){
          if (td.style.backgroundColor=='red') {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }}}
        if (values.currentTarget.checked==false){
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td){
              if (tr[i].style.display == "none") {
                tr[i].style.display = "";
              } 
            }}}
}
ShowOnlyYellow(values:any):void{
  var input, filter, table, tr, td, i, txtValue,svalt,tbody,yellow;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  yellow='#bf8211';
  table = document.getElementById("myTable");
  tbody=document.getElementById("adatok");
  tr = table.getElementsByTagName("tr");
  svalt=table.getElementsByTagName("td");
  if (values.currentTarget.checked==true){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td){
        if (td.style.backgroundColor!='red' && td.style.backgroundColor!='') {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }}}
      if (values.currentTarget.checked==false){
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td){
            if (tr[i].style.display == "none") {
              tr[i].style.display = "";
            } 
          }}}
}
    
  
  
  removeKozfogis(kozfogisok){
    if(confirm("Biztos törölni akarja " + kozfogisok.Neev + " ?")){
      this.kozfogisokService.deleteKozfogis(kozfogisok);
    }
  }
  func(){
    // Declare variables
  var input, filter, table, tr, td, i, txtValue,svalt,tbody;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tbody=document.getElementById("adatok");
  tr = table.getElementsByTagName("tr");
  svalt=table.getElementsByTagName("td");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    
  }
  

  }
  }

}
