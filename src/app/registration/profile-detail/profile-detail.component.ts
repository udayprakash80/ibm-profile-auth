import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private appService: AppService) { }
profile: any;
  ngOnInit(): void {
    this.appService.getUserProfile().subscribe( data => {
      this.profile = data;
    })
  }

}
