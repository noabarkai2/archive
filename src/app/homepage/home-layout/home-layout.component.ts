import { Component, OnInit } from '@angular/core';
import { EducationStatus } from '../molecules/education-status-item/education-status-item.component';
import { educationStatuses } from '../tsObjects/educationStatuses';
import { userPersonalBasicData } from '../tsObjects/userPersonalBasicData';
import { usersExample } from 'src/app/feed/components/feed-layout/ObjectExample/UsersExample';
import { userPersonalGeneralDetails } from '../tsObjects/userPersonalGeneralDetails';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  get educationsItems(): EducationStatus[] {
    return educationStatuses;
  }

  get userGeneralDetails() {
    return userPersonalBasicData;
  }

  get userPersonalGeneralDetails(){
    return userPersonalGeneralDetails;
  }

  get userCollectionsSubscriptions(){
    return usersExample[0].subscribedCollections;
  }
}