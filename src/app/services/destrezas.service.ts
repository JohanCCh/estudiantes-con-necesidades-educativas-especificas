import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Destrezas } from '../interfaces/destrezas.interfaces';

const url = 'http://20.84.54.175/IviBackendDemo/R32/GetCompetencias'

@Injectable({
  providedIn: 'root'
})
export class DestrezasService {

  constructor(private http: HttpClient) {
  }

  getDestrezas() {
    return this.http.get(url).pipe(
      map((resp: any) => {
        //console.log(resp);
        const request: Destrezas = resp.data;
        return request;
      }));
  }
}
