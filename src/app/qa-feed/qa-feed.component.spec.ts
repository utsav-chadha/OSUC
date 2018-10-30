import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaFeedComponent } from './qa-feed.component';

describe('QaFeedComponent', () => {
  let component: QaFeedComponent;
  let fixture: ComponentFixture<QaFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
