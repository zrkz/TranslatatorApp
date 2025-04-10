export interface TranslateResource {
  originalText: string,
  translatedText?: string,

  translating?: boolean,
  failedToTranslate?: boolean,

  suggestedTranslation?: string,
  editingSuggestion?: boolean
  suggestionModel?: string
  editingTranslation?: boolean
  translationModel?: string
}
