import { EstrategiasService } from './../../services/estrategias.service';
import { Component, OnInit } from '@angular/core';
import { Estrategias } from 'src/app/interfaces/estrategias.interfaces';

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css']
})
export class EstrategiasComponent implements OnInit {

  listaEstrategias: Estrategias[] = [];
  vistaListaEstrategias: Estrategias[] = [];
  urlPhoto = '';
  fileImage: File | undefined;

  constructor(private _estrategias: EstrategiasService) { }

  ngOnInit(): void {
    this.getEstrategias();
  }

  //devuelve la lista de estrategias
  getEstrategias() {
    this.listaEstrategias = [];
    this._estrategias.getEstrategias().subscribe((data: any) => {
      console.log(data);
      data.map((item: Estrategias) => {
        item.estrategiaActividades.map((itemA: any) => {
          this.listaEstrategias.push({
            descripcionestrategia: item.descripcionestrategia,
            estrategiaActividades: [{
              descripcionestrategiasactividades: itemA.descripcionestrategiasactividades,
              documentos: itemA.documentos,
              enlaces: itemA.enlaces,
              idestrategiasactividades: itemA.idestrategiasactividades,
              modificado: false,
            }],
            idpcpaprendizaje: item.idpcpaprendizaje,
            idpcpestrategiasaprendizaje: item.idpcpestrategiasaprendizaje,
            modificado: false,
          });
        });
      });
      console.log(this.listaEstrategias);
    });
  }

  //crear una estrategia
  crearEstrategias() {
    //console.log('crearEstrategias');
    this.vistaListaEstrategias.push({
      descripcionestrategia: '',
      estrategiaActividades: [],
      idpcpaprendizaje: this.vistaListaEstrategias.length + 1,
      idpcpestrategiasaprendizaje: this.vistaListaEstrategias.length + 1,
      modificado: true,
    });
  }

  //modifica el estado de la variable modificado de una estrategia
  editarMopdificadoEstrategia(id: number) {
    //console.log('editarModificador');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.modificado = true;
      }
      return item;
    });
  }

  //edita una estrategia
  editarEstrategia(id: number, descripcion: string) {
    //console.log('editarEstrategia');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.modificado = false;
        item.descripcionestrategia = descripcion;
      }
      return item;
    });
  }

  //elimina una estrategia
  eliminarEstrategia(id: number) {
    //console.log('eliminarEstrategia');
    this.vistaListaEstrategias = this.vistaListaEstrategias.filter(item => item.idpcpaprendizaje !== id);
  }

  //crea una actividad
  crearActividad(id: number) {
    //console.log('crearActividad');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.estrategiaActividades.push({
          descripcionestrategiasactividades: '',
          documentos: [],
          enlaces: [],
          idestrategiasactividades: item.estrategiaActividades.length + 1,
          modificado: true,
        });
      }
      return item;
    });
  }

  //eliminar una actividad
  eliminarActividad(id: number, idActividad: number) {
    //console.log('eliminarActividad');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.estrategiaActividades = item.estrategiaActividades.filter(itemA => itemA.idestrategiasactividades !== idActividad);
      }
      return item;
    });
  }

  //modifica el estado de la variable modificado de una actividad
  editarModificarActividad(id: number, idActividad: number) {
    //console.log('editarModificarActividad');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
          if (itemA.idestrategiasactividades === idActividad) {
            itemA.modificado = true;
          }
          return itemA;
        });
      }
      return item;
    });
  }

  //modifica una actividad
  editarActividad(id: number, idActividad: number, descripcion: string) {
    //console.log('modificarActividad');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === id) {
        item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
          if (itemA.idestrategiasactividades === idActividad) {
            itemA.modificado = false;
            itemA.descripcionestrategiasactividades = descripcion;
          }
          return itemA;
        });
      }
      return item;
    });
  }

  //agrega datos a la lista de estrategias
  agregarDatos() {
    this.listaEstrategias.map((item: any) => {
      this.vistaListaEstrategias.push({
        descripcionestrategia: item.descripcionestrategia,
        estrategiaActividades: item.estrategiaActividades,
        idpcpaprendizaje: item.idpcpaprendizaje,
        idpcpestrategiasaprendizaje: item.idpcpestrategiasaprendizaje,
        modificado: false,
      });
    });
  }

  //obtiene el nombre de una url
  obtenerNombreUrl(url: string) {
    const urlSplit = url.split('/');
    return urlSplit[urlSplit.length - 1];
  }

  //obtiene el nombre del sitio de una url
  obtenerNombreSitio(url: string) {
    const urlSplit = url.split('/');
    return urlSplit[2];
  }

  //obtiene el url de una imagen
  guardaUrlImagen(event: any, idE: number, idA: number) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = (event: any) => {
        this.urlPhoto = event.target.result;
      }
      this.fileImage = event.target.files[0];
      //reader.readAsDataURL(event.target.files[0]);
      this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
        if (item.idpcpaprendizaje === idE) {
          item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
            if (itemA.idestrategiasactividades === idA) {
              itemA.documentos.push({
                urldocumento: this.fileImage!?.name,
                idtipodocumento: itemA.documentos.length + 1,
                idestrategiasactividadesdocumentos: itemA.documentos.length + 1,
              });
            }
            return itemA;
          });
        }
        return item;
      });
    }
  }

  //elimina un documento
  eliminarDocumento(idE: number, idA: number, idD: number) {
    //console.log('eliminarDocumento');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === idE) {
        item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
          if (itemA.idestrategiasactividades === idA) {
            itemA.documentos = itemA.documentos.filter(itemD => itemD.idtipodocumento !== idD);
          }
          return itemA;
        });
      }
      return item;
    });
  }

  //elimina un enlace
  eliminarEnlace(idE: number, idA: number, idD: number) {
    //console.log('eliminarEnlace');
    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === idE) {
        item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
          if (itemA.idestrategiasactividades === idA) {
            itemA.enlaces = itemA.enlaces.filter(itemD => itemD.idtipodocumento !== idD);
          }
          return itemA;
        });
      }
      return item;
    });
  }

  //guarda el url de un enlace
  guardaEnlace(data: string, idE: number, idA: number) {
    let aux: any = document.getElementById("enlaceActividad");
    aux.value = "";

    this.vistaListaEstrategias = this.vistaListaEstrategias.map(item => {
      if (item.idpcpaprendizaje === idE) {
        item.estrategiaActividades = item.estrategiaActividades.map(itemA => {
          if (itemA.idestrategiasactividades === idA) {
            itemA.enlaces.push({
              urlenlace: data,
              idestrategiasactividadesdocumentos: itemA.enlaces.length + 1,
              idtipodocumento: itemA.enlaces.length + 1,
            });
          }
          return itemA;
        });
      }
      return item;
    });
  }

}
