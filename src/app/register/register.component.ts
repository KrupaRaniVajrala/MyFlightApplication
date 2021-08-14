import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../user/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    name="";
    password="";
    role="";
    active="";
    errormessage="";
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
  }

  register()
  {
    var userObj=
    {
      "name":this.name,
      "password":this.password,
          "role":this.role,
          "active":this.active
    }
    this.service.register(userObj)
    .subscribe((res:any)=>{
      alert("Registered Successfully")}​​​,
    (err:any)=>{​​​
    console.log(err)
    this.errormessage = err.message;
    }​​​)
    this.router.navigate(['/login'])
  }
}
