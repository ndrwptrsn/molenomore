import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { ClientsComponent } from './components/clients/clients.component';
import { EntriesComponent } from './components/entries/entries.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DatabaseService } from './database.service';
import { LogoComponent } from './components/logo/logo.component';
import { BodyComponent } from './components/body/body.component';
import { BodyEditerComponent } from './components/body-editer/body-editer.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { MapEditerComponent } from './components/map-editer/map-editer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId,
  mapKey: masterFirebaseConfig.mapKey
};

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: firebaseConfig.mapKey
    }),
    AgmJsMarkerClustererModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [DatabaseService, AngularFireAuth ],
  declarations: [ AppComponent, FooterComponent, MapComponent, HomeComponent, AdminComponent, ClientsComponent, EntriesComponent, LogoComponent, BodyComponent, BodyEditerComponent, MapEditerComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
