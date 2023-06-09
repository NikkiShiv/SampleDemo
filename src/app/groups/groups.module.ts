import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';


@NgModule({
  declarations: [
    GroupsComponent,
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
