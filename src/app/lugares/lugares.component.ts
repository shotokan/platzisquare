import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: "Florería de Gardenia"},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Donas la pasadita"},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Veterinaria Huellitas Felices"},
    {id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: "Sushi Sushiroll"},
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Hotel la Gracia"},
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: "Zapatería el Clavo"}
  ];
  itemsAsObjects = [{id: 0, name: 'Angular'}, {id: 1, name: 'React'}];
  lat:number = 20.9626306;
  lng:number = -89.6065639;
  autocompleteItemsAsObjects = [
    {value: 'Item1', id: 0, extra: 0},
    {value: 'item2', id: 1, extra: 1},
    'item3'
];

  constructor(){

  }
  onItemAdded($event){
    console.log(this.itemsAsObjects);
    console.log($event)
  }
  onTextChange(text) {
    console.log('text changed: value is ' + text);
  }
}
