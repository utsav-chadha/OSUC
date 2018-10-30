
export class Post {
  author: string;
  details: string;
  eid: string;
  likeCount: number;
  postType: string;
  status: string;
  text: string;
  tags: string[];
  timeStamp: Date ;
  title: string;
  viewCount: number;
  // expertEntity: Expert;
  timeStampString() {
    return this.timeStamp.toDateString();
  }

}
