import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarioServiceService {

  constructor(private httpClient: HttpClient) { }

  getDatos(url: string) {
    return this.httpClient.get(url);
  }
}
