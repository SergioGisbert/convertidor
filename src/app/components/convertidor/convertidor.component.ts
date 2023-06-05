import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad  : number= 0;
  Tengo = "USD";
  Quiero = "EUR";
  total  = 0;

  monedas: string[] = ['USD','EUR','LIBRA'];
  convertir(){
    switch(this.Tengo){
      case 'USD' :
        if(this.Quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.Quiero === 'EUR'){
          this.total = this.cantidad * 0.84 ;
        }
        if(this.Quiero === 'LIBRA'){
          this.total = this.cantidad * 0.75;
        }
        break;
      case 'EUR':
        if(this.Quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.Quiero === 'USD'){
          this.total = this.cantidad / 0.84;
        }
        if(this.Quiero === 'LIBRA'){
          this.total = this.cantidad * 0.9;
        }
        break;
      case 'LIBRA':
        if(this.Quiero === 'EUR'){
          this.total = this.cantidad / 0.9;
        }
        if(this.Quiero === 'USD'){
          this.total = this.cantidad / 0.75;
        }
        if(this.Quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        break;
    }
  }


}
