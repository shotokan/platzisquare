import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
    lugar:any = {}
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: "Florería de Gardenia", description: "Test"},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Donas la pasadita", description: "Test "},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Veterinaria Huellitas Felices", description: "test "},
        {id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: "Sushi Sushiroll", description: "test"},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Hotel la Gracia", description: "test"},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: "Zapatería el Clavo", description: "test"}
      ];
    id = null
    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.buscarLugar();
        console.log(this.lugar);
        console.log(this.route.snapshot.queryParams);
    }

    buscarLugar() {
        return this.lugares.filter((lugar) => {return lugar.id == this.id})[0] || null;
    }
  
}
