import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { MapEditerComponent } from './components/map-editer/map-editer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'map-editer',
    component: MapEditerComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
