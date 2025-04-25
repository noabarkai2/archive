import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CollectionMenuLayoutComponent } from './components/feed-layout/collection-menu-layout/collection-menu-layout.component';
import { WideCollectionMenuComponent } from './components/feed-layout/collection-menu-layout/wide-collection-menu/wide-collection-menu.component';
import { NarrowCollectionMenuComponent } from './components/feed-layout/collection-menu-layout/narrow-collection-menu/narrow-collection-menu.component';
import { usersExample } from './components/feed-layout/ObjectExample/UsersExample';
import { ResourceSubscription } from 'src/app/models/User/ResourceSubscription';
import { SubscriptionStatus } from '../models/Enums/SubscriptionStatus';

describe('Integration Test: Collection Menu Layout', () => {
  let fixture: ComponentFixture<CollectionMenuLayoutComponent>;
  let component: CollectionMenuLayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectionMenuLayoutComponent,
        WideCollectionMenuComponent,
        NarrowCollectionMenuComponent,
      ],
    });

    fixture = TestBed.createComponent(CollectionMenuLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should update selectedResourceInput in CollectionMenuLayout when selecting resource in WideCollectionMenu', () => {
    // Set up test data
    const resource: ResourceSubscription = {
        resourcePreview: {
            id: '',
            title: '',
            description: '',
            grade: 0,
            resourceType: ''
        },
        positionInCollection: 0,
        subscriptionStatus: SubscriptionStatus.Done,
        lastActivityTime: new Date(),
        grade: 0
    };
    
    // Trigger ngOnChanges in WideCollectionMenuComponent by emitting the event
    const wideMenuComponent = fixture.debugElement.query(By.directive(WideCollectionMenuComponent)).componentInstance;
    wideMenuComponent._onSelectResource(resource);
    fixture.detectChanges();

    // Check if selectedResourceInput is updated in CollectionMenuLayout
    expect(component.selectedResourceInput).toEqual(resource);
  });

  it('should update selectedResourceInput in CollectionMenuLayout when selecting resource in NarrowCollectionMenu', () => {
    // Set up test data
    const resource: ResourceSubscription = {
        resourcePreview: {
            id: '',
            title: '',
            description: '',
            grade: 0,
            resourceType: ''
        },
        positionInCollection: 0,
        subscriptionStatus: SubscriptionStatus.Done,
        lastActivityTime: new Date(),
        grade: 0
    };
    
    // Trigger ngOnChanges in NarrowCollectionMenuComponent by emitting the event
    const narrowMenuComponent = fixture.debugElement.query(By.directive(NarrowCollectionMenuComponent)).componentInstance;
    narrowMenuComponent._onSelectResource(resource);
    fixture.detectChanges();

    // Check if selectedResourceInput is updated in CollectionMenuLayout
    expect(component.selectedResourceInput).toEqual(resource);
  });

  // Add more integration test cases to cover other interactions between components
});