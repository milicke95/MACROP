import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from './services/users.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoComponent } from './components/logo/logo.component';
import { CollapseModule } from "ngx-bootstrap";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UserSessionSubject } from './services/userSessionSubject.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    LogoComponent,
    SignUpComponent,
    UserPanelComponent
  ],
  imports: [
    HttpModule,
    AngularFontAwesomeModule,
    CollapseModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    // ALL THE ROUTES THAT ARE BEEN USED IN THE APPLICATION ARE CONFIGURED HERE
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'signUp', component: SignUpComponent, pathMatch: 'full' },
      { path: 'userPanel', component: UserPanelComponent, pathMatch: 'full' }
    ])
  ],
  providers: [UsersService,UserSessionSubject],
  bootstrap: [AppComponent]
})
export class AppModule { }
