import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './views/log-in/log-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path:'',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
