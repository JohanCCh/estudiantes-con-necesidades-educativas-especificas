import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { EstudiantesNee } from '../interfaces/estudiantes-nee.interfaces';

const url = 'http://20.84.54.175/IviBackendDemo/R32/EstudiantesNee/1259';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesNeeService {

  constructor(private http: HttpClient) {
  }

  // Retorna un objeto del tipo EstudiantesNee
  getEstudiantesNee() {
    return this.http.get(url).pipe(
      map((resp: any) => {
        //console.log(resp);
        const request: EstudiantesNee = resp.data;
        return request;
      }));
  }

}
