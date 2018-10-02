import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
declare var $;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  templateData: any = [];
  constructor( private dataService: DataService) {
     this.LoadTableData();
     setTimeout( function() {
         // for DataTable pagination
         $('#dataTable').DataTable();
      }, 1000);
   }

  ngOnInit() {
  }
  // for subscribe the data
  LoadTableData() {
    this.dataService.getConfig()
    .subscribe( data => {
      this.templateData = data;
     });
  }
  // resTemplateData => this.templateData = resTemplateData
}
