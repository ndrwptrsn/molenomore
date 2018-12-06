import { Component, OnInit, HostListener } from '@angular/core';
import { Client } from '../../models/client.model';
import { Entry } from '../../models/entry.model';
import { DatabaseService } from '../../database.service';



@Component({
  selector: 'app-entries, date-pipe',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  providers: [DatabaseService]
})
export class EntriesComponent implements OnInit {
  today: number = Date.now();
  screenWidth;
  screenHeight;
  entries: Entry[] = [];
  clients: Client[] = [];
  numberList = Array.apply(null, {length: 31}).map(Number.call, Number);

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.databaseService.getClients().subscribe( clients => {
      this.clients = clients;
    });
    this.databaseService.getEntries().subscribe( entries => {
      this.entries = entries;
    });
  }


  newEntry(moles, latLngName, month, year) {
    const lat = parseFloat(latLngName.split(':')[0]);
    const lng = parseFloat(latLngName.split(':')[1]);
    const client = latLngName.split(':')[2];
    const entry = new Entry(moles, lat, lng, client, month, year);
    console.log(moles);
    this.databaseService.addEntry(entry);
  }

  deleteEntry(entry) {
    console.log(entry);
    this.databaseService.deleteEntry(entry);
  }

}
