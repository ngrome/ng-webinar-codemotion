import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInformationsPageComponent } from './my-informations-page.component';

describe('MyInformationsPageComponent', () => {
  let component: MyInformationsPageComponent;
  let fixture: ComponentFixture<MyInformationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInformationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInformationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
