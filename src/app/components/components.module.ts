//ext
import { ChartsModule } from 'ng2-charts';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//propios
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports: [IncrementadorComponent, DonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
