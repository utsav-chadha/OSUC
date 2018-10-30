import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-menu',
  templateUrl: './posts-menu.component.html',
  styleUrls: ['./posts-menu.component.css']
})
export class PostsMenuComponent implements OnInit {


  constructor(private postsService: PostsService,
                 private router: Router) { }

  clickedSampleLetter() {
    this.postsService.clickedPost.emit('lor');
  }
  clickedSampleEssay() {
    this.postsService.clickedPost.emit('sop');
  }
  clickedArticle() {
    this.postsService.clickedPost.emit('article');
  }
  clickedTips() {
    this.postsService.clickedPost.emit('tips');
  }
  clickedRecent() {
    this.postsService.clickedPost.emit('recent');
  }
  clickedAll() {
    this.postsService.clickedPost.emit('all');
  }

  ngOnInit() {
  }

}
