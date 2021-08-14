import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../user/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage: any;
  constructor(private router: Router, private http: HttpClient, private service: LoginService) { }

  ngOnInit():
    void {
  }
  loginAdmin() {
    console.log(this.username)
    console.log(this.password)
    var details = { "username": this.username, "password": this.password }


    this.service.authenticate(details).subscribe((res:any) => {console.log(res.token),console.log("Inside jwt")},

        (err: any)=> {console.log(err)
         this.errorMessage= err.message;
        })

        this.http.get<any>("http://localhost:8082/api/v3/userbyname/"+ this.username).subscribe(data=>{console.log(data);
        var userData=data;

    if (userData.role == "Admin") {
      console.log("Inside Admin");
      this.router.navigate(['./admin'])
    }
    else {
      localStorage.setItem('username', userData.name);
      console.log("Inside User");
      this.router.navigate(['./user'])
    }
  });
}

}
