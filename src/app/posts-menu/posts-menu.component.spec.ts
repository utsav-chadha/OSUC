import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMenuComponent } from './posts-menu.component';

describe('PostsMenuComponent', () => {
  let component: PostsMenuComponent;
  let fixture: ComponentFixture<PostsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
