import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssetsComponent } from './project-translations.component';

describe('ProjectTranslationsComponent', () => {
  let component: ProjectAssetsComponent;
  let fixture: ComponentFixture<ProjectAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
