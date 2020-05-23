
import { NgModule } from '@angular/core';
import {MatButtonModule, MatInputModule, MatIconModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }