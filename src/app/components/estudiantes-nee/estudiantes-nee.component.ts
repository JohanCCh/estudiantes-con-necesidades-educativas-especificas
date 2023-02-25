import { Component, OnInit } from '@angular/core';
import { EstudiantesNee } from './../../interfaces/estudiantes-nee.interfaces';
import { EstudiantesNeeService } from './../../services/estudiantes-nee.service';

@Component({
  selector: 'app-estudiantes-nee',
  templateUrl: './estudiantes-nee.component.html',
  styleUrls: ['./estudiantes-nee.component.css']
})
export class EstudiantesNeeComponent implements OnInit {
  listaEstudiantesNee: EstudiantesNee[] = [];
  vistaListaEstudiantesNee: EstudiantesNee[] = [];
  filtroEstudiantesNee: string = '';

  constructor(private _estudianteNee: EstudiantesNeeService) { }

  ngOnInit(): void {
    this.getEstudiantesNee();
  }

  //devuelve la lista de estudiantes nee
  getEstudiantesNee() {
    this.listaEstudiantesNee = [];
    this._estudianteNee.getEstudiantesNee().subscribe((data: any) => {
      console.log(data);
      this.listaEstudiantesNee = data;
    });
  }

  //agrega un nuevo estudiante nee
  agregarEstudianteNee(data: EstudiantesNee) {
    this.filtroEstudiantesNee = data.nombreestudiante;
    this.vistaListaEstudiantesNee.push({
      idestudiante: data.idestudiante,
      nombreestudiante: data.nombreestudiante,
      gradoadaptacioncurricular1: data.gradoadaptacioncurricular1,
      discapacidades: data.discapacidades,
    });
  }


}
