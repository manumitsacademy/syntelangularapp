import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students;
  currentStudent;
  constructor(public http:HttpClient) { 
    this.getAllStudents();
  }
  getAllStudents(){
    this.http
    .get("http://localhost:4000/getstudents")
    .subscribe((res)=>{
      this.students=res;
      console.log(this.students)
    });
  }
  deleteStudent(name){
    this.http.delete(`http://localhost:4000/deletestudent/${name}`)
    .subscribe((res:any)=>{
      if(res.status=='deleted'){
        alert("Record Deleted Successfully")
        this.getAllStudents();
      }
    })
  }
  editStudent(s){
    this.currentStudent=s;    
  }
  ngOnInit() {
  }

}
