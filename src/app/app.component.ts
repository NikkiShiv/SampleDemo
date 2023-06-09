import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nikhil: string = 'Enter the Name';
  pass: any = 'Enter the Password';
  FirstName: string = '';
  Password: string = '';

  constructor(public router: Router) {
  }

  login() {


    this.router.navigate(['login'])


  }

  register() {

    this.router.navigate(['register'])
  }

  Groups() {
    this.router.navigate(['groups'])
  }


}


