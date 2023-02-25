import { Component, OnInit } from '@angular/core';
import { DestrezasService } from './../../services/destrezas.service';
import { Destrezas, ListaDestrezas } from './../../interfaces/destrezas.interfaces';

@Component({
  selector: 'app-destrezas',
  templateUrl: './destrezas.component.html',
  styleUrls: ['./destrezas.component.css']
})
export class DestrezasComponent implements OnInit {

  filtroDestrezas = '';
  listaDestrezas: ListaDestrezas[] = [];
  vistaListaDestrezas: ListaDestrezas[] = [];
  destrezas: Destrezas[] = [];

  constructor(private _destrezas: DestrezasService,) { }

  ngOnInit(): void {
    this.conseguirListaDestrezas();
  }

  //devuelve la lista de destrezas
  conseguirListaDestrezas() {
    this.listaDestrezas = [];
    this._destrezas.getDestrezas().subscribe((data: any) => {
      this.destrezas = data;
      //console.log(this.destrezas);
      for (let i = 1; i < 4; i++) {
        this.listaDestrezas.push({
          id: i,
          titulo: 'M.4.1.5. Calcular la potencia de números enteros con exponentes naturales. Principales ocupaciones y profesiones que observa en el entorno, así como la forma en que estos aspectos.',
          destrezas: data,
          modificado: false,
        });
      }
      //console.log(this.listaDestrezas);
    });
  }

  //crea una nueva destreza
  crearDestreza() {
    //console.log('crearDestreza');
    this.vistaListaDestrezas.push({
      id: this.vistaListaDestrezas.length + 1,
      titulo: '',
      destrezas: this.destrezas,
      modificado: true,
    });
  }

  //crea una nueva destreza con la información de la lista
  crearDestrezaInformacion(data: ListaDestrezas) {
    //console.log('crearDestrezaInformacion');
    this.vistaListaDestrezas.push({
      id: this.vistaListaDestrezas.length + 1,
      titulo: data.titulo,
      destrezas: this.destrezas,
      modificado: data.modificado,
    });
  }

  //elimina una destreza
  eliminarDestreza(id: number) {
    //console.log('eliminarDestreza');
    this.vistaListaDestrezas = this.vistaListaDestrezas.filter(item => item.id !== id);
  }

  //editar el modificador de la destreza
  editarModificadorDestreza(id: number) {
    //console.log('editarModificador');
    this.vistaListaDestrezas = this.vistaListaDestrezas.map(item => {
      if (item.id === id) {
        item.modificado = true;
      }
      return item;
    });
  }

  //editar el titulo de la destreza
  editarDestreza(id: number, titulo: string) {
    //console.log('editarDestreza');
    this.vistaListaDestrezas = this.vistaListaDestrezas.map(item => {
      if (item.id === id) {
        item.modificado = false;
        item.titulo = titulo;
      }
      return item;
    });
  }

}
