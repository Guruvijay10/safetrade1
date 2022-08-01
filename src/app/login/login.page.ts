import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide= true;

  constructor(private router: Router,private routes: ActivatedRoute) { }

  logindata_(frm:NgForm): void{
    console.log(frm.value.username);
    if (frm.value.username == 'guru' && frm.value.password == 'vijay')
    {
      this.router.navigate(["/home"])
      console.log("correct")
    }
    else{
   console.log('invalid')
    }
   }

  ngOnInit() {
  }

}
