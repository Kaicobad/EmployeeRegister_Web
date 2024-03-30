import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private _HttpClient : HttpClient) 
  { }
  
}
