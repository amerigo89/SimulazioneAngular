import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dipartimento } from '../app/dipartimento.model';  

@Injectable({
  providedIn: 'root'
})
export class DipartimentiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://localhost:44330/dipartimenti/';

  getDipartimenti(){
    return this.http.get<Dipartimento[]>(this.baseUrl);
  }
}
