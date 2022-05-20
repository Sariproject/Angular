import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from 'api';
import { UserModel } from 'type/type';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type :UserModel[]
  formGroup: FormGroup
  flag = false
  
  constructor(private formBuilder: FormBuilder, private connectionServer: ConnectionService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {

    
    if(!this.formGroup.valid){
      console.log(this.formGroup.valid,"000");
      this.flag = true
         
    }
    else{
    this.connectionServer.getTypeUser$(this.formGroup.controls.password.value).subscribe(
      (msg) => {
        this.type = msg
        if(!this.type) {
          this.flag = true
        }
        else {
          console.log(this.type[0].nameRole);
          console.log(`/${this.type[0].nameRole}`);
          localStorage.setItem('password', this.formGroup.controls.password.value)
          this.router.navigate([`/${this.type[0].nameRole}`])
        }
      },
      (err) => { console.log(err,"ppp") })
      
    }
   
   
  }
}
