import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  private darkTheme = new Subject<boolean>();
  isDark = this.darkTheme.asObservable();

  applyDarkTheme(isDark: boolean): void {
    this.darkTheme.next(isDark);
  }
}