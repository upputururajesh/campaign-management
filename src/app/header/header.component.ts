import { Component, ViewChild, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { map } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  postUrl =  '../assets/api/template.json';
  constructor( private http: HttpClient, private dataService: DataService) { }
  @ViewChild('templateForm') templateForm: NgForm;
  submitted = false;
  template = {
     templateId : '',
     templateName: '',
     templateType: '',
     status: '',
     created: ''

    };
  date: any = '';

  tabsOpen(evt, funName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('nav-sec');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
      document.getElementById(funName).style.display = 'block';
      evt.currentTarget.className += ' active';

   }
  //  for forms

  onSubmit() {
   console.log(this.templateForm);
    this.submitted = true;
    this.date = new Date();
    this.template.templateId = this.templateForm.value.templateId;
    this.template.templateName = this.templateForm.value.templateName;
    this.template.templateType = this.templateForm.value.templateType;
    this.template.status = this.templateForm.value.status;
    this.template.created = this.date;
    console.log(this.template);
//  for submiting data into json file
    this.http.post(this.postUrl, this.template)
      .subscribe( (data: any) => {
              console.log('POST Request is successful', data);
          },
          error => {
              console.log('Error', error);
          }
      );
    //  this.http.post('https://my-json-server.typicode.com/typicode/demo/posts', this.template)
    //  .subscribe( (data: any) => {
    //    console.log(data);
    //  }
    //  );
  }

}
