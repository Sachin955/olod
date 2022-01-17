import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ame-experience',
  templateUrl: './ame-experience.component.html',
  styleUrls: ['./ame-experience.component.css']
})
export class AmeExperienceComponent implements OnInit {
dashboardForm:any
tableKey:any=[]
tabValue:any=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/signUp').subscribe(res=>{
      this.dashboardForm = res;
      console.log(this.dashboardForm)
      this.getData()
      

    })
  }

  getData() {
    this.dashboardForm.forEach((element:any)=>{
      this.tableKey = Object.keys(element);
      this.tabValue.push(Object.values(element))  
    })
    console.log(this.tabValue,"values")
  }

}
