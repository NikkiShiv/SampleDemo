import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './default/default.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    // component: LoginComponent
    canActivate: ['AuthGuardGuard'],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    // component: RegisterComponent
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'groups',
    // component: GroupsComponent
    loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule)

  },
  {
    path: '**',
    component: DefaultComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
