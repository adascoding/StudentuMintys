import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-klausimai',
  templateUrl: './klausimai.component.html',
  styleUrls: ['./klausimai.component.css']
})
export class KlausimaiComponent implements OnInit {

  questions : {id: number, title: string}[] =[];
  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionsService.questions;
  }

}
