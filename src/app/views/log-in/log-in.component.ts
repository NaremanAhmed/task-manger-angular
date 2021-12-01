import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  users: any;
  token: any;
  invalidLogin:boolean=false

  signIn(credentials: any) {
    console.log('test')
    this.authService.logIn(credentials).subscribe({
      next: (res: any) => {
        console.log(res);
        this.users = res;
        this.token = this.users.token;
        localStorage.setItem('token',this.token);
        this.router.navigate(['/profile'])
      },
      error:(httpError:any)=>{
        console.log(httpError);
        this.invalidLogin =true
      }
    })
  }

  ngOnInit(): void {}
}
