import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Entry } from './models/entry.model';
import { Client } from './models/client.model';
import { Paragraph } from './models/paragraph.model';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {
  area;
  entries: FirebaseListObservable<any[]>;
  clients: FirebaseListObservable<any[]>;
  paragraphs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.entries = database.list('entries');
    this.clients = database.list('clients');
    this.paragraphs = database.list('paragraphs');
   }

  getEntries() {
    return this.entries;
  }
  getEntryById(id) {
    return this.database.object('entries/' + id);
  }
  addEntry(entry: Entry) {
    this.entries.push(entry);
  }
  deleteEntry(entryToDelete) {
    const entry = this.getEntryById(entryToDelete);
    entry.remove();
  }


  getClients() {
    return this.clients;
  }
  getClientById(id) {
    return this.database.object('clients/' + id);
  }
  addClient(client: Client) {
    this.clients.push(client);
  }
  deleteClient(clientToDelete) {
    const client = this.getClientById(clientToDelete.$key);
    client.remove();
  }



  getParagraphs() {
    return this.paragraphs;
  }
  getParagraphById(id) {
     return this.database.object('paragraphs/' + id);
  }
  updateParagraph(updatedParagraph) {
    const paragraph = this.getParagraphById(updatedParagraph.$key);
      paragraph.update({
        content: updatedParagraph.content
    });
  }

  getArea() {
    const ref = firebase.database().ref('area');
    ref.on('value', snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    });
  }
  getAreaById() {
     return this.database.object('area');
  }
  updateArea(updatedArea) {
    const area = this.getAreaById();
    area.update({
      points: updatedArea.points
    });
  }


}
