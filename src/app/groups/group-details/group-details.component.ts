import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent {
  name = '';

  constructor(public activatedroute: ActivatedRoute) {
    console.log(this.activatedroute.snapshot.queryParams['Groupname'])
    this.name = this.activatedroute.snapshot.queryParams['Groupname'];

  }



}
