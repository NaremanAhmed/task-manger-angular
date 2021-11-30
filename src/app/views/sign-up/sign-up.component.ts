import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  invalidEmail:boolean = false


  signUP(credentials:any){
    console.log(credentials)
    this.authService.signUp(credentials).subscribe({
      next:(res:any)=>{
        console.log(res);
      },
      error:(httpError:any)=>{
        console.log(httpError);
        if (httpError.error.code===11000) {
          this.invalidEmail =true
        }
        
      }
    })
  }

  changeEmail(){
    this.invalidEmail=false
  }

  ngOnInit(): void {

  }


}
