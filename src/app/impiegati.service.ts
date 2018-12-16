import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Impiegato } from '../app/impiegato.model';  
import { map, tap, filter, catchError, mergeMap } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ImpiegatiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://localhost:44330/impiegati/';

  getImpiegati(){
    return this.http.get<Impiegato[]>(this.baseUrl);
  }

  getImpiegatiAnziani(idDip: number){
    return this.http.get<Impiegato[]>(this.baseUrl).
    pipe(map(res => res.filter(i => i.idDipartimento == idDip).
    sort((a, b) => new Date(a.dataAssunzione).getTime() - new Date(b.dataAssunzione).getTime())));
  }
}
