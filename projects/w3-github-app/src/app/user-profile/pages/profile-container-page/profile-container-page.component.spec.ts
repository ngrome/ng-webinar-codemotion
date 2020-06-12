import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerPageComponent } from './profile-container-page.component';

describe('ProfileContainerPageComponent', () => {
  let component: ProfileContainerPageComponent;
  let fixture: ComponentFixture<ProfileContainerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContainerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
