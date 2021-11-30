import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  logIN(credentials:any){
    this.authService.logIn(credentials).subscribe(()=>{})
  }
  ngOnInit(): void {
  }

}
