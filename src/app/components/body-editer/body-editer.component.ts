import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { Paragraph } from '../../models/paragraph.model';

@Component({
  selector: 'app-body-editer',
  templateUrl: './body-editer.component.html',
  styleUrls: ['./body-editer.component.css'],
  providers: [DatabaseService]
})
export class BodyEditerComponent implements OnInit {
  paragraphs: Paragraph[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getParagraphs().subscribe( paragraphs => {
      this.paragraphs = paragraphs;
    });
  }

  update(paragraph) {
    this.databaseService.updateParagraph(paragraph);
  }

}
