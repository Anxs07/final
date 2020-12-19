import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class FormService extends GenericService<Rental, number> {

  constructor( http: HttpClient) {
    super(http, "http://localhost:3500/api");
   }
}
