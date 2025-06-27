import './App.css'
import yaml from 'js-yaml';
import { parseData } from './lib/utils';
import { convertToDocxContent } from './utils/convert-to-docx.js';
import { Document, Packer } from 'docx';

function App() {
  return (
    <>
      <button 
      onClick={() => {    
      console.log('loading requests');
      //@ts-ignore
      chrome.runtime.sendMessage({ action: "getRequests" }, async (response) => {
        const { requests } = response
        console.log('response', requests);
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
    // return Response.json(aggregatedRes)
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
      >Создать документацию</button>
    </>
  )
}

export default App
