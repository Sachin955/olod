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
    this.http.get('../../assets/db2.json').subscribe((data) => {
      this.apiCall = data;
      this.groups = this.apiCall.Groups;
     
    
      for(this.group of this.groups){
        for(this.component of this.group.Component){
          console.log(this.component.Component_Label)
          if(this.component.Component_Label === "Title"){
            console.log(this.component[0].Component_Label)
          }
      
        }
       
      } 
     

      

     
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

  loginFormControl(){
    this.apiCall.forEach((element:any) => {
      if(element.Required === true) {
        this.loginForm.addControl(
          element.FP_ID,
          new FormControl('', Validators.required)
        )
      }else {
        this.loginForm.addControl(element.FP_ID, new FormControl(''));
      }
      console.log(this.loginForm)
      
    });
  }

  

 

  

}
