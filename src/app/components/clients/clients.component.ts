import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { Entry } from '../../models/entry.model';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ DatabaseService ]
})
export class ClientsComponent implements OnInit {
  entries: Entry[] = [];
  clients: Client[] = [];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getClients().subscribe( clients => {
      // for (const client of clients) {
      //   this.clients.push(new Client(client.name, client.lat, client.lng));
      // }
      this.clients = clients;
    });
  }

  newClient(name, lat, lng) {
    console.log(name, lat, lng);
    const client = new Client(name, lat, lng);
    this.databaseService.addClient(client);
  }

  deleteClient(client) {
    this.databaseService.deleteClient(client);
  }
}
