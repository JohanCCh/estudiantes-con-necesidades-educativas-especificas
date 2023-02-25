import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Estrategias } from '../interfaces/estrategias.interfaces';

const url = 'http://20.84.54.175/IviBackendDemo/R32/GetDestrezasIndicadoresEstrategiasActividades/355/3';

@Injectable({
  providedIn: 'root'
})
export class EstrategiasService {

  constructor(private http: HttpClient) {
  }

  getEstrategias() {
    return this.http.get(url).pipe(
      map((resp: any) => {
        //console.log(resp);
        const request: Estrategias = resp.data.diea.estrategias;
        return request;
      }));;
  }


}
