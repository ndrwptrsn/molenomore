import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [DatabaseService]
})
export class BodyComponent implements OnInit {
  paragraphs: FirebaseListObservable<any[]>;
  title: 'Mole No More';
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.paragraphs = this.databaseService.getParagraphs();
  }

  thanks() {
    alert('Thank you for reaching out!');
  }

}
