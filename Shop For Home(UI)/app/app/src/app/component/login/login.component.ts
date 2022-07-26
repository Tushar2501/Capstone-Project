import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  retData: any;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }
  async loginUser() {
    if (
      this.loginForm.value.userName === null ||
      this.loginForm.value.userName === ''
    ) {
      alert('Username is a required field.');
    } else if (
      this.loginForm.value.password === null ||
      this.loginForm.value.password === ''
    ) {
      alert('Password is a required field.');
    }else{
      const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      this._http.post<any>('http://localhost:8080/login', { username: this.loginForm.value.userName, password: this.loginForm.value.password}, {headers}).subscribe(data => {
        this.retData = data.role;
        console.log(this.retData)
        window.localStorage.setItem('login', 'true');
        window.localStorage.setItem('role', this.retData);
        // this.loginForm.reset();
        if("ADMIN" === this.retData){
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
    })
    }
  }

}
