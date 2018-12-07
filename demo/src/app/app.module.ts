import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DevmodInterfaceModule, DevmodNoopModule } from '@devmod/interface';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';

let devmod = DevmodNoopModule; // Use 'noop' module in production so we don't see devmod toggle
if (!environment.production) {
  devmod = DevmodInterfaceModule; // Use real devmod module in development
}

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    DashComponent,
    LoginComponent
  ],
  imports: [
    devmod,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dash',
        component: DashComponent
      }
    ])
  ],
  entryComponents: [CreateUserComponent],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
/**
 * @internal
 */
export class AppModule {}
