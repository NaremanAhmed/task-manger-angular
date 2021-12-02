import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userModels';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private userService:UserService, 
    private route:ActivatedRoute,
    private router:Router
  ) { }

  
  user:Users={}

  getUser(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.user= res
      }
    })
  }

  updateProfile(user:Users){
    this.userService.updateProfile(user).subscribe({
      next:()=>{
        this.router.navigate(['/profile'])
      }
    })
    
  }

  back(){
    this.router.navigate(['/profile'])
  }

  ngOnInit(): void {
    this.getUser()
  }

}
