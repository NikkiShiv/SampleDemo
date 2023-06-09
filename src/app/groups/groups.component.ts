import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  list: any = [
    {
      name: 'Group 1',
      id: '123456'
    }, {
      name: 'Group 2',
      id: '223456'
    },
    {
      name: 'Group 3',
      id: '323456'
    }, {
      name: 'Group 4',
      id: '423456'
    },
  ]
  constructor(public router: Router) {

  }
  NaviGroup(id: number, name: string) {
    this.router.navigate(['group-details', id], {
      queryParams: {
        Groupname: name
      }
    })

  }
}
