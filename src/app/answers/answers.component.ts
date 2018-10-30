import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../shared/questions.service';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Expert } from '../models/expert';
import { ExpertService } from '../shared/expert.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  qId: string;
  question: Question;
  answers: Answer[];
  expert: Expert;
  constructor(private route: ActivatedRoute,
              private questionService: QuestionsService,
              private expertService: ExpertService) { }

  ngOnInit() {
    this.qId = this.route.snapshot.params['id'];
    this.questionService.getQuestion(this.route.snapshot.params['id']).subscribe(question => {
      this.question = question;

    });

    this.questionService.getAnswers(this.qId).subscribe(answers => {
      // console.log(answers);
      this.answers = answers;
      this.answers.forEach(answer => {
        this.expertService.getExpert(answer.eid).subscribe(expert => {
          answer.expert = <Expert>expert.payload.data();
          // console.log(expert.payload.data());
          console.log(answer.expert);
        });
      });
    });



  }

  // ngAfterContentInit() {
  //   this.answers.forEach(answer => {
  //     this.expertService.getExpert(answer.eid).subscribe(expert => {
  //       // answer.expert = <Expert>expert.payload.data();
  //       console.log(expert.payload.data());
  //     });
  //   });
  // }

}
