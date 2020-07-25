import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['Ventas 1', 'Ventas 2', 'Ventas 3'];
  public data1 = [[400, 300, 860]];
}
