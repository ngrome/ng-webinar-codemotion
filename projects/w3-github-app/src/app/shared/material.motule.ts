
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatDividerModule, MatToolbarModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }