import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { Question } from '../models/question';
import { Router, ActivatedRoute } from '@angular/router';
// MDB Angular Pro
import { ButtonsModule, WavesModule } from 'angular-bootstrap-md';

import { CustomUtils } from '../utils/customUtils';

@Component({
  selector: 'app-qa-feed',
  templateUrl: './qa-feed.component.html',
  styleUrls: ['./qa-feed.component.css']
})
export class QaFeedComponent implements OnInit {
  sem: Number;
  questions: Question[] = [];
  questionIdQuestionMap = {};
  utils: CustomUtils;
  qData: Question;
  constructor(private qaService: QuestionsService,
              private router: Router,
              private route: ActivatedRoute
              ) {
                this.utils = new CustomUtils();
        }

  navigateToAnswers(qId, qText) {
    qText = this.utils.stringToUrl(qText);
    this.router.navigate(['/discussions', qId, qText]);
  }
  ngOnInit() {
    this.sem = this.route.snapshot.params['sem'];
    this.qaService.getQuestions().subscribe(questionsSnapshot => {
      questionsSnapshot.forEach(question => {
        // console.log(question);
        const qData: Question = <Question>question.payload.doc.data();
        qData.id = question.payload.doc.id;
        this.questions.push(qData);

        // this.questions.id = question.payload.doc.id;
      });
    });

    }

  }


