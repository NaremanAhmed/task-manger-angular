import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './views/addtask/addtask.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TaskComponent } from './views/task/task.component';
import { UpdateTasksComponent } from './views/update-tasks/update-tasks.component';

const routes: Routes = [
  {path:'',component:LogInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'task',component:TaskComponent},
  {path:'add/tasks',component:AddtaskComponent},
  {path:'edit/tasks/:id',component:UpdateTasksComponent},
  {path:'editProfile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
