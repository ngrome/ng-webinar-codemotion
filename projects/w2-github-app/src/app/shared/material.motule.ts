
import { NgModule } from '@angular/core';
import {MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }