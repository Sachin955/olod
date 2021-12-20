import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators   } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
apiCall:any;
loginForm:FormGroup;
apiCallChangeArray:any
dataDestructure:any
groups:any
component:any;
group:any

  constructor(private http:HttpClient, private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.http.get('http://192.168.4.43/NODEJSService?forname=New_Candidate_Registration_For_AME&formupdateid=0').subscribe((data) => {
      this.apiCall = data;
      // this.groups = this.apiCall.Groups;
      // console.log(this.groups)
    
      // for(this.group of this.groups){
      //   for(this.component of this.group.Component){
      //     console.log(this.component)
      //   }
       
      // } 
     

      

     
    });
    this.loginForm = this._fb.group({
      // FP_Title:[],
      // Form_Display_Name:[],
      Component_Label:[],
      // Component_Type:[]
      // Group_newRegistration:this._fb.array([this.add_GroupNewCandidateRegistration()])
    })
  }

  // add_GroupNewCandidateRegistration() {
  //   return this._fb.group({
  //     Component_Label:[],
  //     Component_Type:[]
  //   })

  // }

  // get newCandidateRegistrationArray(){
  //   return <FormArray>this.loginForm.get('Group_newRegistration');
  // }

  // loginFormControl(){
  //   this.apiCall.forEach((element:any) => {
  //     if(element.Required === true) {
  //       this.loginForm.addControl(
  //         element.FP_ID,
  //         new FormControl('', Validators.required)
  //       )
  //     }else {
  //       this.loginForm.addControl(element.FP_ID, new FormControl(''));
  //     }
  //     console.log(this.loginForm)
      
  //   });
  // }

  

 

  

}
