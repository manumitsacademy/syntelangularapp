import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  studentname;

  addStudent(student){
    this.http.post("http://localhost:4000/addstudent",student)
    .subscribe((res)=>{console.log(res)})
  }
}
