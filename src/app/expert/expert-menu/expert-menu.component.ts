import { Component, OnInit, Input } from '@angular/core';
import { Expert } from '../../models/expert';

@Component({
  selector: 'app-expert-menu',
  templateUrl: './expert-menu.component.html',
  styleUrls: ['./expert-menu.component.css']
})
export class ExpertMenuComponent implements OnInit {
  @Input() expert: Expert;
  constructor() { }

  ngOnInit() {
  }

}
