import {Component, OnInit} from '@angular/core';
import {TranslatorService} from "./translator.service";
import {TranslateResource} from "./translation.resource";
import {ActivatedRoute, Router} from "@angular/router";
import {SupportedLanguageResource} from "./supported-language.resource";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent implements OnInit {

  documentDetails: { projectId?: number, project?: string, srcLang?: string, targetLang?: string };
  translations: TranslateResource[] = [];
  loadingTranslations = false;

  // @ts-ignore
  private selectedLanguage: SupportedLanguageResource;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: TranslatorService) {
    this.documentDetails = {};
  }

  ngOnInit(): void {
    // @ts-ignore
    this.selectedLanguage = this.service.findByLanguage(this.activatedRoute.snapshot.paramMap.get('language'));
    this.documentDetails.srcLang = this.service.ENGLISH.name;
    this.documentDetails.targetLang = this.selectedLanguage.name;

    this.loadTranslations();
    this.service.getProjectDetails().then(value => {
      this.documentDetails.project = value.name;
      this.documentDetails.projectId = value.id;
    });
  }

  private loadTranslations() {
    this.loadingTranslations = true;
    this.service.loadTranslations(this.selectedLanguage.languageCode).then(value => this.translations = value).finally(() => this.loadingTranslations = false);
  }

  translate(obj: TranslateResource) {
    obj.translating = true;
    this.service.translate(obj.originalText, this.selectedLanguage.languageCode)
      .then(value => {
        obj.suggestedTranslation = value.text;
      })
      .catch(reason => {
        obj.failedToTranslate = true;
      })
      .finally(() => {
        obj.translating = false;
      });
  }

  approveSuggestion(translation: TranslateResource) {
    translation.translatedText = translation.suggestedTranslation
    translation.translationModel = translation.translatedText;
    translation.suggestedTranslation = undefined;
  }

  rejectSuggestion(translation: TranslateResource) {
    translation.suggestedTranslation = undefined;
  }

  editTranslation(translation: TranslateResource) {
    translation.editingTranslation = true;
    translation.translationModel = translation.translatedText;
  }

  editSuggestion(translation: TranslateResource) {
    translation.editingSuggestion = true;
    translation.suggestionModel = translation.suggestedTranslation;
  }

  saveTranslation(translation: TranslateResource) {
    translation.editingTranslation = false;
    translation.translatedText = translation.translationModel;
  }

  undoTranslationChange(translation: TranslateResource) {
    translation.translationModel = translation.translatedText;
  }

  cancelTranslationChange(translation: TranslateResource) {
    this.undoTranslationChange(translation);
    translation.editingTranslation = false;
  }

  undoSuggestionChange(translation: TranslateResource) {
    translation.suggestionModel = translation.suggestedTranslation;
  }

  saveSuggestion(translation: TranslateResource) {
    translation.editingSuggestion = false;
    translation.suggestedTranslation = translation.suggestionModel;
  }

  cancelSuggestionChange(translation: TranslateResource) {
    translation.editingSuggestion = false;
    this.undoSuggestionChange(translation);
  }

  goToProjectPage() {
    this.router.navigate([`/project/${this.documentDetails.projectId}`]);
  }
}
