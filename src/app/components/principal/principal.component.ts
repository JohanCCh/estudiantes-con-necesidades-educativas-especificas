import { DestrezasService } from './../../services/destrezas.service';
import { EstrategiasService } from './../../services/estrategias.service';
import { Component, OnInit } from '@angular/core';
import { EstudiantesNeeService } from 'src/app/services/estudiantes-nee.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _estudiantesNeeService: EstudiantesNeeService,
    private _estrategias: EstrategiasService,
    private _destrezas: DestrezasService) { }

  ngOnInit(): void {
    this._estudiantesNeeService.getEstudiantesNee().subscribe((data: any) => {
      console.log(data);
    });
    this._estrategias.getEstrategias().subscribe((data: any) => {
      console.log(data);
    });
    this._destrezas.getDestrezas().subscribe((data: any) => {
      console.log(data);
    });
  }

}
