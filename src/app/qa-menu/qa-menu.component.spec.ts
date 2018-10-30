import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaMenuComponent } from './qa-menu.component';

describe('QaMenuComponent', () => {
  let component: QaMenuComponent;
  let fixture: ComponentFixture<QaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
