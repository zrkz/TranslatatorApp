import {Injectable} from '@angular/core';
import {TranslateResource} from "./translation.resource";
import {HttpClient} from "@angular/common/http";
import {SupportedLanguageResource} from "./supported-language.resource";

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  public ENGLISH = {language: 'english', name: 'English', languageCode: 'en'}
  private GERMAN = {language: 'german', name: 'German', languageCode: 'de'};
  private SPANISH = {language: 'spanish', name: 'Spanish', languageCode: 'es'};
  private FRENCH = {language: 'french', name: 'French', languageCode: 'fr'};
  private ITALIAN = {language: 'italian', name: 'Italian', languageCode: 'it'};
  private POLISH = {language: 'polish', name: 'Polish', languageCode: 'pl'};
  private CHINESE = {language: 'chinese', name: 'Chinese', languageCode: 'zh'};
  private ESTONIAN = {language: 'estonian', name: 'Estonian', languageCode: 'et'};
  private TURKISH = {language: 'turkish', name: 'Turkish', languageCode: 'tr'};

  private projectDetails = {
    name: 'Hackathon 2021',
    id: 5
  };

  private languages: SupportedLanguageResource[] = [
    this.GERMAN,
    this.SPANISH,
    this.FRENCH,
    this.ITALIAN,
    this.POLISH,
    this.CHINESE,
    this.ESTONIAN,
    this.TURKISH,
  ];

  private activeLanguages: SupportedLanguageResource[] = [
    this.GERMAN,
    this.CHINESE,
    this.SPANISH,
    this.ESTONIAN,
  ];

  constructor(private http: HttpClient) {
  }

  loadTranslations(selectedLanguageCode: string): Promise<TranslateResource[]> {
    return this.http.get<TranslateResource[]>(`assets/${selectedLanguageCode}.json`).toPromise();
  }

  translate(text: string, targetLang: string): Promise<{ text: string }> {
    console.log(text, targetLang);
    return this.http.post<{ text: string }>('/api/v1/translation', {
      'text': text,
      'src': this.ENGLISH.languageCode,
      'target': targetLang
    }).toPromise()
  }

  loadSupportedLanguages(): Promise<SupportedLanguageResource[]> {
    return Promise.resolve(this.languages);
  }

  loadActiveLanguages() {
    return Promise.resolve(this.activeLanguages);
  }

  getProjectDetails(): Promise<any> {
    return Promise.resolve(this.projectDetails);
  }

  findByLanguageCode(languageCode: string): SupportedLanguageResource {
    // @ts-ignore
    return this.languages.find(value => value.languageCode === languageCode);
  }

  findByLanguage(language: string): SupportedLanguageResource {
    // @ts-ignore
    return this.languages.find(value => value.language === language);
  }
}
