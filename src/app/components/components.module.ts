import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';

@NgModule({
  declarations: [IncrementadorComponent],
  exports: [IncrementadorComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
