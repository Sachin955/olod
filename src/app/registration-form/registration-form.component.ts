import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  responseData: any;
  captchaValueOne: any = Math.floor(Math.random() * 10);
  captchaValueTwo: any = Math.floor(Math.random() * 10);
  allInputControls: FormGroup;
  totalValue_captcha: any;
  listItems: Array<string> = [
    'Home',
    'About Us',
    'HelpDesk',
    'Suggestions',
    'FAQs',
    'Contact Us',
    'USER MANUAL',
    'Examinations',
    'Operator Login',
    'Officer Login',
  ];
  bannerImage: any = '../../assets/images/banner-prikshadgca.jpg';
  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.allInputControls = this._fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      inputCaptcha: [],
    });

    this.http.get('/assets/db.json').subscribe((data) => {
      this.responseData = data;
    });
  }

  captcha_click() {
    this.captchaValueOne = Math.floor(Math.random() * 10);
    this.captchaValueTwo = Math.floor(Math.random() * 10);
  }

  submitHandler(allInputControls: any) {
    this.totalValue_captcha = this.captchaValueOne + this.captchaValueTwo;

    if (
      this.totalValue_captcha ===
      Number(allInputControls.controls.inputCaptcha.value)
    ) {
      alert('Login Successful');
    } else if (allInputControls.controls.inputCaptcha.value === null) {
      alert('Enter Captcha value');
    } else {
      alert('Wrong Captcha Value');
    }
    this.http.get<any>('http://localhost:3000/signup').subscribe((res) => {
      console.log(res);
      
      const user = res.find((a: any) => {
        return (
          a.email === this.allInputControls.value.email &&
          a.password === this.allInputControls.value.password
        );
      });
      if (user) {
        alert('Login Success!!');
        this.allInputControls.reset();
        this.router.navigate(['AME_Experience']);
      } else {
        alert('user not found!');
      }
    });
  }
}
