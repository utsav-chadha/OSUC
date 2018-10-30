import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpertService } from '../shared/expert.service';
import { Expert } from '../models/expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  expert: Expert;
  constructor(private route: ActivatedRoute, private expertService: ExpertService) { }
  ngOnInit() {
      this.expertService.getExpert(this.route.snapshot.params['id']).subscribe(expertSnapshot => {
      this.expert = <Expert>expertSnapshot.payload.data();


  });

  }
}
