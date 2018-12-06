import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-map-editer',
  templateUrl: './map-editer.component.html',
  styleUrls: ['./map-editer.component.css'],
  providers: [DatabaseService]
})
export class MapEditerComponent implements OnInit {
  entries = [];
  entryClients = [];
  radius = 100;
  lat = 45.5396;
  lng = -122.5921;
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getEntries().subscribe( result => {
      for (const entry of result) {
        const client = entry.client;
        if (this.entryClients.indexOf(client) === -1) {
          this.entryClients.push(client);
          this.entries.push(entry);
        } else {
          const index = this.entryClients.indexOf(client);
          this.entries[index].moles = parseInt(this.entries[index].moles, 10) + parseInt(entry.moles, 10);
        }
      }
    });
  }

}
