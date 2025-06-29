import { parseData } from './utils/parse-utils'
import { convertToDocxContent } from './utils/convert-to-docx'
import { Document, Packer } from 'docx'
import yaml from 'js-yaml'

export async function POST(request: Request) {
  const body = await request.json()
  
  const res = body.map((data: { type: string, text: string }) => {
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
  const buffer = await Packer.toBuffer(doc)
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
  return new Response(blob)
}

