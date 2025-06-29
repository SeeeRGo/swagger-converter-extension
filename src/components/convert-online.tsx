import { Document, Packer } from 'docx'
import yaml from 'js-yaml'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '../components/ui/card'
import { convertToDocxContent } from '../utils/convert-to-docx'
import { parseData } from '../utils/parse-utils'

const strings = {
  title: "Конвертер JSON/YAML в DOCX",
  description: "Создаст документацию на основе текущей страницы сваггера",
  button: "Создать документацию"
}
export function ConvertOnline() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardDescription>{strings.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
      <Button 
      onClick={() => {    
        //@ts-ignore
        chrome.runtime.sendMessage({ action: "getRequests" }, async (response) => {
          const { requests } = response
          const res = requests.map((data: { type: string, text: string }) => {
            if (data.type === 'json') {
              return JSON.parse(data.text)
            } else if (data.type === 'yaml') {
              return yaml.load(data.text)  
            }
            return ''
          })
          // @ts-expect-error idc
          const aggregatedRes = res.reduce((acc, schema) => {
            acc.components = {
              schemas: {
                ...(acc.components?.schemas ?? {}),
                ...(schema.components?.schemas ?? {})
              },
              parameters: {
                ...(acc.components?.parameters ?? {}),
                ...(schema.components?.parameters ?? {})
              },
              requestBodies: {
                ...(acc.components?.requestBodies ?? {}),
                ...(schema.components?.requestBodies ?? {})
              },
              responses: {
                ...(acc.components?.responses ?? {}),
                ...(schema.components?.responses ?? {})
              },
            }
            acc.paths = {
              ...(acc.paths ?? {}),
              ...(schema.paths ?? {})
            }
            acc.openapi = schema.openapi
            acc.info = schema.info
            return acc
          }, {

          })
          const parsedData = parseData(aggregatedRes)      
          
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
        })
      }}
      >{strings.button}</Button>
      </CardContent>
    </Card>
  )
}
