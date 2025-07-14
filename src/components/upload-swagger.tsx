import { useState } from 'react'
import { Document, Packer } from 'docx'
import yaml from 'js-yaml'
import { FileIcon, X } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import { convertToDocxContent } from '../utils/convert-to-docx'
import { parseData } from '../utils/parse-utils'

const strings = {
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
export function UploadSwagger() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.json') && !file.name.endsWith('.yaml') && !file.name.endsWith('.yml')) {
      return
    }

    setSelectedFile(file)
  }

  const handleConvert = async () => {
    if (!selectedFile) {
      return
    }

    setIsProcessing(true)
    try {
      const content = await selectedFile.text()
      
      let data

      if (selectedFile.name.endsWith('.json')) {
        data = JSON.parse(content)
      } else if (selectedFile.name.endsWith('.yaml') || selectedFile.name.endsWith('.yml')) {
        data = yaml.load(content)     
      } else {
        throw new Error(strings.invalidFileMessage)
      }
      console.log('data', data);
      
      const parsedData = parseData(data)  
      console.log('parsedData', parsedData);
      
      const doc = new Document({
        sections: [{
          properties: {},
          children: convertToDocxContent(parsedData)
        }]
      })

      const blob = await Packer.toBlob(doc)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `swagger.docx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsProcessing(false)
    }
  }

  const clearFile = () => {
    setSelectedFile(null)
  }
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardDescription>{strings.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-2">
          {!selectedFile ? (
            <label htmlFor="file-upload">
              {/* <div className="flex flex-col items-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {strings.uploadText}
                </span>
                <span className="text-xs text-muted-foreground">
                  {strings.fileTypes}
                </span>
              </div> */}
              <input
                id="file-upload"
                type="file"
                accept=".json,.yaml,.yml"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          ) : (
            <div className="w-full">
              <div className="flex items-center gap-2 p-4 border rounded-lg">
                <FileIcon className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearFile}
                  className="shrink-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              asChild
              className="flex-1"
            >
              <label htmlFor="file-upload" className="cursor-pointer">
                {strings.selectFile}
              </label>
            </Button>
            <Button
              className="flex-1"
              onClick={handleConvert}
              disabled={!selectedFile || isProcessing}
            >
              {isProcessing ? strings.converting : strings.convert}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
