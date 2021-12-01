import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userModels';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userServices: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  user: Users = {};
  getData() {
    this.userServices.getProfile().subscribe({
      next: (res: any) => {
        console.log(res);
        this.user=res
        console.log(this.user);
        
      },
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
