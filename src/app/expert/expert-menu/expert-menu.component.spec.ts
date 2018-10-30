import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMenuComponent } from './expert-menu.component';

describe('ExpertMenuComponent', () => {
  let component: ExpertMenuComponent;
  let fixture: ComponentFixture<ExpertMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
