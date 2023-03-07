import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BevetelgrafService } from '../bevetelgraf.service';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Data from 'highcharts/modules/data';
import ExportData from 'highcharts/modules/export-data';
import { Bevetelgraf, Bevetelgraf23 } from '../bevetelgraf.model'; 




Data(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
@Component({
  selector: 'app-bevetelgraf',
  templateUrl: './bevetelgraf.component.html',
  styleUrls: ['./bevetelgraf.component.scss']
})
export class BevetelgrafComponent implements OnInit {
  bevetelgrafvalt: Bevetelgraf[];
  bevetelgrafvalt23: Bevetelgraf23[];
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  @ViewChild("datatable", { read: ElementRef }) datatable: ElementRef;

  constructor(private bevetelgrafService: BevetelgrafService) { }

  ngOnInit() {
    this.bevetelgrafService.getGrafList().subscribe(res=>{
      this.bevetelgrafvalt = res.map(e=>{
        return{
          honapGraf: e.payload.doc.id,
          osszesbev: e.payload.doc.data()['osszesbev'],
          savabev: e.payload.doc.data()['savabev']
          
        } as Bevetelgraf
      })
    });
    this.bevetelgrafService.getGraf23List().subscribe(res=>{
      this.bevetelgrafvalt23 = res.map(e=>{
        return{
          honapGraf23: e.payload.doc.id,
          osszesbev23: e.payload.doc.data()['osszesbev'],
          savabev23: e.payload.doc.data()['savabev']
          
        } as Bevetelgraf23
      })
    });
    setTimeout(() => 
{
    

    Highcharts.chart('container', {
      data: {
        table: 'datatable'
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'Éves bevétel Grafikon 2022'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Összeg'
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            this.point.y + ' ' + this.point.name.toLowerCase();
        }
      }
    });},500);
	
  }
    valtas22re(){
      Highcharts.chart('container', {
        data: {
          table: 'datatable'
        },
        chart: {
          type: 'column'
        },
        title: {
          text: 'Éves bevétel Grafikon 2022'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'Összeg'
          }
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              this.point.y + ' ' + this.point.name.toLowerCase();
          }
        }
      });

    }


    valtas23ra(){
      Highcharts.chart('container', {
        data: {
          table: 'datatable23'
        },
        chart: {
          type: 'column'
        },
        title: {
          text: 'Éves bevétel Grafikon 2023'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'Összeg'
          }
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              this.point.y + ' ' + this.point.name.toLowerCase();
          }
        }
      });
    

    }


}
 

