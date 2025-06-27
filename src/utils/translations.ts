export const translations = {
  en: {
    title: "JSON/YAML to DOCX",
    description: "Upload a JSON or YAML file to convert it to DOCX format.",
    uploadText: "Click to upload or drag and drop",
    fileTypes: "JSON or YAML files only",
    selectFile: "Select File",
    convert: "Convert",
    converting: "Converting...",
    success: "Success!",
    successMessage: "Your DOCX file has been generated and downloaded.",
    error: "Error",
    invalidFileType: "Invalid file type",
    invalidFileMessage: "Please upload JSON or YAML files only.",
    noFileSelected: "No file selected",
    noFileMessage: "Please select a file to convert."
  },
  ru: {
    title: "Конвертер JSON/YAML в DOCX",
    description: "Загрузите файл JSON или YAML для конвертации в формат DOCX.",
    uploadText: "Нажмите для загрузки или перетащите файл",
    fileTypes: "Только файлы JSON или YAML",
    selectFile: "Выбрать файл",
    convert: "Конвертировать",
    converting: "Конвертация...",
    success: "Успех!",
    successMessage: "Ваш файл DOCX был создан и загружен.",
    error: "Ошибка",
    invalidFileType: "Неверный тип файла",
    invalidFileMessage: "Пожалуйста, загружайте только файлы JSON или YAML.",
    noFileSelected: "Файл не выбран",
    noFileMessage: "Пожалуйста, выберите файл для конвертации."
  }
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

