import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyActivitiesPageComponent } from './my-activities-page.component';

describe('MyActivitiesPageComponent', () => {
  let component: MyActivitiesPageComponent;
  let fixture: ComponentFixture<MyActivitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyActivitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
