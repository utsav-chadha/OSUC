import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../models/Post';
import { Router, RouterEvent } from '@angular/router';
import { Expert } from '../models/expert';
import { ExpertService } from '../shared/expert.service';


@Component({
  selector: 'app-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.css']
})
export class PostsFeedComponent implements AfterContentInit  {
  @ViewChild('postCard') postCard: ElementRef;
  overflowPost = false;
  postType = '';
  posts: Post[] = null;
  expertIdExpertMap = {};

  constructor(private postsService: PostsService,
    private expertService: ExpertService,
    private router: Router) {
      router.events.subscribe(
          (event: RouterEvent) => {
          if (event.url === '/posts/sample-essays') {
            this.postsService.getPostsByType('Sample SOP').subscribe(this.postsNextCallback, this.postsErrorCallback,
               this.postsCompleteCallback);
          }


          if (event.url === '/posts/sample-letters') {
            this.postsService.getPostsByType('Sample LOR').subscribe(this.postsNextCallback, this.postsErrorCallback,
              this.postsCompleteCallback);
          }


          if (event.url === '/posts/all') {
            this.postsService.getPosts().subscribe(this.postsNextCallback, this.postsErrorCallback,
              this.postsCompleteCallback);
          }

          if (event.url === '/posts/articles') {
            this.postsService.getPostsByType('Article').subscribe(this.postsNextCallback, this.postsErrorCallback,
              this.postsCompleteCallback);
          }

          if (event.url === '/posts/tips-and-tricks') {
            this.postsService.getPostsByType('Tips And Tricks').subscribe(this.postsNextCallback, this.postsErrorCallback,
              this.postsCompleteCallback);
          }

        }
      );

  }

  postsNextCallback = (posts) => {
    this.posts = posts;
    this.posts.forEach(post => {
      this.expertService.getExpert(post.eid).subscribe(expertSnapshot => {
        const expert = <Expert>expertSnapshot.payload.data();
        expert.id = expertSnapshot.payload.id;
        this.expertIdExpertMap[expert.id] = expert;
      });
    });
  }

  postsErrorCallback = (error) => {
    // TODO: Error show
  }

  postsCompleteCallback = () => {
    // console.log('posts complete');
    // this.posts.forEach(post => {
    //   this.expertService.getExpert(post.eid).subscribe(
    //     expertSnapshot => {
    //     this.experts.push(<Expert>expertSnapshot.payload.data());
    //     console.log(this.experts);
    //   });
    // });
  }

  onPostCreated() {
    // if (this.postCard.nativeElement.style.overflow) {
    //   this.overflowPost = true;
    // }
  }

  ngAfterContentInit() {

  }

}
