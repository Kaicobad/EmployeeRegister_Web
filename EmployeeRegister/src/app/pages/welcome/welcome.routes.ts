import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const WELCOME_ROUTES: Routes = 
[
  
  { 
    path: '', component: WelcomeComponent 
  },
];
