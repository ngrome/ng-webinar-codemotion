import { TestBed } from '@angular/core/testing';

import { CustomThemeService } from './customTheme.service';

describe('CustomThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomThemeService = TestBed.get(CustomThemeService);
    expect(service).toBeTruthy();
  });
});
