import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdmissionComponent } from './admission/admission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
  {
    path: 'home', component: HomepageComponent,
    children: [
      { path: 'contact-us', component: ContactusComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'Gallery', component: GalleryComponent },
      { path: 'index', component: IndexComponent },
    ],
  },
  { path: 'forgetpass', component: ForgetpassComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
