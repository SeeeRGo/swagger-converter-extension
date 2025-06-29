import { parseData } from '../utils/parse-utils'
import type { ParsedParam } from '../utils/parse-utils'
import { Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from 'docx'
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
type ParsedData = ReturnType<typeof parseData>
type InputParams =  ElementType<ParsedData>['inputParams']
type ParsedResponses =  ElementType<ParsedData>['responses']
type ParsedResponse =  ElementType<ParsedData>['responses'][keyof ParsedResponses]
type ParsedRequest =  ElementType<ParsedData>['requests']
const parseInputParams = (params: InputParams) => params.map(parseParamForInputParam)
const parseResponse = (response: ParsedResponse, code: string): (Paragraph | Table)[] => {
  return response.schema.length ? [
    new Paragraph({}),
    new Paragraph({
      text: `Описание ответа код - ${code}`,
      heading: 'Heading5'
    }),
    new Paragraph({
      text: response.description,
    }),
    new Table({
      columnWidths: [3500, 3500, 2000, 1000],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: 'Параметр'
                })
              ],
              width: { size: 3500, type: WidthType.DXA },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: 'Описание'
                })
              ],
              width: { size: 3500, type: WidthType.DXA },
            }),                  
            new TableCell({
              children: [
                new Paragraph({
                  text: 'Тип данных'
                })
              ],
              width: { size: 2000, type: WidthType.DXA },
            }),                  
            new TableCell({
              children: [
                new Paragraph({
                  text: 'Обязательность'
                })
              ],
              width: { size: 1000, type: WidthType.DXA },
            }),
          ],
        }),
        ...response.schema.map(parseParamForBody)
      ],
    }),
    new Paragraph({})
  ] : []
}
const parseParamForInputParam = (param: ParsedParam) => new TableRow({
  children: [
    new TableCell({
      children: [
        new Paragraph({
          text: param.paramName
        })
      ],
      width: { size: 1500, type: WidthType.DXA },
    }),
    new TableCell({
      children: [
        new Paragraph({
          text: param.description
        })
      ],
      width: { size: 5000, type: WidthType.DXA },
    }),                  
    new TableCell({
      children: [
        new Paragraph({
          text: param?.paramType
        })
      ],
      width: { size: 2000, type: WidthType.DXA },
    }),                  
    new TableCell({
      children: [
        new Paragraph({
          text: param.paramIn
        })
      ],
      width: { size: 1000, type: WidthType.DXA },
    }),                  
    new TableCell({
      children: [
        new Paragraph({
          text: param.required ? 'Да' : 'Нет'
        })
      ],
      width: { size: 500, type: WidthType.DXA },
    }),
  ],
})
const parseParamForBody = (param: ParsedParam): TableRow =>  new TableRow({
  children: [
    new TableCell({
      children: [
        new Paragraph({
          text: param.paramName
        })
      ],
      width: { size: 4000, type: WidthType.DXA },
    }),
    new TableCell({
      children: [
        new Paragraph({
          text: param.description
        })
      ],
      width: { size: 4500, type: WidthType.DXA },
    }),
    new TableCell({
      children: [
        new Paragraph({
          text: param.paramType ?? 'Нет схемы'
        })
      ],
      width: { size: 1000, type: WidthType.DXA },
    }),
    new TableCell({
      children: [
        new Paragraph({
          text: param.required ? 'Да' : 'Нет'
        })
      ],
      width: { size: 500, type: WidthType.DXA },
    }),
  ],
})

const parseResponses = (responses: ParsedResponses): (Paragraph | Table)[] => {
  const parsed200 = parseResponse(responses['200'], '200')
  const parsed201 = parseResponse(responses['201'], '201')
  const parsed400 = parseResponse(responses['400'], '400')
  return [...parsed200, ...parsed201, ...parsed400]
}

export const parseRequests = (requests: ParsedRequest): TableRow[]  => {
  return requests.schema.map(parseParamForBody)
}
export function convertToDocxContent(
  data: ParsedData, 
): Paragraph[] {
  const paragraphs: unknown[] = [] 
  data.forEach((item, index) => {
      paragraphs.push(
        new Paragraph({
          text: `${index + 1} - ${item.path}`,
          heading: 'Heading3'
        })
      )
      paragraphs.push(
        new Paragraph({
          text: 'Основные сведения',
          heading: 'Heading5'
        })
      )
      paragraphs.push(
        new Table({
          columnWidths: [3000, 7000],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Назначение'
                    })
                  ],
                  width: { size: 3000, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: item.methodDesc ?? 'Нет описания метода'
                    })
                  ],
                  width: { size: 7000, type: WidthType.DXA },
                }),                  
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Метод'
                    })
                  ],
                  width: { size: 3000, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: item.method ?? 'Неизвестный метод'
                    })
                  ],
                  width: { size: 7000, type: WidthType.DXA },
                }),                  
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Адрес'
                    })
                  ],
                  width: { size: 3000, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: item.path ?? 'Неизвестный адрес'
                    })
                  ],
                  width: { size: 7000, type: WidthType.DXA },
                }),                  
              ],
            }),
          ],
        })
      )
      paragraphs.push(new Paragraph({}))
      paragraphs.push(
        new Paragraph({
          text: 'Входные параметры',
          heading: 'Heading5'
        })
      )
      paragraphs.push(
        new Table({
          columnWidths: [3000, 2500, 2500, 1000, 1000],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Параметр'
                    })
                  ],
                  width: { size: 3000, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Описание'
                    })
                  ],
                  width: { size: 2500, type: WidthType.DXA },
                }),                  
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Тип данных'
                    })
                  ],
                  width: { size: 2500, type: WidthType.DXA },
                }),                  
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Тип параметра'
                    })
                  ],
                  width: { size: 1000, type: WidthType.DXA },
                }),                  
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Обязательность'
                    })
                  ],
                  width: { size: 1000, type: WidthType.DXA },
                }),
              ],
            }),
            ...parseInputParams(item.inputParams)
          ],
        }),
      )
      paragraphs.push(new Paragraph({}))
      paragraphs.push(
        new Paragraph({
          text: 'Описание запроса',
          heading: 'Heading5'
        })
      )
      paragraphs.push(
        new Paragraph({
          text: item.requests.description,
        })
      )
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: 'Обязательность - ',
            }), 
            new TextRun({
              text: item.requests.required ? 'Да' : 'Нет',
              color: item.requests.required ? 'FF0000' : undefined,
            }),
          ]
        })
      )
      paragraphs.push(
        new Table({
          columnWidths: [3500, 3500, 2000, 1000],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Параметр'
                    })
                  ],
                  width: { size: 3500, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Описание'
                    })
                  ],
                  width: { size: 3500, type: WidthType.DXA },
                }),                  
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Тип данных'
                    })
                  ],
                  width: { size: 2000, type: WidthType.DXA },
                }),                  
                new TableCell({
                  children: [
                    new Paragraph({
                      text: 'Обязательность'
                    })
                  ],
                  width: { size: 1000, type: WidthType.DXA },
                }),
              ],
            }),
            ...parseRequests(item.requests),
          ],
        }),
      )
      paragraphs.push(new Paragraph({}))
      paragraphs.push(
        new Paragraph({
          text: 'Описание ответа',
          heading: 'Heading5'
        })
      )
      parseResponses(item.responses).forEach(param => {
        paragraphs.push(param)
      })
      paragraphs.push(new Paragraph({}))
  })
  return paragraphs as Paragraph[]
}

