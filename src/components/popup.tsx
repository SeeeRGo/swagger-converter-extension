'use client'

import { useState } from 'react'
import { Document, Packer } from 'docx'
import yaml from 'js-yaml'
import { Upload, FileIcon, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu"
import { convertToDocxContent } from '../utils/convert-to-docx'
import { useTranslations } from '../hooks/use-translations'
import { useToast } from '../hooks/use-toast'
import { parseData } from '../lib/utils'
// import { mockData } from '@/__tests__/mockInput'
// import { mockDataMini } from '@/__tests__/mockInputMini'

function PopupContent() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { toast } = useToast()
  const { t } = useTranslations()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.json') && !file.name.endsWith('.yaml') && !file.name.endsWith('.yml')) {
      toast({
        variant: "destructive",
        title: t('invalidFileType'),
        description: t('invalidFileMessage'),
      })
      return
    }

    setSelectedFile(file)
  }

  const handleConvert = async () => {
    if (!selectedFile) {
      toast({
        variant: "destructive",
        title: t('noFileSelected'),
        description: t('noFileMessage'),
      })
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
        throw new Error(t('invalidFileMessage'))
      }
      const parsedData = parseData(data)  
          
      const doc = new Document({
        sections: [{
          properties: {},
          children: convertToDocxContent(parsedData)
        }]
      })

      const buffer = await Packer.toBuffer(doc)
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `swagger.docx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      toast({
        title: t('success'),
        description: t('successMessage'),
      })
    } catch (error) {
      console.log('error', error);
      
      toast({
        variant: "destructive",
        title: t('error'),
        description: error instanceof Error ? error.message : t('invalidFileMessage'),
      })
    } finally {
      setIsProcessing(false)
    }
  }

  // const handleConvert = async () => {

  //   setIsProcessing(true)
  //   try {
  //     const { data } = await axios('/api/swagger')
  //     const parsedData = parseData(data)      

  //     const doc = new Document({
  //       sections: [{
  //         properties: {},
  //         children: convertToDocxContent(parsedData)
  //       }]
  //     })

  //     const buffer = await Packer.toBuffer(doc)
  //     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
  //     const url = window.URL.createObjectURL(blob)
  //     const a = document.createElement('a')
  //     a.href = url
  //     a.download = `${selectedFile.name.split('.')[0]}.docx`
  //     document.body.appendChild(a)
  //     a.click()
  //     document.body.removeChild(a)
  //     window.URL.revokeObjectURL(url)

  //     toast({
  //       title: t('success'),
  //       description: t('successMessage'),
  //     })
  //   } catch (error) {
  //     toast({
  //       variant: "destructive",
  //       title: t('error'),
  //       description: error instanceof Error ? error.message : t('invalidFileMessage'),
  //     })
  //   } finally {
  //     setIsProcessing(false)
  //   }
  // }

  const clearFile = () => {
    setSelectedFile(null)
  }

  // const languages: Record<Language, string> = {
  //   en: 'English',
  //   ru: 'Русский'
  // }

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Change language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(languages).map(([code, name]) => (
              <DropdownMenuItem
                key={code}
                onClick={() => setLanguage(code as Language)}
              >
                {name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          {!selectedFile ? (
            <label htmlFor="file-upload">
              <div className="flex flex-col items-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {t('uploadText')}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t('fileTypes')}
                </span>
              </div>
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
                {t('selectFile')}
              </label>
            </Button>
            <Button
              className="flex-1"
              onClick={handleConvert}
              disabled={!selectedFile || isProcessing}
            >
              {isProcessing ? t('converting') : t('convert')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Popup() {
  return (
      <PopupContent />
  )
}

