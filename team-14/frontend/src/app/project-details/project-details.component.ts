import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TranslatorService} from "../translator/translator.service";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {SupportedLanguageResource} from "../translator/supported-language.resource";
import {Router} from "@angular/router";

export interface Option {
  text: string,
  value: string
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  languages: Option[];
  activeLanguages: SupportedLanguageResource[];
  languageSelectionControl: FormControl;
  // @ts-ignore
  filteredLanguages: Observable<Option[]>;
  project: any = {};

  constructor(private service: TranslatorService, private router: Router) {
    this.languages = [];
    this.activeLanguages = [];
    this.languageSelectionControl = new FormControl();

  }

  ngOnInit(): void {
    this.service.loadSupportedLanguages().then(langs => {
      this.languages = langs.map(lang => {
        return {text: lang.name, value: lang.languageCode};
      })
    });
    this.service.loadActiveLanguages().then(langs => {
      this.activeLanguages = langs;
    });
    this.service.getProjectDetails().then(value => this.project = value);
    this.filteredLanguages = this.languageSelectionControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.languages.slice())),
    );
  }

  displayFn(option: Option): string {
    return option && option.text ? option.text : '';
  }

  openTranslatorPage(activeLanguage: SupportedLanguageResource): void {
    const projectId = this.project.id;
    const language = activeLanguage.language;
    this.router.navigate([`/translator/${projectId}/${language}`]);
  }

  addLanguageSupport() {
    this.activeLanguages.push(this.service.findByLanguageCode(this.languageSelectionControl.value.value));
  }

  private _filter(name: string): Option[] {
    const filterValue = name.toLowerCase();
    return this.languages.filter(option => option.text.toLowerCase().includes(filterValue));
  }
}
