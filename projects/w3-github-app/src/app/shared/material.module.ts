
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatCardModule, MatDividerModule, MatToolbarModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

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
    MatSlideToggleModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule
  ]
})
export class MaterialModule { }