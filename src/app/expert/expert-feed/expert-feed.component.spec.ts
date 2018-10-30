import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFeedComponent } from './expert-feed.component';

describe('ExpertFeedComponent', () => {
  let component: ExpertFeedComponent;
  let fixture: ComponentFixture<ExpertFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
