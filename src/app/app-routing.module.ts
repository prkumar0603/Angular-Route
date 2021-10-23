import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    // this is the home component. if no path, open this page which redirects to login
    path : '',
    redirectTo : 'login',
    pathMatch : 'full',
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'welcome',
    component : WelcomeComponent,
    canActivate : [AuthGuard],
    data : ['MANAGER', 'ADMIN']
  },
  {
    path : 'about',
    component : AboutUsComponent
  },
  {
    path : 'services',
    component : ServicesComponent
  },
  {
    path  : 'contact',
    component : ContactUsComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
