import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students;
  constructor(public http:HttpClient) { 
    this.http
    .get("http://localhost:4000/getstudents")
    .subscribe((res)=>{
      this.students=res;
    });
  }

  ngOnInit() {
  }

}
