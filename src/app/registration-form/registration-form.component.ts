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
  login: FormGroup;
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
    this.login = this._fb.group({
      email: ['sachin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
      inputCaptcha: [],
      userLogin: [],
    });

    this.http.get('/assets/db.json').subscribe((data) => {
      this.responseData = data;
    });
  }

  captcha_click() {
    this.captchaValueOne = Math.floor(Math.random() * 10);
    this.captchaValueTwo = Math.floor(Math.random() * 10);
  }

  submitHandler() {
    // console.log(this.login.invalid)
    if (this.login.valid) {
      this.http.get<any>('http://localhost:3000/signUp').subscribe((res) => {
        console.log(res);
        const user = res.find((element:any) => {
          console.log(element,"elements")
          return element.email === this.login.value.email && element.password === this.login.value.password
          
        });
        if (user) {
          alert('Login success');
          this.login.reset();
          this.router.navigate(['AME_Experience']);
        } else {
          alert('user not found');
        }
      });
    } else {
      alert('please fill all fields');
    }
  }

  // this.totalValue_captcha = this.captchaValueOne + this.captchaValueTwo;

  // if (
  //   this.totalValue_captcha ===
  //   Number(login.controls.inputCaptcha.value)
  // ) {
  //   alert('Login Successful');
  // } else if (login.controls.inputCaptcha.value === null) {
  //   alert('Enter Captcha value');
  // } else {
  //   alert('Wrong Captcha Value');
  // }

  // });
}
