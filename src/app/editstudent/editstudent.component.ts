import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(public http:HttpClient) { }
  @Input() cstudent;
  ngOnInit() {
  }
  updateStudent(s){
    this.http.put("http://localhost:4000/updatestudent",s)
    .subscribe((res)=>{console.log(res)})
  }
}
