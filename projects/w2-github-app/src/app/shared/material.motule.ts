
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatDividerModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }