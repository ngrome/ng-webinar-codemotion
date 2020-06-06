import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomThemeService } from './services/customTheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'w3-github-app';
  organization = 'ngRome';
  isDark: Observable<boolean>;

  constructor(private customThemeService: CustomThemeService) { }

  ngOnInit() {
    this.isDark = this.customThemeService.isDark;
  }

  toggleDarkTheme(checked: boolean) {
    this.customThemeService.applyDarkTheme(checked);
  }
}
