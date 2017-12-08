import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    template:`
        <h2>{{nombre_component}}</h2>
        <p>{{listado_frutas}}</p>
    `


})

export class FrutaComponent{
    public nombre_component = 'Componente furta'
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia'
}