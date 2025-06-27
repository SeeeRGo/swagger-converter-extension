export const mockDataMini = {
  "components": {
      "schemas": {
        "DateFormat": {
            "type": "string",
            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
        },
        "DateTimeFormat": {
            "type": "string",
            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
        },
        "TechNameFormat": {
            "type": "string",
            "pattern": "^[a-zA-Z][_a-zA-Z0-9]*$"
        },
        "BasicFilter": {
            "description": "Объект базового фильтра для запросов с фильтрацией по столбцам таблиц",
            "type": "object",
            "properties": {
                "attribute": {
                    "$ref": "#/components/schemas/FilterSortingAttribute"
                },
                "operator": {
                    "description": "Оператор фильтрации:\n  - `empty` - выводить только пустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `notEmpty` - выводить только непустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `contains` - содержит переданное значение. Является регистронезависимым. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `inEnum` - перечисление. Выводятся записи, атрибут которых имеет значение, совпадающее с одним из введенных в перечисление.\n  Сравнение не зависит от регистра строковых значений. Работает со всеми типами данных кроме типов Флаг, Файл, Таблица и Справочник. Для дат сравнение просходит без учёта времени.\n  Значения передаются через точку с запятой `;`.\n  - `equals` - равно переданному значению или совпадает с переданным значением (в случае сравнения строк). Является регистронезависимым. Используется для любых типов кроме типов Файл и Таблица.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге. Для дат сравнение просходит без учёта времени.\n  - `greaterThan` - больше, чем переданное значение. Используется для сравнения чисел и дат (без учёта времени).\n  - `greaterOrEqualsThan` - больше или равно переданному значению. Используется для сравнения чисел и дат (без учёта времени).\n  - `lessThan` - меньше, чем переданное значение. Используется для сравнения чисел и дат (без учёта времени).\n  - `lessOrEqualsThan` - меньше или равно переданному значению. Используется для сравнения чисел и дат (без учёта времени).",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/BasicFilterOperatorTagIdEnum"
                        }
                    ]
                },
                "value": {
                    "description": "Значение для сравнения со значением атрибута при применении оператора",
                    "oneOf": [
                        {
                            "type": "string",
                            "description": "Значение для фильтрации по строковому столбцу или дате"
                        },
                        {
                            "type": "integer",
                            "description": "Значение для фильтрации по столбцу с целыми числами"
                        },
                        {
                            "type": "number",
                            "description": "Значение для фильтрации по столбцу с дробными числами"
                        }
                    ]
                }
            },
            "required": [
                "attribute",
                "operator"
            ],
            "example": {
                "attribute": "dateNextUpdate",
                "operator": "greaterThan",
                "value": "01.02.2024 15:25:05"
            }
        },
        "Filter": {
            "description": "Объект расширенного фильтра для запросов с фильтрацией по столбцам таблиц",
            "type": "object",
            "properties": {
                "attribute": {
                    "$ref": "#/components/schemas/FilterSortingAttribute"
                },
                "operator": {
                    "description": "Оператор фильтрации:\n  - `empty` - выводить только пустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `notEmpty` - выводить только непустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `contains` - содержит переданное значение. Является регистронезависимым. Используется для строковых, справочных и ссылочных атрибутов.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  - `inEnum` - перечисление. Выводятся записи, атрибут которых имеет значение, совпадающее с одним из введенных в перечисление.\n  Сравнение не зависит от регистра строковых значений. Работает со всеми типами данных кроме типов Флаг, Файл, Таблица и Справочник. Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Значения передаются через точку с запятой `;`.\n  - `equals` - равно переданному значению или совпадает с переданным значением (в случае сравнения строк). Является регистронезависимым. Используется для любых типов кроме типов Файл и Таблица.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  - `greaterThan` - больше, чем переданное значение. Используется для сравнения чисел и дат.\n  - `greaterOrEqualsThan` - больше или равно переданному значению. Используется для сравнения чисел и дат.\n  - `lessThan` - меньше, чем переданное значение. Используется для сравнения чисел и дат.\n  - `lessOrEqualsThan` - меньше или равно переданному значению. Используется для сравнения чисел и дат.\n  - `startsWith` - начинается с переданного значения. Используется для строковых, справочных и ссылочных атрибутов. Является регистронезависимым.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  - `endsWith` - заканчивается на переданное значение. Используется для строковых, справочных и ссылочных атрибутов. Является регистронезависимым.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  - `matchesRegexStr` - соответствует регулярному выражению, переданному в виде строки. Используется для строковых, справочных и ссылочных атрибутов.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  - `matchesRegexId` - соответствует одному из регулярных выражений, хранящихся в системе. Используется для строковых, справочных и ссылочных атрибутов.\n  Для ссылочных атрибутов сравнение идет по главному атрибуту ссылочного каталога.\n  Для справочных атрибутов сравнение идет по выбранному столбцу справочника для вывода (defaultColDict), если такой атрибут не выбран, то по столбцу NAME.\n  В `value` передается идентификатор регулярного выражения.\n  - `inDict` - перечисление по справочнику. Выводятся записи, в значении которых выбраны все элементы справочника, что и в выбранном множестве для фильтарции. Используется для справочниых атрибутов.\n  В `value` передается список идентификаторов элементов справочника.",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/FilterOperatorTagIdEnum"
                        }
                    ]
                },
                "value": {
                    "description": "Значение для сравнения со значением атрибута при применении оператора",
                    "oneOf": [
                        {
                            "type": "string",
                            "description": "Значение для фильтрации по строковому столбцу или дате"
                        },
                        {
                            "type": "integer",
                            "description": "Значение для фильтрации по столбцу с целыми числами"
                        },
                        {
                            "type": "number",
                            "description": "Значение для фильтрации по столбцу с дробными числами"
                        },
                        {
                            "type": "array",
                            "description": "Значение для фильтрации по идентификаторам в операторе `inDict`",
                            "items": {
                                "type": "integer"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attribute",
                "operator"
            ],
            "example": {
                "attribute": "periodUpdate",
                "operator": "greaterThan",
                "value": "01.02.2024 15:25:05"
            }
        },
        "FilterSortingAttribute": {
            "description": "Техническое наименование столбца, по которому производится сортировка или фильтрация.\n\nДля атрибутов каталога передается в следующем формате:\n  - \"field_{attrId}\" для каталога заполнения\n  - \"field_{catalogAttrId}\" для каталога публикации\n      - attrId - идентификатор атрибута в ЕХД\n      - catalogAttrId - идентификатор атрибута каталога",
            "type": "string"
        },
        "Sorting": {
            "description": "Объект сортировки, для запросов с многоуровневой сортировкой по таблице",
            "type": "object",
            "properties": {
                "attribute": {
                    "$ref": "#/components/schemas/FilterSortingAttribute"
                },
                "order": {
                    "$ref": "#/components/schemas/SortingOrderTagIdEnum"
                }
            },
            "required": [
                "attribute",
                "order"
            ],
            "example": {
                "attribute": "field_123",
                "order": "desc"
            }
        },
        "ApiResponse": {
            "description": "Ответ на запрос в API\nИспользуется для описания ошибок и базовых ответов (Ok, Created и пр.)",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                    "type": "integer",
                    "format": "int32"
                },
                "code": {
                    "description": "HTTP-код ошибки",
                    "type": "integer",
                    "format": "int32"
                },
                "messageType": {
                    "description": "Тип ответа",
                    "type": "string"
                },
                "message": {
                    "description": "Текст ответа",
                    "type": "string"
                }
            },
            "required": [
                "code",
                "messageType",
                "message"
            ]
        },
        "OkResponse": {
            "type": "object",
            "description": "Успешный ответ на запрос.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                200
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Ok"
                            ]
                        }
                    }
                }
            ]
        },
        "CreatedResponse": {
            "type": "object",
            "description": "Успешное создание объекта.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                201
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Created"
                            ]
                        }
                    }
                }
            ]
        },
        "BadRequestError": {
            "type": "object",
            "description": "Ошибка построения запроса или целостности переданных данных.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                400
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Bad request"
                            ]
                        }
                    }
                }
            ]
        },
        "TooManyRequestsError": {
            "type": "object",
            "description": "Превышен лимит запросов.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                400
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Too Many Requests"
                            ]
                        }
                    }
                }
            ]
        },
        "UnauthorizedError": {
            "type": "object",
            "description": "Ошибка аутентификации и/или авторизации.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                401
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Unauthorized"
                            ]
                        }
                    }
                }
            ]
        },
        "ConflictError": {
            "type": "object",
            "description": "Ошибка выполнения запроса из-за конфликта с состоянием данных на сервере.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                409
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Conflict"
                            ]
                        }
                    }
                }
            ]
        },
        "MissingParamsError": {
            "type": "object",
            "description": "Ошибка отсутствия обязательных параметров, заголовков или полей в запросе.\n\nВ тексте ошибки перечисляются названия обязательных параметров, заголовков или полей запроса.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Missing parameter",
                                "Missing header",
                                "Missing request body fields"
                            ]
                        }
                    }
                }
            ]
        },
        "WrongTypeError": {
            "type": "object",
            "description": "Неверный тип данных в параметрах, заголоках или полях запроса.\n\nВ тексте ошибки перечисляются названия параметров, заголовков или полей, для которых передано значение с неверным типом данных.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.\nТекст ошибки также включает требуемый тип данных.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Parameter wrong type",
                                "Header wrong type",
                                "Request body field wrong type"
                            ]
                        }
                    }
                }
            ]
        },
        "OutOfScopeError": {
            "type": "object",
            "description": "Переданное значение параметра, заголовка или поля не является допустимым.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны входить в список допустимых значений.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.\n\nВозможные варианты возникновения ошибки:\n  - Параметр может принимать определенный перечень значений (enum'ы)\n  - Число должно принимать значение из интервала\n  - Дата должна принимать значение из интервала",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Parameter field value out of scope",
                                "Header value out of scope",
                                "Request body field value out of scope",
                                "Request body date value out of scope"
                            ]
                        }
                    }
                }
            ]
        },
        "WrongFormatError": {
            "type": "object",
            "description": "Переданное значение параметра, заголовка или поля не соответствует формату.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны соответствовать определенному формату.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.\n\nВозможные варианты возникновения ошибки:\n  - Строковое значение должно удовлетворять маске или регулярному выражению.\n  - Строковое значение должно быть определенной длины.\n  - Массив должен включать определенное число элементов.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Parameter format error",
                                "Header format error",
                                "Request body field format error"
                            ]
                        }
                    }
                }
            ]
        },
        "UniqueValueError": {
            "type": "object",
            "description": "Ошибка уникальности значений поля.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны быть уникальными.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                }
            ],
            "properties": {
                "messageType": {
                    "enum": [
                        "Unique value error"
                    ]
                }
            }
        },
        "ResourceCannotBeDeletedError": {
            "type": "object",
            "description": "Ресурс не может быть удален.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Resource cannot be deleted"
                            ]
                        }
                    }
                }
            ]
        },
        "ResourceCannotBeEditedError": {
            "type": "object",
            "description": "Ресурс не может быть изменен.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BadRequestError"
                },
                {
                    "properties": {
                        "messageType": {
                            "enum": [
                                "Resource cannot be edited"
                            ]
                        }
                    }
                }
            ]
        },
        "NotFoundError": {
            "type": "object",
            "description": "Запрошенный ресурс не найден.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                404
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Resource not found"
                            ]
                        }
                    }
                }
            ]
        },
        "MethodNotAllowedError": {
            "type": "object",
            "description": "Запрос не может быть выполнен с указанным методом.\n\nВ тексте ошибки перечисляются допустимые методы для запроса",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                405
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Method not allowed"
                            ]
                        }
                    }
                }
            ]
        },
        "ForbiddenError": {
            "type": "object",
            "properties": {
                "errorCode": {
                    "description": "Код ошибки, характерный для приложения",
                    "type": "integer",
                    "format": "int32",
                    "xml": {
                        "prefix": "ehd"
                    }
                },
                "errorText": {
                    "description": "Текстовое сообщение, характерное для приложения",
                    "type": "string",
                    "xml": {
                        "prefix": "ehd"
                    }
                }
            },
            "required": [
                "errorCode",
                "errorText"
            ]
        },
        "TimeoutError": {
            "type": "object",
            "description": "Истекло время ожидания ответа.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                408
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Timeout"
                            ]
                        }
                    }
                }
            ]
        },
        "InternalServerError": {
            "type": "object",
            "description": "Внутренняя ошибка сервера.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ApiResponse"
                },
                {
                    "properties": {
                        "code": {
                            "enum": [
                                500
                            ]
                        },
                        "messageType": {
                            "enum": [
                                "Internal server error",
                                "Database error"
                            ]
                        }
                    }
                }
            ]
        },
        "BasicFilterOperatorTagIdEnum": {
            "description": "Техническое название оператора базовой фильтрации",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "empty",
                        "notEmpty",
                        "contains",
                        "inEnum",
                        "equals",
                        "greaterThan",
                        "greaterOrEqualsThan",
                        "lessThan",
                        "lessOrEqualsThan"
                    ]
                }
            ]
        },
        "FilterOperatorTagIdEnum": {
            "description": "Техническое название оператора фильтрации",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "empty",
                        "notEmpty",
                        "contains",
                        "inEnum",
                        "equals",
                        "greaterThan",
                        "greaterOrEqualsThan",
                        "lessThan",
                        "lessOrEqualsThan",
                        "startsWith",
                        "endsWith",
                        "matchesRegexStr",
                        "matchesRegexId",
                        "inDict"
                    ]
                }
            ]
        },
        "FilterOperatorNameEnum": {
            "description": "Название оператора фильтрации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SortingOrderTagIdEnum": {
            "description": "Техническое название порядка сортировки:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "asc",
                        "desc"
                    ]
                }
            ]
        },
        "DataModeNameEnum": {
            "description": "Название режима работы с данными каталога",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "DataModeTagIdEnum": {
            "description": "Техническое наименование режима работы каталога:\n  - `fillingCatalog` - Каталоги заполнения\n  - `publicationCatalog` - Каталоги публикации\n  - `catalogGroup` - Группы каталогов\n  - `all` - Все",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "fillingCatalog",
                        "publicationCatalog",
                        "catalogGroup",
                        "all"
                    ]
                }
            ]
        },
        "CatalogTechStatusTagIdEnum": {
            "description": "Технический статус каталога:\n  - `active` - Активный\n  - `deleted` - Удаленный",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "active",
                        "deleted"
                    ]
                }
            ]
        },
        "CatalogKingNameEnum": {
            "description": "Название вида каталога",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "CatalogTypeNameEnum": {
            "description": "Название типа каталога",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "BasicCatalogPeriodUpdateNameEnum": {
            "description": "Название периодичности обновления каталога",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "BasicCatalogPeriodUpdateTagIdEnum": {
            "description": "Техническое название периодичности обновления",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "daily",
                        "weekly",
                        "monthly",
                        "quarterly",
                        "yearly"
                    ]
                }
            ]
        },
        "CatalogPeriodUpdateNameEnum": {
            "description": "Название периодичности обновления каталога",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "CatalogPeriodUpdateTagIdEnum": {
            "description": "Техническое название периодичности обновления",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "daily",
                        "weekly",
                        "monthly",
                        "quarterly",
                        "yearly",
                        "minutely",
                        "hourly",
                        "numDays",
                        "calendarDays",
                        "multiple",
                        "withChanges",
                        "realTime"
                    ]
                }
            ]
        },
        "CatalogFilterOperatorTagIdEnum": {
            "description": "Техническое название оператора для фильтрации по списку каталогов",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "empty",
                        "notEmpty",
                        "contains",
                        "inEnum",
                        "equals",
                        "greaterThan",
                        "greaterOrEqualsThan",
                        "lessThan",
                        "lessOrEqualsThan",
                        "inIds"
                    ]
                }
            ]
        },
        "CatalogFilter": {
            "description": "Объект фильтра по списку каталогов для запросов с фильтрацией по столбцам таблиц",
            "type": "object",
            "properties": {
                "attribute": {
                    "description": "Техническое название атрибута (столбца), по которому производится фильтрация.\nСовпадает с названием поля объекта, который передается в теле ответа.",
                    "type": "string"
                },
                "operator": {
                    "description": "Оператор фильтрации:\n  - `empty` - выводить только пустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `notEmpty` - выводить только непустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `contains` - содержит переданное значение. Является регистронезависимым. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `inEnum` - перечисление. Выводятся записи, атрибут которых имеет значение, совпадающее с одним из введенных в перечисление.\n  Сравнение не зависит от регистра строковых значений. Работает со всеми типами данных кроме типов Флаг, Файл, Таблица и Справочник. Для дат сравнение просходит без учёта времени.\n  Значения передаются через точку с запятой `;`.\n  - `equals` - равно переданному значению или совпадает с переданным значением (в случае сравнения строк). Является регистронезависимым. Используется для любых типов кроме типов Файл и Таблица.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге. Для дат сравнение просходит без учёта времени.\n  - `greaterThan` - больше, чем переданное значение. Используется для сравнения чисел и дат (без учёта времени).\n  - `greaterOrEqualsThan` - больше или равно переданному значению. Используется для сравнения чисел и дат (без учёта времени).\n  - `lessThan` - меньше, чем переданное значение. Используется для сравнения чисел и дат (без учёта времени).\n  - `lessOrEqualsThan` - меньше или равно переданному значению. Используется для сравнения чисел и дат (без учёта времени).\n  - `inIds` - сравнение по идентификаторам.\n    Используется для сравнения по пересечению с идентификаторами выбранных тематической категории,\n    ОИВов, периодичностей обновления, систем-поставщиков, систем-потребителей.",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogFilterOperatorTagIdEnum"
                        }
                    ]
                },
                "value": {
                    "description": "Значение для сравнения со значением атрибута при применении оператора",
                    "oneOf": [
                        {
                            "type": "string",
                            "description": "Значение для фильтрации по строковому атрибуту или дате"
                        },
                        {
                            "type": "integer",
                            "description": "Значение для фильтрации по целому числу"
                        },
                        {
                            "type": "number",
                            "description": "Значение для фильтрации по дробному числу"
                        },
                        {
                            "description": "Значение для фильтрации по идентификаторам с оператором `inIds`",
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attribute",
                "operator"
            ],
            "example": {
                "attribute": "dateNextUpdate",
                "operator": "greaterThan",
                "value": "01.02.2024 15:25:05"
            }
        },
        "ResponsiblePersonInfo": {
            "description": "Информация об ответственном лице",
            "type": "object",
            "properties": {
                "fio": {
                    "description": "ФИО ответсвенного лица",
                    "type": "string"
                },
                "email": {
                    "description": "Email ответсвенного лица",
                    "type": "string"
                },
                "phone": {
                    "description": "Телефон ответсвенного лица",
                    "type": "string"
                }
            },
            "required": [
                "fio",
                "email",
                "phone"
            ],
            "example": {
                "fio": "Иванов Иван Иванович",
                "email": "ivanov@example.com",
                "phone": "+ 7 (999) 11-22-333"
            }
        },
        "CatalogKind": {
            "description": "Вид каталога",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор вида каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "$ref": "#/components/schemas/CatalogKingNameEnum"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "CatalogType": {
            "description": "Тип каталога",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор типа каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "$ref": "#/components/schemas/CatalogTypeNameEnum"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "FillingCatalogUpdatePeriodicity": {
            "description": "Периодичность обновления каталога заполнения",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/CatalogPeriodUpdateTagIdEnum"
                },
                "name": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogPeriodUpdateNameEnum"
                        }
                    ],
                    "readOnly": true
                },
                "numDays": {
                    "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "type": "integer"
                },
                "calendarDays": {
                    "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "day": {
                                "description": "День месяца в формате DD.MM",
                                "type": "string",
                                "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                            }
                        }
                    },
                    "minItems": 1
                },
                "isCheckLastDay": {
                    "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "type": "boolean"
                },
                "multiple": {
                    "description": "Настройки периодичности обновления \"Множественная периодичность\". Обязателен, если tagId = multiple.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "tagId": {
                                "$ref": "#/components/schemas/CatalogPeriodUpdateTagIdEnum"
                            },
                            "name": {
                                "allOf": [
                                    {
                                        "$ref": "#/components/schemas/CatalogPeriodUpdateNameEnum"
                                    }
                                ],
                                "readOnly": true
                            },
                            "dateStart": {
                                "description": "Дата начала действия указанной периодичности. Используется формат DD.MM",
                                "type": "string",
                                "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                            },
                            "numDays": {
                                "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                                "type": "integer"
                            },
                            "calendarDays": {
                                "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "day": {
                                            "description": "День месяца в формате DD.MM",
                                            "type": "string",
                                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                                        }
                                    }
                                },
                                "minItems": 1
                            },
                            "isCheckLastDay": {
                                "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "tagId",
                            "name",
                            "dateStart"
                        ]
                    },
                    "minItems": 1
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "CommonCatalogInfo": {
            "description": "Общая информация о каталоге",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога",
                    "type": "integer",
                    "readOnly": true
                },
                "fullName": {
                    "description": "Полное наименование каталога",
                    "type": "string",
                    "minLength": 1
                }
            },
            "required": [
                "id",
                "fullName"
            ]
        },
        "CommonCatalogListItem": {
            "description": "Общая информация о каталоге, выводимая в списке каталогов (для заполнения и публикации)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "objectCategories": {
                    "description": "Категории объектов каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "thematicCategory": {
                    "description": "Тематическая категория каталога",
                    "type": "string"
                },
                "oivs": {
                    "description": "ОИВ, ответственные за наполнение каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "countActiveObjects": {
                    "description": "Количество активных объектов в каталоге.\n\nДля заполнения считаются объекты со статусами:\n  - Подписанный,\n  - На изменении,\n  - На удалении.\n\nДля публикации считаются неудаленные объекты.",
                    "type": "integer"
                },
                "countObjects": {
                    "description": "Общее количество объектов в каталоге",
                    "type": "integer"
                },
                "systemsConsumers": {
                    "description": "Системы-потребители каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "responsiblePerson": {
                    "description": "Ответственный за каталог. Указывается ФИО, email, телефон через запятую с пробелом",
                    "type": "string"
                }
            },
            "required": [
                "objectCategories",
                "thematicCategory",
                "oivs",
                "countActiveObjects",
                "countObjects",
                "systemsConsumers",
                "responsiblePerson"
            ]
        },
        "CommonCatalogGeneralInfo": {
            "description": "Общие параметры общей информации каталога",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "technicalName": {
                    "description": "Технологическое наименование каталога",
                    "type": "string",
                    "minLength": 1
                },
                "shortName": {
                    "description": "Краткое наименование каталога",
                    "type": "string",
                    "minLength": 1
                },
                "kindCatalog": {
                    "description": "Вид каталога",
                    "type": "object",
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogKind"
                        }
                    ]
                },
                "kindCatalogId": {
                    "description": "Идентификатор вида каталога",
                    "type": "integer",
                    "writeOnly": true
                },
                "typeCatalog": {
                    "description": "Тип каталога",
                    "type": "object",
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogType"
                        }
                    ]
                },
                "typeCatalogId": {
                    "description": "Идентификатор типа каталога",
                    "type": "integer",
                    "writeOnly": true
                },
                "thematicCategory": {
                    "description": "Тематическая категория каталога",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "thematicCategories.yaml#/components/schemas/CommonThematicCategoryInfo"
                        }
                    ],
                    "readOnly": true
                },
                "thematicCategoryId": {
                    "description": "Идентификатор тематической категории каталога",
                    "type": "integer",
                    "writeOnly": true
                },
                "objectCategories": {
                    "description": "Категории объекта",
                    "type": "array",
                    "items": {
                        "$ref": "objectCategories.yaml#/components/schemas/ObjectCategory"
                    },
                    "minItems": 1,
                    "readOnly": true
                },
                "oivs": {
                    "description": "Поставщики информации каталога (ответственные ОИВы)",
                    "type": "array",
                    "items": {
                        "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                    },
                    "minItems": 1,
                    "readOnly": true
                },
                "oivsIds": {
                    "description": "Список идентификаторов поставщиков информации каталога (ответственные ОИВы)",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "minItems": 1,
                    "writeOnly": true
                },
                "accountingObject": {
                    "description": "Объект учёта",
                    "type": "string",
                    "minLength": 1
                },
                "keywords": {
                    "description": "Ключевые слова",
                    "type": "string",
                    "minLength": 1
                },
                "systemsConsumers": {
                    "description": "Системы потребители данных каталога",
                    "type": "array",
                    "items": {
                        "$ref": "systems.yaml#/components/schemas/CommonSystemInfo"
                    },
                    "readOnly": true
                },
                "systemsConsumersIds": {
                    "description": "Список идентификаторов систем потребителей данных",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "writeOnly": true
                },
                "isShowDeleteObjects": {
                    "description": "Признак \"Показывать удалённые объекты\"",
                    "type": "boolean"
                }
            },
            "required": [
                "technicalName",
                "shortName",
                "typeCatalog",
                "thematicCategory",
                "objectCategories",
                "oivs",
                "periodUpdateTagId",
                "isShowDeleteObjects"
            ]
        },
        "CommonCatalogMetadata": {
            "description": "Общие параметры метаданных каталога",
            "type": "object",
            "properties": {
                "respPersonFIO": {
                    "description": "ФИО ответственного за каталог",
                    "type": "string"
                },
                "respPersonEmail": {
                    "description": "Адрес электронной почты ответственного за каталог",
                    "type": "string"
                },
                "respPersonPhone": {
                    "description": "Телефон ответственного за каталог",
                    "type": "string"
                },
                "description": {
                    "description": "Описание каталога",
                    "type": "string"
                }
            }
        },
        "CommonCatalogAttributeWithDefaultValue": {
            "type": "object",
            "description": "Свойство атрибута \"Значение по умолчанию\"",
            "properties": {
                "defaultValue": {
                    "description": "Значение атрибута по умолчанию",
                    "type": "string"
                }
            }
        },
        "CommonCatalogAttributeWithFieldMask": {
            "description": "Информация об атрибуте с маской ввода",
            "type": "object",
            "properties": {
                "fieldMask": {
                    "description": "Маска ввода, которой должно соответствовать значение атрибута. Обозначения:\n  - X - любые буквы,\n  - 0 - любые цифры.",
                    "type": "string"
                }
            }
        },
        "CommonCatalogAttributeWithNumber": {
            "description": "Информация о числовом атрибуте",
            "type": "object",
            "properties": {
                "isPositive": {
                    "description": "Признак, что значение может быть только положительным числом",
                    "type": "boolean"
                },
                "maxLength": {
                    "description": "Максимальное количество знаков целой части числа",
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 38
                }
            },
            "required": [
                "isPositive",
                "maxLength"
            ]
        },
        "CommonCatalogAttributeWithDecimalPart": {
            "description": "Свойство атрибута \"Количество знаков после запятой\"",
            "type": "object",
            "properties": {
                "maxLengthDecimal": {
                    "description": "Максимальное количество знаков после запятой",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "maximum": 38
                }
            },
            "required": [
                "maxLengthDecimal"
            ]
        },
        "CommonCatalogAttributeWithTime": {
            "description": "Свойство атрибута \"Дата и время\"",
            "type": "object",
            "properties": {
                "isTime": {
                    "description": "Признак, который указывает на необходимость добавления временной метки к дате",
                    "type": "boolean"
                }
            },
            "required": [
                "isTime"
            ]
        },
        "CommonCatalogAttributeWithFieldRegex": {
            "description": "Информация об атрибуте с регулярным выражением",
            "type": "object",
            "properties": {
                "fieldRegexId": {
                    "description": "Идентификатор регулярного выражения, которому должно соответствовать значение атрибута",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "fieldRegex": {
                    "description": "Регулярное выражение, которому должно соответствовать значение атрибута",
                    "type": "object",
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "regexps.yaml#/components/schemas/CommonRegularExpressionInfo"
                        }
                    ]
                }
            }
        },
        "CommonCatalogAttributeWithSearchIndex": {
            "description": "Информация об атрибуте с поисковым индексом",
            "type": "object",
            "properties": {
                "searchIndexId": {
                    "description": "Идентификатор поискового индекса, которому должно соответствовать значение атрибута",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "searchIndex": {
                    "description": "Индекс, используемый для полнотекстового поиска при заполнении атрибута",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "searchIndexes.yaml#/components/schemas/CommonSearchIndexInfo"
                        }
                    ],
                    "readOnly": true
                }
            }
        },
        "CommonCatalogAttributeWithMultipleValues": {
            "description": "Информация об атрибуте с множественным значением",
            "type": "object",
            "properties": {
                "isMultiple": {
                    "description": "Указывает, что атрибут может содержать несколько значений одновременно",
                    "type": "boolean"
                },
                "maxCntElement": {
                    "description": "Максимально допустимое количество элементов, которое возможно добавить в рамках атрибута",
                    "type": "integer",
                    "minimum": 1
                },
                "minCntElement": {
                    "description": "Минимальное количество элементов, которое должно быть добавлено в атрибут",
                    "type": "integer",
                    "minimum": 0
                }
            },
            "required": [
                "isMultiple"
            ]
        },
        "CommonCatalogAttribute": {
            "description": "Общая информация об атрибуте каталога",
            "type": "object",
            "properties": {
                "attribute": {
                    "readOnly": true,
                    "description": "Информация об атрибуте ЕХД",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "attributes.yaml#/components/schemas/CommonAttribute"
                        }
                    ]
                },
                "attrId": {
                    "writeOnly": true,
                    "description": "Идентификатор атрибута ЕХД",
                    "type": "integer"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "readOnly": true
                },
                "selectedAlterNameId": {
                    "description": "Идентификатор выбранного альтернативного наименования атрибута в каталоге",
                    "type": "integer"
                },
                "order": {
                    "description": "Порядковый номер атрибута в каталоге",
                    "type": "integer"
                },
                "isMain": {
                    "description": "Свойство, что атрибут считается главным при связывании с другими каталогами",
                    "type": "boolean"
                }
            },
            "required": [
                "attribute",
                "attrId",
                "catalogAttrId",
                "order",
                "isMain"
            ]
        },
        "RefCatalogAttributeInfo": {
            "description": "Общая информация об атрибуте каталога для ссылочных схем",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer"
                },
                "name": {
                    "description": "Русскоязычное наименование атрибута в каталоге",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "RefCatalogAttributeInfoWithAttrId": {
            "description": "Общая информация об атрибуте каталога для ссылочных схем",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор атрибута в ЕХД (attrId)."
                },
                "name": {
                    "type": "string",
                    "description": "Русскоязычное наименование атрибута в каталоге"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "RefCatalogInfo": {
            "description": "Общая информация о каталоге для ссылочных схем",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "name": {
                    "description": "Полное наименование каталога",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "CatalogRef": {
            "description": "Информация о связи каталога публикации с каталогом заполнения",
            "type": "object",
            "properties": {
                "fullName": {
                    "description": "Полное наименование каталога публикации",
                    "type": "string"
                },
                "technicalName": {
                    "description": "Техническое наименование каталога публикации",
                    "type": "string"
                },
                "shortName": {
                    "description": "Краткое наименование каталога публикации",
                    "type": "string"
                },
                "typeCatalogId": {
                    "description": "Идентификатор типа каталога публикации",
                    "type": "integer"
                },
                "kindCatalogId": {
                    "description": "Идентификатор вида каталога публикации",
                    "type": "integer"
                },
                "thematicCategoryId": {
                    "description": "Идентификатор тематической категории каталога публикации",
                    "type": "integer"
                },
                "defaultPriority": {
                    "$ref": "publicationCatalogs.yaml#/components/schemas/PublicationCatalogPriority"
                }
            },
            "required": [
                "publicationCatalogId",
                "fullName",
                "technicalName",
                "shortName",
                "typeCatalogId",
                "kindCatalogId",
                "thematicCategoryId",
                "defaultPriority"
            ]
        },
        "FillingCatalogObjectsStatusTagIdEnum": {
            "description": "Техническое название статуса данных каталога заполнения:\n  - `signed` - подписано,\n  - `unsigned` - не подписано,\n  - `archive` - архив.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "signed",
                        "unsigned",
                        "archive"
                    ]
                }
            ]
        },
        "FillingCatalogMetadataStatusTagIdEnum": {
            "description": "Техническое название статуса подписания метаданных каталога заполнения:\n  - `signed` - метаданные подписаны;\n  - `unsigned` - метаданные не подписаны;\n  - `archive` - архив.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "signed",
                        "unsigned",
                        "archive"
                    ]
                }
            ]
        },
        "FillingCatalogOperatingModeTagIdEnum": {
            "description": "Режим работы с объектом, при котором доступно изменение значений атрибута:\n  - `createObj` - только при создании,\n  - `updateObj` - при редактировании (в т.ч. создании),\n  - `deleteObj` - при удалении.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "createObj",
                        "updateObj",
                        "deleteObj"
                    ]
                }
            ]
        },
        "FillingCatalogListItem": {
            "description": "Элемент списка каталогов заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogListItem"
                }
            ],
            "properties": {
                "periodUpdate": {
                    "$ref": "#/components/schemas/CatalogPeriodUpdateNameEnum"
                },
                "systemsSuppliers": {
                    "description": "Системы-поставщики данных в каталог, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "dateLastSign": {
                    "description": "Дата последнего подписания всех объектов каталога или подписания отсутствия изменений в объектах.\nМожет отличаться от последней даты подписания из истории, так как в историю попадают записи с подписанием отдельных объектов.\nФормат даты: DD.MM.YYYY",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateFormat"
                        }
                    ]
                },
                "dateNextUpdate": {
                    "description": "Рассчитанная дата следующего подписания каталога, вычисленной на основе даты последней подписи и периодичности обновления.\nФормат даты: DD.MM.YYYY",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateFormat"
                        }
                    ]
                },
                "statusSignObjects": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/FillingCatalogObjectsStatusTagIdEnum"
                        }
                    ]
                },
                "statusSignMetadata": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/FillingCatalogMetadataStatusTagIdEnum"
                        }
                    ]
                },
                "countUnsignedObjects": {
                    "description": "Количество неподписанных объектов в каталоге. Считаются объекты со статусами:\n  - На изменении,\n  - На удалении,\n  - На восстановлении.",
                    "type": "integer"
                },
                "signatureInfo": {
                    "description": "Информация о подписании каталога, включающая дату последнего подписания и наименование подписанта",
                    "type": "string"
                },
                "countErrorObjects": {
                    "description": "Количество объектов каталога, имеющих статус \"Ошибка\"",
                    "type": "integer"
                },
                "countPublicationCatalogs": {
                    "description": "Число каталогов публикации, созданных на основе каталога заполнения",
                    "type": "integer"
                },
                "userPrivileges": {
                    "$ref": "users.yaml#/components/schemas/UserPrivilegeFill"
                }
            },
            "required": [
                "periodUpdate",
                "systemsSuppliers",
                "dateLastSign",
                "dataNextUpdate",
                "statusSignObjects",
                "statusSignMetadata",
                "countUnsignedObjects",
                "countErrorObj",
                "countPublicationCatalogs",
                "userPrivileges"
            ]
        },
        "FillingCatalogGeneralInfo": {
            "description": "Общая информация каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogGeneralInfo"
                }
            ],
            "properties": {
                "periodUpdate": {
                    "$ref": "#/components/schemas/FillingCatalogUpdatePeriodicity"
                },
                "systemsSuppliers": {
                    "description": "Системы-поставщики данных в каталог заполнения",
                    "type": "array",
                    "items": {
                        "$ref": "systems.yaml#/components/schemas/CommonSystemInfo"
                    },
                    "readOnly": true
                },
                "systemsSuppliersIds": {
                    "description": "Список идентификаторов систем поставщиков данных",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "writeOnly": true
                },
                "hasBackgroundCheck": {
                    "description": "Признак наличия в каталоге периодической фоновой проверки",
                    "type": "boolean"
                },
                "backgroundCheckPeriodTagId": {
                    "description": "Строковый идентификатор периода фоновой проверки",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/BasicCatalogPeriodUpdateTagIdEnum"
                        }
                    ],
                    "writeOnly": true
                },
                "backgroundCheckPeriod": {
                    "description": "Период фоновой проверки в каталоге",
                    "type": "object",
                    "properties": {
                        "name": {
                            "$ref": "#/components/schemas/BasicCatalogPeriodUpdateNameEnum"
                        },
                        "tagId": {
                            "$ref": "#/components/schemas/BasicCatalogPeriodUpdateTagIdEnum"
                        }
                    },
                    "readOnly": true
                },
                "backgroundCheckEmails": {
                    "description": "Список электронных почт получателей результатов фоновой проверки, перечисленные через запятую БЕЗ пробела",
                    "type": "string"
                },
                "isDeleteAllObjects": {
                    "description": "Признак \"Возможно одновременное удаление всех объектов\"",
                    "type": "boolean"
                },
                "isPriorityProcess": {
                    "description": "Признак \"Установить приоритет подписания данных\"",
                    "type": "boolean"
                },
                "outOivsBlockEditObjectsGUI": {
                    "description": "Поставщики информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "type": "array",
                    "items": {
                        "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                    },
                    "readOnly": true
                },
                "outOivsIdsBlockEditObjectsGUI": {
                    "description": "Список идентификаторов поставщиков информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "writeOnly": true
                },
                "isBlockEditObjectsService": {
                    "description": "Признак \"Заблокировать подписание данных (сервис)\"",
                    "type": "boolean"
                },
                "isBlockRestoreObjects": {
                    "description": "Признак \"Заблокировать восстановление данных\"",
                    "type": "boolean"
                },
                "isBlockSignObjectsGUI": {
                    "description": "Признак \"Заблокировать подписание данных (веб)\"",
                    "type": "boolean"
                },
                "isCopyObjects": {
                    "description": "Признак \"Возможно копирование объектов\"",
                    "type": "boolean"
                },
                "isBlockEditObjectsGUI": {
                    "description": "Признак \"Заблокировать редактирование данных (веб)\"",
                    "type": "boolean"
                }
            },
            "required": [
                "periodUpdate",
                "hasBackgroundCheck",
                "isDeleteAllObjects",
                "isPriorityProcess",
                "isBlockEditObjectsService",
                "isBlockRestoreObjects",
                "isBlockSignObjectsGUI",
                "accountingObject",
                "thematicCategoryId",
                "typeCatalogId",
                "oivsIds",
                "keywords",
                "isCopyObjects",
                "isBlockEditObjectsGUI"
            ]
        },
        "FillingCatalogMetadata": {
            "description": "Метаданные каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogMetadata"
                }
            ]
        },
        "CommonFillingCatalogAttribute": {
            "description": "Общая информация атрибута каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogAttribute"
                }
            ],
            "properties": {
                "isReq": {
                    "description": "Свойство обязательности атрибута",
                    "type": "boolean"
                },
                "isUniq": {
                    "description": "Свойство уникальности значения атрибута",
                    "type": "boolean"
                },
                "isUniqWithinParent": {
                    "description": "Признак, что уникальность значений атрибутов внутри табличного атрибута будет проверятся в рамках объекта-родителя.",
                    "type": "boolean",
                    "default": false
                },
                "isBanEdit": {
                    "description": "Свойство запрета на редактирование",
                    "type": "boolean"
                },
                "isSystemModify": {
                    "description": "Свойство, что значение атрибута изменяется системой",
                    "type": "boolean"
                },
                "objOperatingMode": {
                    "$ref": "#/components/schemas/FillingCatalogOperatingModeTagIdEnum"
                },
                "oivs": {
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "type": "array",
                    "items": {
                        "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                    },
                    "readOnly": true,
                    "minItems": 1
                },
                "oivsIds": {
                    "description": "Список идентификаторов ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "writeOnly": true,
                    "minItems": 1
                },
                "isManualInput": {
                    "description": "Настроено ли на этот атрибут заполнение значениями не из справочника (ручной ввод) в блоках Автозаполнения конструктора",
                    "type": "boolean",
                    "readOnly": true
                },
                "manualInputTargets": {
                    "description": "Массив атрибутов, значение которых зависит от заполнения данного атрибута при автозаполнении.\nОписываются в блоке `Автозаполнение` конструктора в массиве [[blocks.properties.mapping]].\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "readOnly": true,
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "attrId": {
                                "description": "Идентификатор атрибута в ЕХД",
                                "type": "integer"
                            },
                            "isDependent": {
                                "description": "Является ли атрибут зависимым в рамках ручного ввода",
                                "type": "boolean"
                            }
                        }
                    }
                },
                "manualInputSources": {
                    "description": "Массив идентификаторов атрибутов, от значения которых зависит значение данного атрибута при Автозаполнении.\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "readOnly": true,
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "required": [
                "isReq",
                "isUniq",
                "isUniqWithinParent",
                "isBanEdit",
                "isSystemModify",
                "objOperatingMode",
                "oivs",
                "oivsIds"
            ]
        },
        "StringFillingCatalogAttribute": {
            "description": "Строковый атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDefaultValue"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithFieldMask"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithSearchIndex"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithFieldRegex"
                }
            ],
            "properties": {
                "maxLength": {
                    "description": "Максимальная длина строкового значения",
                    "type": "integer"
                }
            },
            "required": [
                "maxLength"
            ]
        },
        "IntegerFillingCatalogAttribute": {
            "description": "Целочисленный атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDefaultValue"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithNumber"
                }
            ]
        },
        "FloatFillingCatalogAttribute": {
            "description": "Атрибут каталога заполнения с типом дробное число",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDefaultValue"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithNumber"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDecimalPart"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithFieldRegex"
                }
            ]
        },
        "DateFillingCatalogAttribute": {
            "description": "Атрибут каталога заполнения с типом дата (и время)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDefaultValue"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithTime"
                }
            ],
            "properties": {
                "fieldMask": {
                    "description": "Маска ввода, которой должно соответствовать значение атрибута. Справочная информация для SOAP. Варианты:\n  - dd.mm.yyyy hh24:mi:ss (для атрибута с настройкой \"Дата и время\"),\n  - dd.mm.yyyy.",
                    "type": "string",
                    "readOnly": true
                }
            }
        },
        "BooleanFillingCatalogAttribute": {
            "description": "Атрибут каталога заполнения с типом флаг",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithDefaultValue"
                }
            ]
        },
        "FileFillingCatalogAttribute": {
            "description": "Файловый атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithMultipleValues"
                }
            ]
        },
        "DictFillingCatalogAttribute": {
            "description": "Справочный атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithMultipleValues"
                },
                {
                    "properties": {
                        "attribute": {
                            "allOf": [
                                {
                                    "$ref": "attributes.yaml#/components/schemas/DictionaryAttribute"
                                }
                            ],
                            "readOnly": true
                        }
                    }
                }
            ],
            "properties": {
                "parentDictAttrId": {
                    "description": "Идентификатор справочного атрибута, который содержит элементы более высокого уровня иерархии. При заполнении атрибута будет ограничиваться список элементов, связанных с элементом родительского справочника.",
                    "type": "integer"
                },
                "refColDictTechName": {
                    "description": "Указывает значения какого атрибута будут использоваться для сопоставления с объектом справочника при загрузке данных через сервис.",
                    "type": "string",
                    "writeOnly": true
                },
                "refColDict": {
                    "description": "Атрибут справочника, который будет использоваться для сопоставления с объектом справочника при загрузке данных через сервис.",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/DictionaryColumn"
                        }
                    ],
                    "readOnly": true
                },
                "defaultColDictTechName": {
                    "description": "Позволяет выбрать атрибут справочника, который будет отображаться в каталоге. По умолчанию поле \"Наименование\".",
                    "type": "string",
                    "default": "name",
                    "writeOnly": true
                },
                "defaultColDict": {
                    "description": "Атрибут справочника, который будет отображаться в каталоге.",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/DictionaryColumn"
                        }
                    ],
                    "readOnly": true
                },
                "sort": {
                    "description": "Сортировка элементов справочника при заполнении атрибута",
                    "type": "string",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/SortingOrderTagIdEnum"
                        }
                    ]
                }
            },
            "required": [
                "refColDictTechName",
                "refColDict",
                "defaultColDictTechName",
                "defaultColDict",
                "sort"
            ]
        },
        "LinkFillingCatalogAttribute": {
            "description": "Ссылочный атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithMultipleValues"
                }
            ],
            "properties": {
                "refCatalog": {
                    "description": "Каталог заполнения, на объекты которого ссылается объект",
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                        "id": {
                            "description": "Идентификатор каталога",
                            "type": "integer"
                        },
                        "name": {
                            "description": "Полное наименование каталога",
                            "type": "string"
                        },
                        "mainAttrId": {
                            "description": "Идентификатор главного атрибута"
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "mainAttrId"
                    ]
                },
                "refCatalogId": {
                    "description": "Идентификатор каталога заполнения, на объекты которого ссылается объект",
                    "type": "integer",
                    "writeOnly": true
                },
                "refAttr": {
                    "description": "Атрибут ссылочного каталога, который используется для сопоставления с объектом каталога при загрузке данных через сервис",
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer",
                            "description": "Идентификатор атрибута в ЕХД, который содержится в атрибутивном составе ссылочного каталога"
                        },
                        "name": {
                            "type": "string",
                            "description": "Русскоязычное наименование атрибута в ссылочном каталоге"
                        }
                    },
                    "readOnly": true,
                    "required": [
                        "id",
                        "name"
                    ]
                },
                "refAttrId": {
                    "description": "Идентификатор атрибута ссылочного каталога в ЕХД, который используется для сопоставления с объектом каталога при загрузке данных через сервис",
                    "type": "integer",
                    "writeOnly": true
                },
                "isRefUnsignedObj": {
                    "description": "Указывает, что для выбора объекта каталога, на который ссылается объект, доступны новые неподписанные объекты",
                    "type": "boolean"
                }
            },
            "required": [
                "refCatalog",
                "refCatalogId",
                "isRefUnsignedObj"
            ]
        },
        "TableFillingCatalogAttribute": {
            "description": "Табличный атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/CommonCatalogAttributeWithMultipleValues"
                }
            ],
            "properties": {
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога, хранящего объекта для табличного атрибута.\nПри создании каталога передается отрицательное число - псевдоидентификатор, которое также можно указывать в других объектах в рамках первичного сохранения каталога.",
                    "type": "integer"
                },
                "attributes": {
                    "description": "Атрибутивный состав вложенного каталога (табличного атрибута)",
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/components/schemas/StringFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/IntegerFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/FloatFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/DateFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/BooleanFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/FileFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/DictFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/LinkFillingCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/TableFillingCatalogAttribute"
                            }
                        ]
                    },
                    "minItems": 1
                }
            },
            "required": [
                "childCatalogId",
                "attributes"
            ]
        },
        "FillingCatalogAttribute": {
            "description": "Атрибут каталога заполнения",
            "type": "object",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/StringFillingCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/DictFillingCatalogAttribute"
                },
            ]
        },
        "CommonFillingCatalogAttributeForValidation": {
            "description": "Основные свойства атрибута кататалога заполнения, необходимые для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "properties": {
                "techName": {
                    "description": "Техническое наименование атрибута.",
                    "type": "string"
                },
                "typeTagId": {
                    "$ref": "attributes.yaml#/components/schemas/AttributeTypeTagIdEnum"
                },
                "isSystemModify": {
                    "description": "Свойство, что значение атрибута изменяется системой.",
                    "type": "boolean"
                }
            },
            "required": [
                "techName",
                "typeTagId",
                "isSystemModify"
            ]
        },
        "DictFillingCatalogAttributeForValidation": {
            "description": "Свойства справочного атрибута кататалога заполнения, необходимые для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttributeForValidation"
                },
                {
                    "properties": {
                        "dictionaryId": {
                            "description": "Идентификатор справочника, который используется в справочном атрибуте",
                            "type": "integer"
                        }
                    },
                    "required": [
                        "dictionaryId"
                    ]
                }
            ]
        },
        "LinkFillingCatalogAttributeForValidation": {
            "description": "Свойства ссылочного атрибута кататалога заполнения, необходимые для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttributeForValidation"
                },
                {
                    "properties": {
                        "refCatalogId": {
                            "description": "Идентификатор каталога заполнения, на объекты которого будет ссылаться объект.",
                            "type": "integer"
                        }
                    },
                    "required": [
                        "refCatalogId"
                    ]
                }
            ]
        },
        "TableFillingCatalogAttributeForValidation": {
            "description": "Свойства табличного атрибута кататалога заполнения, необходимые для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttributeForValidation"
                },
                {
                    "properties": {
                        "attributes": {
                            "description": "Атрибутивный состав вложенного каталога (табличного атрибута)",
                            "type": "array",
                            "items": {
                                "oneOf": [
                                    {
                                        "$ref": "#/components/schemas/CommonFillingCatalogAttributeForValidation"
                                    },
                                    {
                                        "$ref": "#/components/schemas/DictFillingCatalogAttributeForValidation"
                                    },
                                    {
                                        "$ref": "#/components/schemas/LinkFillingCatalogAttributeForValidation"
                                    },
                                    {
                                        "$ref": "#/components/schemas/TableFillingCatalogAttributeForValidation"
                                    }
                                ]
                            }
                        }
                    },
                    "required": [
                        "attributes"
                    ]
                }
            ]
        },
        "FillingCatalogAttributeForValidation": {
            "description": "Атрибут кататалога заполнения с набором свойств, необходимых для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/CommonFillingCatalogAttributeForValidation"
                },
                {
                    "$ref": "#/components/schemas/DictFillingCatalogAttributeForValidation"
                },
                {
                    "$ref": "#/components/schemas/LinkFillingCatalogAttributeForValidation"
                },
                {
                    "$ref": "#/components/schemas/TableFillingCatalogAttributeForValidation"
                }
            ]
        },
        "FillingCatalogGroupUniq": {
            "description": "Настройки групповой уникальности",
            "type": "object",
            "properties": {
                "tomlFormat": {
                    "description": "Настройка групповой уникальности, описанная пользователем в формате TOML. Передаётся в качестве строки с экранированием символов.",
                    "type": "string"
                },
                "jsonFormat": {
                    "description": "Настройка групповой уникальности, преобразованная из формата TOML в JSON. Необходима для обработки на стороне клиента для реализации доп. функций, помогающих пользователю при создании настройки.",
                    "readOnly": true,
                    "type": "object",
                    "properties": {
                        "groups": {
                            "description": "Массив групп атрибутов",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "groupTechName": {
                                        "description": "Технологическое наименование группы атрибутов. Должно быть уникально в рамках групп одного каталога.",
                                        "allOf": [
                                            {
                                                "$ref": "_common.yaml#/components/schemas/TechNameFormat"
                                            }
                                        ]
                                    },
                                    "groupName": {
                                        "description": "Пользовательское наименование группы атрибутов.",
                                        "type": "string"
                                    },
                                    "applyTableAttr": {
                                        "description": "Группа атрибутов настраивается из табличного атрибута и применяется ко всему вложенному каталогу. Указывается табличный атрибут в формате attr.{TableTechName1}.{TableTechName11}.{TableTechName111}.{и т.д.}. То есть указывается вся последовательность табличных атрибутов от корня до того, для которого настраивается группа.\n\nЕсли передано данное поле, то в описании блоков могут использоваться только атрибуты внутри указанной таблицы.",
                                        "type": "string"
                                    },
                                    "attributes": {
                                        "description": "Массив атрибутов, входящих в группу. Указываются в формате attr.{techNameAttr}",
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        },
                                        "minItems": 1
                                    },
                                    "condition": {
                                        "description": "Условие, описанное в синтаксисе условий конструктора проверок. Доступны все типы атрибутов каталога, включая системные.",
                                        "type": "string"
                                    }
                                },
                                "minItems": 1,
                                "required": [
                                    "groupTechName",
                                    "attributes"
                                ]
                            }
                        }
                    },
                    "required": [
                        "groups"
                    ]
                }
            },
            "required": [
                "tomlFormat",
                "jsonFormat"
            ]
        },
        "FillingCatalogSettings": {
            "description": "Настройки каталога заполнения",
            "type": "object",
            "properties": {
                "generalInfo": {
                    "description": "Настройки вкладки \"Общая информация\" каталога заполнения",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/FillingCatalogGeneralInfo"
                        }
                    ]
                },
                "attributes": {
                    "description": "Настройки вкладки \"Атрибуты\" каталога заполнения",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FillingCatalogAttribute"
                    },
                    "minItems": 1
                },
                "meta": {
                    "description": "Настройки вкладки \"Метаданные\" каталога заполнения",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/FillingCatalogMetadata"
                        }
                    ]
                },
                "constructor": {
                    "description": "Настройки конструктора процессов. Представляет собой массив пакетов.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/ConstructorPackageData"
                    }
                },
                "conditionalUniq": {
                    "description": "Настройки условной уникальности. Передаётся строка с условием, которое описано в формате условий, используемом в конструкторе процессов.",
                    "type": "string"
                },
                "groupUniq": {
                    "description": "Настройка групповой уникальности, описанная пользователем в формате TOML. Передаётся в качестве строки с экранированием символов.",
                    "type": "string"
                },
                "map": {
                    "$ref": "#/components/schemas/FillingCatalogMap"
                }
            },
            "required": [
                "generalInfo",
                "attributes",
                "map"
            ]
        },
        "FillingCatalogAttributeConstructorEditProperties": {
            "description": "Свойства редактирования атрибута из конструктора проверок",
            "type": "object",
            "readOnly": true,
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "isManualInput": {
                    "description": "Возможен ли ручной ввод атрибута.\nОписывается в блоке \"Автозаполнение\".\n\nЗначение определяется на основе поля `valueNotFromDict` в блоке конструктора процессов.",
                    "type": "boolean"
                },
                "dependencies": {
                    "description": "Идентификаторы атрибутов, значения которых зависят от заполнения данного атрибута.\nОписываются в блоке `Автозаполнение`.",
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "required": [
                "attrId",
                "catalogId",
                "isManualInput",
                "dependencies"
            ]
        },
        "FillingCatalogMap": {
            "description": "Настройки карты каталога заполнения",
            "type": "object",
            "properties": {
                "hasGeo": {
                    "description": "Наличие геопривязки в каталоге",
                    "type": "boolean",
                    "default": false
                },
                "typeGeoTagIds": {
                    "description": "Массив строковых идентификаторов типов геометрии",
                    "type": "array",
                    "items": {
                        "$ref": "geodata.yaml#/components/schemas/GeojsonGeoTypeTagIdEnum"
                    }
                },
                "isWGS84": {
                    "description": "Система координат (СК), в которой хранятся геоданные объектов каталога. Если принимает значение\n  - true, то СК - WGS84\n  - false, то СК - MSK77",
                    "type": "boolean"
                },
                "isReq": {
                    "description": "Обязательность геопривязки",
                    "type": "boolean"
                },
                "isOneTypeGeoForObj": {
                    "description": "Признак, указывающий, что объект может иметь только один тип геометрии",
                    "type": "boolean"
                },
                "isNotReqGeoForService": {
                    "description": "Необязательность геометрии при загрузке через сервис",
                    "type": "boolean"
                }
            },
            "required": [
                "hasGeo"
            ]
        },
        "CommonCatalogMap": {
            "description": "Общие настройки карты для каталогов",
            "type": "object",
            "properties": {
                "hasGeo": {
                    "description": "Наличие геопривязки в каталоге",
                    "type": "boolean",
                    "default": false
                },
                "typeGeoIds": {
                    "description": "Массив идентификаторов типов геометрии",
                    "type": "array",
                    "items": {
                        "$ref": "geodata.yaml#/components/schemas/GeojsonGeoTypeTagIdEnum"
                    },
                    "writeOnly": true
                },
                "typeGeo": {
                    "description": "Массив типов геометрии",
                    "type": "array",
                    "items": {
                        "$ref": "geodata.yaml#/components/schemas/GeoType"
                    },
                    "readOnly": true
                }
            },
            "required": [
                "hasGeo"
            ]
        },
        "ConstructorPackageEventEnum": {
            "description": "Событие, при котором запускается процесс, описанный в конструкторе. Может принимать значения:\n  - change - изменение объекта, включая создание\n  - create - создание объекта,\n  - delete - удаление объекта.",
            "type": "string",
            "enum": [
                "create",
                "change",
                "delete"
            ]
        },
        "ConstructorPackageModeEnum": {
            "description": "Режим работы процесса. Может принимать значения:\n  - event - событие,\n  - backgroung - фоновый процесс,\n  - eventAndBackground - событие и фоновый процесс,\n  - off - отключён.\nЗначение off является приоритетным над остальными. Если указано в массиве, то считается, что процесс отключен и не будет выполняться.",
            "type": "string",
            "enum": [
                "off",
                "event",
                "background",
                "eventAndBackground"
            ]
        },
        "ConstructorBlockTypeEnum": {
            "description": "Тип блока конструктора. Возможные значения:\n  - package - пакет,\n  - condition - условие,\n  - notice - уведомление,\n  - email - письмо на электронную почту,\n  - autochange - автоизменение,\n  - autofill - автозаполнение.",
            "type": "string",
            "enum": [
                "package",
                "condition",
                "notice",
                "email",
                "autochange",
                "autofill"
            ]
        },
        "ConstructorBlockPackage": {
            "description": "Настройки для блока \"Пакет\"",
            "type": "object",
            "properties": {
                "packTechName": {
                    "description": "Технологическое наименование пакета, который должен выполниться в данном блоке.",
                    "type": "string"
                }
            }
        },
        "ConstructorBlockCondition": {
            "description": "Настройки для блока \"Условие\"",
            "type": "object",
            "properties": {
                "condition": {
                    "description": "Условие проверки значений атрибутов. Cинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "type": "string"
                },
                "uniqAttr": {
                    "description": "Технологическое наименование атрибута каталога, для которого будет производиться проверка уникальности в рамках исполнения блока.\nАтрибут прописывается как и в настройках условий - attr.{techName}\nМожно указать атрибуты всех типов данных, кроме типов: таблица, файл, флаг. Указывается непосредственно корневой атрибут.",
                    "type": "string"
                }
            }
        },
        "ConstructorBlockNotice": {
            "description": "Настройки для блока \"Уведомление\"",
            "type": "object",
            "properties": {
                "message": {
                    "description": "В блоке \"notice\":\nТекст уведомления, который должен получить пользователь/система при работе с объектом каталога.",
                    "type": "string"
                }
            }
        },
        "ConstructorBlockEmail": {
            "description": "Настройки для блока \"E-mail\"",
            "type": "object",
            "properties": {
                "message": {
                    "description": "Текст письма, который должен быть отправлен на указанный адрес электронной почты при выполнении блока.",
                    "type": "string"
                },
                "email": {
                    "description": "Адрес электронной почты, на который должно быть отправлено письмо при выполнении блока.",
                    "type": "string"
                }
            }
        },
        "ConstructorBlockAutochange": {
            "description": "Настройки для блока \"Автоизменение\"",
            "type": "object",
            "properties": {
                "condition": {
                    "description": "Условие при выполнении, которого будет происходит заполнение атрибутов. В условии можно использовать атрибуты любого типа, включая системные.\nCинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "type": "string"
                },
                "markObjDelete": {
                    "description": "Позволяет после изменения значений в атрибутах пометить объект как удаленный.\nДанное свойство может быть true, только в случае, если в режиме работы пакета указан фоновый процесс event = \"background\".",
                    "type": "boolean"
                },
                "mapping": {
                    "description": "Список сопоставления атрибутов каталога и значений, которые должны подставиться в рамках выполнения автоизменения.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "catalogAttr": {
                                "description": "Атрибут каталога, которому необходимо присвоить значение автоизменением.\nУказывается в формате attr.{techName}\nВозможно указать все типы атрибутов, кроме: файл, ссылка на объект, таблица.",
                                "type": "string"
                            },
                            "value": {
                                "description": "Значение, которое будет подставляться в указанный атрибут.\nДоступен ввод конкретного значения в формате строки. Если в catalogAttr указан атрибут с типом:\n- \"Строка\", \"Целое число\", \"Дробное число\", \"Дата\", то в value указывается значение в кавычках, далее на стороне сервиса эти значения будут преобразованы к типу данных атрибута.\n- \"Флаг\", то в value указывается значение в кавычках 1 или 0, true или false.\n- \"Справочник\", то в value передаётся в кавычках идентификатор значения из справочника этого атрибута.\nТакже для всех вышеперечисленных типов атрибутов можно указать в value функцию, описанную в пакете, в виде func.{tagId}",
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },
        "ConstructorBlockAutofill": {
            "description": "Настройки для блока \"Автозаполнение\"",
            "type": "object",
            "properties": {
                "refValue": {
                    "description": "Значение для сопоставления со справочником",
                    "type": "string"
                },
                "dictId": {
                    "description": "Идентификатор справочника, с которым сопоставляется значение",
                    "type": "integer"
                },
                "dictAttr": {
                    "description": "Столбец справочника, по которому производится сопоставление в формате dictAttr.{techName}",
                    "type": "string"
                },
                "caseSensitive": {
                    "description": "Учитывать ли регистр значения при сопоставлении со справочником\n\nЕсли не указан, то сравнение выполняется без учета регистра",
                    "type": "boolean"
                },
                "allowManualInput": {
                    "description": "Признак позволяющий пользователю при работе с объектам указывать значение не из справочника, для атрибута, который участвует в сопоставлении со справочным.",
                    "type": "boolean"
                },
                "mapping": {
                    "description": "Список сопоставления атрибутов каталога и атрибутов справочника.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "catalogAttr": {
                                "description": "Атрибут каталога, которому необходимо присвоить значение автозаполнением.\nУказывается в формате attr.{techName}\nВозможно указать только атрибуты, имеющие свойство \"Изменяемый системой\" (isSystemModify: true).\nТакими атрибутами могут быть все типы атрибутов, кроме: файл, таблица.",
                                "type": "string"
                            },
                            "value": {
                                "description": "Атрибут справочника, из которого необходимо использовать значение для автозаполнения.\nУказывается в формате dictAttr.{techName}",
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },
        "ConstructorPackageCommonInfo": {
            "description": "Общаяя информация о пакете конструктора процессов",
            "type": "object",
            "properties": {
                "packName": {
                    "description": "Название пакета",
                    "type": "string"
                },
                "packTechName": {
                    "description": "Технологическое наименование пакета. Должно быть уникально в рамках каталога.",
                    "type": "string"
                },
                "isMain": {
                    "description": "Признак главного процесса. Если для каталога настраивается конструктор, то обязательно должен быть только 1 файл со значением true. С файла со свойством isMain: true начинается обработка описанного процесса.",
                    "type": "boolean"
                },
                "event": {
                    "$ref": "#/components/schemas/ConstructorPackageEventEnum"
                },
                "applyTableAttr": {
                    "description": "Применить процесс пакета к объектам табличного атрибута. Указывается табличный атрибут в формате attr.{TableTechName1}.{TableTechName11}.{TableTechName111}.{и т.д.}. То есть указывается вся последовательность табличных атрибутов от корня до того, для которого настраивается пакет.\nЕсли передано данное поле, то в описании блоков могут использоваться только атрибуты внутри указанной таблицы.",
                    "type": "string"
                }
            },
            "required": [
                "packTechName",
                "event",
                "isMain"
            ]
        },
        "ConstructorPackage": {
            "description": "Пакет конструктора процессов",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ConstructorPackageCommonInfo"
                }
            ],
            "properties": {
                "mode": {
                    "$ref": "#/components/schemas/ConstructorPackageModeEnum"
                },
                "blocks": {
                    "description": "Массив блоков конструктора. Каждый блок представляет набор общих свойств и дополнительных настроек в зависимости от типа блока.\nБлок \"START\" явно не указывается. Процесс начинается с блока идущего первым в массиве.\nБлок \"END\" явно не указывается, но чтобы сослаться на него необходимо указать идентификатор \"end\".\nЕсли блок не ссылается на другие блоки, например \"Уведомление\", то в ссылках указывается пустая строка \"\".",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "tagId": {
                                "description": "Строковый идентификатор блока конструктора. Должен быть уникален в рамках пакета каталога.",
                                "type": "string"
                            },
                            "type": {
                                "$ref": "#/components/schemas/ConstructorBlockTypeEnum"
                            },
                            "name": {
                                "description": "Наименование блока.",
                                "type": "string"
                            },
                            "trueBlockTagId": {
                                "description": "Идентификатор блока, который должен обрабатываться следующим в случае истинности условия/корректной обработки блока.",
                                "type": "string"
                            },
                            "falseBlockTagId": {
                                "description": "Идентификатор блока, который должен обрабатываться следующим в случае ложности условия/некорректной обработки блока.",
                                "type": "string"
                            },
                            "properties": {
                                "description": "Набор дополнительных свойств блока, зависящих от типа блока.",
                                "type": "object",
                                "oneOf": [
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockPackage"
                                    },
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockCondition"
                                    },
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockNotice"
                                    },
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockEmail"
                                    },
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockAutochange"
                                    },
                                    {
                                        "$ref": "#/components/schemas/ConstructorBlockAutofill"
                                    }
                                ]
                            }
                        },
                        "required": [
                            "tagId",
                            "name",
                            "type",
                            "trueBlockTagId",
                            "falseBlockTagId",
                            "properties"
                        ]
                    }
                },
                "functions": {
                    "description": "Массив функций, которые используются в рамках пакета.",
                    "type": "array",
                    "items": {
                        "properties": {
                            "tagId": {
                                "description": "Строковый идентификатор функции. Должен быть уникален в рамках пакета.",
                                "type": "string"
                            },
                            "outputType": {
                                "description": "Выходной тип данных функции. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                                "type": "string",
                                "enum": [
                                    "string",
                                    "number",
                                    "date"
                                ]
                            },
                            "func": {
                                "description": "Тело функции. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                                "type": "string"
                            },
                            "varables": {
                                "description": "Массив функций, которые будут использоваться в основной функции в качестве переменных.\nПри описании функций важен их порядок в массиве. Функцию-переменную F1 можно использовать в другой функции-переменной F2, если F1 описана раньше чем F2.",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "tagId": {
                                            "description": "Строковый идентификатор функции-переменной. Должен быть уникален в рамках пакета.",
                                            "type": "string"
                                        },
                                        "outputType": {
                                            "description": "Выходной тип данных функции-переменной. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                                            "type": "string",
                                            "enum": [
                                                "string",
                                                "number",
                                                "date"
                                            ]
                                        },
                                        "func": {
                                            "description": "Тело функции-переменной. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "tagId",
                                        "outputType",
                                        "func"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "tagId",
                            "outputType",
                            "func"
                        ]
                    }
                }
            },
            "required": [
                "mode",
                "blocks"
            ]
        },
        "ConstructorPackageData": {
            "description": "Данные одного пакета конструктора процессов.",
            "type": "object",
            "properties": {
                "tomlFormat": {
                    "description": "Настройка одного пакета конструктора процессов, описанная пользователем в формате TOML.\nПередаётся в качестве строки с экранированием символов.",
                    "type": "string"
                },
                "jsonFormat": {
                    "description": "Настройка одного пакета конструктора процессов, преобразованная из формата TOML в JSON.\nНеобходима для обработки на стороне клиента для реализации доп. функций, помогающих пользователю при создании настройки.",
                    "readOnly": true,
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ConstructorPackage"
                        }
                    ]
                }
            },
            "required": [
                "tomlFormat",
                "jsonFormat"
            ]
        },
        "ConstructorValidationError": {
            "type": "object",
            "properties": {
                "packTechName": {
                    "description": "Технологическое наименование пакета, в котором были обнаружены ошибки.",
                    "type": "string"
                },
                "errors": {
                    "description": "Массив найденных ошибок.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "blockTagId": {
                                "description": "Строковый идентификатор блока конструктора, в котором обнаружена ошибка. Если ошибка не относится к конкретному блоку, то указывается null.",
                                "type": "string"
                            },
                            "blockType": {
                                "description": "Тип блока конструктора, в котором обнаружена ошибка. Указывается только для ошибок обнаруженных в блоках.",
                                "type": "string"
                            },
                            "functionTagId": {
                                "description": "Строковый идентификатор функции из блока [[functions]], в которой обнаружена ошибка. Указывается только для ошибок, обнаруженных в функциях.",
                                "type": "string"
                            },
                            "message": {
                                "description": "Описание найденной ошибки.",
                                "type": "string",
                                "enum": [
                                    "Недопустимое выражение '{expression}'.",
                                    "Найдено {symbol/expression}. Ожидалось {symbol/expression}.",
                                    "Поле {parameterName} должно принимать одно из перечисленных значений: {enumLiterals}.",
                                    "Не найдено или не заполнено обязательное поле {fieldName}.",
                                    "Указано значение с некорректным типом данных. Ожидалось {type}.",
                                    "Не найден пакет с настройкой главного процесса, где isMain: true.",
                                    "Указан packTechName несуществующего пакета.",
                                    "Настройка главного процесса невозможна в нескольких пакетах.",
                                    "Не найдено окончание процесса 'end'.",
                                    "'falseBlockId' может принимать значение только в настройках блока 'Условие'.",
                                    "Указан tagId несуществующего блока.",
                                    "Значение packTechName должно быть уникальным в рамках настроек конструктора процесса текущего каталога.",
                                    "Значение tagId должно быть уникальным в рамках настроек текущего пакета конструктора процесса.",
                                    "В каталоге отсутсвует указанный атрибут attr.{techName}.",
                                    "Не найдена указанная функция func.{tagId}",
                                    "Передан некорректный набор входных параметров в {operator/function}",
                                    "Свойство markObjDelete может быть true, только в случае, если в режиме работы пакета указан фоновый процесс mode = 'background'.",
                                    "Атрибут с типом {type} недоступен для сопоставления в данном блоке.",
                                    "Невозможно преобразовать значение - {value} к типу {type}",
                                    "Атрибут attr.{techName} должен иметь признак 'Изменяемый системой', чтобы использоваться в блоке автозаполнения",
                                    "Ошибка при обходе блоков конструктора. Обнаружен бесконечный цикл, начинающийся с блока {tagId}.",
                                    "Не найден справочник с идентификатором {dictId}.",
                                    "Не найден элемент справочника {elementId} в справочнике {dictId}.",
                                    "Не найден каталог с идентификатором {catalogId}.",
                                    "Не найдено регулярное выражение с идентификатором {regexpId}.",
                                    "В поле {parameterName} передано некорректное значение. Ожидается {понятное описание что ожидалось}.",
                                    "Атрибут с типом {type} недоступен для оператора {operator}",
                                    "В справочнике отсутсвует указанный атрибут attr.{dictTechName}.{columnTechName}/dictAttr.{techName}",
                                    "Невозможно использовать ручной ввод в автозаполнении, где в сопоставлении указана функция."
                                ]
                            }
                        },
                        "required": [
                            "message"
                        ]
                    }
                }
            }
        },
        "CatalogPackageInfo": {
            "description": "Информация о каталоге и конструкторе процессов, в котором используется сущность (справочник, регулярное выражение, каталог заполнения и пр.)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "packName": {
                    "description": "Название пакета",
                    "type": "integer",
                    "format": "int32"
                },
                "packTechName": {
                    "description": "Технологическое наименование пакета",
                    "type": "string"
                }
            },
            "required": [
                "packName",
                "packTechName"
            ]
        },
        "CatalogUniqInfo": {
            "description": "Информация о каталоге и настройках уникальности, в котором используется сущность (справочник, регулярное выражение, каталог заполнения)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "packTechName": {
                    "description": "Технологическое наименование уникальности",
                    "type": "string"
                },
                "uniqTypeTag": {
                    "description": "Технологическое наименование пакета:\n\n- `conditional` - условная уникальность\n- `group` - групповая уникальность",
                    "type": "string",
                    "enum": [
                        "conditional",
                        "group"
                    ]
                }
            },
            "required": [
                "packTechName",
                "uniqTypeTag"
            ]
        },
        "ConditionalUniqValidationError": {
            "type": "object",
            "properties": {
                "code": {
                    "description": "HTTP-код ошибки",
                    "type": "integer",
                    "format": "int32",
                    "example": 400
                },
                "messageType": {
                    "description": "Тип ответа",
                    "type": "string",
                    "example": "Bad request"
                },
                "errors": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "Недопустимое выражение '{expression}'.",
                            "Найдено {symbol/expression}. Ожидалось {symbol/expression}.",
                            "В каталоге отсутсвует указанный атрибут attr.{techName}.",
                            "Указано значение с некорректным типом данных. Ожидалось {type}.",
                            "Передан некорректный набор входных параметров в {operator}.",
                            "Не найден справочник с идентификатором {dictId}.",
                            "Не найден элемент справочника {elementId} в справочнике {dictId}.",
                            "Атрибут с типом {type} недоступен для оператора {operator}.",
                            "Не найден каталог с идентификатором {catalogId}.",
                            "Не найдено регулярное выражение с идентификатором {regexpId}.",
                            "В справочнике отсутсвует указанный атрибут attr.{dictTechName}.{columnTechName}/dictAttr.{techName}"
                        ]
                    }
                }
            },
            "required": [
                "code",
                "messageType",
                "errors"
            ]
        },
        "GroupUniqValidationError": {
            "type": "object",
            "properties": {
                "groupTechName": {
                    "type": "string"
                },
                "errors": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "Недопустимое выражение '{expression}'.",
                            "Найдено {symbol/expression}. Ожидалось {symbol/expression}.",
                            "В каталоге отсутсвует указанный атрибут attr.{techName}.",
                            "Указано значение с некорректным типом данных. Ожидалось {type}.",
                            "Передан некорректный набор входных параметров в {operator}.",
                            "Не заполнено обязательное поле {fieldName}.",
                            "Значение groupTechName должно быть уникальным в рамках настроек групповой уникальности текущего каталога.",
                            "Не найден справочник с идентификатором {dictId}.",
                            "Не найден элемент справочника {elementId} в справочнике {dictId}.",
                            "Атрибут с типом {type} недоступен для оператора {operator}.",
                            "Не найден каталог с идентификатором {catalogId}.",
                            "Не найдено регулярное выражение с идентификатором {regexpId}.",
                            "В справочнике отсутсвует указанный атрибут attr.{dictTechName}.{columnTechName}/dictAttr.{techName}"
                        ]
                    }
                }
            }
        },
        "CommonUserInfo": {
            "description": "Общая информация о пользователе",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор пользователя",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "login": {
                    "description": "Логин пользователя",
                    "type": "string"
                },
                "lastName": {
                    "description": "Фамилия",
                    "type": "string"
                },
                "firstName": {
                    "description": "Имя",
                    "type": "string"
                },
                "pathroName": {
                    "description": "Отчество",
                    "type": "string"
                },
                "email": {
                    "description": "E-mail",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "login",
                "lastName",
                "email"
            ]
        },
        "UserListItem": {
            "description": "Информация о пользователе в списке пользователей",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonUserInfo"
                }
            ],
            "properties": {
                "userGroupName": {
                    "$ref": "#/components/schemas/UserGroupNameEnum"
                },
                "privilegeFillText": {
                    "description": "Список привилегий каталогов заполнения/групп каталогов (кириллицей), которые доступны пользователю",
                    "type": "string",
                    "readOnly": true
                },
                "privilegePublText": {
                    "description": "Список привилегий каталогов публикации (кириллицей), которые доступны пользователю",
                    "type": "string",
                    "readOnly": true
                },
                "hasSpecialRoles": {
                    "description": "Наличие назначенных спецролей пользователя для конкретных каталогов",
                    "type": "boolean"
                },
                "mailingStatusName": {
                    "$ref": "#/components/schemas/MailingStatusNameEnum"
                },
                "oiv": {
                    "description": "Информация об организации, в которую входит пользователь",
                    "allOf": [
                        {
                            "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                        }
                    ]
                },
                "isTemporary": {
                    "description": "Признак временного пользователя",
                    "type": "boolean"
                },
                "dateEnd": {
                    "description": "Дата окончания действия временной учетной записи пользователя",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateFormat"
                        }
                    ]
                },
                "status": {
                    "$ref": "#/components/schemas/UserStatus"
                },
                "isSudir": {
                    "type": "boolean"
                }
            },
            "required": [
                "userGroupName",
                "privilegeFillText",
                "privilegePublText",
                "hasSpecialRoles",
                "isGetEmailName",
                "oiv",
                "isEnabled",
                "isDeleted"
            ]
        },
        "User": {
            "description": "Пользователь",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonUserInfo"
                }
            ],
            "properties": {
                "phone": {
                    "description": "Номер телефона",
                    "type": "string"
                },
                "position": {
                    "description": "Должность",
                    "type": "string"
                },
                "oiv": {
                    "allOf": [
                        {
                            "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                        }
                    ],
                    "readOnly": true
                },
                "oivId": {
                    "description": "Идентификатор ОИВ",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "userGroupTagId": {
                    "description": "TagId группы пользователей",
                    "type": "string",
                    "writeOnly": true
                },
                "userGroup": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/UserGroup"
                        }
                    ],
                    "readOnly": true
                },
                "privilegeFill": {
                    "$ref": "#/components/schemas/UserPrivilegeFill",
                    "readOnly": false
                },
                "privilegePubl": {
                    "$ref": "#/components/schemas/UserPrivilegePubl",
                    "readOnly": false
                },
                "menuIds": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "isTemporary": {
                    "description": "Признак временного пользователя",
                    "type": "boolean"
                },
                "dateEnd": {
                    "description": "Дата окончания действия временной учетной записи пользователя. При isTemporary=true dateEnd обязательна",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateFormat"
                        }
                    ]
                }
            },
            "required": [
                "oivId",
                "oiv",
                "userGroupTagId",
                "userGroup",
                "privilegeFill",
                "privilegePubl",
                "menuIds",
                "isTemporary"
            ]
        },
        "UserAdmin": {
            "description": "Администратор",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonUserInfo"
                }
            ],
            "properties": {
                "phone": {
                    "description": "Номер телефона",
                    "type": "string"
                },
                "position": {
                    "description": "Должность",
                    "type": "string"
                }
            },
            "required": [
                "lastName",
                "firstName",
                "pathroName"
            ]
        },
        "SpecPrivilege": {
            "type": "object",
            "description": "Базовая информация о спецпривилегиях на каталог/группу каталогов",
            "properties": {
                "entityId": {
                    "description": "Идентификатор каталога или группы каталогов",
                    "type": "integer"
                },
                "entityName": {
                    "description": "Наименование сущности",
                    "type": "string",
                    "readOnly": true
                },
                "entityType": {
                    "description": "Тип сущности",
                    "type": "string",
                    "enum": [
                        "fillingCatalog",
                        "publicationCatalog",
                        "catalogGroup"
                    ]
                },
                "privilege": {
                    "description": "Привилегии каталогов и групп каталогов",
                    "type": "object",
                    "oneOf": [
                        {
                            "$ref": "#/components/schemas/UserPrivilegeFill"
                        },
                        {
                            "$ref": "#/components/schemas/UserPrivilegePubl"
                        }
                    ]
                }
            },
            "required": [
                "entityId",
                "entityType",
                "privileges"
            ]
        },
        "SpecPrivilegeInfo": {
            "description": "Полная информация о спецпривилегии",
            "allOf": [
                {
                    "$ref": "#/components/schemas/SpecPrivilege"
                }
            ],
            "properties": {
                "id": {
                    "description": "Идентификатор записи о спецпривилегии",
                    "type": "integer"
                }
            },
            "required": [
                "id"
            ]
        },
        "CommonUserGroupInfo": {
            "description": "Общая информация о группе пользователя",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор группы пользователей",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/UserGroupNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/UserGroupTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "UserGroup": {
            "description": "Группа пользователей",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonUserGroupInfo"
                }
            ],
            "properties": {
                "excp_catalog": {
                    "description": "Массив идентификаторов каталогов-исключений",
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "readOnly": true
                    }
                },
                "super_catalog": {
                    "description": "Массив идентификаторов каталогов-исключений",
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "readOnly": true
                    }
                }
            },
            "required": [
                "excp_catalog",
                "super_catalog"
            ]
        },
        "UserGroupNameEnum": {
            "description": "Наименование группы пользователей",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "UserGroupTagIdEnum": {
            "description": "Техническое наименование группы пользователей",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "superUser",
                        "userOiv",
                        "apparat",
                        "viewAll",
                        "guest"
                    ]
                }
            ]
        },
        "UserPrivilege": {
            "description": "Привилегии пользователей      ",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор группы пользователей",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/UserPrivilegeNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/UserPrivilegeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "UserPrivilegeNameEnum": {
            "description": "Наименование привилегии пользователей",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "Просмотр",
                        "Экспорт",
                        "Редактирование",
                        "Подписание",
                        "Импорт",
                        "Редактирование метаданных",
                        "Публикация объектов"
                    ]
                }
            ]
        },
        "UserPrivilegeTagIdEnum": {
            "description": "Техническое наименование привилегии пользователей",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "canView",
                        "canExport",
                        "canEdit",
                        "canSign",
                        "canImport",
                        "canEditMeta",
                        "canPubl"
                    ]
                }
            ]
        },
        "Menu": {
            "description": "Пункты меню, доступные пользователям. Меню содержит два уровня.",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор пункта меню",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/MenuNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/MenuTagIdEnum"
                },
                "children": {
                    "description": "Массив дочерних пунктов меню в формате json",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "description": "Идентификатор пункта меню",
                                "type": "integer",
                                "format": "int32"
                            },
                            "name": {
                                "$ref": "#/components/schemas/MenuNameEnum"
                            },
                            "tagId": {
                                "$ref": "#/components/schemas/MenuTagIdEnum"
                            }
                        }
                    }
                }
            },
            "required": [
                "id",
                "name",
                "tagId",
                "children"
            ]
        },
        "MenuNameEnum": {
            "description": "Наименование пункта меню",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "MenuTagIdEnum": {
            "description": "Техническое наименование пункта меню",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "catalogs",
                        "control",
                        "object-categories",
                        "attributes",
                        "dictionaries",
                        "publication-queue",
                        "regexps",
                        "search-indexes",
                        "thematic-categories",
                        "information-systems",
                        "group-catalogs",
                        "users",
                        "pushsubs"
                    ]
                }
            ]
        },
        "CommonPrivilege": {
            "description": "Привилегии каталогов заполнения, публикации групп каталогов      ",
            "properties": {
                "canView": {
                    "description": "Просмотр",
                    "type": "boolean"
                },
                "canExport": {
                    "description": "Экспорт",
                    "type": "boolean"
                },
                "canEditMeta": {
                    "description": "Редактирование метаданных",
                    "type": "boolean"
                }
            },
            "required": [
                "canView",
                "canExport",
                "canEditMeta"
            ]
        },
        "UserPrivilegeFill": {
            "description": "Привилегии каталогов заполнения и групп каталогов",
            "type": "object",
            "properties": {
                "canView": {
                    "description": "Просмотр",
                    "type": "boolean"
                },
                "canExport": {
                    "description": "Экспорт",
                    "type": "boolean"
                },
                "canEditMeta": {
                    "description": "Редактирование метаданных",
                    "type": "boolean"
                },
                "canEdit": {
                    "description": "Редактирование",
                    "type": "boolean"
                },
                "canSign": {
                    "description": "Подписание",
                    "type": "boolean"
                },
                "canImport": {
                    "description": "Импорт",
                    "type": "boolean"
                }
            },
            "required": [
                "canEdit",
                "canSign",
                "canImport",
                "canView",
                "canExport",
                "canEditMeta"
            ]
        },
        "UserPrivilegePubl": {
            "description": "Привилегии каталогов публикации",
            "type": "object",
            "properties": {
                "canView": {
                    "description": "Просмотр",
                    "type": "boolean"
                },
                "canExport": {
                    "description": "Экспорт",
                    "type": "boolean"
                },
                "canEditMeta": {
                    "description": "Редактирование метаданных",
                    "type": "boolean"
                },
                "canPubl": {
                    "description": "Публикация объектов",
                    "type": "boolean"
                }
            },
            "required": [
                "canPubl",
                "canView",
                "canExport",
                "canEditMeta"
            ]
        },
        "UserStatus": {
            "description": "Статус пользователя",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса пользователя",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/UserStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/UserStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "UserStatusNameEnum": {
            "description": "Наименование статуса учетной записи пользователя",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "UserStatusTagIdEnum": {
            "description": "TagId статуса учетной записи пользователя",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "active",
                        "deleted",
                        "blocked",
                        "tempBlocked",
                        "temporary"
                    ]
                }
            ]
        },
        "MailingStatus": {
            "description": "Группа пользователей",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса рассылок",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/MailingStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/MailingStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "MailingStatusTagIdEnum": {
            "description": "TagId статуса рассылок",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "allOn",
                        "partlyOn",
                        "allOff"
                    ]
                }
            ]
        },
        "MailingStatusNameEnum": {
            "description": "Наименование статуса рассылок",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "OkUserRecoveredResponse": {
            "allOf": [
                {
                    "$ref": "_common.yaml#/components/schemas/OkResponse"
                }
            ],
            "properties": {
                "userId": {
                    "description": "Идентификатор пользователя",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                }
            },
            "required": [
                "userId"
            ]
        },
        "IncorrectUserRecoveredResponse": {
            "allOf": [
                {
                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                }
            ],
            "properties": {
                "userId": {
                    "description": "Идентификатор пользователя",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                }
            },
            "required": [
                "userId"
            ]
        },
        "CommonThematicCategoryInfo": {
            "description": "Общая информация о тематической категории",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор тематической категории",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Русскоязычное наименование тематической категории",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "ThematicCategory": {
            "description": "Тематическая категория",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonThematicCategoryInfo"
                }
            ],
            "properties": {
                "enName": {
                    "description": "Англоязычное наименование тематической категории",
                    "type": "string"
                },
                "status": {
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ThematicCategoryStatus"
                        }
                    ]
                },
                "statusTagId": {
                    "writeOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ThematicCategoryStatusTagIdEnum"
                        }
                    ]
                },
                "fileId": {
                    "description": "Идентификатор изображения (uuid) для иконки категории",
                    "type": "string"
                }
            },
            "required": [
                "status",
                "statusTagId"
            ]
        },
        "ThematicCategoryListItem": {
            "description": "Информация о тематической категории в списке тематических категорий",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonThematicCategoryInfo"
                }
            ],
            "type": "object",
            "properties": {
                "enName": {
                    "description": "Англоязычное наименование тематической категории\n\nЕсли не задано, то возвращается пустая строка",
                    "type": "string"
                },
                "status": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ThematicCategoryStatus"
                        }
                    ]
                }
            },
            "required": [
                "enName",
                "status"
            ]
        },
        "ThematicCategoryStatusTagIdEnum": {
            "description": "Статус публикации тематической категории:\n  - `unpublished` - не опубликована\n  - `published` - опубликована",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "unpublished",
                        "published"
                    ]
                }
            ]
        },
        "ThematicCategoryStatusNameEnum": {
            "description": "Наименование статуса публикации тематической категории",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "ThematicCategoryStatus": {
            "description": "Статус публикации тематической категории",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/ThematicCategoryStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/ThematicCategoryStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "CommonSystemInfo": {
            "description": "Общая информация об информационной системе",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор информационной системы",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Название информационной системы",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "SystemListItem": {
            "description": "Информация об информационной системе в списке систем",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSystemInfo"
                }
            ],
            "type": "object",
            "properties": {
                "login": {
                    "description": "Логин информационной системы",
                    "type": "string"
                },
                "fullName": {
                    "description": "Полное наименование информационной системы",
                    "type": "string"
                },
                "countCatalogs": {
                    "description": "Количество каталогов, доступных системе",
                    "type": "integer"
                },
                "isDeleted": {
                    "description": "Признак удаления",
                    "type": "boolean"
                }
            },
            "required": [
                "login",
                "isDeleted"
            ]
        },
        "System": {
            "description": "Информационная система",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSystemInfo"
                }
            ],
            "properties": {
                "login": {
                    "description": "Логин информационной системы",
                    "type": "string"
                },
                "password": {
                    "description": "Пароль информационной системы",
                    "type": "string",
                    "writeOnly": true
                },
                "fullName": {
                    "description": "Полное наименование системы",
                    "type": "string"
                },
                "signWithoutSignature": {
                    "description": "Признак \"Всегда загружать данные как подписанные\"",
                    "type": "boolean"
                },
                "activeSessionLimit": {
                    "description": "Доступное число потоков для информационной системы",
                    "type": "integer",
                    "format": "int32"
                },
                "responsibles": {
                    "description": "Данные об ответсвенных за информационную систему",
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "catalogs.yaml#/components/schemas/ResponsiblePersonInfo"
                    }
                }
            },
            "required": [
                "login"
            ]
        },
        "SystemCatalogListItem": {
            "description": "Элемент списка каталогов,связанных с системой",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "objectCategories": {
                    "description": "Категории объектов каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "thematicCategory": {
                    "description": "Тематическая категория каталога",
                    "type": "string"
                },
                "oivs": {
                    "description": "ОИВ, ответственные за наполнение каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                }
            },
            "required": [
                "objectCategories",
                "thematicCategory",
                "oivs"
            ]
        },
        "AttributeTypeTagIdEnum": {
            "description": "Техническое наименование типа атрибута",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "STRING",
                        "NUMBER",
                        "DATE",
                        "DICTIONARY",
                        "CATALOG",
                        "FLAG",
                        "FILE",
                        "LINK"
                    ]
                }
            ]
        },
        "AttributeTypeNameEnum": {
            "description": "Наименование типа атрибута",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "CommonAttributeInfo": {
            "type": "object",
            "description": "Общая информация об атрибуте",
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "techName": {
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "type": "string"
                },
                "rusName": {
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "type": "string"
                },
                "enName": {
                    "description": "Англоязычное наименование атрибута",
                    "type": "string"
                },
                "description": {
                    "description": "Описание атрибута",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "techName",
                "rusName",
                "enName"
            ]
        },
        "AttributeListItem": {
            "description": "Элемент списка атрибутов.\n\nИспользуется при выдаче списка атрибутов в разделе `Управление > Атрибуты`.",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttributeInfo"
                }
            ],
            "properties": {
                "attributeType": {
                    "$ref": "#/components/schemas/AttributeTypeNameEnum"
                },
                "dictionary": {
                    "description": "Информация о справочнике в справочном атрибуте",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/CommonDictionaryInfo"
                        }
                    ]
                }
            },
            "required": [
                "attributeType"
            ]
        },
        "AttributeType": {
            "description": "Тип атрибута",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор типа атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/AttributeTypeNameEnum"
                },
                "typeTag": {
                    "$ref": "#/components/schemas/AttributeTypeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "typeTag"
            ]
        },
        "AttributeAlterName": {
            "description": "Альтернативное наименование атрибута",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int32",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название."
                },
                "rusAlterName": {
                    "type": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_"
                },
                "enAlterName": {
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "type": "string"
                }
            },
            "required": [
                "rusAlterName",
                "enAlterName"
            ],
            "example": {
                "id": 736,
                "rusAlterName": "Муниципальный район",
                "enAlterName": "District"
            }
        },
        "CommonAttribute": {
            "description": "Атрибут.\n\nСхема включает общие для всех типов атрибутов поля.",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttributeInfo"
                }
            ],
            "properties": {
                "type": {
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/AttributeType"
                        }
                    ]
                },
                "typeTag": {
                    "writeOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/AttributeTypeTagIdEnum"
                        }
                    ]
                },
                "alterNames": {
                    "description": "Альтернативные названия атрибута",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/AttributeAlterName"
                    }
                }
            },
            "required": [
                "type",
                "typeTag",
                "alterNames"
            ]
        },
        "DictionaryAttribute": {
            "type": "object",
            "description": "Справочный атрибут",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ],
            "properties": {
                "dictionary": {
                    "description": "Информация о справочнике в справочном атрибуте",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/CommonDictionaryInfo"
                        }
                    ],
                    "properties": {
                        "parentId": {
                            "description": "Идентификатор справочника-родителя",
                            "type": "integer"
                        }
                    },
                    "readOnly": true
                },
                "dictionaryId": {
                    "description": "Идентификатор справочника",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                }
            },
            "required": [
                "dictionary",
                "dictionaryId"
            ],
            "example": {
                "id": 2,
                "techName": "district",
                "rusName": "Район",
                "enName": "District",
                "type": {
                    "id": 4,
                    "name": "Справочник",
                    "typeTag": "dict"
                },
                "description": "Название района",
                "alterNames": [
                    {
                        "id": 91,
                        "rusAlterName": "Регион",
                        "enAlterName": "Area"
                    },
                    {
                        "id": 92,
                        "rusAlterName": "Название района",
                        "enAlterName": "Region name"
                    }
                ],
                "dictionary": {
                    "id": 61,
                    "name": "Справочник районов",
                    "parentId": 60
                }
            }
        },
        "StringAttribute": {
            "type": "object",
            "description": "Строковый атрибут",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ],
            "properties": {
                "defaultMaxLength": {
                    "description": "Максимальная длина значения атрибута по умолчанию",
                    "type": "integer",
                    "format": "int32"
                },
                "defaultFieldMask": {
                    "description": "Маска поля ввода строковых значений по умолчанию",
                    "type": "string"
                },
                "defaultFieldRegexId": {
                    "description": "Идентификатор регулярного выражения для валидации значения атрибута по умолчанию",
                    "type": "string",
                    "writeOnly": true
                },
                "defaultFieldRegex": {
                    "allOf": [
                        {
                            "$ref": "regexps.yaml#/components/schemas/CommonRegularExpressionInfo"
                        },
                        {
                            "$ref": "regexps.yaml#/components/schemas/RegularExpression"
                        }
                    ],
                    "description": "Регулярное выражение для валидации значения атрибута по умолчанию",
                    "type": "object",
                    "readOnly": true
                }
            },
            "required": [
                "defaultMaxLength"
            ]
        },
        "FloatAttribute": {
            "type": "object",
            "description": "Атрибут с типом дробное число",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ],
            "properties": {
                "defaultMaxLength": {
                    "description": "Максимальная длина целой части по умолчанию, от `1` до `38`",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "maximum": 38
                },
                "defaultMaxLengthDecimal": {
                    "description": "Максимальная длина дробной части по умолчанию, от `1` до `38`",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "maximum": 38
                }
            },
            "required": [
                "defaultMaxLength",
                "defaultMaxLengthDecimal"
            ]
        },
        "IntegerAttribute": {
            "type": "object",
            "description": "Атрибут с типом целое число",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ],
            "properties": {
                "defaultMaxLength": {
                    "description": "Максимальная длина числа по умолчанию, от `1` до `38`",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "maximum": 38
                }
            },
            "required": [
                "defaultMaxLength"
            ]
        },
        "DateAttribute": {
            "type": "object",
            "description": "Атрибут с типом дата",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ]
        },
        "FileAttribute": {
            "type": "object",
            "description": "Файловый атрибут",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ]
        },
        "BooleanAttribute": {
            "type": "object",
            "description": "Атрибут с типом флаг",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ]
        },
        "LinkAttribute": {
            "type": "object",
            "description": "Ссылочный атрибут",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ],
            "example": {
                "id": 34,
                "techName": "parentOrg",
                "rusName": "Родительская организация",
                "enName": "Parent Organization",
                "description": "Родительская организация",
                "type": {
                    "id": 8,
                    "name": "Ссылка на объект",
                    "typeTag": "link"
                },
                "typeTag": "link",
                "alterNames": []
            }
        },
        "TableAttribute": {
            "type": "object",
            "description": "Табличный атрибут",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttribute"
                }
            ]
        },
        "Attribute": {
            "description": "Атрибут",
            "type": "object",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/StringAttribute"
                },
                {
                    "$ref": "#/components/schemas/IntegerAttribute"
                },
                {
                    "$ref": "#/components/schemas/FloatAttribute"
                },
                {
                    "$ref": "#/components/schemas/DateAttribute"
                },
                {
                    "$ref": "#/components/schemas/FileAttribute"
                },
                {
                    "$ref": "#/components/schemas/BooleanAttribute"
                },
                {
                    "$ref": "#/components/schemas/DictionaryAttribute"
                },
                {
                    "$ref": "#/components/schemas/LinkAttribute"
                },
                {
                    "$ref": "#/components/schemas/TableAttribute"
                }
            ]
        },
        "AttributeGroup": {
            "description": "Группа атрибутов",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор группы атрибутов",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование группы атрибутоа",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "SystemAttribute": {
            "description": "Системный атрибут",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор системного атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Наименование системного атрибута",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "AttributeCatalogInfo": {
            "description": "Информация о каталоге, в котором используется атрибут.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogName": {
                    "description": "Наименование каталога",
                    "type": "string"
                },
                "isCatalogDeleted": {
                    "description": "Удален ли каталог",
                    "type": "boolean"
                },
                "attributeRusName": {
                    "description": "Русскоязычное наименование атрибута в каталоге\n\nМожет быть выбрано одно из альтернативных наименований атрибута, иначе - используется значение по умолчанию",
                    "type": "string"
                },
                "attributeEnName": {
                    "description": "Англоязычное наименование атрибута в каталоге\n\nМожет быть выбрано одно из альтернативных наименований атрибута, иначе - используется значение по умолчанию",
                    "type": "string"
                }
            },
            "required": [
                "catalogId",
                "catalogName",
                "isCatalogDeleted",
                "attributeRusName",
                "attributeEnName"
            ]
        },
        "CatalogAttributeInfo": {
            "description": "Информация о каталоге и атрибуте, в котором используется сущность (атрибут, справочник, рег. выражение, поисковый индекс, каталог заполнения).",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "attributeRusName": {
                    "description": "Русскоязычное наименование атрибута в каталоге\n\nМожет быть выбрано одно из альтернативных наименований атрибута, иначе - используется значение по умолчанию",
                    "type": "string"
                },
                "attributeEnName": {
                    "description": "Англоязычное наименование атрибута в каталоге\n\nМожет быть выбрано одно из альтернативных наименований атрибута, иначе - используется значение по умолчанию",
                    "type": "string"
                }
            },
            "required": [
                "attributeRusName",
                "attributeEnName"
            ]
        },
        "CommonDictionaryInfo": {
            "type": "object",
            "description": "Общая информация о справочнике",
            "properties": {
                "id": {
                    "description": "Идентификатор справочника",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование справочника",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "DictionaryListItem": {
            "description": "Информация о справочнике в списке справочников",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonDictionaryInfo"
                }
            ],
            "properties": {
                "elementsCount": {
                    "description": "Количество элементов справочника",
                    "type": "integer"
                },
                "isDictFromCatalog": {
                    "description": "Основан ли справочник на каталоге",
                    "type": "boolean",
                    "default": false
                }
            },
            "required": [
                "elementsCount"
            ],
            "example": {
                "id": 58,
                "name": "Актуальные адреса БТИ",
                "elementsCount": 500
            }
        },
        "DictionaryColumn": {
            "description": "Столбец списка элементов справочников.\nДополнительный столбец справочника.",
            "type": "object",
            "properties": {
                "techName": {
                    "description": "Техническое название столбца определенного формата.\nНазвание может содержать английские буквы, цифры и символы нижнего подчеркивания _. Должно начинаться с буквы",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/TechNameFormat"
                        }
                    ]
                },
                "rusName": {
                    "description": "Русскоязычное название столбца",
                    "type": "string"
                }
            },
            "required": [
                "techName",
                "rusName"
            ]
        },
        "RegularDictionary": {
            "description": "Справочник, созданный вручную",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonDictionaryInfo"
                }
            ],
            "properties": {
                "parentDictionaryId": {
                    "description": "Идентификатор справочника-родителя. Указывается только при создании нового справочника.",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "parentDictionary": {
                    "description": "Справочник-родитель",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CommonDictionaryInfo"
                        }
                    ],
                    "readOnly": true
                },
                "additionalColumns": {
                    "description": "Дополнительные столбцы справочника",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/DictionaryColumn"
                    }
                }
            },
            "example": {
                "name": "Справочник сотрудников",
                "parentDictionary": {
                    "id": 74,
                    "name": "Справочник компаний"
                },
                "additionalColumns": [
                    {
                        "rusName": "Профессия",
                        "techName": "Profession"
                    },
                    {
                        "rusName": "Возраст",
                        "techName": "Age"
                    }
                ]
            }
        },
        "DictionaryFromCatalog": {
            "description": "Справочник, созданный на основе каталога",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonDictionaryInfo"
                }
            ],
            "properties": {
                "parentDictionaryId": {
                    "description": "Идентификатор справочника-родителя. Указывается только при создании нового справочника.",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "parentDictionary": {
                    "description": "Справочник-родитель",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CommonDictionaryInfo"
                        }
                    ],
                    "readOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор связанного каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogName": {
                    "description": "Наименование связанного каталога",
                    "type": "string",
                    "readOnly": true
                },
                "catalogNameFieldId": {
                    "description": "Идентификатор атрибута (attrId), из которого берутся значения для поля \"Наименование\" элементов справочника.",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogNameFieldName": {
                    "description": "Наименование атрибута каталога, из которого берутся значения для поля \"Наименование\" элементов справочника.",
                    "type": "string",
                    "readOnly": true
                },
                "globalCatalogFieldId": {
                    "description": "Идентификатор атрибута, из которого берутся значения для идентификаторов элементов справочника\n\nДоступные значения -  global_id (-1), system_object_id (-2).",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        -1,
                        -2
                    ]
                },
                "globalCatalogFieldName": {
                    "description": "Наименование атрибута каталога, из которого берутся значения для идентификаторов элементов справочника",
                    "type": "string",
                    "readOnly": true,
                    "enum": [
                        "global_id",
                        "system_object_id"
                    ]
                },
                "parentCatalogFieldId": {
                    "description": "Идентификатор атрибута (attrId), из которого берутся значения для идентификаторов родительских элементов справочника.\nУказывается, если у данного справочника есть справочник-родитель.",
                    "type": "integer",
                    "format": "int32"
                },
                "parentCatalogField": {
                    "description": "Наименование атрибута каталога, из которого берутся значения для идентификаторов родительских элементов справочника",
                    "type": "string",
                    "readOnly": true
                },
                "condition": {
                    "description": "Условие ограничения выборки в формате TOML",
                    "type": "string"
                }
            },
            "required": [
                "catalogId",
                "catalogName",
                "catalogNameFieldId",
                "catalogNameFieldName",
                "globalCatalogFieldId",
                "globalCatalogFieldName"
            ]
        },
        "Dictionary": {
            "type": "object",
            "description": "Справочник",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/RegularDictionary"
                },
                {
                    "$ref": "#/components/schemas/DictionaryFromCatalog"
                }
            ]
        },
        "ConditionValidationError": {
            "type": "object",
            "properties": {
                "code": {
                    "description": "HTTP-код ошибки",
                    "type": "integer",
                    "format": "int32",
                    "example": 400
                },
                "messageType": {
                    "description": "Тип ответа",
                    "type": "string",
                    "example": "Bad request"
                },
                "errors": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "Недопустимое выражение '{expression}'.",
                            "Найдено {symbol/expression}. Ожидалось {symbol/expression}.",
                            "В каталоге отсутсвует указанный атрибут attr.{techName}.",
                            "Указано значение с некорректным типом данных. Ожидалось {type}.",
                            "Передан некорректный набор входных параметров в {operator}.",
                            "Не найден справочник с идентификатором {dictId}.",
                            "Не найден элемент справочника {elementId} в справочнике {dictId}.",
                            "Атрибут с типом {type} недоступен для оператора {operator}.",
                            "Не найден каталог с идентификатором {catalogId}.",
                            "Не найдено регулярное выражение с идентификатором {regexpId}.",
                            "В справочнике отсутсвует указанный атрибут attr.{dictTechName}.{columnTechName}/dictAttr.{techName}"
                        ]
                    }
                }
            },
            "required": [
                "code",
                "messageType",
                "errors"
            ]
        },
        "DictionaryAttrubuteInfo": {
            "description": "Информация об атрибуте, в котором используется справочник. ",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута ЕХД",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Русскоязычное наименование атрибута",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "DictionarySearchIndexInfo": {
            "description": "Информация о поисковом индексе, в котором используется справочник.",
            "type": "object",
            "allOf": [
                {
                    "$ref": "searchIndexes.yaml#/components/schemas/CommonSearchIndexInfo"
                }
            ],
            "properties": {
                "dictColumnName": {
                    "description": "Русскоязычное название столбца справочника, по которому настроен поисковый индекс",
                    "type": "string"
                },
                "dictColumnTechName": {
                    "description": "Техническое название столбца справочника, по которому настроен поисковый индекс",
                    "type": "string"
                }
            },
            "required": [
                "dictColumnName",
                "dictColumnTechName"
            ]
        },
        "FilterOperatorAuxDictElement": {
            "description": "Элемент системного справочника с операторами для фильтрации",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор оператора в БД",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "_common.yaml#/components/schemas/FilterOperatorNameEnum"
                },
                "tagId": {
                    "$ref": "_common.yaml#/components/schemas/FilterOperatorTagIdEnum"
                },
                "dataTypes": {
                    "description": "Технические названия типов данных, к которым применим оператор",
                    "type": "array",
                    "items": {
                        "$ref": "attributes.yaml#/components/schemas/AttributeTypeTagIdEnum"
                    }
                },
                "filterType": {
                    "description": "Тип фильтра:\n  - basic - базовый фильтр (используется во всех таблицах с фильтрами по столбцам)\n  - object - фильтр для спсика объектов каталога",
                    "type": "string",
                    "enum": [
                        "basic",
                        "object"
                    ]
                }
            },
            "required": [
                "id",
                "name",
                "tagId",
                "dataTypes",
                "filterType"
            ]
        },
        "SysColumn": {
            "description": "Системный столбец",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор записи, для системных поле отрицательный",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Название столбца в интерфейсе",
                    "type": "string"
                },
                "dataType": {
                    "description": "Техническое название типа данных, который используется для значений столбца",
                    "type": "string"
                },
                "objFieldName": {
                    "description": "Техническое название столбца. Используется в качетсве ключа полей в JSON",
                    "type": "string"
                },
                "displayFlag": {
                    "description": "Признак отображения столбца в интерфейсе для списка объектов\n  - 0 - не отображается\n  - 1 - заполнение\n  - 2 - публикация\n  - 3 - заполнение и публикация",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1,
                        2,
                        3
                    ]
                },
                "forNested": {
                    "description": "Признак отображения для корневого или вложенного объекта\n  - 1 - корневой объект\n  - 2 - вложенный объект\n  - 3 - корневой и вложенный",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        1,
                        2,
                        3
                    ]
                },
                "forPublSettings": {
                    "description": "Признак использования в настройках публикации КП:\n  - 0 - не используется\n  - 1 - используется\n  - 2 - используется (всегда видимый, для таких столбцов нельзя изменить настройку видимости в КП)",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1,
                        2
                    ]
                },
                "objCardFlag": {
                    "description": "Признак использования поля для карточки объекта\n  - 0 - не используется\n  - 1 - заполнение\n  - 2 - публикация\n  - 3 - заполнение и публикация",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1,
                        2,
                        3
                    ]
                },
                "norder": {
                    "description": "Порядок сортировки",
                    "type": "integer"
                }
            },
            "required": [
                "id",
                "name",
                "dataType",
                "objFieldName",
                "displayFlag",
                "forNested",
                "forPublSettings",
                "objCardFlag",
                "norder"
            ]
        },
        "UpdatePeriodicityAuxDictElement": {
            "description": "Схема элемента для вспомогательного справочника \"Периодичность обновления\"",
            "type": "object",
            "readOnly": true,
            "properties": {
                "tagId": {
                    "$ref": "catalogs.yaml#/components/schemas/CatalogPeriodUpdateTagIdEnum"
                },
                "name": {
                    "$ref": "catalogs.yaml#/components/schemas/CatalogPeriodUpdateNameEnum"
                },
                "isGeneral": {
                    "description": "Признак, что период явлется общим для выбора в рамках обновления каталога и фоновых процессах",
                    "type": "boolean"
                },
                "forPubl": {
                    "description": "Признак того, что периодичность распространяется на каталоги публикации",
                    "type": "boolean"
                }
            },
            "required": [
                "tagId",
                "name",
                "isGeneral",
                "forPubl"
            ],
            "example": {
                "tagId": "minutely",
                "name": "Ежеминутно",
                "isGeneral": false,
                "forPubl": false
            }
        },
        "DictionaryElementStatus": {
            "description": "Статус элемента справочника",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/DictionaryElementStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/DictionaryElementStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Активный",
                "tagId": "active"
            }
        },
        "DictionaryElementStatusTagIdEnum": {
            "description": "Техническое название статуса элемента справочника:\n  - `active` - активный\n  - `deleted` - удаленный",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "active",
                        "deleted"
                    ]
                }
            ]
        },
        "DictionaryElementStatusNameEnum": {
            "description": "Название статуса элемента справочника:\n  - активный\n  - удаленный",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "DictionaryElementListColumnTypeTagIdEnum": {
            "description": "Тип столбца списка элементов справочника, показывает, какой тип информации передается в столбце:\n  - `general` - общая информация\n  - `additional` - дополнительный столбец, добавленный пользователем вручную",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "general",
                        "additional"
                    ]
                }
            ]
        },
        "DictionaryElementListColumn": {
            "description": "Столбец списка элементов справочника",
            "type": "object",
            "readOnly": true,
            "properties": {
                "name": {
                    "description": "Название столбца в списке",
                    "type": "string"
                },
                "techName": {
                    "description": "Техническое наименование столбца",
                    "type": "string"
                },
                "columnType": {
                    "$ref": "#/components/schemas/DictionaryElementListColumnTypeTagIdEnum"
                },
                "typeTag": {
                    "$ref": "attributes.yaml#/components/schemas/AttributeTypeTagIdEnum"
                }
            },
            "required": [
                "name",
                "techName",
                "columnType",
                "typeTag"
            ]
        },
        "CommonDictionaryElementInfo": {
            "description": "Общая информация об элементе справочника",
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "Идентификатор элемента справочника. Всегда имеет тип `string`.",
                    "readOnly": true
                },
                "name": {
                    "description": "Название элемента справочника на русском языке",
                    "type": "string"
                },
                "isElementDeleted": {
                    "description": "Удален ли элемент справочника",
                    "type": "boolean",
                    "readOnly": true
                }
            },
            "required": [
                "id",
                "name",
                "isElementDeleted"
            ]
        },
        "DictionaryElementListItem": {
            "description": "Информация об элементе справочника в списке элементов справочника",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonDictionaryElementInfo"
                }
            ],
            "properties": {
                "parentElementId": {
                    "description": "Идентификатор элемента-родителя из родительского справочника",
                    "type": "string"
                },
                "parentElementName": {
                    "description": "Наименование элемента-родителя из родительского справочника",
                    "type": "string"
                },
                "additionalFields": {
                    "description": "Значения дополнительных столбцов справочника.\n\n<*> - техническое наименование дополнительного столбца справочника.",
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            }
        },
        "DictionaryElement": {
            "description": "Информация об элементе справочника в списке элементов справочника",
            "type": "object",
            "properties": {
                "key": {
                    "description": "Идентификатор элемента справочника",
                    "type": "string"
                },
                "value": {
                    "description": "Название элемента справочника на русском языке",
                    "type": "string"
                },
                "value_en": {
                    "description": "Название элемента справочника на английском языке (при наличии)",
                    "type": "string"
                },
                "prnt_key": {
                    "description": "Идентификатор элемента родительского справочника (при наличии)",
                    "type": "string"
                }
            },
            "required": [
                "key",
                "value"
            ]
        },
        "DictionaryElementsSearchFilter": {
            "description": "Фильтр по списку элементов справочника",
            "type": "object",
            "properties": {
                "filters": {
                    "type": "array",
                    "items": {
                        "allOf": [
                            {
                                "$ref": "_common.yaml#/components/schemas/BasicFilter"
                            },
                            {
                                "properties": {
                                    "attribute": {
                                        "enum": [
                                            "id",
                                            "name"
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        "ExportHistoryItem": {
            "description": "Элемент истории экспортов каталога",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор экспорта",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Наименование архива экспорта. Сервис формирует название экспорта на основе идентификатора каталога и даты старта. Формат названия описан в вики.",
                    "type": "string"
                },
                "dateStart": {
                    "description": "Дата и время запроса экспорта",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateEnd": {
                    "description": "Дата и время окончания экспорта",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "userName": {
                    "description": "ФИО пользователя, запустившего экспорт",
                    "type": "string"
                },
                "countAllObj": {
                    "type": "integer",
                    "description": "Общее количество объектов в экспорте"
                },
                "type": {
                    "$ref": "#/components/schemas/FillingExportTypeTagIdEnum"
                },
                "fileId": {
                    "type": "string",
                    "description": "Идентификатор (uuid) файла экспорта в файловом хранилище"
                },
                "status": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ExportStatus"
                        }
                    ]
                },
                "hasSettings": {
                    "description": "Указывает на применение настроек к файлу экспорта.",
                    "type": "boolean"
                }
            },
            "required": [
                "id",
                "name",
                "dateStart",
                "userName",
                "status",
                "type",
                "hasSettings"
            ]
        },
        "ExportStatus": {
            "description": "Статус экспорта",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/ExportStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/ExportStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "ExportStatusNameEnum": {
            "description": "Название статуса экспорта",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "ExportStatusTagIdEnum": {
            "description": "Технчиеское навзание статуса экспорта\n  - `new` - Добавлен в очередь,\n  - `inWork` - В работе, \n  - `finished` - Экспорт завершен успешно, \n  - `error` - Ошибка экспорта, \n  - `cancelled` - Экспорт отменен пользователем.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "new",
                        "inWork",
                        "finished",
                        "error",
                        "cancelled"
                    ]
                }
            ]
        },
        "CommonOivInfo": {
            "description": "Общая информация об ОИВе",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор ОИВа",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование ОИВа",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "OivListItem": {
            "description": "Информация об ОИВе в списке ОИВов",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonOivInfo"
                }
            ],
            "properties": {
                "shortName": {
                    "description": "Краткое наименование ОИВа",
                    "type": "string"
                },
                "inn": {
                    "description": "ИНН ОИВа",
                    "type": "integer"
                },
                "childrenIds": {
                    "description": "Индентификаторы дочерних ОИВов",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "countCatalogs": {
                    "description": "Количество каталогов ОИВа",
                    "type": "integer"
                }
            },
            "required": [
                "shortName"
            ]
        },
        "Oiv": {
            "description": "ОИВ",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonOivInfo"
                }
            ],
            "properties": {
                "shortName": {
                    "description": "Краткое наименование ОИВа",
                    "type": "string"
                },
                "enName": {
                    "description": "Англоязычное наименование ОИВа",
                    "type": "string"
                },
                "inn": {
                    "description": "ИНН ОИВа",
                    "type": "integer",
                    "format": "int32"
                },
                "parentOivId": {
                    "description": "Идентификатор родительского ОИВа",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "parentOiv": {
                    "description": "Родительский ОИВ",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CommonOivInfo"
                        }
                    ],
                    "readOnly": true
                }
            },
            "required": [
                "shortName",
                "enName"
            ]
        },
        "OivCatalogListItem": {
            "description": "Элемент списка каталогов, связанных с ОИВ",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "objectCategories": {
                    "description": "Категории объектов каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                },
                "thematicCategory": {
                    "description": "Тематическая категория каталога",
                    "type": "string"
                },
                "oivs": {
                    "description": "ОИВ, ответственные за наполнение каталога, перечисленные через запятую с пробелом",
                    "type": "string"
                }
            },
            "required": [
                "objectCategories",
                "thematicCategory",
                "oivs"
            ]
        },
        "OivUserInfo": {
            "description": "Информация пользователе ОИВ",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "users.yaml#/components/schemas/CommonUserInfo"
                }
            ]
        },
        "CommonRegularExpressionInfo": {
            "description": "Общая информация регулярного выражения",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор регулярного выражения",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Название регулярного выражения",
                    "type": "string"
                },
                "value": {
                    "description": "Регулярное выражение",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name",
                "value"
            ]
        },
        "RegularExpression": {
            "description": "Регулярное выражение",
            "type": "object",
            "allOf": [
                {
                    "$ref": "regexps.yaml#/components/schemas/CommonRegularExpressionInfo"
                }
            ],
            "properties": {
                "description": {
                    "description": "Описание регулярного выражения",
                    "type": "string"
                }
            },
            "required": [
                "description"
            ],
            "example": {
                "id": 2,
                "name": "Только числа",
                "value": "^([0-9]+)$",
                "description": "Регулярное выражение принимает только числа"
            }
        },
        "RegularExpressionAttributeInfo": {
            "description": "Элемент списка атрибутов и каталогов, которые используют указанное регулярное выражение",
            "type": "object",
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога, в котором используется данный атрибут",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogName": {
                    "description": "Название каталога, в котором используется данный атрибут",
                    "type": "string"
                },
                "attributeId": {
                    "description": "Идентификатор атрибута ЕХД",
                    "type": "integer",
                    "format": "int32"
                },
                "attributeName": {
                    "description": "Название атрибута",
                    "type": "string"
                }
            },
            "required": [
                "catalogId",
                "catalogName",
                "attributeId",
                "attributeName"
            ]
        },
        "NEWRegularExpressionAttributeInfo": {
            "description": "Информация об атрибуте, в котором используется регулярное выражение",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута ЕХД",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Русскоязычное наименование атрибута",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "CommonSearchIndexInfo": {
            "description": "Общая информация о поисковом индексе в списке поисковых индексов",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор поискового индекса",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование поискового индекса",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "SearchIndexListItem": {
            "description": "Информация о поисковом индексе в списке поисковых индексов",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSearchIndexInfo"
                }
            ],
            "properties": {
                "techName": {
                    "description": "Техническое наименование поискового индекса (латиница)",
                    "type": "string"
                },
                "description": {
                    "description": "русскоязычное описание поискового индекса",
                    "type": "string"
                },
                "dictName": {
                    "description": "Наименование справочника, по которому настроен индекс",
                    "type": "string"
                },
                "dictColumnName": {
                    "description": "Наименование столбца справочника, по которому настроен индекс",
                    "type": "string"
                },
                "status": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/SearchIndexStatus"
                        }
                    ]
                }
            },
            "required": [
                "techName",
                "dictName",
                "dictColumnName",
                "status"
            ]
        },
        "SearchIndexStatusTagIdEnum": {
            "description": "Статус поискового индекса:\n  - `waitWork` - ожидает обработки\n  - `inWork` - в обработке\n  - `done` - актуален\n  - `errorBuild` - ошибка построения\n  - `errorsUpdate` - ошибки обновления",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "waitWork",
                        "inWork",
                        "done",
                        "errorBuild",
                        "errorsUpdate"
                    ]
                }
            ]
        },
        "SearchIndexStatusNameEnum": {
            "description": "Наименование статуса поискового индекса",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SearchIndexStatus": {
            "description": "Статус поискового индекса",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса поискового индекса",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/SearchIndexStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SearchIndexStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "SearchIndex": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSearchIndexInfo"
                }
            ],
            "description": "Поисковый индекс",
            "type": "object",
            "properties": {
                "techName": {
                    "description": "Техническое наименование поискового индекса (латиница)",
                    "type": "string"
                },
                "description": {
                    "description": "Описание поискового индекса",
                    "type": "string"
                },
                "dictId": {
                    "description": "Идентификатор справочника, по которому настроен индекс",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "dictionary": {
                    "description": "Информация о справочнике, по которому настроен индекс",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/CommonDictionaryInfo"
                        }
                    ],
                    "readOnly": true
                },
                "dictColTechName": {
                    "description": "Наименование столбца справочника, по которому настроен индекс",
                    "type": "string",
                    "writeOnly": true
                },
                "dictColumn": {
                    "description": "Информация о столбце справочника, по которому настроен индекс",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/DictionaryColumn"
                        }
                    ],
                    "readOnly": true
                },
                "status": {
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/SearchIndexStatus"
                        }
                    ]
                },
                "statusTag": {
                    "description": "Техническое наименование статуса поискового индекса",
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/SearchIndexStatusTagIdEnum"
                        }
                    ]
                }
            },
            "required": [
                "techName",
                "description",
                "dictId",
                "dictionary",
                "dictColTechName",
                "dictColumn",
                "status",
                "statusTag"
            ]
        },
        "SearchIndexDictionaryInfo": {
            "description": "Общая информация о справочнике, в котором используется поисковый индекс.",
            "$ref": "dictionaries.yaml#/components/schemas/CommonDictionaryInfo"
        },
        "ObjectCategory": {
            "description": "Категория объектов",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор категории объектов",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "rusName": {
                    "description": "Русскоязычное наименование категории объектов, должно быть уникальным",
                    "type": "string"
                },
                "enName": {
                    "description": "Англоязычное наименование категории объектов",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "rusName"
            ]
        },
        "ObjectCategoryCatalogInfo": {
            "description": "Информация о каталоге, в котором используется категория объектов.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogName": {
                    "description": "Наименование каталога",
                    "type": "string"
                },
                "isCatalogDeleted": {
                    "description": "Удален ли каталог",
                    "type": "boolean"
                }
            },
            "required": [
                "catalogId",
                "catalogName",
                "isCatalogDeleted"
            ]
        },
        "GeoType": {
            "description": "Тип геометрии",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор типа геометрии",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Название типа геометрии",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "GeojsonGeoTypeTagIdEnum": {
            "description": "Типы геометрии в geojson",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "Point",
                        "MultiPoint",
                        "MultiLineString",
                        "MultiPolygon"
                    ]
                }
            ]
        },
        "GeojsonGeoPublTypeTagIdEnum": {
            "description": "Типы геометрии в geojson",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "Point",
                        "MultiPoint",
                        "MultiLineString",
                        "MultiPolygon",
                        "Polygon"
                    ]
                }
            ]
        },
        "SpatialReferenceSystemEnum": {
            "description": "Система координат (пространственная система отсчёта - spatial reference system)",
            "type": "string",
            "enum": [
                "EPSG:4326",
                "MSK:77"
            ]
        },
        "Point": {
            "description": "Точка",
            "type": "array",
            "items": {
                "type": "number"
            },
            "minItems": 2,
            "maxItems": 2
        },
        "MultiPoint": {
            "description": "Мультиточка",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Point"
            },
            "minItems": 1
        },
        "MultiLineString": {
            "description": "Мультилиния",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/MultiPoint"
            },
            "minItems": 1
        },
        "Polygon": {
            "description": "Полигон (необходим для обратной совместимости мигрированных объектов каталога публикации из ЕХД1)",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/MultiPoint"
            },
            "minItems": 1
        },
        "MultiPolygon": {
            "description": "Полигон",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/MultiLineString"
            },
            "minItems": 1
        },
        "ObjectGeodata": {
            "description": "Геоданные объекта в формате GeoJSON.",
            "type": "object",
            "properties": {
                "type": {
                    "description": "Тип объекта GeoJSON. Всегда принимает значение Feature.",
                    "type": "string",
                    "enum": [
                        "Feature"
                    ]
                },
                "properties": {
                    "description": "Дополнительные свойства для геоданных объекта",
                    "type": "object",
                    "properties": {
                        "srs": {
                            "description": "Система координат (пространственная система отсчёта - spatial reference system)\".\nПо-умолчанию устанавливается СК, выбранная на каталоге.",
                            "type": "string",
                            "enum": [
                                "EPSG:4326",
                                "MSK:77"
                            ]
                        },
                        "isManualInput": {
                            "description": "Признак, указывающий, что геоданные должны быть заполнены вручную, а не процессом блока \"На карту\" (при условии, что настройки блока позволяют ручной ввод)",
                            "type": "boolean",
                            "default": false
                        }
                    },
                    "required": [
                        "srs",
                        "isManualInput"
                    ]
                },
                "geometry": {
                    "description": "Описание геометрии объекта",
                    "type": "object",
                    "properties": {
                        "type": {
                            "description": "Тип геометрии объекта. Всегда принимает значение GeometryCollection.",
                            "type": "string",
                            "enum": [
                                "GeometryCollection"
                            ]
                        },
                        "geometries": {
                            "description": "Массив типов геометрии и их координат, которые заполнены для объекта.",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "coordinates": {
                                        "description": "Массив координат",
                                        "oneOf": [
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/Point"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiPoint"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiLineString"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiPolygon"
                                            }
                                        ]
                                    },
                                    "type": {
                                        "$ref": "geodata.yaml#/components/schemas/GeojsonGeoTypeTagIdEnum"
                                    }
                                },
                                "required": [
                                    "coordinates",
                                    "type"
                                ]
                            }
                        }
                    },
                    "required": [
                        "type",
                        "geometries"
                    ]
                }
            },
            "required": [
                "type",
                "geometry"
            ]
        },
        "PublicationObjectGeodata": {
            "description": "Геоданные объекта каталога публикации в формате GeoJSON.",
            "type": "object",
            "properties": {
                "type": {
                    "description": "Тип объекта GeoJSON. Всегда принимает значение Feature.",
                    "type": "string",
                    "enum": [
                        "Feature"
                    ]
                },
                "properties": {
                    "description": "Дополнительные свойства для геоданных объекта",
                    "type": "object",
                    "properties": {
                        "srs": {
                            "description": "Система координат (пространственная система отсчёта - spatial reference system)\".\nПо-умолчанию устанавливается СК, выбранная на каталоге.",
                            "type": "string",
                            "enum": [
                                "EPSG:4326",
                                "MSK:77"
                            ]
                        },
                        "isManualInput": {
                            "description": "Признак, указывающий, что геоданные должны быть заполнены вручную, а не процессом блока \"На карту\" (при условии, что настройки блока позволяют ручной ввод)",
                            "type": "boolean",
                            "default": false
                        }
                    },
                    "required": [
                        "srs",
                        "isManualInput"
                    ]
                },
                "geometry": {
                    "description": "Описание геометрии объекта",
                    "type": "object",
                    "properties": {
                        "type": {
                            "description": "Тип геометрии объекта. Всегда принимает значение GeometryCollection.",
                            "type": "string",
                            "enum": [
                                "GeometryCollection"
                            ]
                        },
                        "geometries": {
                            "description": "Массив типов геометрии и их координат, которые заполнены для объекта.",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "coordinates": {
                                        "description": "Массив координат",
                                        "oneOf": [
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/Point"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiPoint"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiLineString"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/MultiPolygon"
                                            },
                                            {
                                                "$ref": "geodata.yaml#/components/schemas/Polygon"
                                            }
                                        ]
                                    },
                                    "type": {
                                        "$ref": "geodata.yaml#/components/schemas/GeojsonGeoPublTypeTagIdEnum"
                                    }
                                },
                                "required": [
                                    "coordinates",
                                    "type"
                                ]
                            }
                        }
                    },
                    "required": [
                        "type",
                        "geometries"
                    ]
                }
            },
            "required": [
                "type",
                "geometry"
            ]
        },
        "ValidateResponse": {
            "description": "Схема ответа первичной валидации геоданных",
            "type": "object",
            "properties": {
                "isValid": {
                    "description": "Признак, обозначающий результат валидации геоданных",
                    "type": "boolean"
                },
                "details": {
                    "description": "Массив причин почему геоданные невалидны. Если геоданные валидны, то передаётся пустой массив",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "typeGeo": {
                                "description": "Тип геоданных, координаты которого являются невалидными",
                                "$ref": "#/components/schemas/GeojsonGeoTypeTagIdEnum"
                            },
                            "reason": {
                                "description": "Причина невалидности геоданных. Указывается строка, которую вернула функция ST_IsValidDetail",
                                "type": "string"
                            },
                            "location": {
                                "description": "Местоположение (точка), в которой геоданные являются невалидными.",
                                "allOf": [
                                    {
                                        "$ref": "#/components/schemas/Point"
                                    }
                                ]
                            }
                        },
                        "required": [
                            "typeGeo",
                            "reason"
                        ]
                    }
                }
            },
            "required": [
                "isValid",
                "details"
            ]
        },
        "FeatureCollectionObjectGeodata": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "FeatureCollection"
                    ]
                },
                "name": {
                    "type": "string"
                },
                "features": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/ObjectGeodata"
                    }
                }
            }
        },
        "PublicationCatalogStatusTagIdEnum": {
            "description": "Статус публикации каталога публикации:\n  - `unpublished` - не опубликован\n  - `manualPublication` - публикуется вручную\n  - `autoPublication` - публикуется автоматически\n  - `archive` - архивный",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "unpublished",
                        "manualPublication",
                        "autoPublication",
                        "archive"
                    ]
                }
            ]
        },
        "PublicationCatalogStatusNameEnum": {
            "description": "Наименование статуса публикации каталога публикации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "GeneralInfoSyncedPropertyTagIdEnum": {
            "description": "Техническое наименование поля общей информации каталога заполнения, которое синхронизируется с каталогом публикации:\n  - `accountingObject` - объект учета\n  - `thematicCategoryId` - тематическая категория\n  - `periodUpdate` - периодичность обновления\n  - `kindCatalogId` - вид каталога\n  - `typeCatalogId` - тип каталога\n  - `oivsIds` - поставщики информации\n  - `keywords` - ключевые слова",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "accountingObject",
                        "thematicCategoryId",
                        "periodUpdate",
                        "kindCatalogId",
                        "typeCatalogId",
                        "oivsIds",
                        "keywords"
                    ]
                }
            ]
        },
        "GeneralInfoSyncedPropertyNameEnum": {
            "description": "Наименование поля общей информации каталога заполнения, которое синхронизируется с каталогом публикации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "MetadataSyncedPropertyTagIdEnum": {
            "description": "Техническое наименование поля метаданных каталога заполнения, которое синхронизируется с каталогом публикации:\n  - `respPersonFIO` - ФИО ответсвенного\n  - `respPersonEmail` - Email ответственного\n  - `respPersonPhone` - телефон ответственного\n  - `description` - описание каталога",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "respPersonFIO",
                        "respPersonEmail",
                        "respPersonPhone",
                        "description"
                    ]
                }
            ]
        },
        "MetadataSyncedPropertyNameEnum": {
            "description": "Наименование поля метаданных каталога заполнения, которое синхронизируется с каталогом публикации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "MapSyncedPropertyTagIdEnum": {
            "description": "Техническое наименование поля карты каталога заполнения, которое синхронизируется с каталогом публикации:\n  - `hasGeo` - Наличие геопривязки\n  - `typeGeoTagIds` - Тип геометрии",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "hasGeo",
                        "typeGeoTagIds"
                    ]
                }
            ]
        },
        "PublicationCatalogReleasePeriodicityNameEnum": {
            "description": "Название периодичности формирования релизов каталога публикации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "PublicationCatalogReleasePeriodicityTagIdEnum": {
            "description": "Техническое название периодичности формирования релизов каталога публикации",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "daily",
                        "weekly",
                        "monthly",
                        "quarterly",
                        "yearly",
                        "numDays",
                        "calendarDays",
                        "multiple",
                        "withChanges"
                    ]
                }
            ]
        },
        "GeneralInfoSyncedProperty": {
            "description": "Поле общей информации каталога заполнения, которое синхронизируется с каталогом публикации",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/GeneralInfoSyncedPropertyTagIdEnum"
                },
                "name": {
                    "$ref": "#/components/schemas/GeneralInfoSyncedPropertyNameEnum"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "MetadataSyncedProperty": {
            "description": "Поле метаданных каталога заполнения, которое синхронизируется с каталогом публикации",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/MetadataSyncedPropertyTagIdEnum"
                },
                "name": {
                    "$ref": "#/components/schemas/MetadataSyncedPropertyNameEnum"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "MapSyncedProperty": {
            "description": "Поле метаданных каталога заполнения, которое синхронизируется с каталогом публикации",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/MapSyncedPropertyTagIdEnum"
                },
                "name": {
                    "description": "Наименование поля настройки карты каталога заполнения, которое синхронизируется с каталогом публикации.\nВозможны следующие значения:\n  - hasGeo - Наличие геопривязки\n  - typeGeoTagIds - Тип геометрии",
                    "type": "string"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "PublicationCatalogPriority": {
            "description": "Приоритет публикации каталога",
            "type": "integer",
            "format": "int32",
            "minimum": 1,
            "maximum": 11
        },
        "PublicationCatalogStatus": {
            "description": "Cтатус публикации каталога публикации",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/PublicationCatalogStatusTagIdEnum"
                },
                "name": {
                    "$ref": "#/components/schemas/PublicationCatalogStatusNameEnum"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "CommonPublicationCatalogInfo": {
            "description": "Общая информация о каталоге публикации",
            "type": "object",
            "properties": {
                "publicationStatus": {
                    "$ref": "#/components/schemas/PublicationCatalogStatusTagIdEnum"
                },
                "periodUpdate": {
                    "$ref": "#/components/schemas/PublicationCatalogReleasePeriodicityNameEnum"
                },
                "dateNextUpdate": {
                    "description": "Рассчитанная дата следующей публикации каталога, вычисленной на основе даты последней публикации и периодичности формирования релизов.\nФормат даты: DD.MM.YYYY"
                }
            },
            "required": [
                "publicationStatus",
                "periodUpdate",
                "dataNextUpdate"
            ]
        },
        "PublicationCatalogListItem": {
            "description": "Элемент списка каталогов публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogListItem"
                }
            ],
            "properties": {
                "publicationStatus": {
                    "$ref": "#/components/schemas/PublicationCatalogStatusTagIdEnum"
                },
                "sourceCatalogId": {
                    "description": "Идентификатор каталога-источника",
                    "type": "integer"
                },
                "userPrivileges": {
                    "$ref": "users.yaml#/components/schemas/UserPrivilegePubl"
                }
            },
            "required": [
                "publicationStatus",
                "sourceCatalogId",
                "userPrivileges"
            ]
        },
        "PublicationCatalogUpdatePeriodicity": {
            "description": "Периодичность формирования релизов каталога публикации",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/PublicationCatalogReleasePeriodicityTagIdEnum"
                },
                "name": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PublicationCatalogReleasePeriodicityNameEnum"
                        }
                    ],
                    "readOnly": true
                },
                "numDays": {
                    "description": "Настройки периодичности \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "type": "integer"
                },
                "calendarDays": {
                    "description": "Настройки периодичности \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "day": {
                                "description": "День месяца в формате DD.MM",
                                "type": "string",
                                "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                            }
                        }
                    },
                    "minItems": 1
                },
                "isCheckLastDay": {
                    "description": "Дополнительное свойство для периодичности \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "type": "boolean"
                },
                "multiple": {
                    "description": "Настройки периодичности \"Множественная периодичность\". Обязателен, если tagId = multiple.",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "tagId": {
                                "$ref": "#/components/schemas/PublicationCatalogReleasePeriodicityTagIdEnum"
                            },
                            "name": {
                                "allOf": [
                                    {
                                        "$ref": "#/components/schemas/PublicationCatalogReleasePeriodicityNameEnum"
                                    }
                                ],
                                "readOnly": true
                            },
                            "dateStart": {
                                "description": "Дата начала действия указанной периодичности. Используется формат DD.MM",
                                "type": "string",
                                "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                            },
                            "numDays": {
                                "description": "Настройки периодичности \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                                "type": "integer"
                            },
                            "calendarDays": {
                                "description": "Настройки периодичности \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "day": {
                                            "description": "День месяца в формате DD.MM",
                                            "type": "string",
                                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$"
                                        }
                                    }
                                },
                                "minItems": 1
                            },
                            "isCheckLastDay": {
                                "description": "Дополнительное свойство для периодичности \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последней публкиации\"",
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "tagId",
                            "name",
                            "dateStart"
                        ]
                    },
                    "minItems": 1
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "PublicationCatalogGeneralInfo": {
            "description": "Общая информация каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogGeneralInfo"
                }
            ],
            "properties": {
                "fillingCatalogId": {
                    "description": "Идентификатор каталога заполнения",
                    "type": "integer",
                    "format": "int32"
                },
                "identNumber": {
                    "description": "Идентификационный номер каталога публикации",
                    "type": "string"
                },
                "syncedProperties": {
                    "description": "Синхронизируемые параметры общей информации из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/GeneralInfoSyncedProperty"
                    },
                    "readOnly": true
                },
                "syncedPropertiesTagIds": {
                    "description": "Технические названия синхронизируемых параметров общей информации из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/GeneralInfoSyncedPropertyTagIdEnum"
                    },
                    "writeOnly": true
                },
                "defaultPriority": {
                    "description": "Приоритет публикации каталога по умолчанию",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PublicationCatalogPriority"
                        }
                    ],
                    "default": 5
                },
                "periodUpdate": {
                    "$ref": "#/components/schemas/PublicationCatalogUpdatePeriodicity"
                },
                "hasEnglishVersion": {
                    "description": "Признак наличия английской версии у каталога.\nПо умолчанию каталог не имеет английской версии.\n\nЕсли имеет значение `true`, то поля `fullNameEn`, `shortNameEn`, `accountingObjectEn` и `keywordsEn` являются обязательными.",
                    "type": "boolean"
                },
                "fullNameEn": {
                    "description": "Полное наименование каталога на английском языке",
                    "type": "string",
                    "minLength": 1
                },
                "shortNameEn": {
                    "description": "Краткое наименование каталога на английском языке",
                    "type": "string",
                    "minLength": 1
                },
                "accountingObjectEn": {
                    "description": "Объект учёта каталога на английском языке",
                    "type": "string",
                    "minLength": 1
                },
                "keywordsEn": {
                    "description": "Ключевые слова каталога на английском языке",
                    "type": "string",
                    "minLength": 1
                }
            },
            "required": [
                "fillingCatalogId",
                "syncedProperties",
                "syncedPropertiesTagIds",
                "defaultPriority",
                "hasEnglishVersion"
            ]
        },
        "CommonPublicationCatalogAttribute": {
            "description": "Общая информация атрибута каталога публикации.",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogAttribute"
                }
            ],
            "properties": {
                "rown": {
                    "description": "Уникальный идентификатор атрибута каталога в БД публикации (используется в REST API публикации)",
                    "readOnly": true,
                    "type": "string"
                },
                "maxLength": {
                    "description": "Максимальная длина значения (используется в REST API публикации)\n\nДля всех типов кроме строки, целое число и дробное число возвращается 4000 по умолчанию",
                    "readOnly": true,
                    "type": "integer"
                }
            },
            "required": [
                "rown",
                "maxLength"
            ]
        },
        "StringPublicationCatalogAttribute": {
            "description": "Строковый атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "IntegerPublicationCatalogAttribute": {
            "description": "Целочисленный атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "FloatPublicationCatalogAttribute": {
            "description": "Атрибут каталога публикации с типом дробное число",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "DatePublicationCatalogAttribute": {
            "description": "Атрибут каталога публикации с типом дата (и время)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "FilePublicationCatalogAttribute": {
            "description": "Файловый атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "BooleanPublicationCatalogAttribute": {
            "description": "Атрибут каталога публикации с типом флаг",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ]
        },
        "DictPublicationCatalogAttribute": {
            "description": "Справочный атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                },
                {
                    "properties": {
                        "attribute": {
                            "$ref": "attributes.yaml#/components/schemas/DictionaryAttribute"
                        }
                    }
                }
            ],
            "properties": {
                "defaultColDictTechName": {
                    "description": "Столбец справочника, который будет отображаться в каталоге. По умолчанию поле \"Наименование\".",
                    "type": "string",
                    "writeOnly": true
                },
                "defaultColDict": {
                    "type": "object",
                    "description": "Столбец справочника, который будет отображаться в каталоге.",
                    "allOf": [
                        {
                            "$ref": "dictionaries.yaml#/components/schemas/DictionaryColumn"
                        }
                    ],
                    "readOnly": true
                }
            },
            "required": [
                "defaultColDictTechName",
                "defaultColDict"
            ]
        },
        "LinkPublicationCatalogAttribute": {
            "description": "Ссылочный атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ],
            "properties": {
                "refCatalog": {
                    "description": "Каталог публикации, на объекты которого ссылается объект",
                    "type": "object",
                    "readOnly": true,
                    "properties": {
                        "id": {
                            "description": "Идентификатор каталога",
                            "type": "integer"
                        },
                        "name": {
                            "description": "Полное наименование каталога",
                            "type": "string"
                        },
                        "mainAttrId": {
                            "description": "Идентификатор главного атрибута"
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "mainAttrId"
                    ]
                },
                "refCatalogId": {
                    "description": "Идентификатор каталога публикации, на объекты которого ссылается объект",
                    "type": "integer",
                    "writeOnly": true
                }
            },
            "required": [
                "refCatalog",
                "refCatalogId"
            ]
        },
        "TablePublicationCatalogAttribute": {
            "description": "Табличный атрибут каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttribute"
                }
            ],
            "properties": {
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога, хранящего значения объектов табличного атрибута.\n\nПри создании передается отрицательный идентификатор, уникальный в пределах запроса.",
                    "type": "integer",
                    "format": "int32"
                },
                "attributes": {
                    "description": "Атрибутивный состав вложенного каталога (табличного атрибута)",
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/components/schemas/StringPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/IntegerPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/FloatPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/DatePublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/FilePublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/BooleanPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/DictPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/LinkPublicationCatalogAttribute"
                            },
                            {
                                "$ref": "#/components/schemas/TablePublicationCatalogAttribute"
                            }
                        ]
                    }
                }
            },
            "required": [
                "childCatalogId",
                "attributes"
            ]
        },
        "PublicationCatalogAttribute": {
            "description": "Атрибут каталога публикации",
            "type": "object",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/StringPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/IntegerPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/FloatPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/DatePublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/FilePublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/BooleanPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/DictPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/LinkPublicationCatalogAttribute"
                },
                {
                    "$ref": "#/components/schemas/TablePublicationCatalogAttribute"
                }
            ]
        },
        "CommonAttributePublicationSettings": {
            "description": "Общие настройки публикации атрибута для систем",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "order": {
                    "description": "Порядковый номер атрибута для системы",
                    "type": "integer",
                    "format": "int32"
                },
                "isVisible": {
                    "description": "Является ли атрибут видимым для системы",
                    "type": "boolean"
                },
                "isMain": {
                    "description": "Является ли атрибут главным для системы",
                    "type": "boolean"
                },
                "systemAttributeId": {
                    "description": "Идентификатор системного атрибута, сопоставленного с атрибутом каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "attributeGroupId": {
                    "description": "Идентификатор группы атрибутов, сопоставленной с атрибутом каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога.\n\nПри создании передается отрицательный идентификатор, уникальный в пределах запроса, который совпадает в идентифкиатором, указанном в поле `attributes` для табличных атрибутов.\n\nУказывается только для табличных атрибутов.",
                    "type": "integer",
                    "format": "int32"
                },
                "attributes": {
                    "description": "Атрибуты, входящие в табличный атрибут",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CommonAttributePublicationSettings"
                    }
                }
            },
            "required": [
                "attrId",
                "order",
                "isVisible",
                "isMain"
            ]
        },
        "AttributePublicationSettings": {
            "description": "Настройки публикации атрибута для системы",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonAttributePublicationSettings"
                }
            ]
        },
        "OpodAttributePublicationSettings": {
            "description": "Настройки публикации атрибута для системы \"Портал открытых данных\"",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "order": {
                    "description": "Порядковый номер атрибута для системы",
                    "type": "integer",
                    "format": "int32"
                },
                "isVisible": {
                    "description": "Является ли атрибут видимым для системы",
                    "type": "boolean"
                },
                "isMain": {
                    "description": "Является ли атрибут главным для системы",
                    "type": "boolean"
                },
                "systemAttributeId": {
                    "description": "Идентификатор системного атрибута, сопоставленного с атрибутом каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "attributeGroupId": {
                    "description": "Идентификатор группы атрибутов, сопоставленной с атрибутом каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "isDefaultVisible": {
                    "description": "Является ли атрибут видимым по умолчанию на Портале открытых данных",
                    "type": "boolean"
                },
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога.\n\nПри создании передается отрицательный идентификатор, уникальный в пределах запроса, который совпадает в идентифкиатором, указанном в поле `attributes` для табличных атрибутов.\n\nУказывается только для табличных атрибутов.",
                    "type": "integer",
                    "format": "int32"
                },
                "attributes": {
                    "description": "Атрибуты, входящие в табличный атрибут",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/OpodAttributePublicationSettings"
                    }
                }
            },
            "required": [
                "attrId",
                "order",
                "isVisible",
                "isMain",
                "isDefaultVisible"
            ]
        },
        "CommonSystemPublicationSettings": {
            "description": "Общие настройки публикации для системы",
            "type": "object",
            "properties": {
                "systemId": {
                    "description": "Идентификатор системы",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogRusName": {
                    "description": "Русскоязычное полное наименование каталога для системы",
                    "type": "string"
                },
                "catalogEnName": {
                    "description": "Англоязычное полное наименование каталога для системы",
                    "type": "string"
                },
                "catalogRusShortName": {
                    "description": "Русскоязычное краткое наименование каталога для системы",
                    "type": "string"
                },
                "catalogEnShortName": {
                    "description": "Англоязычное краткое наименование каталога для системы",
                    "type": "string"
                },
                "catalogTechName": {
                    "description": "Техническое наименование каталога для системы",
                    "type": "string"
                },
                "attributeSettings": {
                    "description": "Настройки публикации атрибутов",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CommonAttributePublicationSettings"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "systemId",
                "attributeSettings"
            ]
        },
        "OpodSystemPublicationSettings": {
            "description": "Настройки публкиации для системы \"Портал открытых данных\"",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSystemPublicationSettings"
                },
                {
                    "properties": {
                        "attributeSettings": {
                            "items": {
                                "$ref": "#/components/schemas/OpodAttributePublicationSettings"
                            }
                        }
                    }
                }
            ],
            "properties": {
                "titleSn": {
                    "description": "Заголовок набора данных для социальных сетей",
                    "type": "string"
                },
                "descriptionSn": {
                    "description": "Опсиание набора данных для социальных сетей",
                    "type": "string"
                },
                "seasonalityTagId": {
                    "$ref": "datasets.yaml#/components/schemas/DatasetSeasonalityTagIdEnum"
                },
                "tags": {
                    "description": "Тэги набора данных",
                    "type": "string"
                },
                "sefUrl": {
                    "description": "SEF URL, разрешается использование латинских букв, цифр и дефиса.",
                    "type": "string"
                },
                "polygonsSortingTagId": {
                    "description": "Идентификатор сортировки полигональных объектов",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/SortingOrderTagIdEnum"
                        }
                    ]
                },
                "isClusteredByDistrict": {
                    "description": "Включена ли сортировка по округам и районам",
                    "type": "boolean"
                },
                "isIsoIndicatorsDataset": {
                    "description": "Содержит ли набор показатели ISO37120 и U4SSC",
                    "type": "boolean"
                },
                "isAvailableDataset": {
                    "description": "Относится ли набор данных к категории \"Доступная среда\"",
                    "type": "boolean"
                },
                "forumLink": {
                    "description": "Ссылка на форум",
                    "type": "string"
                },
                "dictTypeId": {
                    "$ref": "datasets.yaml#/components/schemas/DatasetDictionaryTypeTagIdEnum"
                }
            },
            "required": [
                "seasonalityTagId",
                "tags",
                "sefUrl",
                "isClusteredByDistrict",
                "isIsoIndicatorsDataset",
                "isAvailableDataset"
            ]
        },
        "YandexSystemPublicationSettings": {
            "description": "Настройки публкиации для системы \"Яндекс\"",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSystemPublicationSettings"
                },
                {
                    "properties": {
                        "attributeSettings": {
                            "items": {
                                "$ref": "#/components/schemas/AttributePublicationSettings"
                            }
                        }
                    }
                }
            ],
            "properties": {
                "rubricatorId": {
                    "description": "Идентификатор рубрикатора каталога для системы \"Яндекс\".",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "rubricator": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/Rubric"
                        }
                    ],
                    "readOnly": true
                }
            }
        },
        "Rubric": {
            "description": "Данные рубрикатора для системы \"Яндекс\".",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор рубрикатора",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Наименование рубрикатора",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "SystemPublicationSettings": {
            "description": "Настройки публкиации для системы",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonSystemPublicationSettings"
                },
                {
                    "properties": {
                        "attributeSettings": {
                            "items": {
                                "$ref": "#/components/schemas/AttributePublicationSettings"
                            }
                        }
                    }
                }
            ]
        },
        "PublicationSorting": {
            "description": "Сортировка по атрибуту в каталоге публикации",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута каталога, по которому определена сортировка",
                    "type": "integer",
                    "format": "int32"
                },
                "sortingOrder": {
                    "$ref": "_common.yaml#/components/schemas/SortingOrderTagIdEnum"
                }
            },
            "required": [
                "attrId",
                "sortingOrder"
            ]
        },
        "PublicationCatalogMetadata": {
            "description": "Метаданные каталога публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogMetadata"
                }
            ],
            "properties": {
                "syncedProperties": {
                    "description": "Синхронизируемые параметры метаданных из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/MetadataSyncedProperty"
                    },
                    "readOnly": true
                },
                "syncedPropertiesTagIds": {
                    "description": "Технические названия синхронизируемых параметров метаданных из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/MetadataSyncedPropertyTagIdEnum"
                    },
                    "writeOnly": true
                }
            },
            "required": [
                "syncedPropertiesTagIds"
            ]
        },
        "PublicationCatalogSettings": {
            "description": "Настройки каталога публикации",
            "type": "object",
            "properties": {
                "generalInfo": {
                    "$ref": "#/components/schemas/PublicationCatalogGeneralInfo"
                },
                "attributes": {
                    "description": "Атрибуты каталога публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogAttribute"
                    },
                    "minItems": 1
                },
                "meta": {
                    "$ref": "#/components/schemas/PublicationCatalogMetadata"
                },
                "systemPublicationSettings": {
                    "description": "Настройки публикации для систем-потребителей",
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/components/schemas/SystemPublicationSettings"
                            },
                            {
                                "$ref": "#/components/schemas/OpodSystemPublicationSettings"
                            },
                            {
                                "$ref": "#/components/schemas/YandexSystemPublicationSettings"
                            }
                        ]
                    }
                },
                "sortings": {
                    "description": "Настройки сортировки каталога публикации.\nПередается в виде массива объектов, вклчюающий идентификатор атрибута в каталоге и порядок сортировки.\n\nНесколько объектов определяют многоуровневую сортировку.\nПорядок объектов в массиве определяет уровни сортировки.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationSorting"
                    }
                },
                "publicationConditions": {
                    "description": "Условия ограничения выборки каталога публикации.\n\nПередается в виде строки, имеющий синтаксис, аналогичный синтаксису условий в конструкторе процессов.",
                    "type": "string"
                },
                "map": {
                    "$ref": "#/components/schemas/PublicationCatalogMap"
                }
            },
            "required": [
                "generalInfo",
                "attributes",
                "map"
            ]
        },
        "PublicationCatalogSystemAccess": {
            "description": "Информация о доступе системы к каталогу публикации",
            "type": "object",
            "allOf": [
                {
                    "$ref": "systems.yaml#/components/schemas/CommonSystemInfo"
                }
            ],
            "properties": {
                "access": {
                    "description": "Признак доступа системы к каталогу публикации",
                    "type": "boolean"
                }
            },
            "required": [
                "access"
            ]
        },
        "SystemPublicationSettingsInHistVersion": {
            "type": "object",
            "properties": {
                "systemsConsumersIds": {
                    "description": "Список идентификаторов систем потребителей данных",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "writeOnly": true
                },
                "systemPublicationSettings": {
                    "$ref": "#/components/schemas/SystemPublicationSettings"
                }
            }
        },
        "CommonPublicationCatalogAttributeForValidation": {
            "description": "Основные свойства атрибута кататалога заполнения, необходимые для проведения валидации настроек конструктора проверок, групповой и условной уникальностей\".",
            "type": "object",
            "properties": {
                "techName": {
                    "description": "Техническое наименование атрибута.",
                    "type": "string"
                },
                "typeTagId": {
                    "$ref": "attributes.yaml#/components/schemas/AttributeTypeTagIdEnum"
                }
            },
            "required": [
                "techName",
                "typeTagId"
            ]
        },
        "DictPublicationCatalogAttributeForValidation": {
            "description": "Свойства справочного атрибута каталога публикации, необходимые для проведения валидации настроек огранчиения выборки",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttributeForValidation"
                },
                {
                    "properties": {
                        "dictionaryId": {
                            "description": "Идентификатор справочника, который используется в справочном атрибуте",
                            "type": "integer"
                        }
                    },
                    "required": [
                        "dictionaryId"
                    ]
                }
            ]
        },
        "PublicationCatalogAttributeForValidation": {
            "description": "Атрибут каталога публикации с набором свойств, необходимых для проведения валидации настроек огранчиения выборки",
            "type": "object",
            "oneOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationCatalogAttributeForValidation"
                },
                {
                    "$ref": "#/components/schemas/DictPublicationCatalogAttributeForValidation"
                }
            ]
        },
        "PublicationConditionsValidationError": {
            "type": "object",
            "properties": {
                "code": {
                    "description": "HTTP-код ошибки",
                    "type": "integer",
                    "format": "int32",
                    "example": 400
                },
                "messageType": {
                    "description": "Тип ответа",
                    "type": "string",
                    "example": "Bad request"
                },
                "errors": {
                    "description": "Массив ошибок, обнаруженных при валидации настройки ограничения выборки",
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "Недопустимое выражение '{expression}'.",
                            "Найдено {symbol/expression}. Ожидалось {symbol/expression}.",
                            "В каталоге отсутсвует указанный атрибут attr.{techName}.",
                            "Указано значение с некорректным типом данных. Ожидалось {type}.",
                            "Передан некорректный набор входных параметров в {operator}.",
                            "Не найден справочник с идентификатором {dictId}.",
                            "Не найден элемент справочника {elementId} в справочнике {dictId}.",
                            "Атрибут с типом {type} недоступен для оператора {operator}.",
                            "Не найден каталог с идентификатором {catalogId}.",
                            "Не найдено регулярное выражение с идентификатором {regexpId}.",
                            "В справочнике отсутсвует указанный атрибут attr.{dictTechName}.{columnTechName}/dictAttr.{techName}",
                            "Атрибут с типом ссылка и таблица не может быть использован в условии огранчиения выборки"
                        ]
                    }
                }
            },
            "required": [
                "code",
                "messageType",
                "errors"
            ]
        },
        "PublicationAttributeChange": {
            "description": "Изменение в атрибуте каталога публикации",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "newRusName": {
                    "description": "Новое русскоязычное наименование атрибута",
                    "type": "string"
                },
                "newEnName": {
                    "description": "Новое англоязычное наименование атрибута",
                    "type": "string"
                },
                "newTechName": {
                    "description": "Новое техническое наименование атрибута",
                    "type": "string"
                },
                "alterNameChanges": {
                    "description": "Изменения в альтернативных наименованиях атрибута",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "description": "Идентификатор альтернативного наименования атрибута",
                                "type": "integer",
                                "format": "int32"
                            },
                            "newRusName": {
                                "description": "Новое русскоязычное альтернативное наименование атрибута",
                                "type": "string"
                            },
                            "newEnName": {
                                "description": "Новое англоязычное альтернативное наименование атрибута",
                                "type": "string"
                            }
                        },
                        "required": [
                            "id"
                        ]
                    }
                },
                "deletedAlterNameIds": {
                    "description": "Идентификаторы удаленных альтернативных наименований атрибута",
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            }
        },
        "PublicationCatalogSyncChange": {
            "description": "Синхронизируемое изменение настроек каталога публикации",
            "type": "object",
            "properties": {
                "maxLengthChanges": {
                    "description": "Изменения значения максимальной длины атрибутов",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "attrId": {
                                "description": "Идентификатор атрибута",
                                "type": "integer",
                                "format": "int32"
                            },
                            "newValue": {
                                "description": "Новое значение для атрибута",
                                "type": "integer",
                                "format": "int32"
                            },
                            "childCatalogId": {
                                "description": "Идентификатор вложеннего каталога, если атрибут принадлежит табличному",
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        "required": [
                            "attrId",
                            "newValue"
                        ]
                    }
                },
                "syncedPropertyChanges": {
                    "description": "Изменения синхронизируемых полей настроек каталога публикации",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "tagId": {
                                "description": "Техническое наименование измененного поля из списка синхронизируемых",
                                "allOf": [
                                    {
                                        "$ref": "#/components/schemas/GeneralInfoSyncedPropertyTagIdEnum"
                                    },
                                    {
                                        "$ref": "#/components/schemas/MetadataSyncedPropertyTagIdEnum"
                                    },
                                    {
                                        "$ref": "#/components/schemas/MapSyncedPropertyTagIdEnum"
                                    }
                                ]
                            },
                            "newValue": {
                                "description": "Новое значение синхронизируемого поля",
                                "oneOf": [
                                    {
                                        "type": "array",
                                        "items": {
                                            "type": "integer",
                                            "format": "int32"
                                        }
                                    },
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer",
                                        "format": "int32"
                                    }
                                ]
                            }
                        },
                        "required": [
                            "tagId",
                            "newValue"
                        ]
                    }
                }
            }
        },
        "PublicationCatalogCatalogAttributeInfo": {
            "description": "Информация о каталоге и атрибуте, в котором используется каталог.",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "attributeId": {
                    "description": "Идентификатор атрибута ЕХД",
                    "type": "integer",
                    "format": "int32"
                },
                "attributeName": {
                    "description": "Русскоязычное наименование атрибута",
                    "type": "string"
                }
            },
            "required": [
                "attributeId",
                "attributeName"
            ]
        },
        "PublicationCatalogMap": {
            "description": "Настройки карты каталога публикации",
            "type": "object",
            "properties": {
                "hasGeo": {
                    "description": "Наличие геопривязки в каталоге",
                    "type": "boolean",
                    "default": false
                },
                "typeGeoTagIds": {
                    "description": "Массив строковых идентификаторов типов геометрии",
                    "type": "array",
                    "items": {
                        "$ref": "geodata.yaml#/components/schemas/GeojsonGeoTypeTagIdEnum"
                    }
                },
                "syncedProperties": {
                    "description": "Синхронизируемые параметры карты из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/MapSyncedProperty"
                    },
                    "readOnly": true
                },
                "syncedPropertiesTagIds": {
                    "description": "Технические названия синхронизируемых параметров карты из каталога заполнения, которые автоматически обновляются в каталоге публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/MapSyncedPropertyTagIdEnum"
                    },
                    "writeOnly": true
                }
            },
            "required": [
                "syncedProperties",
                "syncedPropertiesTagIds"
            ]
        },
        "PublicationCatalogRelease": {
            "description": "Информация об одном релизе КП.",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Уникальный идентификатор релиза",
                    "type": "integer"
                },
                "createDate": {
                    "description": "Дата создания релиза",
                    "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                },
                "cntPublished": {
                    "description": "Количество новых опубликованных объектов в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntDeleted": {
                    "description": "Количество помеченных удалёнными объектов в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntRestored": {
                    "description": "Количество восстановленных объектов в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntUpdated": {
                    "description": "Количество изменённых объектов в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntPassed": {
                    "description": "Количество обработанных записей каталога, которые не были опубликованы, изменены, удалены или восстановлены в БД публикации в связи с несоответствием условию ограничения выборки.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntActive": {
                    "description": "Общее количество активных объектов каталога публикации, получившееся в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                },
                "cntAll": {
                    "description": "Общее количество всех объектов каталога публикации, получившееся в рамках релиза.",
                    "type": "integer",
                    "minimum": 0
                }
            },
            "required": [
                "cntPublished",
                "cntDeleted",
                "cntRestored",
                "cntUpdated",
                "cntPassed",
                "cntActive",
                "cntAll"
            ]
        },
        "PublicationCatalogVersion": {
            "type": "object",
            "properties": {
                "versionNum": {
                    "description": "Номер версии настроек каталога публикации",
                    "type": "integer",
                    "minimum": 1
                },
                "dateFrom": {
                    "allOf": [
                        {
                            "description": "Дата создания версии"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateUntil": {
                    "allOf": [
                        {
                            "description": "Дата окончания актуальности версии"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                }
            }
        },
        "PublicationCatalogSettingsChange": {
            "description": "Настройки каталога публикации для проверки запуска перепубликации",
            "type": "object",
            "properties": {
                "attributes": {
                    "description": "Настройки атрибутов каталога публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogAttribute"
                    }
                },
                "conditions": {
                    "description": "Настройки ограничения выборки каталога публикации",
                    "type": "string"
                },
                "map": {
                    "description": "Настройки карты каталога публикации",
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PublicationCatalogMap"
                        }
                    ]
                }
            },
            "required": [
                "attributes",
                "conditions",
                "mapShort"
            ]
        },
        "CommonCatalogGroupInfo": {
            "description": "Основная информация группы каталогов",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор группы каталогов",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование группы каталогов",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "CatalogGroupListItem": {
            "description": "Информация о группах каталогов в списке групп каталогов",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogGroupInfo"
                }
            ]
        },
        "CatalogGroup": {
            "description": "Информация о группах каталогов в списке групп каталогов",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogGroupInfo"
                }
            ],
            "properties": {
                "addNewCat": {
                    "description": "Добавлять все новые каталоги в группу",
                    "type": "boolean"
                },
                "addNewCatOiv": {
                    "description": "Добавлять все каталоги выбранных ОИВ в группу",
                    "type": "boolean"
                },
                "oivs": {
                    "description": "Перечень ОИВов, выбранных при addNewCatOiv=true",
                    "type": "array",
                    "items": {
                        "$ref": "oivs.yaml#/components/schemas/CommonOivInfo"
                    },
                    "readOnly": true
                },
                "oivIds": {
                    "description": "Перечень ОИВов, выбранных при addNewCatOiv=true",
                    "writeOnly": true,
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                }
            },
            "required": [
                "addNewCat",
                "addNewCatOiv"
            ]
        },
        "CatalogGroupCatalogRequest": {
            "description": "Информация о каталогах, добавляемых в группу каталогов (список идентификаторов)",
            "type": "array",
            "items": {
                "type": "integer"
            }
        },
        "UserSpecPrivilegeCatalogGroup": {
            "description": "Информация о пользователе и спецпривилегиях для группы каталогов",
            "properties": {
                "id": {
                    "description": "Идентификатор пользователя",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "login": {
                    "description": "Логин пользователя",
                    "type": "string"
                },
                "userFio": {
                    "description": "ФИО пользователя",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "login",
                "userFio"
            ]
        },
        "DatasetPublicationStatusTagIdEnum": {
            "description": "Статус публикации набора данных:\n  - `published` - опубликован\n  - `unpublished` - не опубликован\n  - `archive` - архивный",
            "type": "string",
            "enum": [
                "published",
                "archive",
                "unpublished"
            ]
        },
        "DatasetPublicationStatusNameEnum": {
            "description": "Наименование статуса публикации набора данных",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "DatasetSeasonalityTagIdEnum": {
            "description": "Техническое наименование сезонности набора данных:\n  - `notSeasonal` - Несезонный набор данных;\n  - `winter` - Зимний набор данных;\n  - `summer` - Летний набор данных;\n  - `allSeasonal` - Всесезонный набор данных.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "notSeasonal",
                        "winter",
                        "summer",
                        "allSeasonal"
                    ]
                }
            ]
        },
        "DatasetSeasonalityNameEnum": {
            "description": "Наименование сезонности набора данных",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "DatasetSeasonality": {
            "description": "Сезонность набора данных",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/DatasetSeasonalityTagIdEnum"
                },
                "name": {
                    "$ref": "#/components/schemas/DatasetSeasonalityNameEnum"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "DatasetDictionaryTypeTagIdEnum": {
            "description": "Техническое наименование типа справочника для набора данных:\n  - `regular` - Обычный;\n  - `regional` - Региональный;\n  - `federal` - Федеральный.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "regular",
                        "regional",
                        "federal"
                    ]
                }
            ]
        },
        "DatasetDictionaryTypeNameEnum": {
            "description": "Наименование типа справочника для набора данных.",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "DatasetDictionaryType": {
            "description": "Тип справочника для набора данных",
            "type": "object",
            "properties": {
                "tagId": {
                    "$ref": "#/components/schemas/DatasetDictionaryTypeTagIdEnum"
                },
                "name": {
                    "$ref": "#/components/schemas/DatasetDictionaryTypeNameEnum"
                }
            },
            "required": [
                "tagId",
                "name"
            ]
        },
        "DatasetListItem": {
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор набора данных",
                    "type": "integer"
                },
                "name": {
                    "description": "Полное наименование набора данных",
                    "type": "string"
                },
                "publicationStatus": {
                    "$ref": "#/components/schemas/DatasetPublicationStatusNameEnum"
                },
                "lastReleaseDate": {
                    "description": "Дата открытия актуального релиза набора данных",
                    "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                },
                "publicationCatalogId": {
                    "description": "Идентификатор каталога публикации, который связан с актуальной версией набора данных",
                    "type": "integer"
                },
                "publicationCatalogHasNewVersion": {
                    "description": "Признак наличия новых версий каталога публикации, которые были созданы после открытия версии набора данных.",
                    "type": "boolean"
                }
            }
        },
        "DatasetSettings": {
            "type": "object",
            "properties": {
                "publicationCatalogId": {
                    "description": "Идентификатор каталога публикации, с которым связывается набор данных",
                    "writeOnly": true,
                    "type": "integer"
                },
                "seasonalityTagId": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/DatasetSeasonalityTagIdEnum"
                        },
                        {
                            "default": "allSeasonal"
                        },
                        {
                            "writeOnly": true
                        }
                    ]
                },
                "seasonality": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/DatasetSeasonality"
                        },
                        {
                            "readOnly": true
                        }
                    ]
                },
                "sefUrl": {
                    "description": "SEF URL, который может использоваться в ссылке набора данных. Формируется по следующим правилам:\n{ИНН ОИВ}-{Транслитерация технического наименования для ОПОД}\nДопустимые символы [a-zA-Z0-9-]. Пробелы и нижнее подчёркивание заменяются дефисом.",
                    "type": "string"
                },
                "polygonsSortingTagId": {
                    "description": "Идентификатор сортировки полигональных объектов",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/SortingOrderTagIdEnum"
                        }
                    ]
                },
                "isClusteredByDistrict": {
                    "description": "Признак наличия кластеризации по округам и районам",
                    "type": "boolean"
                },
                "isIsoIndicatorsDataset": {
                    "description": "Признак, содержит ли набор показатели ISO37120 и U4SSC",
                    "type": "boolean"
                },
                "isAvailableDataset": {
                    "description": "Признак, относится ли набор данных к категории \"Доступная среда\"",
                    "type": "boolean"
                },
                "forumLink": {
                    "description": "Ссылка на обсуждение в социальных сетях",
                    "type": "string"
                },
                "isDict": {
                    "description": "Признак, что набор данных раскрывается на ОПОД как справочник",
                    "type": "boolean"
                },
                "dictTypeTagId": {
                    "type": "string"
                },
                "isManualRelease": {
                    "description": "Признак, что релизы набора данных выпускаются вручную",
                    "type": "boolean",
                    "default": false
                },
                "useAsDictDatasetIds": {
                    "description": "Массив идентификаторов наборов данных - справочников, которые используются в текущем наборе данных.",
                    "writeOnly": true,
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "useAsDictDatasets": {
                    "description": "Массив объектов из идентификаторов и наименований наборов данных - справочников, которые используются в текущем наборе данных.",
                    "type": "object",
                    "properties": {
                        "id": {
                            "description": "Идентификатор набора данных - справочника",
                            "type": "integer"
                        },
                        "name": {
                            "description": "Полное наименование набора данных",
                            "type": "string"
                        }
                    },
                    "readOnly": true
                }
            },
            "required": [
                "publicationCatalogId",
                "sefUrl"
            ]
        },
        "DatasetVersion": {
            "description": "Версия набора данных",
            "type": "object",
            "properties": {
                "versionNum": {
                    "description": "Номер версии набора данных",
                    "type": "integer"
                },
                "openDate": {
                    "allOf": [
                        {
                            "description": "Дата открытия версии набора данных"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "isActual": {
                    "description": "Признак, что версия является актуальной в ноборе данных",
                    "type": "boolean"
                },
                "publicationCatalogId": {
                    "description": "Идентификатор каталога публикации, который привязан к версии набора данных",
                    "type": "integer"
                },
                "publicationCatalogVersionNum": {
                    "description": "Номер версии каталога публикации",
                    "type": "integer"
                },
                "attributeSettings": {
                    "allOf": [
                        {
                            "description": "Дополнительные настройки свойств атрибутов для набора данных. Настройки доступны только для атрибутов, у которых включена видимость для ОПОД в связанном КП."
                        },
                        {
                            "$ref": "#/components/schemas/DatasetAttributeSettings"
                        }
                    ]
                }
            }
        },
        "DatasetRelease": {
            "description": "Релиз набора данных",
            "type": "object",
            "properties": {
                "releaseNum": {
                    "description": "Релиз набора данных",
                    "type": "integer"
                },
                "createDate": {
                    "allOf": [
                        {
                            "description": "Дата создания релиза"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "openDate": {
                    "allOf": [
                        {
                            "description": "Дата открытия релиза для пользователей ОПОД"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "isActual": {
                    "description": "Признак, что релиз является актуальным в ноборе данных",
                    "type": "boolean"
                },
                "isOpen": {
                    "description": "Признак, что релиз доступен пользователям ОПОД",
                    "type": "boolean"
                },
                "cntObjects": {
                    "description": "Количество объектов в релизе",
                    "type": "integer"
                }
            }
        },
        "DatasetAttributeSettings": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/DatasetCommonAttributeSettings"
                },
                {
                    "type": "object",
                    "properties": {
                        "isDisplayInTable": {
                            "description": "Признак, что атрибут должен отображаться в таблице набора данных при открытии его на портале. Для атрибутов с типом \"Таблица\" всегда принимает значение false.",
                            "type": "boolean",
                            "default": true
                        }
                    }
                }
            ]
        },
        "DatasetCommonAttributeSettings": {
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога.\nУказывается только для табличных атрибутов.",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1
                },
                "isDisplayInExport": {
                    "description": "Признак, что атрибут должен попадать в файл экспорта содержимого набора данных.",
                    "type": "boolean",
                    "default": true
                },
                "attributes": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/DatasetCommonAttributeSettings"
                    }
                }
            }
        },
        "DatasetLiteListItem": {
            "description": "Минимальная информация о наборе данных для выпадающих списков",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор набора данных",
                    "type": "integer"
                },
                "name": {
                    "description": "Наименование набора данных",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ]
        },
        "CommonChildObjectListItem": {
            "description": "Информация об объекте, выводимая в списке объектов вложенного каталога (заполнения и публикации)",
            "type": "object",
            "readOnly": true,
            "properties": {
                "globalObjectId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer",
                    "format": "int64"
                }
            },
            "required": [
                "globalObjectId"
            ]
        },
        "CommonObjectSignInfo": {
            "description": "Общая информация о подписании корневых объектов в списке объектов каталога заполнения",
            "type": "object",
            "readOnly": true,
            "properties": {
                "subjectName": {
                    "description": "Информация о подписанте",
                    "type": "string"
                },
                "issuerName": {
                    "description": "Информация о том, кто выпустил сертификат",
                    "type": "string"
                },
                "signDate": {
                    "description": "Дата подписания",
                    "type": "string",
                    "format": "date"
                }
            }
        },
        "CommonObjectListItem": {
            "description": "Общая информация об объекте, выводимая в списке объектов каталога и вложенного каталога (каталогов заполнения и публикации)",
            "type": "object",
            "readOnly": true,
            "properties": {
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта",
                    "type": "integer",
                    "format": "int64"
                },
                "attributes": {
                    "additionalProperties": {
                        "description": "- <*> = \"field_{attrId}\" для каталога заполнения\n- <*> = \"field_{catalogAttrId}\" для каталога публикации\n    - attrId - идентификатор атрибута в ЕХД\n    - catalogAttrId - идентификатор атрибута каталога\n\nЗначения атрибутов объекта, возвращаются в JSON в виде пары ключ - значение, где ключ записывается в формате \"field_{attrId}\". Возвращаются все атрибуты, кроме табличных. Незаполненные атрибуты имеют значение `null`. Значения формируются по следующим правилам в зависимости от типа:\n  - Строка - значение возвращается с типом string;\n  - Целое число - значение возвращается с типом integer;\n  - Дробное число - значение возвращается с типом number;\n  - Дата - значение возвращается в виде строки с типом string;\n  - Флаг - возвращается в виде объекта. Объект содержит строку `tableValue` со значением \"да\"/\"нет\"/\"\", а также соответствующее логическое значение в поле `boolValue`;\n  - Файл - возвращается в виде объекта. Объект содержит строку `tableValue` со значением \"Файлов: N\", где N - число файлов в значении атрибута, а также массив идентификаторов файлов `fileIds`;\n  - Справочник - возвращается в виде объекта. Объект содержит строку `tableValue` со значениями выбранных элементов справочника, разделенных точкой с запятой, а также массив объектов `dictElements` с данными выбранных элементов справочника. В данных объектах передаются `dictElementId` - идентификатор элемента справочника и `value` - значение атрибута справочника, выбранного для показа в каталоге.\n  В качестве значения выступает атрибут справочника, выбранный в настройках атрибута каталога;\n  - Ссылка - возвращается в виде объекта. Объект содержит строку `tableValue` со значениями выбранных элементов ссылочного каталога, разделенных точкой с запятой, а также массив объектов `linkObjects` с данными выбранных объектов-ссылок. В данных объектах передаются `globalId` - глобавльный идентификатор объекта из ссылочного каталога и `value` - значение атрибута ссылочного каталога, выбранного для показа в каталоге.\n  В качестве значения выступает атрибут ссылочного каталога, выбранный в настройках атрибута каталога.\n  - Таблица - возвращается в виде булевого значения, гдe `true` указывает на наличие вложенных объектов, `false` - на отсутствие.",
                        "oneOf": [
                            {
                                "description": "Значение строкового атрибута",
                                "type": "string"
                            },
                            {
                                "description": "Значение целочисленного атрибута",
                                "type": "integer"
                            },
                            {
                                "description": "Значение атрибута с типом дробное число",
                                "type": "number"
                            },
                            {
                                "description": "Значение атрибута с типом дата",
                                "type": "string"
                            },
                            {
                                "description": "Значение атрибута с типом флаг",
                                "type": "object",
                                "properties": {
                                    "tableValue": {
                                        "description": "Строковое значение атрибута типа Флаг для отображения в столбце таблицы объектов.",
                                        "type": "string"
                                    },
                                    "boolValue": {
                                        "description": "Логическое значение атрибута типа Флаг. Имеет значение `null`, если объект не имеет значения атрибута. Возвращается только для атрибутов типа Флаг.",
                                        "type": "boolean"
                                    }
                                },
                                "required": [
                                    "tableValue"
                                ]
                            },
                            {
                                "description": "Значение атрибута с типом файл",
                                "type": "object",
                                "properties": {
                                    "tableValue": {
                                        "description": "Строковое значение атрибута типа Файл для отображения в столбце таблицы объектов.\nИмеет значение `Файлов: N`, где N - число файлов в значении атрибута",
                                        "type": "string"
                                    },
                                    "fileIds": {
                                        "description": "Идентификаторы файлов значения файлового атрибута. Имеет значение `null`, если объект не имеет значения атрибута.",
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "required": [
                                    "tableValue"
                                ]
                            },
                            {
                                "description": "Значение справочного атрибута",
                                "type": "object",
                                "properties": {
                                    "tableValue": {
                                        "description": "Строковое значение справочного атрибута для отображения в столбце таблицы объектов.\nИмеет значение из выбранных элементов справочника (из столбца, выбранного для отображения в каталоге), разделенных точкой с запятой.",
                                        "type": "string"
                                    },
                                    "dictElements": {
                                        "description": "Массив элементов справочника, выбранных в качестве значения справочного атрибута. Имеет значение `null`, если объект не имеет значения атрибута.",
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "dictElementId": {
                                                    "description": "Идентификатор элемента справочника.",
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "description": "Значение атрибута выбранного элемента справочника.",
                                                    "oneOf": [
                                                        {
                                                            "type": "string"
                                                        },
                                                        {
                                                            "type": "number"
                                                        },
                                                        {
                                                            "type": "integer"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                },
                                "required": [
                                    "tableValue"
                                ]
                            },
                            {
                                "description": "Значение ссылочного атрибута",
                                "type": "object",
                                "properties": {
                                    "tableValue": {
                                        "description": "Строковое значение ссылочного атрибута для отображения в столбце таблицы объектов.\nИмеет значение из выбранных элементов ссылочного каталога (из главного атрибута ссылочного каталога), разделенных точкой с запятой.",
                                        "type": "string"
                                    },
                                    "linkObjects": {
                                        "description": "Массив объектов ссылочного каталога, выбранных в качестве значения ссылочного атрибута. Имеет значение `null`, если объект не имеет значения атрибута.",
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "globalId": {
                                                    "description": "Глобальный идентификатор ссылочного объекта.",
                                                    "type": "integer"
                                                },
                                                "value": {
                                                    "description": "Значение атрибута выбранного объекта ссылочного каталога.",
                                                    "oneOf": [
                                                        {
                                                            "type": "string"
                                                        },
                                                        {
                                                            "type": "number"
                                                        },
                                                        {
                                                            "type": "integer"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                },
                                "required": [
                                    "tableValue"
                                ]
                            },
                            {
                                "description": "Значение табличного атрибута. Значение `true` указывает на наличие вложенных объектов, `false` - на отсутствие.",
                                "type": "boolean"
                            }
                        ]
                    }
                }
            },
            "required": [
                "globalId",
                "attributes",
                "systemObjectId"
            ]
        },
        "ObjectsDataForDeletion": {
            "description": "Информация об объектах, передаваемая при удалении",
            "type": "object",
            "properties": {
                "globalIds": {
                    "description": "Массив глобальных идентификаторов объектов",
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "format": "int64"
                    },
                    "minItems": 1,
                    "maxItems": 500
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках удаляемых объектов",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "attrId": {
                                "description": "Идентификатор атрибута",
                                "type": "integer",
                                "format": "int32"
                            },
                            "value": {
                                "description": "Значение атрибута, передаваемое при удалении.\nДля типов данных справочник, ссылка на объект, файл значение **всегда** передаётся в массиве, независимо от установленного свойства isMultiple на атрибуте.",
                                "oneOf": [
                                    {
                                        "description": "Значение атрибута типа строка",
                                        "type": "string"
                                    },
                                    {
                                        "description": "Значение атрибута типа целое число",
                                        "type": "integer"
                                    },
                                    {
                                        "description": "Значение атрибута типа дробное число",
                                        "type": "number"
                                    },
                                    {
                                        "description": "Значение атрибута типа флаг",
                                        "type": "boolean"
                                    },
                                    {
                                        "description": "Значение атрибута типа дата (без времени) в формате dd.MM.YYYY",
                                        "type": "string",
                                        "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                                    },
                                    {
                                        "description": "Значение атрибута типа дата (со временем) в формате dd.MM.YYYY hh:mm:ss",
                                        "type": "string",
                                        "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                                    },
                                    {
                                        "description": "Значение атрибута типа файл, в массиве передается id (uuid) файла, загруженного на файловый сервер",
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    {
                                        "description": "Значение атрибута типа справочник, в массиве передается id элемента справочника",
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    {
                                        "description": "Значение атрибута типа ссылка, в массиве передается gloabl_id объекта, на который ссылается объект",
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "required": [
                "globalIds"
            ]
        },
        "ObjectStatusTagIdEnum": {
            "description": "Техническое наименование статуса объекта",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "new",
                        "signed",
                        "toModification",
                        "toDeletion",
                        "deleted",
                        "toRecovery"
                    ]
                }
            ]
        },
        "ObjectStatusNameEnum": {
            "description": "Наименование статуса объекта",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "ObjectProcess": {
            "description": "Процесс, запущенный на каталоге или объекте каталога",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор процесса"
                },
                "name": {
                    "$ref": "#/components/schemas/ObjectProcessNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/ObjectProcessTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Фоновая проверка",
                "tagId": "backgroundCheck"
            }
        },
        "ObjectProcessNameEnum": {
            "description": "Название процесса",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "ObjectProcessTagIdEnum": {
            "description": "Технчиеское наименование процесса, запущенного на каталоге или объекте каталога\n  - `backgroundCheck` - Фоновая проверка, \n  - `signing` - Подписание, \n  - `import` - Импорт",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "backgroundCheck",
                        "signing",
                        "import"
                    ]
                }
            ]
        },
        "CatalogObjectListColumnTypeTagIdEnum": {
            "description": "Тип столбца, показывает, какой тип информации передается в столбце списка объектов каталога:\n  - `technical` - техническая информация\n  - `attribute` - атрибут каталога\n  - `manualInput` - признак ручного ввода для атрибута каталога",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "technical",
                        "attribute",
                        "manualInput"
                    ]
                }
            ]
        },
        "CatalogObjectActionTagIdEnum": {
            "description": "Тип действия с объектом при сохранении:\n  - `added` - создание нового объекта,\n  - `modified` - изменение существующего объекта,\n  - `deleted` - удаление существующего объекта",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "added",
                        "modified",
                        "deleted"
                    ]
                }
            ]
        },
        "ObjectStatus": {
            "description": "Статус объекта",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор статуса",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/ObjectStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/ObjectStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Новый",
                "tagId": "new"
            }
        },
        "LastChangeTypeTagIdEnum": {
            "description": "Тип последнего изменения объекта:\n  - `added` - Создание,\n  - `modified` - Изменение,\n  - `signatured` - Подписание,\n  - `deleted` - Удаление,\n  - `recovered` - Восстановление,",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "added",
                        "modified",
                        "signatured",
                        "deleted",
                        "recovered"
                    ]
                }
            ]
        },
        "LastChangeTypeNameEnum": {
            "description": "Наименование типа последнего изменения объекта",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "LastChangeType": {
            "description": "Тип последнего изменения объекта",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор типа изменения",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/LastChangeTypeNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/LastChangeTypeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Создание",
                "tagId": "added"
            }
        },
        "CatalogObjectListColumn": {
            "description": "Информация о столбце в списке объектов каталога",
            "type": "object",
            "readOnly": true,
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута или системного атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Название столбца в списке",
                    "type": "string"
                },
                "objectFieldName": {
                    "description": "Название поля, используемое в объекте каталога",
                    "type": "string"
                },
                "dictionaryId": {
                    "description": "Идентификатор справочника, возвращается для справочных атрибутов каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogId": {
                    "description": "Идентификатор каталога, возвращается для табличных (вложенных) и ссылочных атрибутов каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "columnType": {
                    "$ref": "#/components/schemas/CatalogObjectListColumnTypeTagIdEnum"
                },
                "typeTag": {
                    "$ref": "attributes.yaml#/components/schemas/AttributeTypeTagIdEnum"
                }
            },
            "required": [
                "attrId",
                "name",
                "columnType",
                "typeTag"
            ],
            "example": {
                "attrId": 2342,
                "typeTag": "string",
                "name": "Фамилия",
                "objectFieldName": "field_2342",
                "columnType": "attribute"
            }
        },
        "CommonCatalogObjectListFilter": {
            "description": "Объект, используемый для фильтров по списку объектов",
            "type": "object",
            "allOf": [
                {
                    "$ref": "_common.yaml#/components/schemas/Filter"
                }
            ],
            "example": {
                "attribute": "field_34",
                "operator": "equals",
                "value": "Иванов"
            }
        },
        "RootCatalogObjectListFilter": {
            "type": "object",
            "description": "Объект фильтрации, используемый для фильтрации по списку объектов корневого каталога.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogObjectListFilter"
                }
            ],
            "properties": {
                "childCatalogId": {
                    "description": "Идентификатор вложенного каталога, по атриубту которого производят фильтрацию.\nФильтрация производится только по первому уровню вложенности.",
                    "type": "integer"
                }
            },
            "example": {
                "attribute": "field_34",
                "operator": "equals",
                "value": "Иванов",
                "childCatalogId": 1624
            }
        },
        "ChildCatalogObjectListFilter": {
            "type": "object",
            "description": "Объект фильтрации, используемый для фильтрации по списку объектов вложенного каталога.\n\nВ отличие от фильтрации по корневому каталогу, не позволяет производить фильтрацию по вложенным каталогам (т.е. по вложенным 2, 3 уровня и т.д.) через поле `childCatalogId`.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogObjectListFilter"
                }
            ],
            "example": {
                "attribute": "field_34",
                "operator": "equals",
                "value": "Иванов"
            }
        },
        "CommonCatalogObjectListItem": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonObjectListItem"
                }
            ],
            "description": "Общая информация об объекте в списке объектов каталога заполнения",
            "type": "object",
            "readOnly": true
        },
        "CatalogObjectListItem": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogObjectListItem"
                },
                {
                    "$ref": "#/components/schemas/CommonObjectSignInfo"
                }
            ],
            "description": "Информация об объекте, выводимая в списке объектов каталога",
            "type": "object",
            "readOnly": true,
            "properties": {
                "objectStatus": {
                    "$ref": "#/components/schemas/ObjectStatus"
                },
                "isError": {
                    "description": "Есть ли на объекте ошибки фоновой проверки",
                    "type": "boolean"
                },
                "creationDate": {
                    "description": "Дата создания объекта",
                    "type": "string"
                },
                "lastChangeType": {
                    "description": "Тип последнего изменения объекта",
                    "type": "string"
                },
                "lastChangeDate": {
                    "description": "Дата последнего изменения объекта",
                    "type": "string"
                },
                "lastChangeActorName": {
                    "description": "Имя пользователя или название информационной системы, совершившая последнее действие над объектом",
                    "type": "string"
                },
                "hasGeoObj": {
                    "description": "Признак наличия геоданных в объекте. Указывается только в каталогах, где включено наличие геопривязки.",
                    "type": "boolean"
                },
                "geodata": {
                    "$ref": "geodata.yaml#/components/schemas/ObjectGeodata"
                }
            },
            "required": [
                "objectStatus",
                "isError",
                "creationDate",
                "lastChangeType",
                "lastChangeDate",
                "lastChangeActorName"
            ]
        },
        "ChildCatalogObjectListItem": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogObjectListItem"
                },
                {
                    "$ref": "#/components/schemas/CommonChildObjectListItem"
                }
            ],
            "description": "Информация о объекте, выводимая в списке объектов вложенного каталога",
            "type": "object",
            "readOnly": true
        },
        "FillingNestedCatalogObject": {
            "type": "object",
            "description": "Объект вложенного каталога.\n\nДля идентификации обязательна передача `globalId` или `systemobjectId`.\nПри создании без `systemObjectId` может быть передан отрицательный `globalId` для идентификации возможных ошибок в ответе.\nВ таком случае он должен быть уникальным в рамкха запроса.\n\nПри чтении объектов `action` не указывается.",
            "properties": {
                "action": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogObjectActionTagIdEnum"
                        }
                    ],
                    "writeOnly": true
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта.",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "parentSystemObjectId": {
                    "description": "Идентификатор родительского объекта в системе-поставщике",
                    "type": "string"
                },
                "parentGlobalId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer"
                },
                "rootGlobalId": {
                    "description": "Идентификатор глобального объекта",
                    "type": "integer"
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "parentCatalogId": {
                    "description": "Идентификатор родительского каталога",
                    "type": "integer"
                },
                "rootCatalogId": {
                    "description": "Идентификатор корневого каталога",
                    "type": "integer"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FillingCatalogObjectDataItem"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "action",
                "catalogId",
                "parentCatalogId",
                "rootCatalogId",
                "data"
            ]
        },
        "FillingNestedCatalogObjectVerbose": {
            "type": "object",
            "description": "Объект вложенного каталога с расширенной схемой для справочных и ссылочных атрибутов.\n\nДля идентификации обязательна передача `globalId` или `systemobjectId`.\nПри создании без `systemObjectId` может быть передан отрицательный `globalId` для идентификации возможных ошибок в ответе.\nВ таком случае он должен быть уникальным в рамкха запроса.\n\nПри чтении объектов `action` не указывается.",
            "readOnly": true,
            "properties": {
                "globalId": {
                    "description": "Глобальный идентификатор объекта.",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "parentSystemObjectId": {
                    "description": "Идентификатор родительского объекта в системе-поставщике",
                    "type": "string"
                },
                "parentGlobalId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer"
                },
                "rootGlobalId": {
                    "description": "Идентификатор глобального объекта",
                    "type": "integer"
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "parentCatalogId": {
                    "description": "Идентификатор родительского каталога",
                    "type": "integer"
                },
                "rootCatalogId": {
                    "description": "Идентификатор корневого каталога",
                    "type": "integer"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FillingCatalogObjectDataItemVerbose"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "globalId",
                "parentGlobalId",
                "rootGlobalId",
                "catalogId",
                "parentCatalogId",
                "rootCatalogId",
                "data"
            ]
        },
        "FillingCatalogObjectDataItem": {
            "description": "Значение атрибута объекта.",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "isManualInput": {
                    "description": "Заполнен ли атрибут с использованием ручного ввода.\n`true` указывается только для тех атрибутов, которые сопоставляются со справочником в Автозаполнении. Для самих автозаполняемых указывается `false` (если они не используются для сопоставления со справочником в других блоках Автозаполнение).",
                    "type": "boolean"
                },
                "value": {
                    "description": "Значение атрибута, передаваемое при сохранении или чтении, если verbose=false.\nДля типов данных справочник, ссылка на объект, файл, таблица значение **всегда** передаётся в массиве, независимо от установленного свойства isMultiple на атрибуте.",
                    "oneOf": [
                        {
                            "description": "Значение атрибута типа строка",
                            "type": "string"
                        },
                        {
                            "description": "Значение атрибута типа целое число",
                            "type": "integer"
                        },
                        {
                            "description": "Значение атрибута типа дробное число",
                            "type": "number"
                        },
                        {
                            "description": "Значение атрибута типа флаг",
                            "type": "boolean"
                        },
                        {
                            "description": "Значение атрибута типа дата (без времени) в формате dd.MM.YYYY",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                        },
                        {
                            "description": "Значение атрибута типа дата (со временем) в формате dd.MM.YYYY hh:mm:ss",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                        },
                        {
                            "description": "Значение атрибута типа файл, в массиве передается id (uuid) файла, загруженного на файловый сервер",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "description": "Значение атрибута типа справочник, в массиве передается id элемента справочника",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "description": "Значение атрибута типа ссылка, в массиве передается gloabl_id объекта, на который ссылается объект",
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        {
                            "description": "Значение атрибута типа таблица",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/FillingNestedCatalogObject"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attrId",
                "isManualInput"
            ]
        },
        "FillingCatalogObjectDataItemVerbose": {
            "description": "Значение атрибута объекта.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "isManualInput": {
                    "description": "Заполнен ли атрибут с использованием ручного ввода.\n\n`true` указывается только для тех атрибутов, которые сопоставляются со справочником в Автозаполнении.\nДля самих автозаполняемых указывается `false` (если они не используются для сопоставления со справочником в других блоках Автозаполнение).",
                    "type": "boolean"
                },
                "value": {
                    "description": "Значение атрибута, передаваемое при сохранении или чтении, если verbose=true.\nДля типов данных справочник, ссылка на объект, файл, таблица значение **всегда** передаётся в массиве, независимо от установленного свойства isMultiple на атрибуте.",
                    "oneOf": [
                        {
                            "description": "Значение атрибута типа строка",
                            "type": "string"
                        },
                        {
                            "description": "Значение атрибута типа целое число",
                            "type": "integer"
                        },
                        {
                            "description": "Значение атрибута типа дробное число",
                            "type": "number"
                        },
                        {
                            "description": "Значение атрибута типа флаг",
                            "type": "boolean"
                        },
                        {
                            "description": "Значение атрибута типа дата (без времени) в формате dd.MM.YYYY",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                        },
                        {
                            "description": "Значение атрибута типа дата (со временем) в формате dd.MM.YYYY hh:mm:ss",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                        },
                        {
                            "description": "Значение атрибута типа файл, в массиве передается uuid файла, загруженного на файловый сервер",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "description": "Значение атрибута типа справочник",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "dictElementId": {
                                        "description": "Идентификатор элемента справочника",
                                        "type": "string"
                                    },
                                    "value": {
                                        "description": "Значение элемента справочника из столбца, выбранного в каталоге для отображения",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        {
                            "description": "Значение атрибута типа ссылка",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "globalId": {
                                        "description": "Глобальный идентификатор объекта, записанного в значении ссылочного атрибута",
                                        "type": "integer",
                                        "format": "int64"
                                    },
                                    "value": {
                                        "description": "Значение главного атрибута объекта, записанного в значении ссылочного атрибута",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        {
                            "description": "Значение атрибута типа таблица",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/FillingNestedCatalogObjectVerbose"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attrId",
                "isManualInput"
            ]
        },
        "FillingCatalogObject": {
            "description": "Объект каталога.\n\nДля идентификации обязательна передача `globalId` или `systemobjectId`.\nПри создании без `systemObjectId` может быть передан отрицательный `globalId` для идентификации возможных ошибок в ответе.\n\nПри чтении объектов `action` не указывается.",
            "type": "object",
            "properties": {
                "action": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogObjectActionTagIdEnum"
                        }
                    ],
                    "writeOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта.",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "objectStatus": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ObjectStatus"
                        }
                    ],
                    "readOnly": true
                },
                "isError": {
                    "description": "Есть ли на объекте ошибки фоновой проверки",
                    "type": "boolean",
                    "readOnly": true
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FillingCatalogObjectDataItem"
                    },
                    "minItems": 1
                },
                "geodata": {
                    "$ref": "geodata.yaml#/components/schemas/ObjectGeodata"
                }
            },
            "required": [
                "action",
                "catalogId",
                "data"
            ]
        },
        "FillingCatalogObjectVerbose": {
            "description": "Объект каталога с расширенной схемой для справочных и ссылочных атрибутов.\n\nДля идентификации обязательна передача `globalId` или `systemobjectId`.\nПри создании без `systemObjectId` может быть передан отрицательный `globalId` для идентификации возможных ошибок в ответе.\n\nПри чтении объектов `action` не указывается.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта.",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "objectStatus": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ObjectStatus"
                        }
                    ],
                    "readOnly": true
                },
                "isError": {
                    "description": "Есть ли на объекте ошибки фоновой проверки",
                    "type": "boolean",
                    "readOnly": true
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FillingCatalogObjectDataItemVerbose"
                    },
                    "minItems": 1
                },
                "geodata": {
                    "$ref": "geodata.yaml#/components/schemas/ObjectGeodata"
                }
            },
            "required": [
                "catalogId",
                "globalId",
                "data"
            ]
        },
        "OkCatalogObjectResponse": {
            "allOf": [
                {
                    "$ref": "catalogObjects.yaml#/components/schemas/OkCatalogObjectResponse"
                }
            ],
            "properties": {
                "responseAction": {
                    "$ref": "#/components/schemas/CatalogObjectResponseActionTagIdEnum"
                }
            }
        },
        "IncorrectDataCatalogObjectResponse": {
            "allOf": [
                {
                    "$ref": "catalogObjects.yaml#/components/schemas/IncorrectDataCatalogObjectResponse"
                }
            ],
            "properties": {
                "responseAction": {
                    "$ref": "#/components/schemas/CatalogObjectResponseActionTagIdEnum"
                }
            }
        },
        "CatalogObjectErrors": {
            "description": "Ошибки объекта каталога заполнения",
            "type": "object",
            "properties": {
                "globalId": {
                    "description": "Глобальный идентификатор объекта, для которого вернулась ошибка",
                    "type": "integer",
                    "format": "int64"
                },
                "errorInfo": {
                    "description": "Информация об ошибках ФЛК",
                    "type": "object",
                    "properties": {
                        "mismatchWithProperties": {
                            "description": "Ошибки, обнаруженные при проверке соответствия переданных значений свойствам атрибутов.",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/IncorrectDataAttributeCatalogObjectResponse"
                            }
                        },
                        "mismatchWithConditions": {
                            "description": "Ошибки, обнаруженные при проверке условий, настроенных в конструкторе проверок.",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/IncorrectDataProcessCatalogObjectResponse"
                            }
                        },
                        "mismatchWithGeoProperties": {
                            "description": "Ошибки, обнаруженные при проверке геоданных объекта",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/IncorrectGeodataCatalogObjectResponse"
                            }
                        }
                    }
                }
            },
            "required": [
                "globalId",
                "errorInfo"
            ]
        },
        "IncorrectDataAttributeCatalogObjectResponse": {
            "description": "Ошибка ФЛК для атрибута при сохранении объекта",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута, для которого вернулась ошибка",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога, для которого вернулась ошибка",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrName": {
                    "description": "Наименование атрибута в каталоге, для которого вернулась ошибка",
                    "type": "string"
                },
                "catalogId": {
                    "description": "Идентификатор корневого или вложенного каталога, для объекта которого вернулась ошибка",
                    "type": "integer",
                    "format": "int32"
                },
                "parentCatalogId": {
                    "description": "Идентификатор родительского каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта корневого или вложенного каталога, для которого вернулась ошибка",
                    "type": "integer",
                    "format": "int64"
                },
                "parentGlobalId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer",
                    "format": "int64"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "parentSystemObjectId": {
                    "description": "Идентификатор родительского объекта в системе-поставщике",
                    "type": "string"
                },
                "value": {
                    "description": "Значение атрибута",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "integer"
                            },
                            {
                                "type": "number"
                            },
                            {
                                "type": "boolean"
                            },
                            {
                                "type": "array",
                                "items": {
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "text": {
                    "description": "Сообщение об ошибке",
                    "type": "string"
                }
            },
            "required": [
                "attrId",
                "catalogAttrId",
                "catalogAttrName",
                "сatalogId",
                "value",
                "text"
            ]
        },
        "IncorrectDataProcessCatalogObjectResponse": {
            "description": "Ошибка ФЛК конструктора проверок при сохранении объекта",
            "type": "object",
            "properties": {
                "packageName": {
                    "description": "Название пакета, в котором произошла ошибка.\nНе указывается для корневого пакета конструктора.",
                    "type": "string"
                },
                "text": {
                    "description": "Сообщение об ошибке",
                    "type": "string"
                }
            },
            "required": [
                "text"
            ]
        },
        "IncorrectGeodataCatalogObjectResponse": {
            "description": "Ошибки соответсвия геоданных настройкам карты и правилам первичной валидации.",
            "type": "object",
            "properties": {
                "text": {
                    "description": "Сообщение об ошибке в геоданных объекта",
                    "type": "string"
                }
            }
        },
        "EditProperties": {
            "description": "Свойства редактирования каталога для карточки объекта",
            "type": "object",
            "readOnly": true,
            "properties": {
                "catalogProperties": {
                    "description": "Свойства редактирования объектов каталога",
                    "type": "object",
                    "properties": {
                        "catalogStatus": {
                            "$ref": "catalogs.yaml#/components/schemas/FillingCatalogObjectsStatusTagIdEnum"
                        },
                        "hasGeo": {
                            "description": "Признак наличия геопривязки в каталоге. \nЕсли принимает значение true, то при открытии карточки объекта необходимо дополнительно получить настройки карты каталога.",
                            "type": "boolean"
                        },
                        "isCopyObjects": {
                            "description": "Признак \"Возможно копирование объектов\"",
                            "type": "boolean"
                        },
                        "isDeleteAllObjects": {
                            "description": "Признак \"Возможно одновременное удаление всех объектов\"",
                            "type": "boolean"
                        },
                        "isBlockEditObjectsGUI": {
                            "description": "Признак \"Заблокировать редактирование данных (веб)\"",
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "catalogStatus",
                        "hasGeo",
                        "isCopyObjects",
                        "isDeleteAllObjects",
                        "isBlockEditObjectsGUI"
                    ]
                },
                "dictionaryProperties": {
                    "type": "array",
                    "items": {
                        "$ref": "dictionaries.yaml#/components/schemas/DictionaryListItem"
                    }
                }
            },
            "required": [
                "catalogProperties",
                "dictionaryProperties"
            ]
        },
        "PublicationObjectStatusTagIdEnum": {
            "description": "Техническое наименование статуса объекта каталога публикации",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "active",
                        "deleted"
                    ]
                }
            ]
        },
        "PublicationObjectStatusNameEnum": {
            "description": "Наименование статуса объекта каталога публикации",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "PublicationObjectStatus": {
            "description": "Статус объекта каталога публикации",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор статуса",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/PublicationObjectStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/PublicationObjectStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Активный",
                "tagId": "active"
            }
        },
        "PublicationObjectListColumnTypeTagIdEnum": {
            "description": "Тип столбца, показывает, какой тип информации передается в столбце списка объектов каталога публикации\n\n`technical` - техническая информация\n\n`attribute` - атрибут каталога",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "technical",
                        "attribute"
                    ]
                }
            ]
        },
        "ChildPublicationObjectListItem": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationObjectListItem"
                },
                {
                    "$ref": "catalogObjects.yaml#/components/schemas/CommonChildObjectListItem"
                }
            ],
            "description": "Информация о объекте, выводимая в списке объектов вложенного каталога в каталог публикации",
            "type": "object",
            "readOnly": true
        },
        "CommonPublicationObjectListItem": {
            "allOf": [
                {
                    "$ref": "catalogObjects.yaml#/components/schemas/CommonObjectListItem"
                }
            ],
            "description": "Общая информация об объекте в списке объектов каталога публикации",
            "type": "object",
            "readOnly": true
        },
        "PublicationObjectListItem": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPublicationObjectListItem"
                }
            ],
            "description": "Информация об объекте, выводимая в списке объектов каталога публикации",
            "type": "object",
            "readOnly": true,
            "properties": {
                "publicationStatus": {
                    "$ref": "#/components/schemas/PublicationObjectStatus"
                },
                "publDate": {
                    "description": "Дата публикации",
                    "type": "string",
                    "format": "date"
                },
                "hasGeoObj": {
                    "description": "Признак наличия геоданных в объекте. Указывается только в каталогах, где включено наличие геопривязки.",
                    "type": "boolean"
                },
                "geodata": {
                    "description": "Свойство `properties` для объектов публикации не используется.",
                    "$ref": "geodata.yaml#/components/schemas/PublicationObjectGeodata"
                }
            },
            "required": [
                "publicationStatus",
                "publDate"
            ]
        },
        "PublicationNestedCatalogObject": {
            "type": "object",
            "description": "Объект вложенного каталога публикации.",
            "properties": {
                "globalId": {
                    "description": "Глобальный идентификатор объекта",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "parentSystemObjectId": {
                    "description": "Идентификатор родительского объекта в системе-поставщике",
                    "type": "string"
                },
                "parentGlobalId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer"
                },
                "rootGlobalId": {
                    "description": "Идентификатор глобального объекта",
                    "type": "integer"
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "parentCatalogId": {
                    "description": "Идентификатор родительского каталога",
                    "type": "integer"
                },
                "rootCatalogId": {
                    "description": "Идентификатор корневого каталога",
                    "type": "integer"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogObjectDataItem"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "catalogId",
                "parentCatalogId",
                "rootCatalogId",
                "data"
            ]
        },
        "PublicationNestedCatalogObjectVerbose": {
            "type": "object",
            "description": "Объект вложенного каталога публикации с расширенной схемой для справочных и ссылочных атрибутов.",
            "readOnly": true,
            "properties": {
                "globalId": {
                    "description": "Глобальный идентификатор объекта",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "parentSystemObjectId": {
                    "description": "Идентификатор родительского объекта в системе-поставщике",
                    "type": "string"
                },
                "parentGlobalId": {
                    "description": "Глобальный идентификатор родительского объекта",
                    "type": "integer"
                },
                "rootGlobalId": {
                    "description": "Идентификатор глобального объекта",
                    "type": "integer"
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "parentCatalogId": {
                    "description": "Идентификатор родительского каталога",
                    "type": "integer"
                },
                "rootCatalogId": {
                    "description": "Идентификатор корневого каталога",
                    "type": "integer"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogObjectDataItemVerbose"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "globalId",
                "parentGlobalId",
                "rootGlobalId",
                "catalogId",
                "parentCatalogId",
                "rootCatalogId",
                "data"
            ]
        },
        "PublicationCatalogObjectDataItem": {
            "description": "Значение атрибута объекта.",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "value": {
                    "description": "Значение атрибута, передаваемое при сохранении или чтении, если verbose=false.\nДля типов данных справочник, ссылка на объект, файл, таблица значение **всегда** передаётся в массиве, независимо от установленного свойства isMultiple на атрибуте.",
                    "oneOf": [
                        {
                            "description": "Зачение атрибута типа строка",
                            "type": "string"
                        },
                        {
                            "description": "Зачение атрибута типа целое число",
                            "type": "integer"
                        },
                        {
                            "description": "Зачение атрибута типа дробное число",
                            "type": "number"
                        },
                        {
                            "description": "Зачение атрибута типа флаг",
                            "type": "boolean"
                        },
                        {
                            "description": "Зачение атрибута типа дата (без времени) в формате dd.MM.YYYY",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                        },
                        {
                            "description": "Зачение атрибута типа дата (со временем) в формате dd.MM.YYYY hh:mm:ss",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                        },
                        {
                            "description": "Значение атрибута типа файл, в массиве передается uuid файла, загруженного на файловый сервер",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "description": "Зачение атрибута типа справочник, в массиве передается id элемента справочника",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "description": "Зачение атрибута типа ссылка, в массиве передается gloabl_id объекта, на который ссылается объект",
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        {
                            "description": "Зачение атрибута типа таблица",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/PublicationNestedCatalogObject"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attrId"
            ]
        },
        "PublicationCatalogObjectDataItemVerbose": {
            "description": "Значение атрибута объекта.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "value": {
                    "description": "Значение атрибута, передаваемое при сохранении или чтении, если verbose=true.\nДля типов данных справочник, ссылка на объект, файл, таблица значение **всегда** передаётся в массиве, независимо от установленного свойства isMultiple на атрибуте.",
                    "oneOf": [
                        {
                            "description": "Зачение атрибута типа строка",
                            "type": "string"
                        },
                        {
                            "description": "Зачение атрибута типа целое число",
                            "type": "integer"
                        },
                        {
                            "description": "Зачение атрибута типа дробное число",
                            "type": "number"
                        },
                        {
                            "description": "Зачение атрибута типа флаг",
                            "type": "boolean"
                        },
                        {
                            "description": "Зачение атрибута типа дата (без времени) в формате dd.MM.YYYY",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                        },
                        {
                            "description": "Зачение атрибута типа дата (со временем) в формате dd.MM.YYYY hh:mm:ss",
                            "type": "string",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                        },
                        {
                            "description": "Зачение атрибута типа файл, в массиве передается id файла, загруженного на файловый сервер",
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        {
                            "description": "Зачение атрибута типа справочник",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "dictElementId": {
                                        "description": "Идентификатор элемента справочника",
                                        "type": "string"
                                    },
                                    "value": {
                                        "description": "Значение элемента справочника из столбца, выбранного в каталоге для отображения",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        {
                            "description": "Зачение атрибута типа ссылка",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "globalId": {
                                        "description": "Глобальный идентификатор объекта, записанного в значении ссылочного атрибута",
                                        "type": "integer",
                                        "format": "int64"
                                    },
                                    "value": {
                                        "description": "Значение главного атрибута объекта, записанного в значении ссылочного атрибута",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        {
                            "description": "Зачение атрибута типа таблица",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/PublicationNestedCatalogObjectVerbose"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attrId"
            ]
        },
        "PublicationCatalogObject": {
            "description": "Объект каталога публикации.\n\nДля публикации не требуются дополнительные свойства для геоданных объекта.",
            "type": "object",
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта, назначенный в рамках ГИС ЕХД",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogObjectDataItem"
                    },
                    "minItems": 1
                },
                "geodata": {
                    "description": "Свойство `properties` для объектов публикации не используется.",
                    "$ref": "geodata.yaml#/components/schemas/PublicationObjectGeodata"
                }
            },
            "required": [
                "catalogId",
                "data"
            ]
        },
        "PublicationCatalogObjectVerbose": {
            "description": "Объект каталога публикации с расширенной схемой для справочных и ссылочных атрибутов.\n\nДля публикации не требуются дополнительные свойства для геоданных объекта.",
            "type": "object",
            "readOnly": true,
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта, назначенный в рамках ГИС ЕХД",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicationCatalogObjectDataItemVerbose"
                    },
                    "minItems": 1
                },
                "geodata": {
                    "$ref": "geodata.yaml#/components/schemas/PublicationObjectGeodata"
                }
            },
            "required": [
                "catalogId",
                "globalId",
                "data"
            ]
        },
        "ImportFile": {
            "description": "Данные файла и параметры для обработки файла",
            "type": "object",
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога для импорта",
                    "type": "integer",
                    "format": "int32"
                },
                "file": {
                    "type": "string",
                    "format": "binary",
                    "description": "Файл с содержимым"
                },
                "encoding": {
                    "description": "Кодировка",
                    "type": "string",
                    "enum": [
                        "UTF-8",
                        "WINDOWS-1251",
                        "MACCYRILLIC",
                        "KOI8-R"
                    ]
                },
                "separator": {
                    "description": "Разделитель",
                    "type": "string"
                },
                "textLimiter": {
                    "description": "Ограничитель текста",
                    "type": "string"
                }
            },
            "required": [
                "catalogId",
                "file",
                "encoding",
                "separator",
                "textLimiter"
            ]
        },
        "ProcessedFileInfo": {
            "description": "Информация после обработки файла",
            "type": "object",
            "properties": {
                "fileId": {
                    "description": "Идентификатор файла (uuid)",
                    "type": "string"
                },
                "fileColumns": {
                    "description": "Массив колонок файла",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FileColumn"
                    }
                }
            },
            "required": [
                "fileId",
                "fileColumns"
            ]
        },
        "FileColumn": {
            "description": "Информация о колонке файла",
            "type": "object",
            "properties": {
                "fileColumnName": {
                    "description": "Наименование колонки файла (пользовательское)",
                    "type": "string"
                },
                "fileColumnTechName": {
                    "description": "Техническое наименование колонки файла, задается на бэке. Нужно, чтобы оперировать данными внутри методов/функций",
                    "type": "string"
                }
            },
            "required": [
                "fileColumnName",
                "fileColumnTechName"
            ]
        },
        "ImportInfo": {
            "description": "Данные импорта",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор импорта",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "name": {
                    "description": "Наименование загрузки",
                    "type": "string"
                },
                "catalogId": {
                    "description": "Идентификатор каталога для импорта",
                    "type": "integer",
                    "format": "int32"
                },
                "encoding": {
                    "description": "Кодировка",
                    "type": "string",
                    "enum": [
                        "UTF-8",
                        "WINDOWS-1251",
                        "MACCYRILLIC",
                        "KOI8-R"
                    ]
                },
                "separator": {
                    "description": "Разделитель",
                    "type": "string"
                },
                "textLimiter": {
                    "description": "Ограничитель текста",
                    "type": "string"
                },
                "preparatoryDeletion": {
                    "description": "Предварительное удаление записей",
                    "type": "boolean",
                    "default": false
                },
                "deleteOutdated": {
                    "description": "Удалить неактуальные записи",
                    "type": "boolean",
                    "default": false
                },
                "catalogFileId": {
                    "description": "Идентификатор файла (uuid) для импорта в каталог",
                    "type": "string"
                },
                "catalogFileName": {
                    "description": "Наименование файла для импорта в каталог",
                    "type": "string",
                    "readOnly": true
                },
                "catalogFileArchiveId": {
                    "description": "Идентификатор файла (uuid) архива для импорта данных в атрибуты с типом \"Файл\"",
                    "type": "string"
                },
                "catalogFileArchiveName": {
                    "description": "Наименование файла архива для импорта данных в атрибуты с типом \"Файл\"",
                    "type": "string",
                    "readOnly": true
                },
                "columnsMatching": {
                    "description": "Сопоставление колонок файла с атрибутами каталога",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/ColumnAttrMatchItem"
                    }
                },
                "childCatalogImportInfo": {
                    "description": "Информация об импорте для вложенных атрибутов каталога",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/ChildCatalogImportInfoItem"
                    }
                }
            },
            "required": [
                "id",
                "name",
                "catalogId",
                "encoding",
                "separator",
                "textLimiter",
                "catalogFileId",
                "catalogFileName",
                "columnsMatching"
            ]
        },
        "ColumnAttrMatchItem": {
            "description": "Сопоставление колонки файла с атрибутом каталога",
            "type": "object",
            "properties": {
                "fileColumnName": {
                    "description": "Наименование колонки файла, является уникальным идентификатором",
                    "type": "string"
                },
                "fileColumnTechName": {
                    "description": "Техническое наименование колонки файла, полученное из метода /imports/uploadCSV",
                    "type": "string"
                },
                "attributeId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "attributeTechName": {
                    "description": "Техническое наименование атрибута каталога",
                    "type": "string",
                    "readOnly": true
                },
                "dictAttributeTechName": {
                    "description": "Техническое наименование атрибута справочника. Заполняется только для справочных атрибутов",
                    "type": "string"
                }
            },
            "required": [
                "fileColumnName",
                "fileColumnTechName",
                "attributeId",
                "attributeTechName"
            ]
        },
        "ChildCatalogImportInfoItem": {
            "description": "Информация об импорте для вложенного атрибута каталога",
            "type": "object",
            "properties": {
                "childCatalogId": {
                    "description": "Идентификатор атрибута, содержащего вложенный каталог",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "childCatalogName": {
                    "description": "Наименование атрибута, содержащего вложенный каталог",
                    "type": "string",
                    "readOnly": true
                },
                "childCatalogFileId": {
                    "description": "Идентификатор файла (uuid) для импорта вложенного каталога",
                    "type": "string"
                },
                "childCatalogFileName": {
                    "description": "Наименование файла для импорта вложенного каталога",
                    "type": "string",
                    "readOnly": true
                },
                "columnsMatching": {
                    "description": "Сопоставление колонок файла с атрибутами вложенного каталога",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/ColumnAttrMatchItem"
                    }
                }
            },
            "required": [
                "childCatalogId",
                "childCatalogFileId",
                "columnsMatching"
            ]
        },
        "CatalogImportHistoryItem": {
            "description": "Элемент истории импорта каталога заполнения",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор импорта каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "importName": {
                    "description": "Наименование загрузки",
                    "type": "string"
                },
                "dateStart": {
                    "description": "Дата старта импорта каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateEnd": {
                    "description": "Дата окончания импорта каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "userName": {
                    "description": "ФИО пользователя, запустившего импорт",
                    "type": "string"
                },
                "countInWorkObj": {
                    "description": "Количество объектов, взятых в работу при запуске импорта",
                    "type": "integer"
                },
                "countImportedObj": {
                    "description": "Количество импортированных объектов (по окончании процесса импорта)",
                    "type": "integer"
                },
                "importLogFileId": {
                    "description": "Идентификатор файла лога",
                    "type": "string"
                },
                "status": {
                    "$ref": "#/components/schemas/CatalogImportHistoryStatus"
                }
            },
            "required": [
                "id",
                "importName",
                "dateStart",
                "userName",
                "status"
            ]
        },
        "CatalogImportHistoryStatus": {
            "description": "Статус импорта в истории импортов каталога заполнения",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/ImportHistoryStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/ImportHistoryStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "В работе",
                "tagId": "inWork"
            }
        },
        "ImportHistoryStatusNameEnum": {
            "description": "Название статуса импорта в истории импортов каталога заполнения",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "ImportHistoryStatusTagIdEnum": {
            "description": "Технчиеское навзание статуса импорта в истории импортов каталога заполнения\n  - `new` - Новый, \n  - `inWork` - В работе, \n  - `errorQueue` - Ошибка отправки в брокер, \n  - `errorImport` - Ошибка в процессе импорта, \n  - `canceled` - Импорт отменен пользователем,\n  - `finished` - Импорт объектов завершен.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "new",
                        "inWork",
                        "errorQueue",
                        "errorImport",
                        "canceled",
                        "finished"
                    ]
                }
            ]
        },
        "SecurityEventTypeTagIdEnum": {
            "description": "Техническое наименование типа события безопасности:\n  - `loginAttempt` - попытка входа\n  - `login` - вход в систему\n  - `logout` - выход из системы\n  - `passwordReset` - сброс пароля\n  - `sessionCancel` - системное преркащение сеанса\n  - `userCreate` - создание пользователя\n  - `userAccessChange` - изменение прав доступа пользователя\n  - `userBlock` - блокировка пользователя\n  - `userUnblock` - разблокировка пользователя\n  - `userDelete` - удаление пользователя\n  - `userRestore` - восстановление пользователя",
            "type": "string",
            "enum": [
                "loginAttempt",
                "login",
                "logout",
                "passwordReset",
                "sessionCancel",
                "userCreate",
                "userAccessChange",
                "userBlock",
                "userUnblock",
                "userDelete",
                "userRestore"
            ]
        },
        "SecurityEventType": {
            "description": "Тип события безопасности",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор типа события безопасности",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Наименование типа события безопасности",
                    "type": "string"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SecurityEventTypeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "SecurityEventListItem": {
            "description": "Элемент списка событий безопасности из лога",
            "type": "object",
            "properties": {
                "userId": {
                    "description": "Идентификатор пользователя, связанного с событием безопасности",
                    "type": "integer"
                },
                "login": {
                    "description": "Логин пользователя, связанного с событием безопасности",
                    "type": "string"
                },
                "lastName": {
                    "description": "Фамилия пользователя, связанного с событием безопасности",
                    "type": "string"
                },
                "firstName": {
                    "description": "Имя пользователя, связанного с событием безопасности",
                    "type": "string"
                },
                "pathroName": {
                    "description": "Отчество пользователя, связанного с событием безопасности",
                    "type": "string"
                },
                "email": {
                    "description": "Email пользователя, связанного с событием безопасности",
                    "type": "string"
                },
                "eventDate": {
                    "description": "Дата и время события безопасности",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "eventTypeName": {
                    "description": "Наименование типа события безопасности",
                    "type": "string"
                },
                "isAdmin": {
                    "description": "Является ли пользователя администратором ЕХД",
                    "type": "boolean"
                },
                "changedUser": {
                    "description": "Информация об измененном пользователе.\nВозвращается для событий:\n  - `userCreate` - создание пользователя\n  - `userAccessChange` - изменение прав доступа пользователя\n  - `userBlock` - блокировка пользователя\n  - `userUnblock` - разблокировка пользователя\n  - `userDelete` - удаление пользователя\n  - `userRestore` - восстановление пользователя",
                    "type": "object",
                    "properties": {
                        "userId": {
                            "description": "Идентификатор пользователя",
                            "type": "integer"
                        },
                        "login": {
                            "description": "Логин пользователя",
                            "type": "string"
                        },
                        "lastName": {
                            "description": "Фамилия пользователя",
                            "type": "string"
                        },
                        "firstName": {
                            "description": "Имя пользователя",
                            "type": "string"
                        },
                        "pathroName": {
                            "description": "Отчество пользователя",
                            "type": "string"
                        },
                        "email": {
                            "description": "Email пользователя",
                            "type": "string"
                        }
                    }
                },
                "accessChanges": {
                    "description": "Изменения прав учетной записи пользователя, указанного в `changedUser`.\nВозвращается для события `userAccessChange` - изменение прав доступа пользователя.",
                    "type": "object",
                    "properties": {
                        "userGroup": {
                            "description": "Изменение группы пользователя",
                            "type": "object",
                            "properties": {
                                "oldGroup": {
                                    "description": "Наименование старой группы пользователя",
                                    "type": "string"
                                },
                                "newGroup": {
                                    "description": "Наименование новой группы пользователя",
                                    "type": "string"
                                }
                            }
                        },
                        "userRole": {
                            "description": "Изменение роли пользователя",
                            "type": "object",
                            "properties": {
                                "oldRole": {
                                    "description": "Наименование старой роли пользователя",
                                    "type": "string"
                                },
                                "newRole": {
                                    "description": "Наименование новой роли пользователя",
                                    "type": "string"
                                }
                            }
                        },
                        "menu": {
                            "description": "Изменение пунктов меню",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "changeType": {
                                        "description": "Наименование изменения:\n  - Добавление\n  - Удаление",
                                        "type": "string"
                                    },
                                    "menuItem": {
                                        "description": "Наименование пункта меню",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "specroles": {
                            "description": "Изменение специальных привилегий",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "changeType": {
                                        "description": "Наименование изменения:\n  - Добавление\n  - Удаление\n  - Изменение",
                                        "type": "string"
                                    },
                                    "fillingCatalog": {
                                        "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                                    },
                                    "publicationCatalog": {
                                        "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                                    },
                                    "catalogGroup": {
                                        "$ref": "catalogGroups.yaml#/components/schemas/CommonCatalogGroupInfo"
                                    },
                                    "oldRole": {
                                        "description": "Наименование старой роли пользователя",
                                        "type": "string"
                                    },
                                    "newRole": {
                                        "description": "Наименование новой роли пользователя",
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "AuthUrl": {
            "description": "url-адрес",
            "type": "string",
            "readOnly": true,
            "example": "https://ehd-tools-test.mos.ru/keycloak/admin/master/console/#/master/authentication/policies"
        },
        "SessionListItem": {
            "description": "Информация о сеансе пользователя",
            "type": "object",
            "allOf": [
                {
                    "$ref": "users.yaml#/components/schemas/CommonUserInfo"
                }
            ],
            "properties": {
                "accessJwtId": {
                    "description": "Идентификатор токена доступа",
                    "type": "string"
                },
                "panel": {
                    "description": "Кабинет (пользователя/администратора)",
                    "oneOf": [
                        {
                            "type": "string",
                            "enum": [
                                "admin",
                                "user"
                            ]
                        }
                    ]
                },
                "dateLogin": {
                    "description": "Дата и время входа",
                    "type": "string",
                    "pattern": "/^(?:\\d{4})-(?:\\d{2})-(?:\\d{2})T(?:\\d{2}):(?:\\d{2}):(?:\\d{2}(?:\\.\\d*)?)(?:(?:-(?:\\d{2}):(?:\\d{2})|Z)?)$/"
                },
                "ip": {
                    "description": "IP-адрес пользователя",
                    "type": "string"
                }
            },
            "required": [
                "accessJwtId"
            ]
        },
        "TokenResponse": {
            "description": "Access и refresh-токены доступа пользователя",
            "type": "object",
            "properties": {
                "accessToken": {
                    "description": "JWT-токен",
                    "type": "string",
                    "readOnly": true,
                    "example": "dkgpkpoi0495094irdkgdk45445"
                },
                "refreshToken": {
                    "description": "JWT-токен",
                    "type": "string",
                    "readOnly": true,
                    "example": "ugughgfsghkokgcgfd654676kjnkhk"
                }
            }
        },
        "DigitalSignatureValidationRequest": {
            "description": "Запрос к методу валидации электронной подписи.\n`json` используется при вызове метода внешнего REST API. `xml` - при вызове из SOAP API.",
            "properties": {
                "json": {
                    "description": "Строка JSON-запроса.",
                    "type": "string"
                },
                "xml": {
                    "description": "Строка XML-запроса.",
                    "type": "string"
                }
            }
        },
        "CheckResultTagIdEnum": {
            "description": "Техническое наименование статуса результата проверки",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "success",
                        "error"
                    ]
                }
            ]
        },
        "SigningTypeNameEnum": {
            "description": "Название типа подписания информации каталога заполнения",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SigningTypeTagIdEnum": {
            "description": "Техническое название типа подписания информации каталога заполнения:\n  - `allObjects` - подписание всех неподписанных объектов каталога, \n  - `selectedObjects` - подписание выбранных объектов каталога, \n  - `metadata` - подписание метаданных каталога, \n  - `confirmSign` - подписание отсутствия изменений в каталоге",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "allObjects",
                        "selectedObjects",
                        "metadata",
                        "confirmSign"
                    ]
                }
            ]
        },
        "SigningHistoryStatusNameEnum": {
            "description": "Название статуса подписания в истории подписаний каталога заполнения",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SigningHistoryStatusTagIdEnum": {
            "description": "Технчиеское навзание статуса подписания в истории подписаний каталога заполнения\n  - `inWork` - В работе, \n  - `finished` - Подписание каталога завершено, \n  - `error` - Ошибка подписания, \n  - `hashGen` - Формирование хэша подписи, \n  - `canceled` - Подписание отменено пользователем,\n  - `fillQueue` - Наполнение очереди объектов",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "inWork",
                        "finished",
                        "error",
                        "hashGen",
                        "canceled",
                        "fillQueue"
                    ]
                }
            ]
        },
        "SignStatusNameEnum": {
            "description": "Название статуса подписания информации в каталоге заполнения",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SignStatusTagIdEnum": {
            "description": "Технчиеское навзание статуса подписания информации каталога заполнения:\n  - `signed` - Подписанный, \n  - `unsigned` - Неподписанный, \n  - `expiredSigning` - Подписание просрочено ",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "signed",
                        "unsigned",
                        "expiredSigning"
                    ]
                }
            ]
        },
        "SignObjectLogStatusNameEnum": {
            "description": "Название статуса объекта в логе подписания",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "SignObjectLogStatusTagIdEnum": {
            "description": "Техническое название статуса объекта в логе подписания:\n  - `canceled` - подписание отменено пользователем, \n  - `new` - ожидает обработки, \n  - `done` - готов, \n  - `ErrQueue` - ошибка отправки в брокер,\n  - `inWork` - в обработке,\n  - `ErrSub` - ошибки при подписании",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "canceled",
                        "new",
                        "done",
                        "ErrQueue",
                        "inWork",
                        "ErrSub"
                    ]
                }
            ]
        },
        "SigningCheckResult": {
            "description": "Результат проверки возможности подписания информации в каталоге заполнения",
            "type": "object",
            "properties": {
                "status": {
                    "$ref": "#/components/schemas/CheckResultTagIdEnum"
                },
                "signCheckId": {
                    "type": "integer",
                    "description": "Идентификатор блокировки, которая будет применяться к каталогу"
                },
                "message": {
                    "description": "Сообщения с результатом проверки",
                    "type": "object",
                    "properties": {
                        "isSigning": {
                            "type": "string"
                        },
                        "userRights": {
                            "type": "string"
                        },
                        "FLKErrors": {
                            "type": "string"
                        },
                        "responsiblePerson": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                }
            },
            "required": [
                "status"
            ]
        },
        "DigitalSignatureCertificate": {
            "description": "Информация о сертификате ЭЦП",
            "type": "object",
            "properties": {
                "subjectName": {
                    "description": "Информация о сертификате подписи",
                    "type": "string"
                },
                "issuerName": {
                    "description": "Информация о том, кто выпустил сертификат",
                    "type": "string"
                },
                "validFromDate": {
                    "description": "Дата начала валидации подписи",
                    "type": "string",
                    "format": "date"
                },
                "validToDate": {
                    "description": "Дата окончания валидации подписи",
                    "type": "string",
                    "format": "date"
                },
                "serialNumber": {
                    "description": "Серийный номер",
                    "type": "string"
                },
                "publicKey": {
                    "description": "Публичный ключ",
                    "type": "string"
                }
            },
            "required": [
                "subjectName",
                "issuerName",
                "validFromDate",
                "validToDate",
                "serialNumber",
                "publicKey"
            ]
        },
        "DigitalSignatureInfo": {
            "description": "Данные подписания ЭЦП.",
            "type": "object",
            "properties": {
                "unsignedHash": {
                    "description": "Неподписанный хэш от бэкенда",
                    "type": "string"
                },
                "signedHash": {
                    "description": "Подписанный хэш от КриптоПро",
                    "type": "string"
                },
                "certificateObject": {
                    "$ref": "#/components/schemas/DigitalSignatureCertificate"
                }
            },
            "required": [
                "unsignedHash",
                "signedHash",
                "certificateObject"
            ]
        },
        "SigningHash": {
            "description": "Общий хэш подписания объектов или метаданных каталога заполнения",
            "type": "object",
            "properties": {
                "signatureId": {
                    "description": "Идентификатор процесса подписания",
                    "type": "integer",
                    "format": "int32"
                },
                "hash": {
                    "description": "Хэш подписания",
                    "type": "string"
                }
            },
            "required": [
                "signatureId",
                "hash"
            ]
        },
        "CatalogHistorySignStatus": {
            "description": "Статус подписания информации в истории подписаний каталога заполнения",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/SigningHistoryStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SigningHistoryStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 0,
                "name": "В работе",
                "tagId": "inWork"
            }
        },
        "SignStatus": {
            "description": "Статус подписания информации в каталоге заполнения",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/SignStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SignStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "Подписанный",
                "tagId": "signed"
            }
        },
        "CatalogHistorySignType": {
            "description": "Тип подписания в истории каталога заполнения",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор типа"
                },
                "name": {
                    "$ref": "#/components/schemas/SigningTypeNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SigningTypeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 3,
                "name": "подписание метаданных каталога",
                "tagId": "metadata"
            }
        },
        "SignObjectLogStatus": {
            "description": "Статус объектов в логе подписания",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор типа"
                },
                "name": {
                    "$ref": "#/components/schemas/SignObjectLogStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/SignObjectLogStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 3,
                "name": "в обработке",
                "tagId": "inWork"
            }
        },
        "CatalogSignHistoryItem": {
            "description": "Элемент истории подписаний каталога заполнения",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор подписания каталога заполнения",
                    "type": "integer",
                    "format": "int32"
                },
                "dateStart": {
                    "type": "string",
                    "format": "date",
                    "description": "Дата начала подписания каталога заполнения"
                },
                "dateEnd": {
                    "type": "string",
                    "format": "date",
                    "description": "Дата окончания подписания каталога заполнения"
                },
                "signingType": {
                    "$ref": "#/components/schemas/SigningTypeTagIdEnum"
                },
                "userName": {
                    "description": "ФИО пользователя, запустившего подписание",
                    "type": "string"
                },
                "countInWorkObj": {
                    "type": "integer",
                    "description": "Количество объектов, взятых в работу при запуске процесса подписания"
                },
                "countSignedObj": {
                    "type": "integer",
                    "description": "Количество подписанных объектов (по окончании процесса подписания)"
                },
                "countAllObj": {
                    "type": "integer",
                    "description": "Общее количество объектов каталога заполнения"
                },
                "signLog": {
                    "type": "string",
                    "description": "Ссылка на файл лога"
                },
                "status": {
                    "$ref": "#/components/schemas/CatalogHistorySignStatus"
                }
            },
            "required": [
                "id",
                "dateStart",
                "signingType",
                "userName",
                "status"
            ]
        },
        "CatalogLastSigningInfo": {
            "description": "Информация о последнем подписании информации каталога заполнения",
            "type": "object",
            "properties": {
                "date": {
                    "description": "Дата последнего подписания объектов каталога или подписания отсутствия изменений в объектах",
                    "type": "string",
                    "format": "date"
                },
                "subjectName": {
                    "description": "ФИО владельца сертификата или краткое наименование системы",
                    "type": "string"
                },
                "signingType": {
                    "$ref": "#/components/schemas/SigningTypeTagIdEnum"
                }
            },
            "required": [
                "date",
                "subjectName",
                "signingType"
            ]
        },
        "CatalogSigningInfo": {
            "description": "Информация о подписании объектов и метаданных каталога заполнения",
            "type": "object",
            "properties": {
                "lastSign": {
                    "$ref": "#/components/schemas/CatalogLastSigningInfo"
                },
                "dateNextUpdate": {
                    "description": "Рассчитанная дата следующего обновления каталога, исходя из последней подписи/обновления и периодичности обновления",
                    "type": "string",
                    "format": "date"
                },
                "statusSignObjects": {
                    "$ref": "catalogs.yaml#/components/schemas/FillingCatalogObjectsStatusTagIdEnum"
                },
                "statusSignMetadata": {
                    "$ref": "catalogs.yaml#/components/schemas/FillingCatalogMetadataStatusTagIdEnum"
                },
                "countUnsignedObjects": {
                    "description": "Количество неподписанных объектов, оставшихся после последнего подписания",
                    "type": "integer"
                },
                "countActiveObjects": {
                    "description": "Количество активных объектов в каталоге",
                    "type": "integer"
                }
            },
            "required": [
                "lastSign",
                "dateNextUpdate",
                "statusSignObjects",
                "statusSignMetadata",
                "countUnsignedObjects",
                "countActiveObjects"
            ]
        },
        "CatalogObjectsSignatureInfo": {
            "description": "Информация о подписываемых объектах каталога заполнения",
            "type": "object",
            "properties": {
                "digitalSignatureParams": {
                    "$ref": "#/components/schemas/DigitalSignatureInfo"
                },
                "signatureId": {
                    "description": "Идентификатор подписания каталога, полученный на этапе формирования хэша.",
                    "type": "integer"
                },
                "catalogId": {
                    "description": "Идентификатор каталога заполнения",
                    "type": "integer",
                    "format": "int32"
                },
                "objectBatches": {
                    "description": "Массив подписываемых объектов, объединенных по статусам объектов.\n\nВсего может быть отправлено на подписание не более 500 объектов.",
                    "type": "array",
                    "maxItems": 6,
                    "items": {
                        "type": "object",
                        "properties": {
                            "status": {
                                "$ref": "catalogObjects.yaml#/components/schemas/ObjectStatusTagIdEnum"
                            },
                            "objectIds": {
                                "description": "Глобальные идентификаторы подписываемых объектов",
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "maxItems": 500
                            }
                        },
                        "required": [
                            "status",
                            "objectIds"
                        ]
                    }
                },
                "dateOpen": {
                    "description": "Дата открытия страницы. Используется для проверки, что объекты не были изменены другим пользователем перед подписанием",
                    "type": "string",
                    "format": "date"
                }
            },
            "required": [
                "digitalSignatureParams",
                "signatureId",
                "catalogId",
                "objectBatches",
                "dateOpen"
            ]
        },
        "CommonPushsubInfo": {
            "description": "Основная информация о подписке",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор подписки",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "url": {
                    "description": "Адрес веб-сервиса приема push-уведомлений",
                    "type": "string"
                },
                "pushType": {
                    "description": "Тип push-уведомления",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PushsubTypeTagIdEnum"
                        }
                    ]
                },
                "status": {
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PushsubStatus"
                        }
                    ],
                    "readOnly": true
                }
            },
            "required": [
                "url",
                "pushType"
            ]
        },
        "PushsubListItem": {
            "description": "Информация о подписке в списке подписок",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPushsubInfo"
                }
            ],
            "properties": {
                "systemName": {
                    "description": "Наименование системы-подписчика",
                    "type": "string",
                    "readOnly": true
                },
                "systemLogin": {
                    "description": "Логин (техническое наименование) системы-подписчика",
                    "type": "string",
                    "readOnly": true
                }
            }
        },
        "Pushsub": {
            "description": "Информация о подписке",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonPushsubInfo"
                }
            ],
            "properties": {
                "systemId": {
                    "description": "Идентификатор системы",
                    "writeOnly": true,
                    "type": "integer"
                },
                "system": {
                    "allOf": [
                        {
                            "$ref": "systems.yaml#/components/schemas/CommonSystemInfo"
                        }
                    ],
                    "readOnly": true
                },
                "forAccum": {
                    "description": "Признак подписки на сборные каталоги",
                    "type": "boolean"
                },
                "needAuth": {
                    "description": "Требуется авторизация в сервисе приема push-уведомлений",
                    "type": "boolean"
                },
                "authLogin": {
                    "description": "Логин для авторизации в сервисе приема push-уведомлений при needAuth=true",
                    "type": "string"
                },
                "authPassword": {
                    "description": "Пароль для авторизации в сервисе приема push-уведомлений при needAuth=true",
                    "type": "string",
                    "writeOnly": true
                },
                "certId": {
                    "description": "Идентификатор (uuid) контейнера сертификата для подключения к сервису приема push-уведомлений",
                    "type": "string"
                },
                "certPassword": {
                    "description": "Парольная фраза сертификата",
                    "type": "string",
                    "writeOnly": true
                },
                "withGeo": {
                    "description": "Необходимость включать геоданные объекта в push-уведомление при их наличии у каталога",
                    "type": "boolean",
                    "default": false
                },
                "isWGS84": {
                    "description": "Необходимость передать геометрию в системе координат EPSG:4326 (WGS84). \nАктуально для подписок с каталогами, у которых геоданные хранятся в системе MSK 77. \n\nПо-умолчанию отправляется СК, выбранная на каталоге.",
                    "type": "boolean",
                    "default": false
                }
            },
            "required": [
                "systemId",
                "needAuth"
            ]
        },
        "PushsubStatusTagIdEnum": {
            "description": "Статус подписки:\n  - `active` - Активна\n  - `inactive` - Неактивна\n  - `tmpBlocked` - Временно заблокирована",
            "type": "string",
            "enum": [
                "inactive",
                "active",
                "tmpBlocked"
            ]
        },
        "PushsubStatusNameEnum": {
            "description": "Наименование статуса подписки",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "PushsubStatus": {
            "description": "Статус подписки",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор статуса подписки",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/PushsubStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/PushsubStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "PushsubTypeTagIdEnum": {
            "description": "Тип push-уведомления:\n  - `xml` - XML\n  - `json` - JSON",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "xml",
                        "json"
                    ]
                }
            ]
        },
        "PushsubSubscriptionCatalogInfoListItem": {
            "description": "Информация о каталоге, добавленном в подписку",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "isEnabled": {
                    "description": "Статуса подписки - `true` - подписка на каталог активна, - `false` - подписка на каталог не активна.",
                    "type": "boolean"
                }
            },
            "required": [
                "isEnabled"
            ]
        },
        "File": {
            "description": "Данные файла",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор файла",
                    "type": "integer",
                    "readOnly": true
                },
                "uuid": {
                    "description": "Идентификатор uuid файла",
                    "type": "string",
                    "readOnly": true
                },
                "file": {
                    "type": "string",
                    "format": "binary",
                    "description": "Файл с содержимым",
                    "writeOnly": true
                },
                "name": {
                    "description": "Имя файла (без расширения)",
                    "type": "string",
                    "readOnly": true
                },
                "extension": {
                    "description": "Расширение файла, включая точку",
                    "type": "string",
                    "readOnly": true
                },
                "fileProcessType": {
                    "$ref": "#/components/schemas/FileTypeTagIdEnum"
                },
                "size": {
                    "description": "Размер файла",
                    "type": "string",
                    "readOnly": true
                },
                "mimeType": {
                    "description": "Тип файла, формат MIME-типа",
                    "type": "string",
                    "readOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор каталога, к которому привязывается файл",
                    "type": "integer",
                    "format": "int32"
                }
            },
            "required": [
                "id",
                "uuid",
                "file",
                "name",
                "extension",
                "fileProcessType",
                "size",
                "mimeType"
            ]
        },
        "FileTypeTagIdEnum": {
            "description": "Техническое название типа файла:\n  - `import` - файл импорта, \n  - `export` - файл экспорта, \n  - `catalog-object` - файл объекта каталога, \n  - `soap-api` - файл SOAP API\n  - `background` - файл фоновой проверки\n  - `thematic-category` - файл иконки тематической категории\n  - `cert-subscription` - файл сертификата подписки на push уведомления\n  - `accum-catalog` - файл выгрузки для сборного каталога\n  - `dictionary-export` - файл экспорта справочника",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "import",
                        "export",
                        "catalog-object",
                        "soap-api",
                        "background",
                        "thematic-category",
                        "cert-subscription",
                        "accum-catalog",
                        "dictionary-export"
                    ]
                }
            ]
        },
        "FileText": {
            "type": "object",
            "properties": {
                "name": {
                    "description": "Название файла.",
                    "type": "string"
                },
                "extension": {
                    "description": "Расширение файла, включая точку",
                    "type": "string",
                    "enum": [
                        ".txt",
                        ".toml"
                    ]
                },
                "content": {
                    "description": "Текстовые данные, которые необходимо записать в файл.",
                    "type": "string"
                }
            },
            "required": [
                "name",
                "extension",
                "content"
            ]
        },
        "fileUuidArray": {
            "description": "Массив uuid файлов",
            "type": "object",
            "properties": {
                "uuids": {
                    "description": "Массив uuid",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "uuids"
            ]
        },
        "FileCreatedResponse": {
            "description": "Ответ на запрос при создании файла",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентифкатор файла (uuid)",
                    "type": "string"
                },
                "code": {
                    "enum": [
                        201
                    ]
                },
                "messageType": {
                    "enum": [
                        "Created"
                    ]
                },
                "message": {
                    "description": "Текст ответа",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "code",
                "messageType",
                "message"
            ]
        },
        "PublicationReasonTagIdEnum": {
            "description": "Техническое наименование причины публикации объектов:\n  - `isSign` - Подписание;\n  - `isPublConditionsCh` - Перепубликация при изменении условий ограничения выборки;\n  - `isTruncate` - Техническое удаление объекта со всеми версиями в БД публикации;\n  - `isNsiCh` - Перепубликация при изменении элементов справочника.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "isSign",
                        "isPublConditionsCh",
                        "isTruncate",
                        "isNsiCh"
                    ]
                }
            ]
        },
        "CatalogPublicationQueueInfo": {
            "description": "Информация о каталоге в очереди публикации",
            "readOnly": true,
            "type": "object",
            "properties": {
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "catalogName": {
                    "description": "Наименование каталога",
                    "type": "string"
                },
                "priority": {
                    "$ref": "publicationCatalogs.yaml#/components/schemas/PublicationCatalogPriority"
                },
                "newCnt": {
                    "description": "Количество объектов каталога, ожидающих обработки",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "inWorkCnt": {
                    "description": "Количество объектов каталога, находящихся в обработке",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "publishedCnt": {
                    "description": "Количество успешно опубликованных (в первый раз) объектов каталога",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "updatedCnt": {
                    "description": "Количество успешно обновленных в публикации объектов каталога",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "deletedCnt": {
                    "description": "Количество успешно удаленных из публикации объектов каталога",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "restoredCnt": {
                    "description": "Количество успешно восстановленных в публикации объектов каталога",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "passedCnt": {
                    "description": "Количество успешно обработанных объектов каталога, которые не были удалены или изменены в БД публикации",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                },
                "errorCnt": {
                    "description": "Количество объектов каталога, не обработанных из-за ошибок",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0
                }
            },
            "required": [
                "catalogId",
                "catalogName",
                "priority",
                "newCnt",
                "inWorkCnt",
                "publishedCnt",
                "updatedCnt",
                "deletedCnt",
                "restoredCnt",
                "passedCnt",
                "errorCnt"
            ]
        },
        "CommonLockInfo": {
            "description": "Общая информация о блокировке",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор блокировки",
                    "type": "integer",
                    "readOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор каталога, на который установлена блокировка",
                    "type": "integer"
                },
                "catalogName": {
                    "description": "Наименование каталога, на который установлена блокировка",
                    "type": "string",
                    "readOnly": true
                },
                "lockType": {
                    "readOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/LockType"
                        }
                    ]
                },
                "lockTypeTagId": {
                    "writeOnly": true,
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/LockTypeTagIdEnum"
                        }
                    ]
                },
                "userId": {
                    "description": "Идентификатор пользователя, установившего блокировку",
                    "type": "integer"
                },
                "userLogin": {
                    "description": "Логин пользователя, установившего блокировку",
                    "type": "string",
                    "readOnly": true
                },
                "systemId": {
                    "description": "Идентификатор системы, установившей блокировку",
                    "type": "integer"
                },
                "systemLogin": {
                    "description": "Логин системы, установившей блокировку",
                    "type": "string",
                    "readOnly": true
                },
                "dateTimeCreated": {
                    "description": "Дата старта блокировки каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ],
                    "readOnly": true
                },
                "dateTimeExpired": {
                    "description": "Дата снятия блокировки каталога по истечению времени жизни",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ],
                    "readOnly": true
                },
                "lifeTime": {
                    "description": "Время жизни блокировки в миллисекундах",
                    "type": "integer"
                }
            },
            "required": [
                "id",
                "catalogId",
                "lockType",
                "lockTypeTagId"
            ]
        },
        "LockListItem": {
            "description": "Информация о блокировке в списке блокировок",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonLockInfo"
                }
            ]
        },
        "Lock": {
            "description": "Блокировка",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonLockInfo"
                }
            ],
            "properties": {
                "lifeTime": {
                    "description": "Время жизни блокировки в миллисекундах",
                    "type": "integer",
                    "minimum": 0
                }
            },
            "required": [
                "lifeTime"
            ]
        },
        "LockTypeTagIdEnum": {
            "description": "Тип блокировки:\n  - `signatures` - Подписание\n  - `imports` - Импорт\n  - `backgroundChecks` - Фоновые проверки каталогов\n  - `exports` - Экспорт каталога заполнения",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "signatures",
                        "imports",
                        "backgroundChecks",
                        "exports"
                    ]
                }
            ]
        },
        "LockTypeNameEnum": {
            "description": "Наименование типа блокировки",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "LockType": {
            "description": "Тип блокировки",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор типа блокировки",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "$ref": "#/components/schemas/LockTypeNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/LockTypeTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "LockCatalogInfo": {
            "description": "Информация о каталоге, на который наложена блокировка.",
            "type": "object",
            "readOnly": true,
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ]
        },
        "FillingExportTypeTagIdEnum": {
            "description": "Техническое наименование типа файла экспорта",
            "type": "string",
            "enum": [
                "csv"
            ]
        },
        "ExportAttributesList": {
            "description": "Массив идентификаторов атрибутов - attrId, включаемых в файл экспорта. Допускается передача только корневых атрибутов каталога",
            "type": "array",
            "items": {
                "type": "integer"
            },
            "minItems": 1,
            "example": [
                -1,
                4212,
                47296,
                23426
            ]
        },
        "ExportSettings": {
            "description": "Настройки, применённые к экспорту",
            "type": "object",
            "properties": {
                "name": {
                    "description": "Наименование архива экспорта. Сервис формирует название экспорта на основе идентификатора каталога и даты старта. Формат названия описан в вики.",
                    "type": "string"
                },
                "type": {
                    "$ref": "#/components/schemas/FillingExportTypeTagIdEnum"
                },
                "fileId": {
                    "type": "string",
                    "description": "Идентификатор (uuid) файла экспорта в файловом хранилище"
                },
                "onlyRootCatalog": {
                    "description": "Признак, что был получен экспорт только с данными корневого каталога",
                    "type": "boolean"
                },
                "objectStatuses": {
                    "description": "Статусы объекта, которые учитывались при формировании файла экспорта",
                    "type": "array",
                    "items": {
                        "$ref": "catalogObjects.yaml#/components/schemas/ObjectStatus"
                    }
                },
                "filters": {
                    "description": "Фильтры по атрибутам каталога, которые были применены к выборке объектов в файле экспорта.",
                    "type": "array",
                    "items": {
                        "$ref": "catalogObjects.yaml#/components/schemas/RootCatalogObjectListFilter"
                    }
                },
                "sortings": {
                    "description": "Сортировки по атрибутам каталога, которые были применены к выборке объектов в файле экспорта.",
                    "type": "array",
                    "items": {
                        "$ref": "_common.yaml#/components/schemas/Sorting"
                    }
                },
                "attributes": {
                    "$ref": "#/components/schemas/ExportAttributesList"
                },
                "fetchGeodata": {
                    "description": "Признак, указывающий на включение в экспорт каталога заполнения геоданных объектов в заданной системе координат.\nДоступны следующие варианты:\n  - `признак не передаётся` - объекты возвращаются без геоданных,\n  - `EPSG:4326` - геоданные объекта возвращаются в системе координат WGS84,\n  - `default` - геоданные объекта возвращаются в системе координт, заданной настройками каталога.",
                    "type": "string",
                    "enum": [
                        "EPSG:4326",
                        "default"
                    ]
                }
            },
            "required": [
                "name",
                "type",
                "fileId"
            ]
        },
        "PublicExportTypeTagIdEnum": {
            "description": "Техническое наименование типа файла экспорта",
            "type": "string",
            "enum": [
                "csv",
                "xlsx",
                "json",
                "xml"
            ]
        },
        "PublicExportFilter": {
            "description": "Объект расширенного фильтра для запросов с фильтрацией по столбцам таблиц",
            "type": "object",
            "properties": {
                "attribute": {
                    "$ref": "_common.yaml#/components/schemas/FilterSortingAttribute"
                },
                "operator": {
                    "description": "Оператор фильтрации:\n  - `empty` - выводить только пустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `notEmpty` - выводить только непустые значения. Доступен для всех типов данных.\n  Для данного оператора не передаётся поле `value`.\n  - `contains` - содержит переданное значение. Является регистронезависимым. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `inEnum` - перечисление. Выводятся записи, атрибут которых имеет значение, совпадающее с одним из введенных в перечисление.\n  Сравнение не зависит от регистра строковых значений. Работает со всеми типами данных кроме типов Флаг, Файл, Таблица и Справочник.\n  Значения передаются через точку с запятой `;`.\n  - `equals` - равно переданному значению или совпадает с переданным значением (в случае сравнения строк). Является регистронезависимым. Используется для любых типов кроме типов Файл и Таблица.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `greaterThan` - больше, чем переданное значение. Используется для сравнения чисел и дат.\n  - `greaterOrEqualsThan` - больше или равно переданному значению. Используется для сравнения чисел и дат.\n  - `lessThan` - меньше, чем переданное значение. Используется для сравнения чисел и дат.\n  - `lessOrEqualsThan` - меньше или равно переданному значению. Используется для сравнения чисел и дат.\n  - `startsWith` - начинается с переданного значения. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `endsWith` - заканчивается на переданное значение. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `matchesRegexStr` - соответствует регулярному выражению, переданному в виде строки. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  - `matchesRegexId` - соответствует одному из регулярных выражений, хранящихся в системе. Используется для строковых, справочных и ссылочных атрибутов.\n  Для справочных и ссылочных атрибутов сравнение идет по атрибуту, выбранному для связи в данном каталоге.\n  В `value` передается идентификатор регулярного выражения.\n  - `inDict` - перечисление по справочнику. Выводятся записи, в значении которых выбраны все элементы справочника, что и в выбранном множестве для фильтарции. Используется для справочниых атрибутов.\n  В `value` передается список идентификаторов элементов справочника.",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/FilterOperatorTagIdEnum"
                        }
                    ]
                },
                "value": {
                    "description": "Значение для сравнения со значением атрибута при применении оператора",
                    "oneOf": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "integer"
                        },
                        {
                            "type": "number"
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        }
                    ]
                }
            },
            "required": [
                "attribute",
                "operator"
            ],
            "example": {
                "attribute": "field_4212",
                "operator": "greaterThan",
                "value": "01.02.2024 15:25:05"
            }
        },
        "PublicExportSorting": {
            "description": "Объект сортировки, для запросов с многоуровневой сортировкой по таблице",
            "type": "object",
            "properties": {
                "attribute": {
                    "description": "Техническое название атрибута (столбца), по которому производится сортировка.",
                    "type": "string"
                },
                "order": {
                    "$ref": "_common.yaml#/components/schemas/SortingOrderTagIdEnum"
                }
            },
            "required": [
                "attribute",
                "order"
            ],
            "example": {
                "attribute": "field_4212",
                "order": "desc"
            }
        },
        "PublicExportHistoryItem": {
            "description": "Элемент истории экспортов каталога публикации",
            "allOf": [
                {
                    "$ref": "exports.yaml#/components/schemas/ExportHistoryItem"
                }
            ],
            "type": "object",
            "properties": {
                "systemId": {
                    "description": "Идентификатор системы, запустившей экспорт",
                    "type": "integer",
                    "format": "int32"
                },
                "systemName": {
                    "description": "Краткое наименование системы, запустившей экспорт",
                    "type": "string"
                },
                "dataEpoch": {
                    "description": "Дата, на которую брался срез данных каталога.",
                    "oneOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateFormat"
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                }
            },
            "required": [
                "id",
                "name",
                "dateStart",
                "status",
                "type",
                "hasSettings"
            ]
        },
        "PublicExportSettings": {
            "description": "Настройки, применённые к экспорту",
            "type": "object",
            "properties": {
                "name": {
                    "description": "Наименование архива экспорта. Сервис формирует название экспорта на основе идентификатора каталога и даты, на которую берётся срез данных(epoch) . Формат названия описан в вики.",
                    "type": "string"
                },
                "type": {
                    "$ref": "#/components/schemas/PublicExportTypeTagIdEnum"
                },
                "fileId": {
                    "type": "string",
                    "description": "Идентификатор файла экспорта в файловом хранилище (uuid)"
                },
                "onlyRootCatalog": {
                    "description": "Признак, что был получен экспорт только с данными корневого каталога",
                    "type": "boolean"
                },
                "objectStatuses": {
                    "description": "Статусы объектов, примененные к файлу экспорта",
                    "type": "array",
                    "items": {
                        "$ref": "publicationObjects.yaml#/components/schemas/PublicationObjectStatus"
                    }
                },
                "filters": {
                    "description": "Фильтры по атрибутам каталога, которые были применены к выборке объектов в файле экспорта.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicExportFilter"
                    }
                },
                "sortings": {
                    "description": "Сортировки по атрибутам каталога, которые были применены к выборке объектов в файле экспорта.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/PublicExportSorting"
                    }
                },
                "attributes": {
                    "$ref": "exports.yaml#/components/schemas/ExportAttributesList"
                },
                "fetchGeodata": {
                    "description": "Признак, указывающий на включение в экспорт каталога публикации геоданных объектов.\nВ каталоге публикации геоданные возвращаются в системе координат WGS84.",
                    "type": "boolean"
                }
            },
            "required": [
                "name",
                "type",
                "fileId"
            ]
        },
        "CatalogObjectResponseActionTagIdEnum": {
            "description": "Тип действия с объектом, к которому относится возвращаемый ответ:\n  - `save` - сохранение без подписания;\n  - `subscribe` - сохранение с подписанием объекта;\n  - `deleted` - удаление объекта (возвращается для новых объектов при физическом удалении из системы).",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "save",
                        "subscribe",
                        "delete"
                    ]
                }
            ]
        },
        "CatalogAttribute": {
            "description": "Атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/FillingCatalogAttribute"
                }
            ],
            "properties": {
                "isManualInput": {
                    "description": "Возможен ли ручной ввод атрибута. Описывается в блоке \"Автозаполнение\"",
                    "type": "boolean"
                }
            },
            "required": [
                "isManualInput"
            ]
        },
        "CatalogCount": {
            "description": "Количество объектов каталога заполнения",
            "type": "object",
            "properties": {
                "countActiveObjects": {
                    "description": "Количество подписанных неудаленных объектов каталога",
                    "type": "integer"
                },
                "countDelObjects": {
                    "description": "Количество удаленных объектов каталога",
                    "type": "integer"
                },
                "countUnsignedObjects": {
                    "description": "Количество неподписанных объектов каталога",
                    "type": "integer"
                },
                "countError": {
                    "description": "Количество объектов каталога с ошибками",
                    "type": "integer"
                },
                "countGeoError": {
                    "description": "Количество объектов каталогас ошибками геоданных",
                    "type": "integer"
                }
            },
            "required": [
                "countActiveObjects",
                "countDelObjects",
                "countUnsignedObjects",
                "countError",
                "countGeoError"
            ]
        },
        "CommonCatalogObject": {
            "description": "Объект каталога. Общие поля.",
            "type": "object",
            "properties": {
                "action": {
                    "allOf": [
                        {
                            "$ref": "catalogObjects.yaml#/components/schemas/CatalogObjectActionTagIdEnum"
                        }
                    ],
                    "writeOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор каталога",
                    "type": "integer"
                },
                "globalId": {
                    "description": "Глобальный идентификатор объекта",
                    "type": "integer"
                },
                "systemObjectId": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "data": {
                    "description": "Массив атрибутов и их значений в рамках одного объекта",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CatalogObjectDataItem"
                    },
                    "minItems": 1
                }
            },
            "required": [
                "action",
                "catalogId",
                "data"
            ]
        },
        "CatalogObject": {
            "description": "Объект каталога публикации",
            "type": "object",
            "properties": {
                "system_object_id": {
                    "description": "Идентификатор объекта в системе-поставщике",
                    "type": "string"
                },
                "global_id": {
                    "description": "Глобальный идентификатор объекта",
                    "type": "integer",
                    "format": "int64"
                },
                "is_deleted": {
                    "description": "Статус объекта:\n  - 0 - активен\n  - 1 - удален",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1
                    ]
                },
                "signature_date": {
                    "description": "Дата подписания объекта в формате dd.MM.YYYY hh:mm:ss",
                    "type": "string"
                },
                "geoData": {
                    "description": "Геометрия объекта.",
                    "oneOf": [
                        {
                            "$ref": "#/components/schemas/GeodataCollection"
                        },
                        {
                            "$ref": "#/components/schemas/SingleGeodata"
                        }
                    ]
                },
                "geodata_center": {
                    "description": "Центроид геометрии объекта. Координата [x,y].",
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": {
                        "type": "number"
                    }
                },
                "geoarea": {
                    "description": "Площадь геометрии.",
                    "type": "integer",
                    "format": "number"
                }
            },
            "additionalProperties": {
                "description": "<*> = \"techName атрибута\"\n\nЗначения атрибутов объекта, возвращаются в JSON в виде пары ключ - значение.\nВозвращаются все атрибуты, кроме табличных.\nНезаполненные атрибуты имеют значение `null`.\nЗначения формируются по следующим правилам в зависимости от типа:\n  - Строка - значение возвращается с типом string;\n  - Целое число - значение возвращается с типом integer;\n  - Дробное число - значение возвращается с типом number;\n  - Дата - значение возвращается в виде строки с типом string;\n  - Флаг - возвращается в виде строки со значением \"да\"/\"нет\"/null;\n  - Файл - возвращается в виде массива строк со значениями uuid файлов, размещенных в ЕХД;\n  - Справочник - если атрибут множественный, то возвращается массив. Если атрибут не множественный, то возвращается строка или объект.\n    В зависимотсти от параметра `dictKeyMode` в запросе, ответ в виде:\n      - массива строк - содержит или массив значений элементов справочника, или массив идентификаторов элементов справочника\n      - массива объектов - содержит объекты с ключем (идентификатор) и значением элемента справочника.\n    В качестве строковых значений выступает атрибут справочника, выбранный в настройках атрибута каталога (Атрибут справочника для вывода);\n  - Ссылка - возвращается массив объектов с данными выбранных объектов-ссылок.\n    В данных объектов передаются `global_Id` - глобавльный идентификатор объекта из ссылочного каталога и `value` - значение атрибута ссылочного каталога, выбранного для показа в каталоге.\n    В качестве значения выступает главный атрибут ссылочного каталога.\n  - Таблица - возвращается в виде массива объектов, каждый из которых содержит вложенные значния атрибутов объекта, как и атрибут первого уровня.",
                "oneOf": [
                    {
                        "type": "string",
                        "description": "Значение строкового атрибута"
                    },
                    {
                        "type": "integer",
                        "description": "Значение целочисленного атрибута"
                    },
                    {
                        "type": "number",
                        "description": "Значение атрибута с типом дробное число"
                    },
                    {
                        "type": "string",
                        "description": "Значение атрибута с типом дата в формате dd.MM.YYYY",
                        "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                    },
                    {
                        "type": "string",
                        "description": "Значение атрибута с типом даты со временем в формате dd.MM.YYYY hh:mm:ss",
                        "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                    },
                    {
                        "type": "string",
                        "description": "Значение атрибута с типом флаг"
                    },
                    {
                        "type": "array",
                        "description": "Значение файлового атрибута",
                        "items": {
                            "type": "string"
                        }
                    },
                    {
                        "type": "string",
                        "description": "Значение справочного атрибута, если в запросе параметр `dictKeyMode` равен `0` или `1`"
                    },
                    {
                        "type": "object",
                        "description": "Значение справочного атрибута, если в запросе параметр `dictKeyMode` равен `2`",
                        "properties": {
                            "key": {
                                "type": "string"
                            },
                            "value": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "key",
                            "value"
                        ]
                    },
                    {
                        "type": "array",
                        "description": "Значение множественного справочного атрибута, если в запросе параметр `dictKeyMode` равен `0` или `1`",
                        "items": {
                            "type": "string"
                        }
                    },
                    {
                        "type": "array",
                        "description": "Значение множественного справочного атрибута, если в запросе параметр `dictKeyMode` равен `2`",
                        "items": {
                            "type": "object",
                            "properties": {
                                "key": {
                                    "type": "string"
                                },
                                "value": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "key",
                                "value"
                            ]
                        }
                    },
                    {
                        "type": "array",
                        "description": "Значение ссылочного атрибута",
                        "items": {
                            "type": "object",
                            "properties": {
                                "global_id": {
                                    "description": "Глобальный идентификатор ссылочного объекта.",
                                    "type": "integer"
                                },
                                "value": {
                                    "description": "Значение атрибута выбранного объекта ссылочного каталога.",
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "number"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ]
                                }
                            },
                            "required": [
                                "global_id",
                                "value"
                            ]
                        }
                    },
                    {
                        "type": "array",
                        "description": "Значение табличного атрибута",
                        "items": {
                            "$ref": "#/components/schemas/NestedCatalogObject"
                        }
                    }
                ]
            },
            "required": [
                "global_id",
                "signature_date",
                "system_object_id",
                "is_deleted"
            ]
        },
        "RootCatalogObject": {
            "description": "Сохраняемый объект корневого каталога.\nВ зависимости от значения `action` определяется обязательность идентификаторов:\n  - `added` - **globalId** или **systemObjectId** необязательны\n  - `modified` - обязательные атрибуты - **globalId** или **systemObjectId**\n  - `deleted` - обязательные атрибуты - **globalId** или **systemObjectId**",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonCatalogObject"
                }
            ],
            "properties": {
                "geodata": {
                    "$ref": "geodata.yaml#/components/schemas/ObjectGeodata"
                }
            }
        },
        "NestedCatalogObject": {
            "description": "Вложенный объект (значение табличного атрибута)",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CatalogObject"
                }
            ],
            "properties": {
                "global_object_id": {
                    "description": "Глобальный идентификтаор родительского объекта",
                    "type": "integer",
                    "format": "int64"
                }
            },
            "required": [
                "global_object_id"
            ]
        },
        "CatalogObjectDataItem": {
            "description": "Значение атрибута сохраняемого объекта.",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "catalogAttrId": {
                    "description": "Идентификатор атрибута каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "isManualInput": {
                    "description": "Заполнен ли атрибут с использованием ручного ввода.\n`true` указывается только для тех атрибутов, которые сопоставляются со справочником в Автозаполнении. Для самих автозаполняемых указывается `false` (если они не используются для сопоставления со справочником в других блоках Автозаполнение).",
                    "type": "boolean"
                },
                "value": {
                    "description": "Значение атрибута.\nЗначение формируется по следующим правилам в зависимости от типа:\n  - Строка - передается значение типа string;\n  - Целое число - передается значение типа integer;\n  - Дробное число - передается значение типа number; \n  - Дата - передается значение типа string по маске\n    dd.MM.YYYY или DD.MM.YYYY HH:mm:ss\n    в зависимости от наличия метки времени в атрибуте;\n  - Флаг - передается значение типа boolean; \n  - Файл - передается значение в виде массива, содержащего объекты файла;\n  - Справочник - передается в виде массива, содержащего строки\n    со значениями атрибута справочника для связи,\n    выбранного в настройках справочного атрибута каталога (Атрибут для связи);\n  - Ссылка - передается в виде массива, содержащего строки\n    со значениями атрибута каталога для связи,\n    выбранного в настройках ссылочного атрибута каталога (Атрибут для связи);",
                    "oneOf": [
                        {
                            "type": "string",
                            "description": "Значение атрибута типа строка"
                        },
                        {
                            "type": "integer",
                            "description": "Значение атрибута типа целое число"
                        },
                        {
                            "type": "number",
                            "description": "Значение атрибута типа дробное число"
                        },
                        {
                            "type": "string",
                            "description": "Значение атрибута с типом дата в формате dd.MM.YYYY",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$"
                        },
                        {
                            "type": "string",
                            "description": "Значение атрибута с типом даты со временем в формате dd.MM.YYYY hh:mm:ss",
                            "pattern": "^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3}) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$"
                        },
                        {
                            "type": "boolean",
                            "description": "Значение атрибута типа флаг"
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string"
                            },
                            "description": "Значение атрибута типа справочник"
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string"
                            },
                            "description": "Значение атрибута типа ссылка"
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "description": "Объект файла, загружаемого в значение атрибута",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Название файла"
                                    },
                                    "extension": {
                                        "type": "string",
                                        "description": "Расширение файла"
                                    },
                                    "content": {
                                        "type": "string",
                                        "description": "Содержимое файла, закодированное в base64"
                                    }
                                },
                                "required": [
                                    "name",
                                    "extension",
                                    "content"
                                ]
                            },
                            "description": "Значение атрибута типа файл"
                        }
                    ]
                }
            }
        },
        "SignedCatalogObjectData": {
            "description": "Массив объектов каталога с подписью",
            "properties": {
                "signatureInfo": {
                    "allOf": [
                        {
                            "$ref": "signatures.yaml#/components/schemas/DigitalSignatureInfo"
                        },
                        {
                            "properties": {
                                "unsignedHash": {
                                    "description": "Хэш массива объектов, полученный по алгоритму ГОСТ 34.11"
                                }
                            }
                        }
                    ]
                },
                "objectsData": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CatalogObject"
                    }
                }
            }
        },
        "AsyncRequestStatus": {
            "properties": {
                "status": {
                    "type": "string",
                    "enum": [
                        "new",
                        "inWork",
                        "errorQueue",
                        "errorProcessing",
                        "done"
                    ]
                },
                "message": {
                    "type": "string"
                },
                "response": {
                    "oneOf": [
                        {
                            "type": "array",
                            "items": {
                                "anyOf": [
                                    {
                                        "$ref": "#/components/schemas/OkCatalogObjectResponse"
                                    },
                                    {
                                        "$ref": "#/components/schemas/IncorrectDataCatalogObjectResponse"
                                    }
                                ]
                            }
                        },
                        {
                            "$ref": "_common.yaml#/components/schemas/BadRequestError"
                        }
                    ]
                }
            },
            "required": [
                "status",
                "message"
            ]
        },
        "QueueAddedMessage": {
            "type": "object",
            "description": "Запрос успешно добавлен в очередь",
            "allOf": [
                {
                    "$ref": "_common.yaml#/components/schemas/CreatedResponse"
                }
            ]
        },
        "ResponseStatusIdEnum": {
            "description": "Код статуса ответа:\n  - `0` - Успешный ответ;\n  - `1` - Некорректный метод;\n  - `2` - Ошибка синтаксиса;\n  - `3` - Каталог не найден;\n  - `4` - Нет доступа к каталогу\n  - `5` - Ошибка указания системы;\n  - `6` - Указанный каталог на проверке;\n  - `7` - Указанный каталог не опубликован;\n  - `8` - Ошибка ввода данных системы. Данная система неактивна;\n  - `9` - Ошибка введенных данных. Отсутствуют данные для сущности с указанным идентификатором;\n  - `999` - Необработанная ошибка;",
            "oneOf": [
                {
                    "type": "integer",
                    "enum": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        999
                    ]
                }
            ]
        },
        "ResponseStatusNameEnum": {
            "description": "Наименование статуса ответа.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "Success.",
                        "Invalid method input.",
                        "Query syntax error.",
                        "Catalog not found.",
                        "Unknown user system. У данной системы нет доступа к этому каталогу!",
                        "Access denied.",
                        "Catalog is currently ON CHECK and and not available.",
                        "Catalog is currently NOT PUBLISHED and not available.",
                        "System is not active. Данная система неактивна.",
                        "There is not data for the entity with the specified ID. Отсутствуют данные для сущности с указанным идентификатором.",
                        "An unhandled error occurred while executing the request."
                    ]
                }
            ]
        },
        "CommonResponseInfo": {
            "description": "Общая часть ответа для методов rest api публикации (параметры status, message, response).",
            "properties": {
                "status": {
                    "description": "Статус выполнения запроса.",
                    "$ref": "#/components/schemas/ResponseStatusIdEnum"
                },
                "message": {
                    "description": "Сообщение при возникновении ошибок.",
                    "$ref": "#/components/schemas/ResponseStatusNameEnum"
                },
                "response": {
                    "description": "Основная часть ответа по методу."
                }
            },
            "required": [
                "status",
                "message",
                "response"
            ]
        },
        "CommonFoundReturnedResponseInfo": {
            "description": "Общая часть ответа для методов rest api публикации (параметры found, returned).",
            "properties": {
                "found": {
                    "description": "Общее количество найденных элементов соответствующих условиям запроса (без учёта offset и limit).",
                    "type": "integer",
                    "format": "int32"
                },
                "returned": {
                    "description": "Количество элементов в ответе с учетом ограничивающих параметров (offset и limit).",
                    "type": "string"
                }
            },
            "required": [
                "found",
                "returned"
            ]
        },
        "CommonFiltersValidDateResponseInfo": {
            "description": "Общая часть ответа для методов rest api публикации (параметры filters, validDate).",
            "properties": {
                "filters": {
                    "description": "Всегда пустой",
                    "type": "object"
                },
                "validDate": {
                    "description": "Всегда пустой",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "filters",
                "validDate"
            ]
        },
        "CatalogListRequest": {
            "description": "Схема запроса для метода /publrest/catalog/list (запрос спецификации каталогов публикации).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Массив идентификатаров каталогов публикации",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "epoch": {
                    "description": "Дата, на которую структура данных была актуальна. По умолчанию - текущая дата.\nФормат даты - YYYY-MM-DD",
                    "type": "string"
                },
                "timestamp": {
                    "description": "Определяет формат даты в параметре 'epoch'.\n  - `0` - формат YYYY-MM-DD;\n  - `1` - формат YYYY-MM-DD'T'HH:mm:ss.SSSXXX.",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1
                    ],
                    "default": 0
                },
                "offset": {
                    "description": "Смещение окна выдачи.\nПозиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\nПо умолчанию `0`.",
                    "type": "integer",
                    "format": "int32",
                    "default": 0,
                    "minimum": 0
                },
                "limit": {
                    "description": "Допустимое количество объектов в ответе.",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1
                },
                "projection": {
                    "description": "Определяет поля отображаемые в ответе.",
                    "type": "object",
                    "properties": {
                        "root": {
                            "description": "Массив строк с наименованиями полей, относящихся к общей информации каталога публикации.\nЕсли необходимо выводить информацию об атрибутах каталога (массив `fields`), то `fields` необходимо прописать в параметр `root`.",
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "id",
                                    "name",
                                    "nameEn",
                                    "technicalName",
                                    "shortName",
                                    "shortNameEn",
                                    "accountingObject",
                                    "accountingObjectEn",
                                    "keywords",
                                    "keywordsEn",
                                    "kind",
                                    "type",
                                    "period",
                                    "hasGeo",
                                    "categories",
                                    "categoriesEn",
                                    "layerId",
                                    "OIVs",
                                    "oiv",
                                    "oivEn",
                                    "oivList",
                                    "rn",
                                    "cnt",
                                    "archive",
                                    "hasEnVersion",
                                    "description",
                                    "descriptionEn",
                                    "defaultSort",
                                    "systems",
                                    "fieldsEa",
                                    "nameVariants",
                                    "systemFields",
                                    "version",
                                    "permittedSystems",
                                    "catalog_status_id",
                                    "details_opod",
                                    "responsiblePerson",
                                    "fields"
                                ]
                            }
                        },
                        "fields": {
                            "description": "Массив строк с наименованиями полей, относящихся к информации об атрибутах каталога публикации.",
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [
                                    "id",
                                    "name",
                                    "enName",
                                    "techName",
                                    "columnId",
                                    "type",
                                    "typeName",
                                    "isPk",
                                    "maxLength",
                                    "dictionaryId",
                                    "dictColTehName",
                                    "catalogId",
                                    "isArray",
                                    "groupName",
                                    "rown",
                                    "systemField",
                                    "systems",
                                    "order",
                                    "permittedSystems",
                                    "permittedSystemNames",
                                    "isDefaultSystems",
                                    "hasTranslation",
                                    "isDefaultVision",
                                    "system",
                                    "specification"
                                ]
                            }
                        }
                    }
                }
            },
            "required": [
                "id"
            ]
        },
        "CatalogListResponse": {
            "description": "Схема ответа для метода /publrest/catalog/list (спецификация каталога публикации).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CatalogSpecification"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFoundReturnedResponseInfo"
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CoordinateXYForGeo": {
            "description": "Координата [x,y]",
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
                "type": "number"
            }
        },
        "GeoJsonPoint": {
            "description": "Описание типа объекта \"Point\" (\"Точка\").",
            "type": "object",
            "properties": {
                "coordinates": {
                    "$ref": "#/components/schemas/CoordinateXYForGeo"
                },
                "type": {
                    "description": "Тип геометрии",
                    "type": "string",
                    "enum": [
                        "Point"
                    ]
                }
            }
        },
        "GeoJsonMultiPoint": {
            "description": "Описание типа объекта \"MulyiPoint\" (\"МультиТочка\").",
            "type": "object",
            "properties": {
                "coordinates": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CoordinateXYForGeo"
                    }
                },
                "type": {
                    "description": "Тип геометрии",
                    "type": "string",
                    "enum": [
                        "MulyiPoint"
                    ]
                }
            }
        },
        "GeoJsonPolygon": {
            "description": "Описание типа объекта \"Polygon\" (\"Полигон\").",
            "type": "object",
            "properties": {
                "coordinates": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/CoordinateXYForGeo"
                        }
                    }
                },
                "type": {
                    "description": "Тип геометрии",
                    "type": "string",
                    "enum": [
                        "Polygon"
                    ]
                }
            }
        },
        "GeoJsonMultiPolygon": {
            "description": "Описание типа объекта \"MultiPolygon\" (\"Мультиполигон\").",
            "type": "object",
            "properties": {
                "coordinates": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CoordinateXYForGeo"
                            }
                        }
                    }
                },
                "type": {
                    "description": "Тип геометрии",
                    "type": "string",
                    "enum": [
                        "MultiPolygon"
                    ]
                }
            }
        },
        "GeoJsonMultiLineString": {
            "description": "Описание типа объекта \"MultiLineString\" (\"Мультилиния\"). Используется также для типа объекта \"Линия\".",
            "type": "object",
            "properties": {
                "coordinates": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/CoordinateXYForGeo"
                        }
                    }
                },
                "type": {
                    "description": "Тип геометрии",
                    "type": "string",
                    "enum": [
                        "MultiLineString"
                    ]
                }
            }
        },
        "CatalogGetRequest": {
            "description": "Схема запроса для метода /publrest/catalog/get (запрос содержимого каталога публикации).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "criteria": {
                    "description": "Условие для выборка элементов набора данных на языке запросов к ЕХД.\nДля параметра geoData используются функциях near и inside",
                    "type": "string"
                },
                "epoch": {
                    "description": "Дата, на которую структура данных была актуальна.\nФормат даты по умолчанию - YYYY-MM-DD.\nПо умолчанию - текущая дата.",
                    "type": "string"
                },
                "timestamp": {
                    "description": "Определяет формат даты в параметре 'epoch'.\n  - `0` - формат YYYY-MM-DD;\n  - `1` - формат YYYY-MM-DD'T'HH:mm:ss.SSSXXX.",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1
                    ],
                    "default": 0
                },
                "offset": {
                    "description": "Смещение окна выдачи.\nПозиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\nПо умолчанию `0`.",
                    "type": "integer",
                    "format": "int32",
                    "default": 0,
                    "minimum": 0
                },
                "limit": {
                    "description": "Допустимое количество объектов в ответе.",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1
                },
                "paging": {
                    "description": "Показывать количество элементов в наборе данных в параметрах `found`` и `returned``, удовлетворяющих критерию запроса.",
                    "type": "boolean",
                    "default": false
                },
                "sorting": {
                    "description": "Параметры сортировки.",
                    "type": "object",
                    "additionalProperties": {
                        "description": "<*> = \"techName атрибута\"\n\nПередаются в JSON в виде пары ключ - значение, где ключ записывается в формате \"techName атрибута\".\nЗначение это наименование сортировки:\n  asc – по возрастанию;\n  desc – по убыванию.",
                        "oneOf": [
                            {
                                "type": "string",
                                "enum": [
                                    "asc",
                                    "desc"
                                ]
                            }
                        ]
                    }
                },
                "translate": {
                    "description": "Управление выдачей переводов полей.\n  - false – выдаются русскоязычные поля\n  - true – выдача англоязычных полей\n  - null – выдаются обе версии",
                    "type": "boolean",
                    "default": null
                },
                "includeDeleted": {
                    "description": "Учитывать ли в выборке удаленные объекты.",
                    "type": "boolean",
                    "default": false
                },
                "dictKeyMode": {
                    "description": "Формат отображения значений справочников.\n  - `0` - отображение значения;\n  - `1` - отображения ключа;\n  - `2` - отображение ключа и значения",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1,
                        2
                    ],
                    "default": 0
                },
                "fieldChanged": {
                    "description": "Выбрать только те объекты, атрибут `name` которых менялся в заданном периоде времени",
                    "type": "object",
                    "properties": {
                        "name": {
                            "description": "Название атрибута",
                            "type": "string"
                        },
                        "fromDate": {
                            "description": "Дата начала периода",
                            "type": "string"
                        },
                        "untilDate": {
                            "description": "Дата конца периода",
                            "type": "string"
                        }
                    }
                },
                "fetchGeodata": {
                    "description": "Выдавать геолокационную информацию для объекта, если такая имеется.",
                    "type": "boolean",
                    "default": false
                },
                "fetchGeodataCenter": {
                    "description": "Получить центральную точку геометрии.",
                    "type": "boolean",
                    "default": false
                },
                "geoData": {
                    "description": "Используется для описания переменных и их значений, которые в последствии будут использованы при составлении условий с геоданными.\nКоординаты точки или полигона указываются в формате GeoJSON.",
                    "type": "object",
                    "additionalProperties": {
                        "description": "<*> = \"имя переменной\"",
                        "type": "object",
                        "oneOf": [
                            {
                                "$ref": "#/components/schemas/GeoJsonPoint"
                            },
                            {
                                "$ref": "#/components/schemas/GeoJsonMultiPoint"
                            },
                            {
                                "$ref": "#/components/schemas/GeoJsonPolygon"
                            },
                            {
                                "$ref": "#/components/schemas/GeoJsonMultiPolygon"
                            },
                            {
                                "$ref": "#/components/schemas/GeoJsonMultiLineString"
                            }
                        ],
                        "required": [
                            "coordinates",
                            "type"
                        ],
                        "example": "{\n  \"p1\": {\n      \"type\": \"Point\",\n      \"coordinates\": [37.0, 55.0]     \n  },\n  \"p2\": { \"type\": \"Polygon\",\n      \"coordinates\": [[[37.24528231, 55.51001841], [37.85777010, 55.55674992], [37.86875643, 55.90237586], [37.29472079, 55.90546176], [37.24528231, 55.51001841]]]     }\n}"
                    }
                },
                "projection": {
                    "description": "Список полей, которые будут выдаваться в составе объектов набора данных.\nПоля вложенных объектов разделяются через \".\".\nЕсли список пуст или параметр не указан в запросе выдаются все поля.",
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "example": [
                        "global_id",
                        "Register.Code",
                        "system_object_id"
                    ]
                },
                "useAntiProjection": {
                    "description": "При установке в значение `true`, параметр `projection` будет интерпретироваться как список полей, которые надо исключить из выдачи.",
                    "type": "boolean",
                    "default": false
                }
            },
            "required": [
                "id"
            ]
        },
        "CatalogGetResponse": {
            "description": "Схема ответа для метода /publrest/catalog/get (запрос содержимого каталога).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CatalogObject"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogGetResponsePaging": {
            "description": "Схема ответа для метода /publrest/catalog/get (запрос содержимого каталога) при наличии параемтра Paging=true.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CatalogGetResponse"
                },
                {
                    "$ref": "#/components/schemas/CommonFoundReturnedResponseInfo"
                }
            ]
        },
        "CatalogGetFeaturesResponse": {
            "description": "Схема ответа для метода /publrest/catalog/get/features (запрос содержимого каталога публикации в формате GeoJSON).",
            "type": "object",
            "properties": {
                "features": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/components/schemas/GeodataCollectionFeatures"
                            },
                            {
                                "$ref": "#/components/schemas/SingleGeodataFeatures"
                            }
                        ]
                    }
                }
            }
        },
        "GeodataCollection": {
            "type": "object",
            "description": "Геометрия объекта каталога публикации в формате GeoJSON,\nесли у объекта несколько геометрий (точка и линия, точка и линия и полигон и т.д.).",
            "properties": {
                "geometry": {
                    "type": "object",
                    "properties": {
                        "geometries": {
                            "type": "array",
                            "items": {
                                "anyOf": [
                                    {
                                        "$ref": "#/components/schemas/GeoJsonPoint"
                                    },
                                    {
                                        "$ref": "#/components/schemas/GeoJsonMultiPoint"
                                    },
                                    {
                                        "$ref": "#/components/schemas/GeoJsonPolygon"
                                    },
                                    {
                                        "$ref": "#/components/schemas/GeoJsonMultiPolygon"
                                    },
                                    {
                                        "$ref": "#/components/schemas/GeoJsonMultiLineString"
                                    }
                                ]
                            }
                        },
                        "type": {
                            "type": "string",
                            "enum": [
                                "GeometryCollection"
                            ]
                        }
                    }
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "Feature"
                    ]
                }
            }
        },
        "GeodataCollectionFeatures": {
            "type": "object",
            "description": "Объект каталога публикации в формате GeoJSON,\nесли у объекта несколько геометрий (точка и линия, точка и линия и полигон и т.д.).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/GeodataCollection"
                }
            ],
            "properties": {
                "properties": {
                    "description": "Значения атрибутов объекта каталога публикации (без геометрии)",
                    "type": "object",
                    "properties": {
                        "Attributes": {
                            "$ref": "#/components/schemas/CatalogObject"
                        }
                    }
                }
            }
        },
        "SingleGeodata": {
            "type": "object",
            "description": "Геометрия объекта каталога публикации в формате GeoJSON,\nесли у объекта только одна геометрия (или точка или мультиточка или т.д.).",
            "properties": {
                "geometry": {
                    "oneOf": [
                        {
                            "$ref": "#/components/schemas/GeoJsonPoint"
                        },
                        {
                            "$ref": "#/components/schemas/GeoJsonMultiPoint"
                        },
                        {
                            "$ref": "#/components/schemas/GeoJsonPolygon"
                        },
                        {
                            "$ref": "#/components/schemas/GeoJsonMultiPolygon"
                        },
                        {
                            "$ref": "#/components/schemas/GeoJsonMultiLineString"
                        }
                    ]
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "Feature"
                    ]
                }
            }
        },
        "SingleGeodataFeatures": {
            "type": "object",
            "description": "Объект каталога публикации в формате GeoJSON,\nесли у объекта только одна геометрия (или точка или мультиточка или полигон или линия).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/SingleGeodata"
                }
            ],
            "properties": {
                "properties": {
                    "description": "Значения атрибутов объекта каталога публикации (без геометрии)",
                    "type": "object",
                    "properties": {
                        "Attributes": {
                            "$ref": "#/components/schemas/CatalogObject"
                        }
                    }
                }
            }
        },
        "CatalogChangesRequest": {
            "description": "Схема запроса для метода /publrest/catalog/changes (запрос измененных объектов).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "from": {
                    "description": "Дата начала периода изменений. Формат: YYYY-MM-DD или YYYY-MM-DD hh:mm:ss",
                    "oneOf": [
                        {
                            "pattern": "(19|20)\\d\\d-((0[1-9]|1[012])-(0[1-9]|[12]\\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)",
                            "type": "string"
                        },
                        {
                            "pattern": "^([1-2]\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\\d|3[0-1]) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$",
                            "type": "string"
                        }
                    ]
                },
                "until": {
                    "description": "Дата окончания периода изменений (не включается). Формат: YYYY-MM-DD или YYYY-MM-DD hh:mm:ss",
                    "oneOf": [
                        {
                            "pattern": "(19|20)\\d\\d-((0[1-9]|1[012])-(0[1-9]|[12]\\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)",
                            "type": "string"
                        },
                        {
                            "pattern": "^([1-2]\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\\d|3[0-1]) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$",
                            "type": "string"
                        }
                    ]
                },
                "offset": {
                    "description": "Смещение окна выдачи.\nПозиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\nПо умолчанию `0`.",
                    "type": "integer",
                    "format": "int32",
                    "default": 0,
                    "minimum": 0
                },
                "limit": {
                    "description": "Допустимое количество объектов в ответе.",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "default": 1000
                },
                "state": {
                    "description": "Тип изменения объекта каталога:\n  - `CREATED` - создание (Параметр `includeDeleted` не влияет на выдачу, 1-ая версия объекта и id_deleted=0)\n  - 'UPDATED' - обновление (Параметр `includeDeleted` не влияет на выдачу, версия больше 1 и id_deleted=0)\n  - 'DELETED' - удаление (Параметр `includeDeleted` влияет на выдачу. С параметром `includeDeleted` выводит с id_deleted=1)\n  - 'CHANGED' - изменение (Параметр `includeDeleted` влияет на выдачу. Без параметра выводятся объекты с id_deleted=0, с параметром выводятся все объекты с id_deleted=0 и с id_deleted=1)",
                    "type": "string",
                    "enum": [
                        "CREATED",
                        "UPDATED",
                        "DELETED",
                        "CHANGED"
                    ]
                },
                "includeDeleted": {
                    "description": "Учитывать ли в выборке удаленные объекты.",
                    "type": "boolean",
                    "default": false
                },
                "criteria": {
                    "description": "Условие для выборка элементов набора данных на языке запросов к ЕХД.\nДля параметра `geoData` используются функциях near и inside",
                    "type": "string"
                },
                "translate": {
                    "description": "Управление выдачей переводов полей.\n  - false – выдаются русскоязычные поля\n  - true – выдача англоязычных полей\n  - null – выдаются обе версии",
                    "type": "boolean",
                    "default": null
                },
                "sorting": {
                    "description": "Параметры сортировки.",
                    "type": "object",
                    "additionalProperties": {
                        "description": "<*> = \"name_attribute\"\n\nname_attribute - techName атрибута\n\nПередаются в JSON в виде пары ключ - значение, где ключ записывается в формате \"name_attribute\".\nЗначение это наименование сортировки:\n  asc – по возрастанию;\n  desc – по убыванию.",
                        "type": "string",
                        "enum": [
                            "asc",
                            "desc"
                        ]
                    }
                }
            },
            "required": [
                "id",
                "from",
                "until",
                "state"
            ]
        },
        "CatalogChangesResponse": {
            "description": "Схема ответа для метода /publrest/catalog/changes (получение измененных объектов в каталоге).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CatalogObject"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogObjectChangesRequest": {
            "description": "Схема запроса для метода /publrest/object/changes (запрос изменений объекта).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "global_id объекта каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "catalog": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "from": {
                    "description": "Дата начала периода изменений. Формат: YYYY-MM-DD или YYYY-MM-DD hh:mm:ss",
                    "oneOf": [
                        {
                            "pattern": "(19|20)\\d\\d-((0[1-9]|1[012])-(0[1-9]|[12]\\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)",
                            "type": "string"
                        },
                        {
                            "pattern": "^([1-2]\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\\d|3[0-1]) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$",
                            "type": "string"
                        }
                    ]
                },
                "until": {
                    "description": "Дата окончания периода изменений (не включается). Формат: YYYY-MM-DD или YYYY-MM-DD hh:mm:ss",
                    "oneOf": [
                        {
                            "pattern": "(19|20)\\d\\d-((0[1-9]|1[012])-(0[1-9]|[12]\\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)",
                            "type": "string"
                        },
                        {
                            "pattern": "^([1-2]\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\\d|3[0-1]) ([0-1]\\d|2[0-4])(:[0-5]\\d){2}$",
                            "type": "string"
                        }
                    ]
                },
                "translate": {
                    "description": "Управление выдачей переводов полей.\n  - false – выдаются русскоязычные поля\n  - true – выдача англоязычных полей\n  - null – выдаются обе версии",
                    "type": "boolean",
                    "default": null
                }
            },
            "required": [
                "id",
                "catalog",
                "from",
                "until"
            ]
        },
        "CatalogObjectChangesResponse": {
            "description": "Схема ответа для метода /publrest/object/changes (запрос изменений объекта).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CatalogObject"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogCountRequest": {
            "description": "Схема запроса для метода /publrest/catalog/count (запрос количества элементов в каталоге).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "criteria": {
                    "description": "Условие для выборка элементов набора данных на языке запросов к ЕХД.\nДля параметра geoData используются функциях near и inside",
                    "type": "string"
                },
                "geoData": {
                    "description": "Используется для описания переменных и их значений, которые в последствии будут использованы при составлении условий с геоданными.\nКоординаты точки или полигона указываются в формате GeoJSON.",
                    "type": "object",
                    "oneOf": [
                        {
                            "$ref": "#/components/schemas/GeodataCollection"
                        },
                        {
                            "$ref": "#/components/schemas/SingleGeodata"
                        }
                    ]
                },
                "epoch": {
                    "description": "Дата, на которую структура данных была актуальна.\nФормат даты - YYYY-MM-DD\nПо умолчанию - текущая дата.",
                    "type": "string"
                },
                "timestamp": {
                    "description": "Определяет формат даты в параметре `epoch`.\n  - `0` - формат YYYY-MM-DD;\n  - `1` - формат YYYY-MM-DD'T'HH:mm:ss.SSSXXX.",
                    "type": "integer",
                    "format": "int32",
                    "enum": [
                        0,
                        1
                    ],
                    "default": 0
                },
                "includeDeleted": {
                    "description": "Учитывать ли в выборке удаленные объекты.",
                    "type": "boolean",
                    "default": false
                }
            },
            "required": [
                "id"
            ]
        },
        "CatalogCountResponse": {
            "description": "Схема ответа для метода /publrest/catalog/count (запрос количества элементов в каталоге)",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "description": "Количество объектов в каталоге публикации, удовлетворяющих заданному условию.",
                            "type": "integer",
                            "format": "int32"
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogChangesResponsePaging": {
            "description": "Схема ответа для метода /publrest/catalog/changes (получение измененных объектов в каталоге) при наличии параемтра Paging=true",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CatalogChangesResponse"
                },
                {
                    "$ref": "#/components/schemas/CommonFoundReturnedResponseInfo"
                }
            ]
        },
        "CatalogAggregateRequest": {
            "description": "Схема запроса для метода /publrest/catalog/aggregate (выполнение агрегирующего запроса).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "aggregation": {
                    "description": "Название агрегирующего запроса:\n  - CadastralCostSum - сумма кадастровой стоимости\n  - AreaSum - суммарная площадь\n  - CadastralCostAndAreaSum -  и сумма кадастровой стоимости и суммарная площадь",
                    "type": "string",
                    "enum": [
                        "CadastralCostSum",
                        "AreaSum",
                        "CadastralCostAndAreaSum"
                    ]
                },
                "criteria": {
                    "description": "Условие для выборка элементов набора данных на языке запросов к ЕХД.\nДля параметра geoData используются функциях `near` и `inside`.",
                    "type": "string"
                },
                "epoch": {
                    "description": "Дата, на которую структура данных была актуальна. По умолчанию - текущая дата.\nФормат даты - YYYY-MM-DD",
                    "type": "string"
                },
                "sorting": {
                    "description": "Параметры сортировки.",
                    "type": "object",
                    "additionalProperties": {
                        "description": "<*> = \"name_attribute\"\nname_attribute - techName атрибута\n\nПередаются в JSON в виде пары ключ - значение, где ключ записывается в формате \"name_attribute\".\nЗначение это наименование сортировки:\n  asc – по возрастанию;\n  desc – по убыванию.",
                        "type": "string",
                        "enum": [
                            "asc",
                            "desc"
                        ]
                    }
                },
                "includeDeleted": {
                    "description": "Учитывать ли в выборке удаленные объекты.",
                    "type": "boolean",
                    "default": false
                }
            },
            "required": [
                "id",
                "aggregation"
            ]
        },
        "CatalogAggregateResponse": {
            "description": "Схема ответа для метода /publrest/catalog/aggregate (выполнение агрегирующего запроса).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/AggregationGroupItem"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "DictionaryGetRequest": {
            "description": "Схема запроса для метода /publrest/dictionary/get (запрос содержимого справочников).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор запрашиваемого справочника.",
                    "type": "integer",
                    "format": "int32"
                },
                "offset": {
                    "description": "Смещение окна выдачи.\nПозиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\nПо умолчанию `0`.",
                    "type": "integer",
                    "format": "int32",
                    "default": 0,
                    "minimum": 0
                },
                "limit": {
                    "description": "Количество возвращаемых элементов справочника (число от `1` до `999999`). По умолчанию `999999`.",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 1,
                    "maximum": 999999,
                    "default": 999999
                }
            },
            "required": [
                "id"
            ]
        },
        "DictionaryGetResponse": {
            "description": "Схема ответа для метода /publrest/dictionary/get (запрос содержимого справочников).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DictionaryElement"
                            }
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogSpecification": {
            "description": "Спецификация каталога публикации",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Наименование каталога публикации",
                    "type": "string"
                },
                "nameEn": {
                    "description": "Наименование каталога публикации на английском языке",
                    "type": "string"
                },
                "technicalName": {
                    "description": "Техническое наименование каталога публикации",
                    "type": "string"
                },
                "shortName": {
                    "description": "Краткое наименование каталога публикации",
                    "type": "string"
                },
                "shortNameEn": {
                    "description": "Краткое наименование каталога публикации на английском языке",
                    "type": "string"
                },
                "accountingObject": {
                    "description": "Категория объектов",
                    "type": "string"
                },
                "accountingObjectEn": {
                    "description": "Категория объектов на английском языке",
                    "type": "string"
                },
                "keywords": {
                    "description": "Ключевые слова на английском языке",
                    "type": "string"
                },
                "keywordsEn": {
                    "description": "Ключевые слова",
                    "type": "string"
                },
                "kind": {
                    "description": "Название вида каталога публикации",
                    "oneOf": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "type": {
                    "description": "Название типа каталога публикации",
                    "oneOf": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "period": {
                    "description": "Периодичность актуализации (на русском языке, как в общих настройках каталога)",
                    "oneOf": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "hasGeo": {
                    "description": "Наличие геометрии в каталоге публикации (0 или 1)",
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0,
                    "maximum": 1
                },
                "categories": {
                    "description": "Тематические категории, к которым относится каталог публикации",
                    "type": "string"
                },
                "categoriesEn": {
                    "description": "Тематические категории, к которым относится каталог публикации, на английском языке",
                    "type": "string"
                },
                "layerId": {
                    "description": "Идентификатор слоя геоданных в системе ЕГИП\nВыведено из эксплуатации в ЕХД2",
                    "type": "string"
                },
                "OIVs": {
                    "description": "Список ОИВов-поставщиков в виде объектов.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/OIVsObject"
                    }
                },
                "oiv": {
                    "description": "Список наименований ОИВов-поставщиков, разделенных запятыми (в т.ч. ответственные за англ.версию каталога)",
                    "type": "string"
                },
                "oivEn": {
                    "description": "Список наименований ОИВов-поставщиков, разделенных запятыми, на английском языке",
                    "type": "string"
                },
                "oivList": {
                    "description": "Список наименований ОИВов-поставщиков, разделенных запятыми (в т.ч. ответственные за англ.версию каталога)",
                    "type": "string"
                },
                "rn": {
                    "description": "Номер строки rowNumber",
                    "type": "string"
                },
                "cnt": {
                    "description": "Количество объектов в каталоге публикации",
                    "type": "string"
                },
                "archive": {
                    "description": "Является ли архивным",
                    "type": "boolean"
                },
                "hasEnVersion": {
                    "description": "Наличие английской версии каталога",
                    "type": "boolean"
                },
                "description": {
                    "description": "Полное описание каталога публикации",
                    "type": "boolean"
                },
                "descriptionEn": {
                    "description": "Описание каталога публикации на английском языке (всегда пустой)",
                    "type": "boolean",
                    "default": null
                },
                "defaultSort": {
                    "description": "Сортировка объектов в каталоге публикации по умолчанию",
                    "type": "object",
                    "additionalProperties": {
                        "description": "<*> = \"name_attribute\"\nname_attribute - techName атрибута\n\nЗначения атрибутов объекта, возвращаются в JSON в виде пары ключ - значение, где ключ записывается в формате \"name_attribute\".\nВозвращаются только атрибуты для которых настроена сортировка.\nЗначение это наименование сортировки:\n  asc – по возрастанию;\n  desc – по убыванию.",
                        "type": "string",
                        "enum": [
                            "asc",
                            "desc"
                        ]
                    }
                },
                "systems": {
                    "description": "Список систем-потребителей, разделенных точкой с запятой",
                    "type": "string"
                },
                "fieldsEa": {
                    "description": "Информация об описании слоя электронного атласа.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FieldsEaObject"
                    }
                },
                "nameVariants": {
                    "description": "Массив наименований каталога для разных систем-потребителей в настройках публикации.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/NameVariantsObject"
                    }
                },
                "systemFields": {
                    "description": "Массив системных полей каталога публикации",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/SystemFieldsObject"
                    }
                },
                "version": {
                    "description": "Информация о версии каталога публикации",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/VersionObject"
                        }
                    ]
                },
                "permittedSystems": {
                    "description": "Список систем-потребителей (указываются технические наименования систем)",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "catalog_status_id": {
                    "description": "Статус каталога публикации.",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/PublicationCatalogStatusId"
                        }
                    ]
                },
                "details_opod": {
                    "description": "Дополнительная информация для наборов данных, сформированных на основе каталога для ОПОД",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/DetailsOpodObject"
                        }
                    ]
                },
                "responsiblePerson": {
                    "description": "Данные ответственного лица",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/ResponsiblePersonObject"
                        }
                    ]
                },
                "fields": {
                    "description": "Массив с информацией об атрибутах каталога публикации.",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/FieldsObject"
                    }
                }
            },
            "required": [
                "id",
                "name",
                "nameEn",
                "technicalName",
                "shortName",
                "shortNameEn",
                "accountingObject",
                "accountingObjectEn",
                "keywords",
                "kind",
                "type",
                "period",
                "hasGeo",
                "categories",
                "categoriesEn",
                "layerId",
                "OIVs",
                "oiv",
                "oivEn",
                "oivList",
                "rn",
                "cnt",
                "archive",
                "hasEnVersion",
                "description",
                "descriptionEn",
                "defaultSort",
                "systems",
                "fieldsEa",
                "nameVariants",
                "systemFields",
                "version",
                "permittedSystems",
                "catalog_status_id",
                "details_opod",
                "responsiblePerson",
                "fields"
            ]
        },
        "OIVsObject": {
            "description": "ОИВ-поставщик",
            "type": "object",
            "properties": {
                "Id": {
                    "description": "Идентификатор ОИВ",
                    "type": "integer",
                    "format": "int32"
                },
                "Name": {
                    "description": "Полное наименование ОИВ",
                    "type": "string"
                },
                "ShortName": {
                    "description": "Краткое наименование ОИВ",
                    "type": "string"
                },
                "NameEn": {
                    "description": "Англоязычное наименование ОИВ",
                    "type": "string"
                },
                "INN": {
                    "description": "ИНН ОИВ",
                    "type": "string"
                }
            },
            "required": [
                "Id",
                "Name",
                "ShortName",
                "NameEn",
                "INN"
            ]
        },
        "FieldsEaObject": {
            "description": "Описание слоя электронного атласа",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор описани",
                    "type": "integer",
                    "format": "int32"
                },
                "icoName": {
                    "description": "Название иконки",
                    "type": "string"
                },
                "signDate": {
                    "description": "Дата подписания слоя",
                    "type": "string"
                },
                "isLayerOpen": {
                    "description": "Признак \"Слой отображается в открытой части атласа\" (0 или 1)",
                    "type": "integer",
                    "format": "int32"
                },
                "isUpdateDb": {
                    "description": "Признак \"Данные необходимо обновлять в БД\" (0 или 1)",
                    "type": "integer",
                    "format": "int32"
                },
                "isUpdateWfs": {
                    "description": "Признак \"Данные необходимо обновлять в WFS сервисе\" (0 или 1)",
                    "type": "integer",
                    "format": "int32"
                },
                "signFio": {
                    "description": "ФИО подписавшего слой",
                    "type": "string"
                },
                "guLink": {
                    "description": "Ссылка на портал Госуслуг",
                    "type": "string"
                },
                "isUpdate": {
                    "description": "Признак \"Слой доступен для обновления\" (0 или 1)",
                    "type": "integer",
                    "format": "int32"
                },
                "linkData": {
                    "description": "Ссылка на источник данных",
                    "type": "string"
                },
                "typeObject": {
                    "description": "Тип объекта (Точка, Полулиния, Полигон)",
                    "type": "string"
                },
                "rubricid": {
                    "description": "Идентификатор рубрикатора",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "icoName",
                "signDate",
                "isLayerOpen",
                "isUpdateDb",
                "isUpdateWfs",
                "signFio",
                "guLink",
                "isUpdate",
                "linkData",
                "typeObject",
                "rubricid"
            ]
        },
        "NameVariantsObject": {
            "description": "Наименование каталога системы-потребителя в настройках публикации",
            "type": "object",
            "properties": {
                "systemId": {
                    "description": "Идентификатор системы, для которой определено название каталога",
                    "type": "string"
                },
                "systemLogin": {
                    "description": "Техническое наименование системы, для которой определено название каталога",
                    "type": "string"
                },
                "fullName": {
                    "description": "Полное наименование каталога",
                    "type": "string"
                },
                "fullNameEn": {
                    "description": "Полное наименование каталога на английском языке",
                    "type": "string"
                },
                "technicalName": {
                    "description": "Техническое наименование каталога",
                    "type": "string"
                },
                "shortName": {
                    "description": "Краткое наименование каталога",
                    "type": "string"
                },
                "shortNameEn": {
                    "description": "Краткое наименование каталога на английском языке",
                    "type": "string"
                }
            },
            "required": [
                "systemId",
                "systemLogin",
                "fullName",
                "fullNameEn",
                "technicalName",
                "shortName",
                "shortNameEn"
            ]
        },
        "SystemFieldsObject": {
            "description": "Системное поле каталога публикации",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор системного поля",
                    "type": "integer",
                    "format": "int32"
                },
                "system": {
                    "description": "Техническое наименование системы",
                    "type": "string"
                },
                "sysField": {
                    "description": "Наименование системного поля",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "system",
                "sysField"
            ]
        },
        "VersionObject": {
            "description": "Информация о версии каталога публикации",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор версии (номер)",
                    "type": "integer",
                    "format": "int32"
                },
                "validFrom": {
                    "description": "Дата начала периода актуальности версии",
                    "type": "string"
                },
                "validUntil": {
                    "description": "дата окончания периода актуальности версии (для актуальных версий указывается \"Jan 1, 9999 12:00:00 AM\").\nПример даты (для понимания формата): Nov 26, 2021 10:15:37 AM",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "validFrom",
                "validUntil"
            ]
        },
        "PublicationCatalogStatusId": {
            "description": "Статус публикации каталога публикации:\n  - `1` - Не опубликовано\n  - `2` - Опубликовано\n  - `5` - Архивный",
            "type": "integer",
            "format": "int32"
        },
        "DetailsOpodObject": {
            "description": "Дополнительная информация для наборов данных, сформированных на основе каталога для ОПОД",
            "type": "object",
            "properties": {
                "idOpenCategory": {
                    "description": "Идентификатор категории, к которой относится набор на ОПОД",
                    "type": "integer",
                    "format": "int32"
                },
                "nameOpenCategory": {
                    "description": "Наименование категории, к которой относится набор на ОПОД",
                    "type": "string"
                },
                "nameOpenCategoryEn": {
                    "description": "Наименование категории, к которой относится набор на ОПОД, на английском языке",
                    "type": "string"
                },
                "publicCatalogStatus": {
                    "description": "Наименование статуса публикации",
                    "type": "string"
                },
                "cluster": {
                    "description": "Признак \"Кластеры округ/район\"",
                    "type": "boolean"
                },
                "iso": {
                    "description": "Признак \"Показатели ISO37120 и U4SSC\"",
                    "type": "boolean"
                },
                "accessibility": {
                    "description": "Признак того, относится ли атрибут к категории \"Доступная среда\"",
                    "type": "boolean"
                },
                "idNumber": {
                    "description": "Идентификатор набора",
                    "type": "string"
                },
                "keyAccess": {
                    "description": "Ключ предварительного просмотра набора данных (хранится в БД и работает для наборов в статусе \"Новый\")",
                    "type": "string"
                },
                "linkForum": {
                    "description": "Ссылка на форум",
                    "type": "string"
                },
                "tags": {
                    "description": "Тэги каталога",
                    "type": "string"
                },
                "isDict": {
                    "description": "Является ли набор справочником",
                    "type": "boolean"
                },
                "typeDict": {
                    "description": "Наименование типа справочника для набора данных.",
                    "oneOf": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "seasonId": {
                    "description": "Идентификатор типа сезонности набора данных",
                    "oneOf": [
                        {
                            "type": "integer",
                            "format": "int32",
                            "enum": [
                                1,
                                2,
                                3,
                                4
                            ]
                        }
                    ]
                },
                "season": {
                    "description": "Наименование типа сезонности набора данных",
                    "oneOf": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "firstPublication": {
                    "description": "Дата первой публикации",
                    "type": "string"
                },
                "sortByPoligon": {
                    "description": "Сортировка полигональных объектов",
                    "type": "string"
                },
                "sefUrl": {
                    "description": "Идентификатор набора для SEF URL",
                    "type": "string"
                }
            },
            "required": [
                "idOpenCategory",
                "nameOpenCategory",
                "nameOpenCategoryEn",
                "publicCatalogStatus",
                "cluster",
                "iso",
                "accessibility",
                "idNumber",
                "keyAccess",
                "linkForum",
                "tags",
                "isDict",
                "typeDict",
                "seasonId",
                "season",
                "firstPublication",
                "sortByPoligon",
                "sefUrl"
            ]
        },
        "ResponsiblePersonObject": {
            "description": "Данные ответственного лица",
            "type": "object",
            "properties": {
                "fio": {
                    "description": "ФИО ответственного",
                    "type": "string"
                },
                "fioEn": {
                    "description": "ФИО ответственного на английском языке",
                    "type": "string"
                },
                "phone": {
                    "description": "Телефон ответственного лица",
                    "type": "string"
                },
                "email": {
                    "description": "email ответственного лица",
                    "type": "string"
                }
            },
            "required": [
                "fio",
                "fioEn",
                "phone",
                "email"
            ]
        },
        "FieldsObject": {
            "description": "Информация об атрибуте каталога публикации",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор атрибута в каталоге",
                    "type": "integer",
                    "format": "int32"
                },
                "name": {
                    "description": "Русскоязычное наименование атрибута",
                    "type": "string"
                },
                "enName": {
                    "description": "Англоязычное наименование атрибута",
                    "type": "string"
                },
                "techName": {
                    "description": "Техническое наименование атрибута",
                    "type": "string"
                },
                "columnId": {
                    "description": "Техническое наименование столбца, в котором хранятся данные (например, col_13312)\nдля атрибутов каталога имеет формат col_{id} и col_{id}_en,\nгде id - идентификатор атрибута в каталоге для атрибутов корневого каталога и идентификатор атрибута в ЕХД для атрибутов вложенных каталогов",
                    "type": "string"
                },
                "type": {
                    "description": "Техническое наименование типа атрибута",
                    "$ref": "#/components/schemas/AttributeTypeTagIdEnum"
                },
                "typeName": {
                    "description": "Русскоязычное наименование типа атрибута",
                    "$ref": "#/components/schemas/AttributeTypeNameEnum"
                },
                "isPk": {
                    "description": "Может ли атрибут использоваться, как первичный ключ (число, возможные значения 0 -нет, 1- да)",
                    "type": "boolean"
                },
                "maxLength": {
                    "description": "Максимальная длина строкового атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "dictionaryId": {
                    "description": "Идентификатор справочника (для справочных атрибутов с типом DICTIONARY)",
                    "type": "integer",
                    "format": "int32"
                },
                "dictColTehName": {
                    "description": "Техническое наименование справочника (для справочных атрибутов с типом DICTIONARY)",
                    "type": "string"
                },
                "catalogId": {
                    "description": "Идентификатор вложенного каталога (для табличных атрибутов с типом CATALOG)",
                    "type": "integer",
                    "format": "int32"
                },
                "isArray": {
                    "description": "Признак, что поле может иметь множественное значения (0 - нет; 1 - да)",
                    "type": "integer",
                    "format": "int32"
                },
                "groupName": {
                    "description": "Наименование группы атрибутов, с которой сопоставлен атрибут",
                    "type": "string"
                },
                "rown": {
                    "description": "Уникальный номер атрибута (формируется рандомно и выводится строкой, для атрибута в рамках каталога уникально и не изменно)",
                    "type": "string"
                },
                "systemField": {
                    "description": "Наименование системного атрибута, с которым сопоставлен атрибут",
                    "type": "string"
                },
                "systems": {
                    "description": "Список систем-потребителей, которым доступен атрибут, в виде строки (указываются технические наименования систем)",
                    "type": "string"
                },
                "order": {
                    "description": "Порядковый номер атрибута в каталоге",
                    "type": "integer",
                    "format": "int32"
                },
                "permittedSystems": {
                    "description": "Список систем-потребителей (указываются технические наименования систем)",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "permittedSystemNames": {
                    "description": "Назначение неизвестно (всегда null)",
                    "type": "string"
                },
                "isDefaultSystems": {
                    "description": "Список систем, в которых атрибут отображается по умолчанию",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "hasTranslation": {
                    "description": "Признак наличия английской версии в каталоге.\n(`true`` проставляется если hasEnVersion=true и только для несистемных атрибутов, у которых id > 0, для остальных `false``)",
                    "type": "boolean"
                },
                "isDefaultVision": {
                    "description": "Признак отображения по умолчанию на ОПО Д для атрибутов, отображаемых по умолчанию и видимых для ОПОД.",
                    "type": "boolean"
                },
                "system": {
                    "description": "Признак технического атрибута (global_id, is_deleted и пр.)",
                    "type": "boolean"
                },
                "specification": {
                    "description": "Объект, содержащий спецификацию для вложенного каталога (при условии type = CATALOG). Имеет ту же структуру, что и корневой каталог.\nДля параметра `specification`` получается рекурсия использования схемы FillingCatalogListItem",
                    "allOf": [
                        {
                            "$ref": "#/components/schemas/CatalogSpecification"
                        }
                    ]
                }
            },
            "required": [
                "id",
                "name",
                "enName",
                "techName",
                "columnId",
                "type",
                "typeName",
                "isPk",
                "maxLength",
                "dictionaryId",
                "dictColTehName",
                "catalogId",
                "isArray",
                "groupName",
                "rown",
                "systemField",
                "systems",
                "order",
                "permittedSystems",
                "permittedSystemNames",
                "isDefaultSystems",
                "hasTranslation",
                "isDefaultVision",
                "system",
                "specification"
            ]
        },
        "AggregationGroupItem": {
            "description": "Группа агрегаций.\nВ каждой группе присутствует обязательный атрибут '_id' и 'count'.\nОстальные атрибуты зависят от агрегирующего запроса (или выводятся оба, или один из).",
            "properties": {
                "_id": {
                    "description": "Идентификатор группы",
                    "type": "string"
                },
                "count": {
                    "description": "Количество объектов подходящих под условие",
                    "type": "integer",
                    "format": "int32"
                },
                "CadastralCost": {
                    "description": "Сумма кадастровой стоимости",
                    "type": "number"
                },
                "Area": {
                    "description": "Суммарная площадь",
                    "type": "number"
                }
            },
            "required": [
                "_id",
                "count"
            ]
        },
        "CatalogExportRequest": {
            "description": "Схема запроса для метода /publrest/catalog/export (запрос на формирование файла экспорта с содержимым каталога).",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор каталога публикации",
                    "type": "integer",
                    "format": "int32"
                },
                "format": {
                    "description": "Формат запрашиваемого файла. Если `null`, то возвращаются все форматы.",
                    "type": "string",
                    "enum": [
                        "XLSX",
                        "JSON",
                        "XML",
                        "CSV"
                    ]
                },
                "translate": {
                    "description": "Управление выдачей переводов полей.\n  - false – выдаются русскоязычные поля\n  - true – выдача англоязычных полей\n\nЕсли `null`, то возвращается обе версии.",
                    "type": "boolean"
                },
                "epoch": {
                    "description": "Дата, на которую структура данных была актуальна. По умолчанию - текущая дата.\nФормат даты - YYYY-MM-DDThh:mm:ss.sTZD\nДля запроса статуса формирования файлов необходимо передать в параметре epoch полученное значение из поля 'createDate'.",
                    "type": "string"
                }
            },
            "required": [
                "id"
            ]
        },
        "CatalogExportResponse": {
            "description": "Схема ответа для метода /publrest/catalog/export (запрос на экспорт содержимого каталога)",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CommonResponseInfo"
                },
                {
                    "properties": {
                        "response": {
                            "type": "object",
                            "description": "Объекты XLSX XML JSON CSV выдаются в зависимости от запроса (параметр `format`).",
                            "properties": {
                                "XLSX": {
                                    "description": "Статус файла для формата XLSX",
                                    "$ref": "#/components/schemas/CatalogExportObjectResponseFormat"
                                },
                                "XML": {
                                    "description": "Статус файла для формата XML",
                                    "$ref": "#/components/schemas/CatalogExportObjectResponseFormat"
                                },
                                "JSON": {
                                    "description": "Статус файла для формата JSON",
                                    "allOf": [
                                        {
                                            "$ref": "#/components/schemas/CatalogExportObjectResponseFormat"
                                        }
                                    ]
                                },
                                "CSV": {
                                    "description": "Статус файла для формата CSV",
                                    "allOf": [
                                        {
                                            "$ref": "#/components/schemas/CatalogExportObjectResponseFormat"
                                        }
                                    ]
                                },
                                "structureVersion": {
                                    "description": "Всегда пустая",
                                    "type": "string"
                                },
                                "errors": {
                                    "description": "Описание ошибок",
                                    "type": "string"
                                },
                                "createDate": {
                                    "description": "Дата запроса на генерацию файлов. Строка в формате ISO YYYY-MM-DDThh:mm:ss.sTZD",
                                    "type": "string"
                                }
                            },
                            "required": [
                                "structureVersion",
                                "errors",
                                "createDate"
                            ]
                        }
                    }
                },
                {
                    "$ref": "#/components/schemas/CommonFiltersValidDateResponseInfo"
                }
            ]
        },
        "CatalogExportObjectResponseFormat": {
            "description": "Статус файла каждого формата",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор файла",
                    "type": "integer",
                    "format": "int32"
                },
                "status": {
                    "description": "Статус формирования файла.\n  - PROCESSING - формируется\n  - ERROR - ошибка\n  - SUCCESS - сформирован",
                    "type": "string",
                    "enum": [
                        "PROCESSING",
                        "ERROR",
                        "SUCCESS"
                    ]
                },
                "lastFileGeneration": {
                    "description": "Дата последней генерации файла данного типа. Строка в формате ISO YYYY-MM-DDThh:mm:ss.sTZD",
                    "type": "string"
                },
                "size": {
                    "description": "Размер файла в байтах. Файл формируется в  архив (zip).",
                    "type": "number"
                }
            },
            "required": [
                "id",
                "status",
                "lastFileGeneration",
                "size"
            ]
        },
        "EhdEnvelope": {
            "description": "Конверт SOAP",
            "type": "object",
            "xml": {
                "prefix": "soapenv",
                "name": "Envelope"
            },
            "properties": {
                "xmlns:soapenv": {
                    "description": "Пространство имен SOAP",
                    "type": "string",
                    "enum": [
                        "http://schemas.xmlsoap.org/soap/envelope/"
                    ],
                    "xml": {
                        "attribute": true
                    }
                },
                "xmlns:ehd": {
                    "description": "Пространство имен xsd-схемы SOAP-сервиса ЕХД",
                    "type": "string",
                    "enum": [
                        "http://ehd.mos.com/"
                    ],
                    "xml": {
                        "attribute": true
                    }
                }
            },
            "required": [
                "xmlns:soapenv",
                "xmlns:ehd",
                "Body"
            ]
        },
        "EhdEnvelopeWithSignNamespace": {
            "description": "Конверт SOAP с пространством имен для подписи",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelope"
                }
            ],
            "properties": {
                "xmlns:wsse": {
                    "description": "Пространство имен Web Services Security",
                    "type": "string",
                    "enum": [
                        "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                    ],
                    "xml": {
                        "attribute": true
                    }
                }
            },
            "required": [
                "xmlns:wsse"
            ]
        },
        "EhdEnvelopeWithHeader": {
            "description": "Конверт SOAP с заголовком",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelope"
                },
                {
                    "properties": {
                        "Header": {
                            "description": "Заголовок SOAP-запроса",
                            "type": "object",
                            "xml": {
                                "prefix": "soapenv",
                                "name": "Header"
                            }
                        }
                    },
                    "required": [
                        "Header"
                    ]
                }
            ]
        },
        "getCatalogListRequest": {
            "description": "Схема запроса метода getCatalogList",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogList": {
                                    "description": "Объект запроса getCatalogList",
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "getCatalogList"
                                    },
                                    "properties": {
                                        "version": {
                                            "description": "Версия метода, по умолчанию 1.\n\nВторая используется для получения поля `objCategories`.",
                                            "type": "integer",
                                            "format": "int32",
                                            "default": 1
                                        }
                                    }
                                }
                            },
                            "required": [
                                "getCatalogList"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogSpecRequest": {
            "description": "Схема запроса метода getCatalogSpec",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogSpec": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "getCatalogSpec"
                                    },
                                    "properties": {
                                        "idCatalog": {
                                            "type": "integer",
                                            "format": "int32"
                                        },
                                        "version": {
                                            "type": "integer",
                                            "format": "int32"
                                        }
                                    },
                                    "required": [
                                        "idCatalog"
                                    ]
                                }
                            },
                            "required": [
                                "getCatalogSpec"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogStatsRequest": {
            "description": "Схема запроса метода getCatalogStats",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogStats": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "getCatalogStats"
                                    },
                                    "properties": {
                                        "idCatalog": {
                                            "type": "integer",
                                            "format": "int32"
                                        },
                                        "countSubscribe": {
                                            "type": "integer",
                                            "format": "int32"
                                        }
                                    },
                                    "required": [
                                        "idCatalog"
                                    ]
                                }
                            },
                            "required": [
                                "getCatalogStats"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogListResponse": {
            "description": "Схема ответа метода getCatalogList",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "ehdCatalogs": {
                                    "type": "array",
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "items": {
                                        "properties": {
                                            "ehdCatalog": {
                                                "xml": {
                                                    "prefix": "ehd",
                                                    "wrapped": true
                                                },
                                                "properties": {
                                                    "id": {
                                                        "type": "integer",
                                                        "format": "int32",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "fullName": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "technicalName": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "shortName": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "accountingObject": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "keywords": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "vid": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "type": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "period": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "hasGeo": {
                                                        "type": "boolean",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "categories": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "oiv": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "objCategories": {
                                                        "type": "string",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    }
                                                },
                                                "required": [
                                                    "id",
                                                    "fullName",
                                                    "technicalName",
                                                    "shortName",
                                                    "accountingObject",
                                                    "keywords",
                                                    "vid",
                                                    "type",
                                                    "period",
                                                    "hasGeo",
                                                    "categories",
                                                    "oiv",
                                                    "objCategories"
                                                ]
                                            }
                                        },
                                        "required": [
                                            "ehdCatalog"
                                        ]
                                    }
                                }
                            },
                            "required": [
                                "ehdCatalogs"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogItemsResponse": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "ehdCatalogItemsset": {
                                    "type": "array",
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "items": {
                                        "properties": {
                                            "ehdCatalogItem": {
                                                "xml": {
                                                    "prefix": "ehd",
                                                    "wrapped": true
                                                },
                                                "properties": {
                                                    "ehdCatalogAttr": {
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        },
                                                        "properties": {
                                                            "id": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isDeleted": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isDeletedTMP": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "tehName": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "type": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "dictValue": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "value": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "groupValue": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "techName",
                                                            "type",
                                                            "value"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "ehdCatalogAttr"
                                                ]
                                            }
                                        },
                                        "required": [
                                            "ehdCatalogItem"
                                        ]
                                    }
                                }
                            },
                            "required": [
                                "ehdCatalogItemsset"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogItemsInconsistencyError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogItemsResponse": {
                                    "type": "array",
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "ehdCatalogItemsset": {
                                            "type": "array",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getDictItemResponse": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getDictItemResponse": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "ehdDictionaryItems": {
                                            "type": "array",
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "items": {
                                                "properties": {
                                                    "ehdDictionary": {
                                                        "xml": {
                                                            "prefix": "ehd",
                                                            "wrapped": true
                                                        },
                                                        "properties": {
                                                            "id": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "parent_id": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "name": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "dictAttrsV2": {
                                                                "type": "array",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                },
                                                                "items": {
                                                                    "properties": {
                                                                        "tehName": {
                                                                            "type": "string",
                                                                            "xml": {
                                                                                "prefix": "ehd"
                                                                            }
                                                                        },
                                                                        "name": {
                                                                            "type": "string",
                                                                            "xml": {
                                                                                "prefix": "ehd"
                                                                            }
                                                                        },
                                                                        "value": {
                                                                            "type": "string",
                                                                            "xml": {
                                                                                "prefix": "ehd"
                                                                            }
                                                                        }
                                                                    },
                                                                    "required": [
                                                                        "techName",
                                                                        "name",
                                                                        "value"
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "name",
                                                            "dictAttrsV2"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "ehdDictionary"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "ehdDictionaryItems"
                                    ]
                                }
                            },
                            "required": [
                                "getDictItemResponse"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogSpecResponse": {
            "description": "Атрибут каталога заполнения",
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogSpecResponse": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "ehdAttrSpec": {
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "type": "array",
                                            "items": {
                                                "properties": {
                                                    "count": {
                                                        "type": "integer",
                                                        "xml": {
                                                            "prefix": "ehd"
                                                        }
                                                    },
                                                    "ehdCommonAttribute": {
                                                        "type": "object",
                                                        "xml": {
                                                            "prefix": "ehd",
                                                            "wrapped": true
                                                        },
                                                        "properties": {
                                                            "id": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "refCatalog": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "dictId": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "typeId": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "maxLength": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "maxLengthDecimal": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "fieldMask": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "name": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "colname": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isEdit": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isReq": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isPrimaryKey": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "tehName": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isMulti": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "type": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isDeletedTMP": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isDeleted": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isAutocomplete": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isManualInput": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "isManualInputGeo": {
                                                                "type": "boolean",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "refCatalog",
                                                            "typeId",
                                                            "dictId",
                                                            "maxLength",
                                                            "maxLengthDecimal",
                                                            "fieldMask",
                                                            "name",
                                                            "isEdit",
                                                            "isReq",
                                                            "isPrimaryKey",
                                                            "tehName",
                                                            "isMulti",
                                                            "type",
                                                            "isDeletedTMP",
                                                            "isDeleted"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "ehdCommonAttribute",
                                                    "count"
                                                ]
                                            }
                                        }
                                    }
                                }
                            },
                            "required": [
                                "ehdAttrSpec"
                            ]
                        }
                    }
                }
            ]
        },
        "getAllDictResponse": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getAllDictResponse": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "ehdDictionaries": {
                                            "type": "array",
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "items": {
                                                "properties": {
                                                    "ehdDictionary": {
                                                        "xml": {
                                                            "prefix": "ehd",
                                                            "wrapped": true
                                                        },
                                                        "properties": {
                                                            "id": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "name": {
                                                                "type": "string",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            },
                                                            "total": {
                                                                "type": "integer",
                                                                "format": "int32",
                                                                "xml": {
                                                                    "prefix": "ehd"
                                                                }
                                                            }
                                                        },
                                                        "required": [
                                                            "id",
                                                            "name",
                                                            "total"
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "ehdDictionary"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "ehdDictionaries"
                                    ]
                                }
                            },
                            "required": [
                                "getAllDictResponse"
                            ]
                        }
                    }
                }
            ]
        },
        "ApiError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "Fault": {
                                    "xml": {
                                        "prefix": "soapenv"
                                    },
                                    "properties": {
                                        "faultcode": {
                                            "description": "Текстовый код, который указывает на тип ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "faultstring": {
                                            "description": "Текстовое сообщение с объяснением ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "detail": {
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "properties": {
                                                "faultCode": {
                                                    "description": "Код ошибки, характерный для приложения",
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "faultString": {
                                                    "description": "Текстовое сообщение, характерное для приложения",
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "faultCode",
                                                "faultString"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "faultcode",
                                        "faultstring"
                                    ]
                                }
                            },
                            "required": [
                                "Fault"
                            ]
                        }
                    }
                }
            ]
        },
        "CommonError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "Fault": {
                                    "xml": {
                                        "prefix": "soap"
                                    },
                                    "properties": {
                                        "faultcode": {
                                            "description": "Текстовый код, который указывает на тип ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "faultstring": {
                                            "description": "Текстовое сообщение с объяснением ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        }
                                    },
                                    "required": [
                                        "faultcode",
                                        "faultstring"
                                    ]
                                }
                            },
                            "required": [
                                "Fault"
                            ]
                        }
                    }
                }
            ]
        },
        "CommonSubscribeError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "Fault": {
                                    "xml": {
                                        "prefix": "soap"
                                    },
                                    "properties": {
                                        "faultcode": {
                                            "description": "Текстовый код, который указывает на тип ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "faultstring": {
                                            "description": "Текстовое сообщение с объяснением ошибки",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "detail": {
                                            "properties": {
                                                "SubscribeFault": {
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "SubscribeFault"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "faultcode",
                                        "faultstring"
                                    ]
                                }
                            },
                            "required": [
                                "Fault"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogStatsResponse": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "ehdCatalogStats": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "catalogId": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "fullName": {
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "technicalName": {
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "cntActiveObj": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "cntDelObj": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "cntNotSubscribe": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "cntError": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "cntGeoError": {
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        }
                                    },
                                    "required": [
                                        "catalogId",
                                        "fullName",
                                        "technicalName",
                                        "cntActiveObj",
                                        "cntDelObj",
                                        "cntNotSubscribe",
                                        "cntError",
                                        "cntGeoError"
                                    ]
                                }
                            },
                            "required": [
                                "ehdCatalogStats"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogSpecForbiddenError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "getCatalogSpecResponse": {
                                    "properties": {
                                        "ehdAttrSpec": {
                                            "properties": {
                                                "count": {
                                                    "description": "Количество объектов каталога",
                                                    "type": "integer",
                                                    "format": "int32"
                                                },
                                                "ehdException": {
                                                    "schema": null,
                                                    "$ref": "#/components/schemas/ForbiddenError"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getCatalogItemsForbiddenError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "xml": {
                                "prefix": "soapenv"
                            },
                            "properties": {
                                "getCatalogItemsResponse": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "ehdCatalogItemsset": {
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "properties": {
                                                "ehdException": {
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    },
                                                    "schema": null,
                                                    "$ref": "#/components/schemas/ForbiddenError"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getAllDictForbiddenError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "getAllDictResponse": {
                                    "properties": {
                                        "ehdDictionaries": {
                                            "properties": {
                                                "ehdException": {
                                                    "schema": null,
                                                    "$ref": "#/components/schemas/ForbiddenError"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getCatalogStatsForbiddenError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "getCatalogStatsResponse": {
                                    "properties": {
                                        "ehdCatalogStats": {
                                            "properties": {
                                                "ehdException": {
                                                    "schema": null,
                                                    "$ref": "#/components/schemas/ForbiddenError"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getDictItemForbiddenError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "getDictItemResponse": {
                                    "properties": {
                                        "ehdDictionaryItems": {
                                            "properties": {
                                                "ehdException": {
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    },
                                                    "schema": null,
                                                    "$ref": "#/components/schemas/ForbiddenError"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        "getCatalogSpecNotFoundError": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelope"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "ehdCatalogItemsset": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            ]
        },
        "setSignatureCatalogResponse": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "setSignatureCatalogResponse": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "setSignatureCatalog": {
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "properties": {
                                                "status": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "message": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "detail_message": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "catalog_id": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "action": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "status",
                                                "message",
                                                "detail_message",
                                                "catalog_id",
                                                "action"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "setSignatureCatalog"
                                    ]
                                }
                            },
                            "required": [
                                "setSignatureCatalogResponse"
                            ]
                        }
                    }
                }
            ]
        },
        "getCatalogItemsRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getCatalogItems": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "getCatalogItems"
                                    },
                                    "properties": {
                                        "idCatalog": {
                                            "description": "Id каталога заполнения",
                                            "type": "integer",
                                            "format": "int32"
                                        },
                                        "start": {
                                            "description": "Номер строки, с которой осуществляется выборка",
                                            "type": "integer"
                                        },
                                        "end": {
                                            "description": "Номер строки, которой заканчивается выборка",
                                            "type": "integer"
                                        },
                                        "hideDeleted": {
                                            "description": "Скрывать элементы с меткой удаления",
                                            "type": "boolean"
                                        },
                                        "idParentCatalog": {
                                            "description": "Идентификатор родительского каталога",
                                            "type": "boolean"
                                        },
                                        "idGlobalObject": {
                                            "description": "Идентификатор родительского объекта",
                                            "type": "boolean"
                                        },
                                        "system_object_id": {
                                            "description": "Идентификатор записи во внешней системе",
                                            "type": "integer",
                                            "format": "int32"
                                        },
                                        "filters": {
                                            "description": "Фильтры",
                                            "type": "object",
                                            "properties": {
                                                "id_attr": {
                                                    "description": "Идентификатор атрибута из спецификации",
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "attribute": true
                                                    }
                                                },
                                                "filt_type": {
                                                    "description": "Метод фильтрации                          \n- '1' - Содержит указанное значение\n- '2' - Начинается на указанное значение\n- '3' - Заканчивается на указанное значение\n- '4' - Совпадает с указанным значением\n- '5' - Только пустые значения\n- '6' - Соответствует регулярному выражению",
                                                    "type": "integer",
                                                    "enum": [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5,
                                                        6
                                                    ],
                                                    "xml": {
                                                        "attribute": true
                                                    }
                                                }
                                            }
                                        },
                                        "status": {
                                            "description": "Фильтр по полю статус\n- 'IS_DELETED' — удаленные записи\n- 'IS_NOT_DELETED' — неудаленные записи\n- 'IS_NOT_SIGN' — неподписанные записи\n- 'HAS_ERROR' — ошибки поставщика данных\n- 'HAS_NO_MY_ERROR' — ошибки прочих ОИВ\n- 'IS_SIGN_RUS' — только записи с подписанной русской версией объекта\n- 'GEOSIGN_IN_PROGRESS' — записи по которым не завершился перенос гео данных\n- 'IS_HAS_GEO_ERROR' — записи с ошибками геометрии ",
                                            "type": "string",
                                            "enum": [
                                                "IS_DELETED",
                                                "IS_NOT_DELETED",
                                                "IS_NOT_SIGN",
                                                "HAS_ERROR",
                                                "HAS_NO_MY_ERROR",
                                                "IS_SIGN_RUS",
                                                "GEOSIGN_IN_PROGRESS",
                                                "IS_HAS_GEO_ERROR"
                                            ]
                                        },
                                        "fetchGeodata": {
                                            "description": "Возвращать геоданные объектов в атрибуте geodata",
                                            "type": "boolean"
                                        },
                                        "geoType": {
                                            "description": "Система координат\n- 'wgs' - Система координат WGS 84\n- 'msk' - Система координат MSK 77 ",
                                            "type": "string",
                                            "enum": [
                                                "wgs",
                                                "msk"
                                            ]
                                        },
                                        "getSigned": {
                                            "description": "При отсутствии параметра или его значении false логика выдачи не меняется. При значении true в выдачу попадают последние подписанные значения всех записей. Если запись ни разу не подписана, то в выдачу она не попадает.",
                                            "type": "boolean"
                                        }
                                    },
                                    "required": [
                                        "idCatalog",
                                        "start",
                                        "end",
                                        "hideDeleted"
                                    ]
                                }
                            },
                            "required": [
                                "getCatalogItems"
                            ]
                        }
                    }
                }
            ]
        },
        "setSignatureHeadRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelope"
                },
                {
                    "properties": {
                        "Header": {
                            "properties": {
                                "wsse:Security": {
                                    "properties": {
                                        "soapenv:actor": {
                                            "type": "string",
                                            "example": "http://smev.gosuslugi.ru/actors/smev",
                                            "xml": {
                                                "attribute": true
                                            }
                                        },
                                        "xmlns:wsse": {
                                            "type": "string",
                                            "example": "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
                                            "xml": {
                                                "attribute": true
                                            }
                                        },
                                        "BinarySecurityToken": {
                                            "type": "string",
                                            "example": "CDQyQU5TV0VSMQ4wDAYDVQQDDAVBRE1JTjAeFw0yMjA1MTMwNjAyMTFaFw0yMzA1MTMwNjAyMTFa",
                                            "xml": {
                                                "prefix": "wsse"
                                            },
                                            "properties": {
                                                "EncodingType": {
                                                    "type": "string",
                                                    "example": "https://docs.oasis-open.org/wss-m/wss/v1.1.1/wss-SOAPMessageSecurity-v1.1.1.html",
                                                    "xml": {
                                                        "attribute": true
                                                    }
                                                },
                                                "ValueType": {
                                                    "type": "string",
                                                    "example": "https://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd",
                                                    "xml": {
                                                        "attribute": true
                                                    }
                                                },
                                                "wsu:Id": {
                                                    "type": "string",
                                                    "example": "SenderCertificate",
                                                    "xml": {
                                                        "attribute": true
                                                    },
                                                    "enum": [
                                                        "SenderCertificate"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "EncodingType",
                                                "ValueType",
                                                "wsu:Id"
                                            ]
                                        },
                                        "Signature": {
                                            "xml": {
                                                "prefix": "ds"
                                            },
                                            "properties": {
                                                "xmlns:ds": {
                                                    "type": "string",
                                                    "example": "http://www.w3.org/2000/09/xmldsig#",
                                                    "xml": {
                                                        "attribute": true
                                                    },
                                                    "enum": [
                                                        "http://www.w3.org/2000/09/xmldsig#"
                                                    ]
                                                },
                                                "SignedInfo": {
                                                    "xml": {
                                                        "prefix": "ds"
                                                    },
                                                    "properties": {
                                                        "CanonicalizationMethod": {
                                                            "xml": {
                                                                "prefix": "ds"
                                                            },
                                                            "properties": {
                                                                "Algorithm": {
                                                                    "type": "string",
                                                                    "example": "http://www.w3.org/2001/10/xml-exc-c14n#",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    }
                                                                }
                                                            },
                                                            "required": [
                                                                "Algorithm"
                                                            ]
                                                        },
                                                        "SignatureMethod": {
                                                            "xml": {
                                                                "prefix": "ds"
                                                            },
                                                            "properties": {
                                                                "Algorithm": {
                                                                    "type": "string",
                                                                    "example": "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102012-gostr34112012-256",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    }
                                                                }
                                                            },
                                                            "required": [
                                                                "Algorithm"
                                                            ]
                                                        },
                                                        "Reference": {
                                                            "xml": {
                                                                "prefix": "ds"
                                                            },
                                                            "properties": {
                                                                "URI": {
                                                                    "example": "#body",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    },
                                                                    "enum": [
                                                                        "#body"
                                                                    ]
                                                                },
                                                                "Transforms": {
                                                                    "xml": {
                                                                        "prefix": "ds"
                                                                    },
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "Transform": {
                                                                                "xml": {
                                                                                    "prefix": "ds",
                                                                                    "wrapped": true
                                                                                },
                                                                                "properties": {
                                                                                    "Algorithm": {
                                                                                        "type": "string",
                                                                                        "example": "http://www.w3.org/2001/10/xml-exc-c14n#",
                                                                                        "xml": {
                                                                                            "attribute": true
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "required": [
                                                                                    "Algorithm"
                                                                                ]
                                                                            }
                                                                        },
                                                                        "required": [
                                                                            "Transform"
                                                                        ]
                                                                    }
                                                                },
                                                                "DigestMethod": {
                                                                    "xml": {
                                                                        "prefix": "ds"
                                                                    },
                                                                    "properties": {
                                                                        "Algorithm": {
                                                                            "type": "string",
                                                                            "example": "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34112012-256",
                                                                            "xml": {
                                                                                "attribute": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "required": [
                                                                        "Algorithm"
                                                                    ]
                                                                },
                                                                "DigestValue": {
                                                                    "type": "string",
                                                                    "example": "JhxNWQ/Lby0lu3rKaHUFO+VQkQvVZemk0yOHvN32zSk=",
                                                                    "xml": {
                                                                        "prefix": "ds"
                                                                    }
                                                                }
                                                            },
                                                            "required": [
                                                                "URI",
                                                                "Transforms",
                                                                "DigestMethod",
                                                                "DigestValue"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "CanonicalizationMethod",
                                                        "SignatureMethod",
                                                        "Reference"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "xmlns:ds",
                                                "SignedInfo"
                                            ]
                                        },
                                        "SignatureValue": {
                                            "type": "string",
                                            "example": "2xh5FCnLqUOVuxZnKI6y8eydoQ62769drgrC0b6Ny6TbKr7aWFUmNqxt3CNKMK7+b6wwJLwZYn/z8UAjGtasCg==",
                                            "xml": {
                                                "prefix": "ds"
                                            }
                                        },
                                        "KeyInfo": {
                                            "xml": {
                                                "prefix": "ds"
                                            },
                                            "properties": {
                                                "SecurityTokenReference": {
                                                    "xml": {
                                                        "prefix": "wsse"
                                                    },
                                                    "properties": {
                                                        "Reference": {
                                                            "xml": {
                                                                "prefix": "wsse"
                                                            },
                                                            "properties": {
                                                                "URI": {
                                                                    "example": "#SenderCertificate",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    },
                                                                    "enum": [
                                                                        "#SenderCertificate"
                                                                    ]
                                                                },
                                                                "ValueType": {
                                                                    "example": "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    },
                                                                    "enum": [
                                                                        "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"
                                                                    ]
                                                                }
                                                            },
                                                            "required": [
                                                                "URI",
                                                                "ValueType"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "Reference"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "SecurityTokenReference"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "soapenv:actor",
                                        "xmlns:wsse",
                                        "BinarySecurityToken",
                                        "Signature",
                                        "SignatureValue",
                                        "KeyInfo"
                                    ]
                                }
                            },
                            "required": [
                                "wsse:Security"
                            ]
                        }
                    }
                }
            ]
        },
        "setSignatureRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelope"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "setSignatureCatalog": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "setSignatureCatalog"
                                    },
                                    "properties": {
                                        "idCatalog": {
                                            "example": 3456,
                                            "description": "Id каталога заполнения",
                                            "type": "integer",
                                            "format": "int32"
                                        }
                                    },
                                    "required": [
                                        "idCatalog"
                                    ]
                                }
                            },
                            "required": [
                                "setSignatureCatalog"
                            ]
                        }
                    }
                }
            ]
        },
        "getDictItemRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "properties": {
                                "getDictItem": {
                                    "type": "object",
                                    "xml": {
                                        "prefix": "ehd",
                                        "name": "getDictItem"
                                    },
                                    "properties": {
                                        "dictionaryId": {
                                            "description": "Id справочника",
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "start": {
                                            "description": "Номер строки, с которой осуществляется выборка",
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "end": {
                                            "description": "Номер строки, которой заканчивается выборка",
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "elementId": {
                                            "description": "Идентификатор элемента в справочнике (обязателен для заполнения, если передаётся)",
                                            "type": "string",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "version": {
                                            "description": "Версия запроса, по умолчанию 1. Для 2-ой версии в ответе для каждого элемента справочника будет отображаться дополнительное поле isDeleted",
                                            "type": "integer",
                                            "format": "int32",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        },
                                        "showDeleted": {
                                            "description": "Отображать удаленные записи",
                                            "type": "boolean",
                                            "xml": {
                                                "prefix": "ehd"
                                            }
                                        }
                                    },
                                    "required": [
                                        "dictionaryId",
                                        "end"
                                    ]
                                }
                            },
                            "required": [
                                "getDictItem"
                            ]
                        }
                    }
                }
            ]
        },
        "setDataInRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "$ref": "#/components/schemas/setDataInBody"
                }
            ]
        },
        "setDataInBody": {
            "type": "object",
            "properties": {
                "Body": {
                    "properties": {
                        "setDataIn": {
                            "type": "object",
                            "xml": {
                                "prefix": "ehd",
                                "name": "setDataIn"
                            },
                            "properties": {
                                "xml": {
                                    "properties": {
                                        "message": {
                                            "properties": {
                                                "id": {
                                                    "description": "GUID пакета",
                                                    "type": "string",
                                                    "example": "daa690b9-0429-461e-b39d-04bb7d8e40b3"
                                                },
                                                "catalog": {
                                                    "properties": {
                                                        "parent_catalog_id": {
                                                            "type": "integer",
                                                            "example": 245245,
                                                            "xml": {
                                                                "attribute": true
                                                            }
                                                        },
                                                        "item": {
                                                            "properties": {
                                                                "action": {
                                                                    "type": "string",
                                                                    "example": "modified",
                                                                    "xml": {
                                                                        "attribute": true
                                                                    },
                                                                    "enum": [
                                                                        "added",
                                                                        "deleted",
                                                                        "modified"
                                                                    ]
                                                                },
                                                                "categories": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "category": {
                                                                                "type": "integer",
                                                                                "example": 2401,
                                                                                "format": "int32",
                                                                                "xml": {
                                                                                    "wrapped": true
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "geodata": {
                                                                    "type": "string",
                                                                    "example": "{\"rings\" : [[ [37.12,55.51], [37.21,55.61], [37.38,55.66], [37.12,55.51] ]]}"
                                                                },
                                                                "data": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "attribute": {
                                                                                "xml": {
                                                                                    "wrapped": true
                                                                                },
                                                                                "properties": {
                                                                                    "field_id": {
                                                                                        "type": "integer",
                                                                                        "example": 58538,
                                                                                        "xml": {
                                                                                            "attribute": true
                                                                                        }
                                                                                    },
                                                                                    "type": {
                                                                                        "type": "string",
                                                                                        "example": "STRING",
                                                                                        "xml": {
                                                                                            "attribute": true
                                                                                        },
                                                                                        "enum": [
                                                                                            "INTEGER",
                                                                                            "INT",
                                                                                            "STRING",
                                                                                            "DATE",
                                                                                            "DICT",
                                                                                            "TABLE",
                                                                                            "FILE",
                                                                                            "BOOLEAN",
                                                                                            "LINK"
                                                                                        ]
                                                                                    },
                                                                                    "pk": {
                                                                                        "type": "boolean",
                                                                                        "example": false,
                                                                                        "xml": {
                                                                                            "attribute": true
                                                                                        }
                                                                                    },
                                                                                    "isManual": {
                                                                                        "type": "boolean",
                                                                                        "example": false,
                                                                                        "xml": {
                                                                                            "attribute": true
                                                                                        }
                                                                                    },
                                                                                    "values": {
                                                                                        "type": "array",
                                                                                        "items": {
                                                                                            "properties": {
                                                                                                "value": {
                                                                                                    "xml": {
                                                                                                        "wrapped": true
                                                                                                    },
                                                                                                    "oneOf": [
                                                                                                        {
                                                                                                            "type": "string",
                                                                                                            "example": "проект"
                                                                                                        },
                                                                                                        {
                                                                                                            "properties": {
                                                                                                                "file": {
                                                                                                                    "type": "array",
                                                                                                                    "items": {
                                                                                                                        "properties": {
                                                                                                                            "name": {
                                                                                                                                "type": "string",
                                                                                                                                "example": "example",
                                                                                                                                "xml": {
                                                                                                                                    "wrapped": true
                                                                                                                                }
                                                                                                                            },
                                                                                                                            "extension": {
                                                                                                                                "type": "string",
                                                                                                                                "example": "txt",
                                                                                                                                "xml": {
                                                                                                                                    "wrapped": true
                                                                                                                                }
                                                                                                                            },
                                                                                                                            "content": {
                                                                                                                                "type": "string",
                                                                                                                                "example": "ZXhhbXBsZQ==",
                                                                                                                                "xml": {
                                                                                                                                    "wrapped": true
                                                                                                                                }
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "required": [
                                                                                                                            "name",
                                                                                                                            "extension",
                                                                                                                            "content"
                                                                                                                        ]
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "required": [
                                        "message"
                                    ]
                                }
                            },
                            "required": [
                                "xml"
                            ]
                        }
                    },
                    "required": [
                        "setDataIn"
                    ]
                }
            }
        },
        "setDataInSignatureRequest": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/setSignatureHeadRequest"
                },
                {
                    "$ref": "#/components/schemas/setDataInBody"
                }
            ]
        },
        "geoDataJson": {
            "description": "Геоданные в формате json",
            "type": "object",
            "properties": {
                "type": {
                    "enum": [
                        "Point",
                        "MultiPoint",
                        "MultiLineString",
                        "MultiPolygon"
                    ]
                },
                "coordinates": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "geodata.yaml#/components/schemas/Point"
                            },
                            {
                                "$ref": "geodata.yaml#/components/schemas/MultiPoint"
                            },
                            {
                                "$ref": "geodata.yaml#/components/schemas/MultiLineString"
                            },
                            {
                                "$ref": "geodata.yaml#/components/schemas/MultiPolygon"
                            }
                        ]
                    }
                }
            }
        },
        "setDataInResponse": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EhdEnvelopeWithHeader"
                },
                {
                    "properties": {
                        "Body": {
                            "type": "object",
                            "properties": {
                                "setDataInResponse": {
                                    "xml": {
                                        "prefix": "ehd"
                                    },
                                    "properties": {
                                        "xmlns:ns2": {
                                            "xml": {
                                                "attribute": true
                                            }
                                        },
                                        "xmlns:ns3": {
                                            "xml": {
                                                "attribute": true
                                            },
                                            "enum": [
                                                "http://ehd.mos.com"
                                            ]
                                        },
                                        "setDataResponse": {
                                            "xml": {
                                                "prefix": "ehd"
                                            },
                                            "properties": {
                                                "status": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "message": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "detail_message": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "global_id": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "system_object_id": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                },
                                                "action": {
                                                    "type": "string",
                                                    "xml": {
                                                        "prefix": "ehd"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "status",
                                                "message",
                                                "detail_message",
                                                "global_id",
                                                "system_object_id",
                                                "action"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "setDataResponse"
                                    ]
                                }
                            },
                            "required": [
                                "setDataInResponse"
                            ]
                        }
                    }
                }
            ]
        },
        "BackgroundCheckInfo": {
            "description": "Данные фоновой проверки",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор фоновой проверки",
                    "type": "integer",
                    "format": "int32",
                    "readOnly": true
                },
                "catalogId": {
                    "description": "Идентификатор каталога для фоновой проверки",
                    "type": "integer",
                    "format": "int32",
                    "writeOnly": true
                },
                "email": {
                    "description": "E-mail, на который высылаются результаты фоновой проверки",
                    "type": "string"
                },
                "condition": {
                    "description": "Ограничение выборки, описанное пользователем в формате TOML. Передаётся в виде строки с экранированием символов.",
                    "type": "string"
                },
                "isFullBackgroundCheck": {
                    "description": "Полная фоновая проверка",
                    "type": "boolean",
                    "default": true
                },
                "checkAttributes": {
                    "description": "Проверка свойств атрибутов",
                    "type": "boolean",
                    "default": true
                },
                "checkRegexps": {
                    "description": "Проверка регулярных выражений",
                    "type": "boolean",
                    "default": true
                },
                "checkSearchIndex": {
                    "description": "Проверка поискового индекса",
                    "type": "boolean",
                    "default": true
                },
                "launchMainProcess": {
                    "description": "Запуск главного процесса конструктора проверок",
                    "type": "boolean",
                    "default": true
                },
                "constructorPackage": {
                    "description": "Тех. наименование пакета конструктора проверок. Указывается, если выбран запуск отдельного пакета",
                    "type": "string"
                },
                "manageChangingObjects": {
                    "description": "Изменения объекта в ходе фоновой проверки",
                    "$ref": "#/components/schemas/ChangeObjectInProcessTag"
                }
            },
            "required": [
                "catalogId",
                "isFullBackgroundCheck",
                "checkAttributes",
                "checkRegexps",
                "checkSearchIndex",
                "manageChangingObjects"
            ]
        },
        "ChangeObjectInProcessTag": {
            "description": "Тэг для поля \"Изменения объектов в ходе фоновой проверки\":\n  - `logOnly` - Формировать лог фоновой проверки, \n  - `logErrors` - Формировать лог и помечать объекты ошибочными, \n  - `logErrorsChange` - Формировать лог, помечать объекты ошибочными и выполнять изменение через автопроцессы.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "logOnly",
                        "logErrors",
                        "logErrorsChange"
                    ]
                }
            ]
        },
        "CatalogBackgroundCheckHistoryItem": {
            "description": "Элемент истории фоновой проверки каталога",
            "type": "object",
            "readOnly": true,
            "properties": {
                "id": {
                    "description": "Идентификатор фоновой проверки каталога",
                    "type": "integer",
                    "format": "int32"
                },
                "userName": {
                    "description": "Имя пользователя, запустившего проверку",
                    "type": "string"
                },
                "action": {
                    "description": "Действие, может принимать значения \"Запуск фоновой проверки\", \"Запуск периодической фоновой проверки\", \"Сброс ошибок фоновой проверки\".",
                    "type": "string"
                },
                "dateStart": {
                    "description": "Дата старта фоновой проверки каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateEnd": {
                    "description": "Дата окончания фоновой проверки каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "countInWorkObj": {
                    "description": "Количество объектов, взятых в работу при запуске фоновой проверки",
                    "type": "integer"
                },
                "countCheckedObj": {
                    "description": "Количество проверенных объектов (по окончании процесса фоновой проверки)",
                    "type": "integer"
                },
                "countErrorObj": {
                    "description": "Количество ошибочных объектов (по окончании процесса фоновой проверки)",
                    "type": "integer"
                },
                "logFileId": {
                    "description": "Идентификатор (uuid) файла лога",
                    "type": "string"
                },
                "status": {
                    "$ref": "#/components/schemas/BackgroundCheckHistoryStatus"
                }
            },
            "required": [
                "id",
                "action",
                "dateStart",
                "countInWorkObj",
                "countCheckedObj",
                "status"
            ]
        },
        "BackgroundCheckHistoryStatus": {
            "description": "Статус в истории фоновых проверок каталога заполнения",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/BackgroundCheckHistoryStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/BackgroundCheckHistoryStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ],
            "example": {
                "id": 1,
                "name": "В работе",
                "tagId": "inWork"
            }
        },
        "BackgroundCheckHistoryStatusNameEnum": {
            "description": "Название статуса в истории фоновых проверок каталога заполнения",
            "oneOf": [
                {
                    "type": "string"
                }
            ]
        },
        "BackgroundCheckHistoryStatusTagIdEnum": {
            "description": "Технчиеское наименование статуса фоновой проверки в истории фоновых проверок каталога заполнения\n  - `new` - Новый, \n  - `inWork` - В работе, \n  - `canceled` - Проверка отменена пользователем,\n  - `error` - Проверка не завершена: системная ошибка, \n  - `finishedSuccess` - Проверка завершена успешно,\n  - `finishedError` - Проверка завершена с ошибками.",
            "oneOf": [
                {
                    "type": "string",
                    "enum": [
                        "new",
                        "inWork",
                        "canceled",
                        "error",
                        "finishedSuccess",
                        "finishedError"
                    ]
                }
            ]
        },
        "AccumulatedCatalogStatusTagIdEnum": {
            "description": "Техническое наименование cтатуса сборного каталога\n  - `inactive` - Неактивный\n  - `active` - Активный",
            "type": "string",
            "enum": [
                "inactive",
                "active"
            ]
        },
        "AccumulatedCatalogStatusNameEnum": {
            "description": "Наименование статуса сборного каталога",
            "type": "string"
        },
        "AccumulatedCatalogStatus": {
            "description": "Статус сборного каталога",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/AccumulatedCatalogStatusTagIdEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/AccumulatedCatalogStatusNameEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "AccumulatedCatalogUpdatePeriodicityTagIdEnum": {
            "description": "Техническое наименование периодичности обновления сборного каталога\n  - `daily` - Ежедневно\n  - `weekly` - Еженедельно",
            "type": "string",
            "enum": [
                "daily",
                "weekly"
            ]
        },
        "AccumulatedCatalogUpdatePeriodicityNameEnum": {
            "description": "Наименование периодичности обновления сборного каталога",
            "type": "string"
        },
        "AccumulatedCatalogUpdatePeriodicity": {
            "description": "Периодичность обновления сборного каталога",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdatePeriodicityNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdatePeriodicityTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "AccumulatedCatalogUpdateStatusTagIdEnum": {
            "description": "Техническое наименование статуса обновления сборного каталога\n  - `waiting` - Подготовка данных\n  - `loading` - Загрузка данных\n  - `processing` - Обработка объектов\n  - `resultUploading` - Подготовка итогового файла\n  - `finished` - Завершено\n  - `error` - Ошибка",
            "type": "string",
            "enum": [
                "waiting",
                "loading",
                "processing",
                "resultUploading",
                "finished",
                "error"
            ]
        },
        "AccumulatedCatalogUpdateStatusNameEnum": {
            "description": "Наименование статуса обновления сборного каталога",
            "type": "string"
        },
        "AccumulatedCatalogUpdateStatus": {
            "description": "Статус обновления сборного каталога",
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "description": "Идентификатор статуса"
                },
                "name": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdateStatusNameEnum"
                },
                "tagId": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdateStatusTagIdEnum"
                }
            },
            "required": [
                "id",
                "name",
                "tagId"
            ]
        },
        "AccumulatedCatalogListItem": {
            "description": "Информация о сборном каталоге в списке сборных каталогов",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор сборного каталога",
                    "type": "integer"
                },
                "name": {
                    "description": "Наименование сборного каталога",
                    "type": "string"
                },
                "sourceCatalogIds": {
                    "description": "Идентификаторы каталогов заполнения, которые являются источниками сборного каталога",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "periodicity": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdatePeriodicity"
                },
                "status": {
                    "$ref": "#/components/schemas/AccumulatedCatalogStatus"
                },
                "lastRun": {
                    "description": "Дата последнего обновления сборного каталога. Если нет, возвращается пустая строка",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "nextRun": {
                    "description": "Дата следующего запуска сборного каталога. Если нет, возвращается пустая строка",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                }
            },
            "required": [
                "id",
                "name",
                "sourceCatalogIds",
                "periodicity",
                "status",
                "lastRun",
                "nextRun"
            ]
        },
        "AccumulatedCatalogSettings": {
            "description": "Настройки сборного каталога",
            "type": "object",
            "properties": {
                "settings": {
                    "description": "Настройки сборного каталога в формате TOML",
                    "type": "string"
                },
                "customFileIds": {
                    "description": "Информация о кастомных файлах-источниках",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "settings"
            ],
            "example": {
                "settings": "{TOML}",
                "customFilesIds": [
                    "0f583f97-9bb7-4b44-b37e-bfae615e4780",
                    "ff531f97-9bb7-4b12-b37e-bfae615e3244"
                ]
            }
        },
        "ChannelOutput": {
            "description": "Объект с информацией о выходном файле сборного каталога",
            "type": "object",
            "properties": {
                "channelId": {
                    "description": "Идентификатор выхода сборного каталога",
                    "type": "string"
                },
                "filename": {
                    "description": "Название файла с раширением",
                    "type": "string"
                },
                "uuid": {
                    "description": "Идентификатор (uuid) сформированного выходного файла",
                    "type": "string"
                },
                "sha256sum": {
                    "type": "string",
                    "pattern": "^[a-f0-9]{64}$",
                    "description": "Хэш SHA256 файла"
                },
                "totalBytes": {
                    "type": "integer",
                    "description": "Размер файла в байтах"
                },
                "objCount": {
                    "type": "integer",
                    "description": "Число объектов в выходном файле"
                }
            },
            "required": [
                "channelId",
                "filename",
                "uuid",
                "sha256sum",
                "totalBytes",
                "objCount"
            ]
        },
        "AccumulatedCatalogCSVInfo": {
            "description": "Информация о кастомном CSV файле для сборного каталога",
            "type": "object",
            "properties": {
                "id": {
                    "description": "Идентификатор uuid файла",
                    "type": "string"
                },
                "name": {
                    "description": "Имя файла (без расширения)",
                    "type": "string"
                },
                "extension": {
                    "description": "Расширение файла, включая точку",
                    "type": "string"
                },
                "columnNames": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "encoding": {
                    "description": "Кодировка",
                    "type": "string",
                    "enum": [
                        "UTF-8",
                        "WINDOWS-1251",
                        "MACCYRILLIC",
                        "KOI8-R"
                    ]
                },
                "separator": {
                    "description": "Разделитель",
                    "type": "string"
                },
                "textLimiter": {
                    "description": "Ограничитель текста",
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name",
                "extension",
                "columnNames",
                "encoding",
                "separator",
                "textLimiter"
            ]
        },
        "CustomCSV": {
            "description": "Информация о файле-источнике для сборного каталога формата CSV",
            "type": "object",
            "properties": {
                "file": {
                    "type": "string",
                    "format": "binary",
                    "description": "Файл с содержимым"
                },
                "encoding": {
                    "description": "Кодировка",
                    "type": "string",
                    "enum": [
                        "UTF-8",
                        "WINDOWS-1251",
                        "MACCYRILLIC",
                        "KOI8-R"
                    ]
                },
                "separator": {
                    "description": "Разделитель",
                    "type": "string"
                },
                "textLimiter": {
                    "description": "Ограничитель текста",
                    "type": "string"
                }
            },
            "required": [
                "file",
                "encoding",
                "separator",
                "textLimiter"
            ]
        },
        "CustomCSVProcessedFileInfo": {
            "description": "Информация о колонках загруженного файла csv для сборного каталога",
            "type": "object",
            "properties": {
                "fileId": {
                    "description": "Идентификатор файла",
                    "type": "string"
                },
                "columnNames": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "fileId",
                "columnNames"
            ]
        },
        "AccumulatedCatalogHistoryItem": {
            "description": "Элемент истории обновления сборного каталога",
            "type": "object",
            "properties": {
                "jobId": {
                    "description": "Идентификатор процесса обновления",
                    "type": "string"
                },
                "dateStart": {
                    "description": "Дата и время начала обновления каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateEnd": {
                    "description": "Дата и время завершения обновления каталога",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "resultFiles": {
                    "description": "Информация о результирующих выходных файлах в minIO файлового хранилища",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "description": "Идентификатор файла (uuid)",
                                "type": "string"
                            },
                            "channelId": {
                                "description": "Идентификатор выхода сборного каталога.\n\nФормируется на основе технического наименования секции, описывающей выход в TOML-спецификации сборного каталога,\nа также на основе типа выхода (snapshot, delta)."
                            }
                        },
                        "required": [
                            "id",
                            "channelId"
                        ]
                    }
                },
                "status": {
                    "$ref": "#/components/schemas/AccumulatedCatalogUpdateStatus"
                }
            },
            "required": [
                "jobId",
                "dateStart",
                "status"
            ]
        },
        "AccumulatedCatalogSourceExportHistoryItem": {
            "description": "Элемент истории выгрузок источников сборного каталога",
            "type": "object",
            "allOf": [
                {
                    "$ref": "catalogs.yaml#/components/schemas/CommonCatalogInfo"
                }
            ],
            "properties": {
                "exportId": {
                    "description": "Идентификатор процесса выгрузки",
                    "type": "integer"
                },
                "dateStart": {
                    "description": "Дата и время начала выгрузки каталога заполнения",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "dateEnd": {
                    "description": "Дата и время завершения выгрузки каталога заполнения",
                    "allOf": [
                        {
                            "$ref": "_common.yaml#/components/schemas/DateTimeFormat"
                        }
                    ]
                },
                "resultFileId": {
                    "description": "Идентификатор результирующего файла в minIO файлового хранилища",
                    "type": "string"
                },
                "userName": {
                    "description": "ФИО пользователя, изменившего статус сборного каталога на активный и запустившего выгрузку",
                    "type": "string"
                },
                "status": {
                    "$ref": "exports.yaml#/components/schemas/ExportStatus"
                },
                "countAllObj": {
                    "type": "integer",
                    "description": "Общее количество объектов в экспорте"
                }
            },
            "required": [
                "exportId",
                "dateStart",
                "status"
            ]
        }
    },
      "parameters": {
        "offsetQueryParam": {
            "name": "offset",
            "in": "query",
            "description": "Позиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\n\nПо умолчанию `0`.",
            "required": false,
            "schema": {
                "type": "integer",
                "format": "int32",
                "default": 0,
                "minimum": 0
            }
        },
        "orderByAscQueryParam": {
            "name": "orderBy",
            "in": "query",
            "description": "Порядок сортировки. Допустимые значения:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию.\n\nПо умолчанию: `asc`.",
            "required": false,
            "schema": {
                "default": "asc",
                "allOf": [
                    {
                        "$ref": "#/components/schemas/SortingOrderTagIdEnum"
                    }
                ]
            }
        },
        "orderByDescQueryParam": {
            "name": "orderBy",
            "in": "query",
            "description": "Порядок сортировки. Допустимые значения:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию.\n\nПо умолчанию: `desc`.",
            "required": false,
            "schema": {
                "default": "desc",
                "allOf": [
                    {
                        "$ref": "#/components/schemas/SortingOrderTagIdEnum"
                    }
                ]
            }
        },
        "filterOutIdsQueryParam": {
            "name": "filterOutIds",
            "in": "query",
            "description": "Массив идентификаторов сущностей, которые необходимо исключить из общего списка.\n\nПример: окно со списком атрибутов ЕХД, доступных для добавления в каталог.\nНеобходимо исключить атрибуты, которые уже добавлены в каталог.\n\nЧисло элементов в списке от `1` до `100`.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            }
        },
        "catalogIdPathParam": {
            "name": "catalogId",
            "required": true,
            "in": "path",
            "description": "Идентификатор сборного каталога.",
            "schema": {
                "type": "integer"
            },
            "example": 194700
        },
        "catalogIdQueryParam": {
            "name": "catalogId",
            "in": "query",
            "description": "Идентификатор каталога.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 1243761423
        },
        "fillingCatalogIdQueryParam": {
            "name": "fillingCatalogId",
            "in": "query",
            "description": "Идентификатор каталога заполнения.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6404
        },
        "fillingCatalogIdOptQueryParam": {
            "name": "fillingCatalogId",
            "in": "query",
            "description": "Идентификатор каталога заполнения.",
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6404
        },
        "catalogIdsQueryParam": {
            "name": "catalogIds",
            "required": true,
            "in": "query",
            "description": "Массив идентификаторов каталогов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                194700,
                186532,
                11033
            ]
        },
        "catalogIdsOptQueryParam": {
            "name": "catalogIds",
            "required": false,
            "in": "query",
            "description": "Список идентификаторов каталогов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                194700,
                186532,
                11033
            ]
        },
        "parentCatalogIdQueryParam": {
            "name": "parentCatalogId",
            "in": "query",
            "description": "Идентификатор родительского каталога.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 194698
        },
        "rootCatalogIdQueryParam": {
            "name": "rootCatalogId",
            "in": "query",
            "description": "Идентификатор корневого каталога.",
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 1243761423
        },
        "catalogStatusesFilterQueryParam": {
            "name": "catalogStatuses",
            "in": "query",
            "description": "Технические статусы возвращаемых каталогов.\n\nИспользуется для фильтрации.\nВ параметре передается массив строк, строка представляет собой ключевое слово.\nНе может передаваться пустой массив.\n\nДопустимые значения:\n  - `active` - активный;\n  - `deleted` - удаленный.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/CatalogTechStatusTagIdEnum"
                },
                "minItems": 1,
                "maxItems": 2
            }
        },
        "dataModesFilterQueryParam": {
            "name": "dataModes",
            "in": "query",
            "description": "Технические наименования режимов работы с данными возвращаемых каталогов.\n\nИспользуется для фильтрации.\nВ параметре передается строка. Не может передаваться пустая строка.\n\nДопустимые значения:\n  - `filling` - заполнение;\n  - `publication` - публикация.\n\nПо умолчанию `filling`.",
            "required": false,
            "schema": {
                "type": "string",
                "items": {
                    "$ref": "#/components/schemas/DataModeTagIdEnum"
                }
            }
        },
        "forLinksCatalogQueryParam": {
            "name": "forLinks",
            "description": "Указывает, что необходимо получить каталоги, которые можно указать в качестве ссылочных.\nДанные каталоги имеют атрибут с отмеченным свойством \"Главный\".",
            "in": "query",
            "required": false,
            "schema": {
                "type": "boolean",
                "default": false
            }
        },
        "forLinksCatalogAttributeQueryParam": {
            "name": "forLinks",
            "description": "Указывает, что необходимо получить атрибуты каталога, которые можно использовать в качестве атрибута для связи.\n\nАтрибуты должны иметь тип: строка, дробное число, дата, справочник, ссылка на объект, целое число.\n\nИсключаются типы: файл, флаг, таблица.",
            "in": "query",
            "required": false,
            "schema": {
                "type": "boolean",
                "default": false
            }
        },
        "catalogGroupIdQueryParam": {
            "name": "catalogGroupId",
            "in": "query",
            "description": "Идентификатор группы каталогов. Необязательный параметр. Если указан, следует исключать из выборки все каталоги, имеющие связи с группой каталогов",
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "required": false,
            "example": 12
        },
        "userIdQueryParam": {
            "name": "userId",
            "in": "query",
            "description": "Идентификатор пользователя. Необязательный параметр. Если указан, следует исключать из выборки все группы каталогов, имеющие связи с пользователем",
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "required": false,
            "example": 189776
        },
        "subscriptionIdQueryParam": {
            "name": "subscriptionId",
            "in": "query",
            "description": "Идентификатор подписки на push-уведомления. Необязательный параметр. Если указан, следует исключать из выборки все каталоги, имеющие связи с подпиской.",
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "required": false,
            "example": 243
        },
        "oivIdQueryParam": {
            "name": "oivId",
            "in": "query",
            "description": "Идентификатор ОИВ. Необязательный параметр. Если передается oivId, то в ответе возвращаются пользователи, связанные с указанным ОИВ.",
            "required": false,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 25
        },
        "isAdminQueryParam": {
            "name": "isAdmin",
            "in": "query",
            "description": "Признак администратора",
            "required": false,
            "schema": {
                "type": "boolean",
                "default": false
            },
            "example": false
        },
        "userIdPathParam": {
            "name": "userId",
            "in": "path",
            "description": "Идентификатор пользователя.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 188945
        },
        "specPrivilegeIdsQueryParam": {
            "name": "specPrivilegeIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов спецпривилегий.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                2345123
            ]
        },
        "specRolesIdsQueryParam": {
            "name": "specRolesIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов спецролей.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                2345123
            ]
        },
        "userIdsQueryParam": {
            "name": "userIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов пользователей.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "dataModeFilterQueryParam": {
            "name": "dataMode",
            "in": "query",
            "description": "Технические наименования режимов работы с данными возвращаемых каталогов и групп каталогов.\n\nИспользуется для фильтрации.\nВ параметре передается строка. Не может передаваться пустая строка.\n\nДопустимые значения:\n  - `fillingCatalog` - Каталоги заполнения\n  - `publicationCatalog` - Каталоги публикации\n  - `catalogGroup` - Группы каталогов\n  - `all` - Все\n\nПо умолчанию `all`.",
            "required": false,
            "schema": {
                "type": "string",
                "items": {
                    "$ref": "#/components/schemas/DataModeTagIdEnum"
                }
            }
        },
        "thematicCategoryIdsQueryParam": {
            "name": "categoryIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов тематических категорий.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "thematicCategoryIdFilterQueryParam": {
            "name": "thematicCategoryId",
            "in": "query",
            "required": false,
            "description": "Идентификатор тематической категории. Используется для фильтрации по тематической категории.",
            "schema": {
                "type": "integer"
            }
        },
        "thematicCategoryIdPathParam": {
            "name": "thematicCategoryId",
            "in": "path",
            "description": "Идентификатор тематической категории.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6
        },
        "systemIdPathParam": {
            "name": "systemId",
            "in": "path",
            "description": "Идентификатор информационной системы.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 29
        },
        "systemIdQueryParam": {
            "name": "systemId",
            "in": "query",
            "description": "Идентификатор информационной системы.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 10570
        },
        "systemIdsQueryParam": {
            "name": "systemIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов систем.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "systemConsumerIdFilterQueryParam": {
            "name": "systemConsumerId",
            "in": "query",
            "required": false,
            "description": "Идентификатор системы-потребителя. Используется для фильтрации по системе-потребителю.",
            "schema": {
                "type": "integer"
            }
        },
        "typeIntegrationQueryParam": {
            "name": "typeIntegration",
            "in": "query",
            "required": false,
            "description": "Указывает с каким типом интеграции необходимо получить системы:\n  - `consumer` - потребитель\n  - `supplier` - поставщик\n\nВ параметре передается массив тэгов. Если массив не передан, возвращаются любые типы интеграций",
            "schema": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "consumer",
                        "supplier"
                    ]
                }
            }
        },
        "attributeIdPathParam": {
            "name": "attributeId",
            "in": "path",
            "description": "Идентификатор атрибута.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 1
        },
        "groupIdPathParam": {
            "name": "groupId",
            "in": "path",
            "description": "Идентификатор группы атрибутов.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 1
        },
        "attributeIdsQueryParam": {
            "name": "attributeIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов атрибутов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                1,
                3,
                4
            ]
        },
        "attributeIdsOptQueryParam": {
            "name": "attributeIds",
            "required": false,
            "in": "query",
            "description": "Список идентификаторов атрибутов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                1,
                3,
                4
            ]
        },
        "attributeTypesQueryParam": {
            "name": "attributeTypes",
            "in": "query",
            "description": "Типы атрибутов, которые необходимо вернуть.\nВ параметре передается массив технических наименований типов атрибутов.\n\nЕсли массив не передан, возвращаются атрибуты всех типов.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/AttributeTypeTagIdEnum"
                },
                "minItems": 1
            }
        },
        "dictionaryIdPathParam": {
            "name": "dictionaryId",
            "in": "path",
            "description": "Идентификатор справочника.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6
        },
        "dictionaryIdQueryParam": {
            "name": "dictionaryId",
            "in": "query",
            "description": "Идентификатор справочника.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 84
        },
        "dictionaryIdsQueryParam": {
            "name": "dictionaryIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов справочников.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                194700,
                186532,
                11033
            ]
        },
        "auxDictTagIdPathParam": {
            "name": "auxDictTagId",
            "in": "path",
            "description": "Строковый идентификатор вспомогательного справочника",
            "required": true,
            "schema": {
                "type": "string",
                "enum": [
                    "kindCatalog",
                    "typeCatalog",
                    "periodUpdate",
                    "publicationStatus",
                    "filterOperator",
                    "objectStatus",
                    "publObjectStatus",
                    "attributeType",
                    "signStatus",
                    "subCatalogHistory",
                    "subCatalogHistoryType",
                    "subObjectLog",
                    "importHistoryStatus",
                    "datasetSeasonality",
                    "datasetDictType",
                    "sysColumns",
                    "generalInfoSyncedProperty",
                    "metadataSyncedProperty",
                    "mapSyncedProperty",
                    "rubric",
                    "searchIndexStatus",
                    "userGroup",
                    "userPrivilege",
                    "mailingStatus",
                    "menu",
                    "userStatus",
                    "securityEvent",
                    "lastChangeType",
                    "pushsubStatus",
                    "geoType"
                ]
            },
            "example": "kindCatalog"
        },
        "dictionaryElementIdPathParam": {
            "name": "dictionaryElementId",
            "in": "path",
            "description": "Идентификатор элемента справочника.",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": 6
        },
        "dictionaryElementIdsQueryParam": {
            "name": "dictionaryElementIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов элементов справочника.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                "43",
                "343",
                "64"
            ]
        },
        "dictionaryElementStatusesFilterQueryParam": {
            "name": "dictionaryElementStatuses",
            "in": "query",
            "description": "Статусы элементов справочника.\n\nИспользуется для фильтрации.\nВ параметре передается массив строк, строка представляет собой ключевое слово.\nНе может передаваться пустой массив.\n\nДопустимые значения:\n  - `active` - активный;\n  - `deleted` - удаленный.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/DictionaryElementStatusTagIdEnum"
                },
                "minItems": 1,
                "maxItems": 2
            }
        },
        "userConfirmedDeletionQueryParam": {
            "name": "userConfirmedDeletion",
            "in": "query",
            "description": "Пользователь подтвердил удаление элементов справочника.\n\nПередается `false` при первом запросе на удаление, `true` - после подтверждения пользователем. \n\nЕсли `true`, то не проверять элементы на использование в системе и удалять их без предупреждения.",
            "required": false,
            "schema": {
                "type": "boolean",
                "default": false
            },
            "example": true
        },
        "dictElemSearchParam": {
            "name": "search",
            "in": "query",
            "description": "Текстовый поисковый запрос по списку элементов справочника. Поиск производится по идентификатору и наименованию.\n\nЗапрос со значением `123` вернет все элементы справочника, идентификатор или наименование которых содержит подстроку `123`.",
            "required": false,
            "schema": {
                "type": "string"
            }
        },
        "exportIdPathParam": {
            "name": "exportId",
            "in": "path",
            "description": "Идентификатор экспорта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 642
        },
        "oivIdPathParam": {
            "name": "oivId",
            "in": "path",
            "description": "Идентификатор ОИВ.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 25
        },
        "oivIdsQueryParam": {
            "name": "oivIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов ОИВов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "oivIdFilterQueryParam": {
            "name": "catalogGroupId",
            "in": "query",
            "required": false,
            "description": "Идентификатор поставщика данных (ОИВ). Используется для фильтрации по ОИВ.",
            "schema": {
                "type": "integer"
            }
        },
        "regexIdPathParam": {
            "name": "regexId",
            "in": "path",
            "description": "Идентификатор регулярного выражения.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 18
        },
        "regexIdQueryParam": {
            "name": "regexId",
            "in": "query",
            "description": "Идентификатор регулярного выражения.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 84
        },
        "regexIdsQueryParam": {
            "name": "regexIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов регулярных выражений.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                786,
                32,
                43
            ]
        },
        "searchIndexIdPathParam": {
            "name": "indexId",
            "in": "path",
            "description": "Идентификатор индекса.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6
        },
        "queryQueryParam": {
            "name": "query",
            "in": "query",
            "description": "Значение поискового запроса",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": "проспект Ленина 16"
        },
        "searchIndexIdsQueryParam": {
            "name": "indexIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов поисковых индексов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7,
                12
            ]
        },
        "searchIndexStatusesQueryParam": {
            "name": "objectStatuses",
            "in": "query",
            "description": "Статусы возвращаемых поисковых индексов, используется для фильтрации по статусу индекса.\n\nВ массиве передаются технические названия статусов. Массив не может быть пустым.",
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/SearchIndexStatusTagIdEnum"
                },
                "minItems": 1
            }
        },
        "objectCategoryIdPathParam": {
            "name": "categoryId",
            "in": "path",
            "description": "Идентификатор категории объектов.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 7
        },
        "objectCategoryIdsQueryParam": {
            "name": "categoryIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов категорий объектов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "FetchGeodataQueryParam": {
            "name": "fetchGeodata",
            "in": "query",
            "description": "Признак, указывающий на включение в ответ геоданных объекта в заданной системе координат.\nДоступны следующие варианты:\n  - `признак не передаётся` - объект возвращается без геоданных,\n  - `EPSG:4326` - геоданные объекта возвращаются в системе координат WGS84,\n  - `MSK:77` - геоданные объекта возвращаются в системе координат MSK77,\n  - `default` - геоданные объекта возвращаются в системе координт, заданной настройками каталога.",
            "schema": {
                "type": "string",
                "enum": [
                    "EPSG:4326",
                    "MSK:77",
                    "default"
                ]
            },
            "required": false
        },
        "FetchGeodataPublQueryParam": {
            "name": "fetchGeodata",
            "in": "query",
            "description": "Признак, указывающий на включение в ответ геоданных объекта публикации. \nВ публикации геоданные объекта хранятся в системе координат WGS84. ",
            "schema": {
                "type": "boolean",
                "default": true
            },
            "required": false
        },
        "FetchGeodataExportQueryParam": {
            "name": "fetchGeodata",
            "in": "query",
            "description": "Признак, указывающий на включение в экспорт каталога заполнения геоданных объектов в заданной системе координат.\nДоступны следующие варианты:\n  - `признак не передаётся` - объекты возвращаются без геоданных,\n  - `EPSG:4326` - геоданные объекта возвращаются в системе координат WGS84,\n  - `default` - геоданные объекта возвращаются в системе координт, заданной настройками каталога.",
            "schema": {
                "type": "string",
                "enum": [
                    "EPSG:4326",
                    "default"
                ]
            },
            "required": false
        },
        "FetchGeodataExportPublQueryParam": {
            "name": "fetchGeodata",
            "in": "query",
            "description": "Признак, указывающий на включение в экспорт каталога публикации геоданных объектов.\nВ каталоге публикации геоданные возвращаются в системе координат WGS84.",
            "schema": {
                "type": "boolean",
                "default": false
            },
            "required": false
        },
        "publicationCatalogIdQueryParam": {
            "name": "publicationCatalogId",
            "in": "query",
            "description": "Идентификатор каталога публикации",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 197400
        },
        "versionQueryParam": {
            "name": "version",
            "in": "query",
            "description": "Номер версии каталога публикаци.\n\nПо умолчанию возвращается последняя версия.",
            "required": false,
            "schema": {
                "type": "integer",
                "format": "int32",
                "minimum": 1
            }
        },
        "newPublicationCatalogStatusQueryParam": {
            "name": "status",
            "in": "query",
            "description": "Новый статус каталога публикации.",
            "required": true,
            "schema": {
                "$ref": "#/components/schemas/PublicationCatalogStatusTagIdEnum"
            }
        },
        "grantedQueryParam": {
            "name": "granted",
            "in": "query",
            "description": "Список идентификаторов систем, для которых доступен каталог публикации.\nОт `1` до `100`.\n\nЕсли параметр `granted` не указан, то каталог не доступен для всех систем.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer",
                    "format": "int32"
                },
                "minItems": 1,
                "maxItems": 100
            }
        },
        "forDatasetQueryParam": {
            "name": "forDataset",
            "in": "query",
            "description": "Признак, который указывает, что в ответе должны быть каталоги публикации доступные для связи с набором данных.\nДанные каталоги:\n  - не имеют связей с версиями наборов данных,\n  - в поле \"Системы-потребители\" КП указан Портал открытых данных.\nС другими параметрами, которые так же влияют на выборку сочетается через оператор \"И\".",
            "required": true,
            "schema": {
                "type": "boolean"
            }
        },
        "catalogGroupIdPathParam": {
            "name": "catalogGroupId",
            "in": "path",
            "description": "Идентификатор группы каталогов.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 25
        },
        "catalogGroupIdsQueryParam": {
            "name": "catalogGroupIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов групп каталогов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "datasetIdPathParam": {
            "name": "datasetId",
            "in": "path",
            "description": "Идентификатор набора данных",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 64033
        },
        "datasetVersionNumPathParam": {
            "name": "versionNum",
            "in": "path",
            "description": "Номер версии набора данных",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 1
        },
        "datasetReleaseNumPathParam": {
            "name": "releaseNum",
            "in": "path",
            "description": "Номер релиза набора данных в рамках конкретной версии",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 15
        },
        "datasetIdsQueryParam": {
            "name": "datasetIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов наборов данных.\n\nЧисло элементов в списке от `1` до `500`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 500
            },
            "example": [
                64033,
                64011,
                1133
            ]
        },
        "isDictQueryParam": {
            "name": "isDict",
            "required": false,
            "in": "query",
            "description": "Признак, что нужно получить список наборов данных - справочников.",
            "schema": {
                "type": "boolean"
            }
        },
        "globalIdPathParam": {
            "name": "globalId",
            "in": "path",
            "description": "Глобальный идентификатор объекта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 124376127
        },
        "parentGlobalIdQueryParam": {
            "name": "parentGlobalId",
            "in": "query",
            "description": "Глобальный идентификатор родительского объекта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 1243761423
        },
        "rootGlobalIdQueryParam": {
            "name": "rootGlobalId",
            "in": "query",
            "description": "Глобальный идентификатор корневого объекта (объекта в корневом каталоге, которому принадлежат вложенные объекты).",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 3249874123
        },
        "globalIdQueryParam": {
            "name": "globalId",
            "in": "query",
            "description": "Глобальный идентификатор объекта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int64"
            },
            "example": 124376127
        },
        "globalIdsQueryParam": {
            "name": "globalIds",
            "in": "query",
            "required": false,
            "description": "Глобальные идентификаторы объектов каталога, которые нужно вернуть.\n\nМожет использоваться для дополнительной фильтрации при работе со списком объектов ссылочного атрибута. Массив не может быть пустым.",
            "schema": {
                "type": "array",
                "minItems": 1,
                "items": {
                    "type": "integer",
                    "format": "int64"
                }
            }
        },
        "globalIdsRequiredQueryParam": {
            "name": "globalIds",
            "in": "query",
            "required": true,
            "description": "Глобальные идентификаторы объектов каталога.\n\nМассив не может быть пустым.",
            "schema": {
                "type": "array",
                "minItems": 1,
                "items": {
                    "type": "integer",
                    "format": "int64"
                }
            }
        },
        "objectStatusesQueryParam": {
            "name": "objectStatuses",
            "in": "query",
            "description": "Статусы возвращаемых объектов, используется для фильтрации по статусу объекта.\n\nВ массиве передаются технические названия статусов. Массив не может быть пустым.",
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/ObjectStatusTagIdEnum"
                },
                "minItems": 1
            }
        },
        "objectIdsQueryParam": {
            "name": "objectIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов объектов каталога.\n\nЧисло элементов в списке от `1` до `500`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer",
                    "format": "int64"
                },
                "minItems": 1,
                "maxItems": 500
            },
            "example": [
                454,
                323,
                783
            ]
        },
        "signedVersionQueryParam": {
            "name": "signedVersion",
            "description": "Указывает, что необходимо получить последние подписанные версии объектов.\nТакие версии есть у объектов во всех статусах, кроме new. ",
            "in": "query",
            "required": false,
            "schema": {
                "type": "boolean",
                "default": false
            }
        },
        "isErrorQueryParam": {
            "name": "isError",
            "description": "Указывает, что необходимо получить объекты, имеющие статус \"Ошибка\". \nЕсли параметр не передан или имеет значение null, тогда возвращаются все объекты каталога.",
            "in": "query",
            "required": false,
            "schema": {
                "type": "boolean"
            }
        },
        "publicationStatusesQueryParam": {
            "name": "objectStatuses",
            "in": "query",
            "description": "Статусы возвращаемых объектов каталога публикации, используется для фильтрации по статусу объекта.\n\nВ массиве передаются технические названия статусов. Массив не может быть пустым.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/PublicationObjectStatusTagIdEnum"
                },
                "minItems": 1
            }
        },
        "importIdPathParam": {
            "name": "importId",
            "in": "path",
            "description": "Идентификатор импорта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 5392
        },
        "importIdQueryParam": {
            "name": "importId",
            "in": "query",
            "description": "Идентификатор импорта.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 5392
        },
        "importIdsQueryParam": {
            "name": "importIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов импортов.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                356,
                923,
                76
            ]
        },
        "RedirectUrlQueryParam": {
            "name": "redirectUrl",
            "required": true,
            "in": "query",
            "description": "Возвратный url (раздел, из которого пользователь запросил аутентификацию)",
            "schema": {
                "type": "string"
            },
            "example": "https://ehd-tools-test.mos.ru/keycloak/admin/master/console/#/master/authentication/policies"
        },
        "AuthCodeQueryParam": {
            "name": "authCode",
            "required": true,
            "in": "query",
            "description": "Код авторизации KeyCloack",
            "schema": {
                "type": "string"
            },
            "example": "sjdfshkshkshkshf&Jfufjr4"
        },
        "accessJwtIdsQueryParam": {
            "name": "accessJwtIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов пользователей.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                "sfsfsfercrqefasef"
            ]
        },
        "tokenHeaderParam": {
            "description": "Токен доступа пользователя.",
            "name": "Authorization",
            "in": "header",
            "schema": {
                "type": "string"
            },
            "required": true,
            "example": "Bearer kjsfjsfkjslfkjslkfjslkfjlksikvvd"
        },
        "signatureIdPathParam": {
            "name": "signatureId",
            "in": "path",
            "description": "Идентификатор подписания каталога.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 45342
        },
        "signatureIdQueryParam": {
            "name": "signatureId",
            "in": "query",
            "description": "Идентификатор подписания каталога, полученный на этапе формирования хэша.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            }
        },
        "checkCatalogFilterQueryParam": {
            "name": "checkCatalog",
            "in": "query",
            "description": "Список проверок, которые будут запускаться для каталога.\nВ параметре передается массив строк, строка представляет собой ключевое слово.\n\nДопустимые значения: \n- `isSigning` - находится ли каталог в процессе подписания, \n- `userRights` - проверка, что у пользователя есть права на подписание данных каталога, \n- `FLKErrors` - проверка, есть ли объекты с ошибками ФЛК,\n- `responsiblePerson` - проверка, указано ли у каталога ответственное лицо.\n- `description` - проверка, заполнено ли описание каталога,\n- `isImport` - находится ли каталог в процессе импорта.",
            "required": false,
            "schema": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "isSigning",
                        "userRights",
                        "FLKErrors",
                        "responsiblePerson",
                        "description",
                        "isImport"
                    ]
                },
                "minItems": 1
            }
        },
        "subscriptionIdPathParam": {
            "name": "subscriptionId",
            "in": "path",
            "description": "Идентификатор подписки.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 25
        },
        "subscriptionIdsQueryParam": {
            "name": "subscriptionIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов подписок.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "fileIdPathParam": {
            "name": "fileId",
            "in": "path",
            "description": "Идентификатор uuid файла.",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": "ace20e83-1076-4729-9087-f88a9e7fc716"
        },
        "fileIdQueryParam": {
            "name": "fileId",
            "in": "query",
            "description": "Идентификатор uuid файла.",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": "cc8eb1d3-8b42-403a-bbd9-918220a8321f"
        },
        "fileSizeModeQueryParam": {
            "name": "fileSizeMode",
            "required": true,
            "in": "query",
            "description": "Размер изображения для отображения. \n\nДоступные значения:\n - `original` - оригинал изображения\n - `thumbnail` - миниатюра изображения",
            "schema": {
                "type": "string",
                "default": "original",
                "enum": [
                    "original",
                    "thumbnail"
                ]
            },
            "example": "original"
        },
        "reasonQueryParam": {
            "name": "reason",
            "in": "query",
            "description": "Причина публикации объектов каталога публикации",
            "required": true,
            "schema": {
                "$ref": "#/components/schemas/PublicationReasonTagIdEnum"
            },
            "example": "isSign"
        },
        "lockIdsQueryParam": {
            "name": "lockIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов блокировок.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                7
            ]
        },
        "lockIdPathParam": {
            "name": "lockId",
            "in": "path",
            "description": "Идентификатор блокировки.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 6
        },
        "exportSignedQueryParam": {
            "name": "exportSigned",
            "in": "query",
            "description": "Признак, что необходимо экспортировать только подписанные объекты, то есть со статусами signed, deleted.",
            "schema": {
                "type": "boolean",
                "default": false
            },
            "required": false,
            "example": false
        },
        "exportDeletedQueryParam": {
            "name": "exportDeleted",
            "in": "query",
            "description": "Признак, что необходимо включить в экспорт удаленные объекты, то есть со статусами toDeletion, deleted, toRecovery.",
            "schema": {
                "type": "boolean",
                "default": false
            },
            "required": false,
            "example": false
        },
        "exportTypeQueryParam": {
            "name": "type",
            "in": "query",
            "description": "Тип экспорта. По умолчанию используется тип 'csv', который инициирует добавление в очередь экспорта в формате csv.",
            "schema": {
                "$ref": "#/components/schemas/PublicExportTypeTagIdEnum",
                "default": "csv"
            },
            "required": false,
            "example": "csv"
        },
        "exportOnlyRootCatalogQueryParam": {
            "name": "onlyRootCatalog",
            "in": "query",
            "description": "Признак, указывающий, что необходимо произвести экспорт только основного каталога, без вложенных.",
            "schema": {
                "type": "boolean",
                "default": false
            },
            "required": false,
            "example": false
        },
        "exportIdsPathParam": {
            "name": "exportIds",
            "in": "path",
            "description": "Список идентификаторов экспорта.",
            "required": true,
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer",
                    "format": "int32"
                }
            },
            "example": [
                642,
                643
            ]
        },
        "fileUuidPathParam": {
            "name": "id",
            "in": "path",
            "description": "Uuid вложения, размещенного в ЕХД.",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": "65e254c7-c21d-4ba6-9e5e-3efdfa9864c3"
        },
        "fileUuidQueryParam": {
            "name": "id",
            "in": "query",
            "description": "Uuid вложения, размещенного в ЕХД.",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": "65e254c7-c21d-4ba6-9e5e-3efdfa9864c3"
        },
        "FileIdPathParam": {
            "name": "id",
            "in": "path",
            "description": "Идентификатор файла экспорта, который получен методом POST /publrest/catalog/export",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": 1858
        },
        "FileIdQueryParam": {
            "name": "id",
            "in": "query",
            "description": "Идентификатор файла экспорта, который получен методом POST /publrest/catalog/export",
            "required": true,
            "schema": {
                "type": "string"
            },
            "example": 1858
        },
        "ehdSystemHeaderParam": {
            "description": "Логин информационной системы.",
            "name": "ehd-system",
            "in": "header",
            "schema": {
                "type": "string"
            },
            "required": true
        },
        "backgroundCheckIdPathParam": {
            "name": "backgroundCheckId",
            "in": "path",
            "description": "Идентификатор фоновой проверки.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 5392
        },
        "backgroundCheckIdQueryParam": {
            "name": "backgroundCheckId",
            "in": "query",
            "description": "Идентификатор фоновой проверки.",
            "required": true,
            "schema": {
                "type": "integer",
                "format": "int32"
            },
            "example": 5392
        },
        "backgroundCheckIdsQueryParam": {
            "name": "backgroundCheckIds",
            "required": true,
            "in": "query",
            "description": "Список идентификаторов фоновых проверок.\n\nЧисло элементов в списке от `1` до `100`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "minItems": 1,
                "maxItems": 100
            },
            "example": [
                356,
                923,
                76
            ]
        }
    },
      "requestBodies": {
        "catalogListRequestBody": {
            "description": "Пример тела запроса для поиска по списку каталогов",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "fullName",
                                                        "thematicCategory"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/catalogListRequest"
                        }
                    }
                }
            }
        },
        "UserListRequestBody": {
            "description": "Пример тела запроса для поиска по списку пользователей",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "lastName",
                                                        "firstName",
                                                        "pathroName",
                                                        "login",
                                                        "email",
                                                        "userGroupName"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/UserSearchRequest"
                        }
                    }
                }
            },
            "required": false
        },
        "ThematicCategoryRequestBody": {
            "description": "Тело запроса с информацией о тематической категории.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ThematicCategory"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/ThematicCategoryRequestBody"
                        }
                    }
                }
            }
        },
        "SystemCatalogsRequestBody": {
            "description": "Пример тела запроса с фильтрами по списку каталогов, в которых указана система",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "enum": [
                                                        "id",
                                                        "fullName"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/SystemCatalogSearchRequest"
                        }
                    }
                }
            }
        },
        "SystemListRequestBody": {
            "description": "Пример тела запроса для поиска по списку систем",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "name",
                                                        "login",
                                                        "fullName"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/SystemListRequest"
                        }
                    }
                }
            }
        },
        "attributeRequestBody": {
            "description": "Пример тела запроса с информацией об атрибуте.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Attribute"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/AttributeRequest"
                        }
                    }
                }
            }
        },
        "attributeGroupRequestBody": {
            "description": "Пример тела запроса с информацией о группе атрибутов.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/AttributeGroup"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/AttributeGroupRequest"
                        }
                    }
                }
            }
        },
        "DictionaryRequestBody": {
            "description": "Пример тела запроса с информацией о справочнике.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Dictionary"
                    },
                    "examples": {
                        "Пример обычного справочника": {
                            "$ref": "#/components/examples/RegularDictionaryRequest"
                        },
                        "Пример справочника на основе каталога": {
                            "$ref": "#/components/examples/DictionaryFromCatalogRequest"
                        }
                    }
                }
            }
        },
        "OivListRequestBody": {
            "description": "Пример тела запроса для поиска по списку ОИВ",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "name",
                                                        "shortName",
                                                        "inn"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/OivListRequest"
                        }
                    }
                }
            }
        },
        "SearchIndexRequestBody": {
            "description": "Пример тела запроса с информацией о поисковом индексе.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/SearchIndex"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/SearchIndexRequest"
                        }
                    }
                }
            }
        },
        "objectCategoryRequestBody": {
            "description": "Пример тела запроса с информацией о категории объектов.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ObjectCategory"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/ObjectCategoryRequest"
                        }
                    }
                }
            }
        },
        "publicationCatalogListRequestBody": {
            "description": "Пример тела запроса для поиска по списку каталогов публикации",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "catalogs.yaml#/components/schemas/CatalogFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "fullName",
                                                        "responsiblePerson",
                                                        "countActiveObjects",
                                                        "countObjects",
                                                        "dateNextUpdate",
                                                        "sourceCatalogId",
                                                        "thematicCategory",
                                                        "oivs",
                                                        "periodUpdate",
                                                        "systemsConsumers"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "catalogs.yaml#/components/examples/CatalogSearchRequest"
                        }
                    }
                }
            },
            "required": false
        },
        "publicationCatalogReleasesRequestBody": {
            "description": "Тело запроса для поиска по списку релизов каталога публикации",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "createDate",
                                                        "cntPublished",
                                                        "cntDeleted",
                                                        "cntRestored",
                                                        "cntUpdated",
                                                        "cntPassed",
                                                        "cntActive",
                                                        "cntAll"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/PublicationCatalogReleasesSearchRequestBody"
                        }
                    }
                }
            },
            "required": false
        },
        "datasetsListRequestBody": {
            "description": "Пример тела запроса для поиска по списку наборов данных",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "name",
                                                        "publicationCatalogId",
                                                        "lastReleaseDate"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "value": {
                                "filters": [
                                    {
                                        "attribute": "lastReleaseDate",
                                        "operator": "greaterThan",
                                        "value": "16.09.2022"
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "required": false
        },
        "CatalogObjectsSearchFilters": {
            "required": false,
            "description": "Тело запроса с фильтрами и сортировками по списку объектов",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/RootCatalogObjectListFilter"
                                }
                            },
                            "sortings": {
                                "type": "array",
                                "items": {
                                    "$ref": "_common.yaml#/components/schemas/Sorting"
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/CatalogObjectSearchRequest"
                        }
                    }
                }
            }
        },
        "SessionListRequestBody": {
            "description": "Пример тела запроса для поиска по списку активных сеансов",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "lastName",
                                                        "firstName",
                                                        "pathroName",
                                                        "login",
                                                        "email"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/SessionSearchRequest"
                        }
                    }
                }
            },
            "required": false
        },
        "RefreshTokenRequestBody": {
            "description": "Пример тела запроса для поиска по списку активных сеансов",
            "content": {
                "application/x-www-form-urlencoded": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "refreshToken": {
                                "type": "string"
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/RefreshTokenequest"
                        }
                    }
                }
            },
            "required": true
        },
        "pushsubListRequestBody": {
            "description": "Пример тела запроса с фильтрами для поиска по списку подписок систем",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "systemName",
                                                        "systemLogin",
                                                        "url",
                                                        "pushType"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/PushsubListRequest"
                        }
                    }
                }
            }
        },
        "subscriptionRequestBody": {
            "description": "Пример тела запроса с фильтрами по списку каталогов, которые входят в подписку",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "filters": {
                                "type": "array",
                                "items": {
                                    "allOf": [
                                        {
                                            "$ref": "_common.yaml#/components/schemas/BasicFilter"
                                        },
                                        {
                                            "properties": {
                                                "attribute": {
                                                    "type": "string",
                                                    "enum": [
                                                        "id",
                                                        "fullName"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/SubscriptionListRequest"
                        }
                    }
                }
            }
        },
        "LockRequestBody": {
            "description": "Тело запроса с информацией о блокировке.",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Lock"
                    },
                    "examples": {
                        "Пример": {
                            "$ref": "#/components/examples/LockRequestBody"
                        }
                    }
                }
            }
        },
        "AccumulatedCatalogSettings": {
            "description": "Тело запроса с настройками сборного каталога в формате TOML",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/AccumulatedCatalogSettings"
                    }
                }
            }
        }
    },
            "responses": {
            "ThematicCategoryBadRequestPostOrPutResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Тематическая категория с переданным наиеменованием `name` уже существует;\n  - Тематическая категория с переданным наиеменованием `enName` уже существует;\n  - В русскоязычном наиеменовании тематической категории `name`  переданы запрещенные символы;\n  - В англоязычном наиеменовании тематической категории `enName` переданы запрещенные символы;\n  - При передаче статуса `Опубликована` не передано англоязычное наименование тематической категории (поле `enName`)\n  - При передаче статуса `Опубликована` не передан идентификатор файла иконки категории (поле `fileId`)\n  - Передан недопустимый формат файла иконки категории. ",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/WrongFormatError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/MissingParamsError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/OutOfScopeError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальное название тематической категории": {
                                "$ref": "#/components/examples/ThematicCategoryNameNotUniqueError"
                            },
                            "В русскоязычном или англоязычном названиях тематической категории присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/ThematicCategoryBadNameError"
                            },
                            "Не переданы обязательные для публикации поля": {
                                "$ref": "#/components/examples/ThematicCategoryNotFoundEnNameOrFieldId"
                            },
                            "Передан не допустимый формат файла иконки категории": {
                                "$ref": "#/components/examples/ThematicCategoryNotSvgError"
                            }
                        }
                    }
                }
            },
            "ThematicCategoryDeletedErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Одна или несколько из переданных тематических категорий используются в каталогах заполнения;\n  - Одна или несколько из переданных тематических категорий используются в каталогах публикации.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/ResourceCannotBeDeletedError"
                        },
                        "examples": {
                            "Тематическая категория используется в каталоге заполнения": {
                                "$ref": "#/components/examples/ThematicCategoryIsUsedInCatalogsError"
                            },
                            "Тематическая категория используется в каталоге публикации": {
                                "$ref": "#/components/examples/ThematicCategoryIsUsedInPublicationCatalogsError"
                            }
                        }
                    }
                }
            },
            "ThematicCategoryNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id тематической категории не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id тематической категории": {
                                "$ref": "#/components/examples/ThematicCategoryNotFoundError"
                            }
                        }
                    }
                }
            },
            "OivNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id ОИВа не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id ОИВа": {
                                "$ref": "#/components/examples/OivNotFoundError"
                            }
                        }
                    }
                }
            },
            "SystemNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id системы не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id тематической категории": {
                                "$ref": "#/components/examples/SystemNotFoundError"
                            }
                        }
                    }
                }
            },
            "CatalogNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "#/components/examples/CatalogNotFoundError"
                            }
                        }
                    }
                }
            },
            "FillingCatalogNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога заполнения не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "#/components/examples/FillingCatalogNotFoundError"
                            }
                        }
                    }
                }
            },
            "FillingCatalogEntitiesNotFoundError": {
                "description": "### Возможные ошибки бизнес-логики при создании и изменении каталога:\n  - Передан несуществующий id вида каталога;\n  - Передан несуществующий id типа каталога;\n  - Передан несуществующий id тематической категории;\n  - Передан несуществующий id ОИВа;\n  - Передан несуществующий id системы;\n  - Передан несуществующий id атрибута;\n  - Передан id альтернативного названия атрибута, не найденный в атрибуте;\n  - Несуществующее регулярное выражение;\n  - Несуществующий поисковый индекс;\n  - Несуществующий refCatalogId;\n  - Несуществующий refAttrId в каталоге refCatalogId;\n  - Передан несуществующий столбец справочника;\n\n### Ошибки бизнес-логики при ИЗМЕНЕНИИ каталога:\n  - Не существует каталога с переданным идентификатором.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id вида каталога": {
                                "$ref": "#/components/examples/CatalogKindNotFoundError"
                            },
                            "Несуществующий id типа каталога": {
                                "$ref": "#/components/examples/CatalogTypeNotFoundError"
                            },
                            "Несуществующий id тематической категории": {
                                "$ref": "thematicCategories.yaml#/components/examples/ThematicCategoryNotFoundError"
                            },
                            "Несуществующий id ОИВа": {
                                "$ref": "oivs.yaml#/components/examples/OivNotFoundError"
                            },
                            "Несуществующий id системы": {
                                "$ref": "systems.yaml#/components/examples/SystemNotFoundError"
                            },
                            "Несуществующий id атрибута": {
                                "$ref": "attributes.yaml#/components/examples/AttributeNotFoundError"
                            },
                            "Альтернативное название не найдено в атрибуте": {
                                "$ref": "attributes.yaml#/components/examples/AttributeAlterNameNotFoundError"
                            },
                            "Несуществующее регулярное выражение": {
                                "$ref": "regexps.yaml#/components/examples/RegularExpressionNotFoundError"
                            },
                            "Несуществующий поисковый индекс": {
                                "$ref": "searchIndexes.yaml#/components/examples/SearchIndexNotFoundError"
                            },
                            "Несуществующий refCatalogId": {
                                "$ref": "#/components/examples/RefCatalogNotFoundError"
                            },
                            "Несуществующий refAttrId в каталоге refCatalogId": {
                                "$ref": "#/components/examples/RefAttrNotFoundError"
                            },
                            "Несуществующий colDictTechName в справочнике": {
                                "$ref": "#/components/examples/ColDictTechNameNotFoundError"
                            },
                            "Каталога не существует": {
                                "$ref": "#/components/examples/FillingCatalogNotFoundError"
                            }
                        }
                    }
                }
            },
            "FillingCatalogBadRequestErrors": {
                "description": "### Ошибки бизнес-логики при создании и изменении каталога:\n  - Неуникальная комбинация полного и технологического наименования каталога;\n  - Не заполнен период фоновой проверки;\n  - Email ответственного не прошел проверку на соответствие регулярному выражению;\n  - Список атрибутов каталога содержит неуникальные techName атрибутов;\n  - Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту или вложенному атрибуту;\n  - Минимальное кол-во элементов множественного атрибута больше максимального кол-ва элементов;\n  - Множественный атрибут имеет свойство \"Обязательный\", но минимальное кол-во элементов равно 0;\n  - Некорректный parentDictAttrId;\n  - Некорректно указано свойство isUniqWithinParent.\n  - Настройки конструктора не прошли проверку валидации;\n  - Условие условной уникальности не прошло проверку валидации;\n  - Настройки групповой уникальности не прошли проверку валидации;\n  - Не заполнены обязательные поля при наличии геопривязки;\n  - Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно;\n  - Признак isNotReqGeoForService может принимать значение true, только при обязательности геопривязки.\n\n### Ошибки бизнес-логики при ИЗМЕНЕНИИ каталога:\n  - Каталог находится в процессе подписания;\n  - Попытка удалить атрибут каталога, который используется в справочнике, синхронизированном с каталогом;\n  - Каталог находится в процессе импорта;\n  - Для каталога запущен процесс удаления всех объектов;",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/BadRequestError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/WrongFormatError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/MissingParamsError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальная комбинация полного и технологического наименования каталога": {
                                "$ref": "#/components/examples/CatalogNotUniqueNameError"
                            },
                            "Не заполнен период фоновой проверки": {
                                "$ref": "#/components/examples/backgroundCheckPeriodTagIdBadRequestError"
                            },
                            "Email ответственного не прошел проверку на соответствие регулярному выражению": {
                                "$ref": "#/components/examples/InvalidRespPersonEmail"
                            },
                            "Список атрибутов каталога содержит неуникальные techName атрибутов": {
                                "$ref": "#/components/examples/NotUniqTechNameAttributeInCatalogError"
                            },
                            "Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту": {
                                "$ref": "#/components/examples/MultipleMainAttributesInCatalogError"
                            },
                            "Минимальное кол-во элементов множественного атрибута больше максимального": {
                                "$ref": "#/components/examples/WrongMixMaxAttributeError"
                            },
                            "Минимальное кол-во элементов обязательного атрибута = 0": {
                                "$ref": "#/components/examples/ZeroMinInRequiredAttributeError"
                            },
                            "Некорректный parentDictAttrId": {
                                "$ref": "#/components/examples/IncorrectParentDictAttrIdError"
                            },
                            "Некорректно указано свойство isUniqWithinParent": {
                                "$ref": "#/components/examples/WrongUniqWithinParent"
                            },
                            "Настройки конструктора не прошли проверку валидации": {
                                "$ref": "#/components/examples/ConstructorValidationError"
                            },
                            "Условие условной уникальности не прошло проверку валидации": {
                                "$ref": "#/components/examples/ConditionalUniqValidationError"
                            },
                            "Настройки групповой уникальности не прошли проверку валидации": {
                                "$ref": "#/components/examples/GroupUniqValidationError"
                            },
                            "Не заполнены обязательные поля при наличии геопривязки": {
                                "$ref": "#/components/examples/MissingMapFieldsError"
                            },
                            "Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно": {
                                "$ref": "#/components/examples/IncorrectGeoTypeArrayError"
                            },
                            "Признак isNotReqGeoForService может принимать значение true, только при обязательности геопривязки": {
                                "$ref": "#/components/examples/isNotReqGeoForServiceBadRequestError"
                            },
                            "Каталог находится в процессе подписания": {
                                "$ref": "#/components/examples/SignedCatalogCannotBeEditedError"
                            },
                            "Атрибут каталога привязан к справочнику и не может быть удален": {
                                "$ref": "#/components/examples/AttributeConnectedToDictionaryError"
                            },
                            "Каталог находится в процессе импорта": {
                                "$ref": "#/components/examples/CatalogInImportCantBeEditedError"
                            },
                            "Для каталога запущен процесс удаления всех объектов": {
                                "$ref": "#/components/examples/CatalogInDeletionCantBeEditedError"
                            }
                        }
                    }
                }
            },
            "AttributeGroupBadRequestResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Группа атрибутов с переданным названием `name` уже существует;\n  - В названии группы атрибутов переданы запрещенные символы.",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/OutOfScopeError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальное название группы атрибутов": {
                                "$ref": "#/components/examples/AttributeGroupNameNotUniqueError"
                            },
                            "В названии группы атрибутов присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/AttributeGroupBadNameError"
                            }
                        }
                    }
                }
            },
            "RegularExpressionNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id регулярного выражения не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id регулярного выражения": {
                                "$ref": "#/components/examples/RegularExpressionNotFoundError"
                            }
                        }
                    }
                }
            },
            "SearchIndexNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id поискового индекса не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexNotFoundError"
                            }
                        }
                    }
                }
            },
            "SearchIndexBadRequestResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Поисковый индекс с переданным наиеменованием `name` уже существует;\n  - Поисковый индекс с переданным техническим наиеменованием `techName` уже существует;\n  - В русскоязычном наиеменовании поискового индекса `name`  переданы запрещенные символы;\n  - В техническом наиеменовании поискового индекса `techName` переданы запрещенные символы;\n  - Поисковый индекс с переданной комбинацией справочника и столбца справочника уже существует;",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/WrongFormatError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальное русскоязычное название поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexNameNotUniqueError"
                            },
                            "Неуникальное техническое название поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexTechNameNotUniqueError"
                            },
                            "В русскоязычном названии поискового индекса присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/SearchIndexBadNameError"
                            },
                            "В техническом названии поискового индекса присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/SearchIndexBadTechNameError"
                            },
                            "Неуникальная комбинация справочника и столбца справочника": {
                                "$ref": "#/components/examples/SearchIndexDictAndColDictNotUniqueError"
                            }
                        }
                    }
                }
            },
            "SearchIndexBadRequestPutResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Поисковый индекс с переданным наиеменованием `name` уже существует;\n  - Поисковый индекс с переданным техническим наиеменованием `techName` уже существует;\n  - В русскоязычном наиеменовании поискового индекса `name`  переданы запрещенные символы;\n  - В техническом наиеменовании поискового индекса `techName` переданы запрещенные символы;\n  - Переданны измененные параметры идентификатора справочника и/или наименования столбца справочника, по которому(ым) настроен поисковый индекс ",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/WrongFormatError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальное русскоязычное название поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexNameNotUniqueError"
                            },
                            "Неуникальное техническое название поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexTechNameNotUniqueError"
                            },
                            "В русскоязычном названии поискового индекса присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/SearchIndexBadNameError"
                            },
                            "В техническом названии поискового индекса присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/SearchIndexBadTechNameError"
                            },
                            "Измененная комбинация справочника и столбца справочника": {
                                "$ref": "#/components/examples/SearchIndexDictAndColDictChangeError"
                            }
                        }
                    }
                }
            },
            "SearchIndexesNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Один или несколько из переданных поисковых индексов не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id поискового индекса": {
                                "$ref": "#/components/examples/SearchIndexNotFoundError"
                            }
                        }
                    }
                }
            },
            "ObjectCategoryNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id категории объектов не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id категории объектов": {
                                "$ref": "#/components/examples/ObjectCategoryNotFoundError"
                            }
                        }
                    }
                }
            },
            "ObjectCategoryBadRequestResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Категория объектов с переданным названием `name` уже существует;\n  - В русскоязычном названии категории объектов переданы запрещенные символы;\n  - В англоязычном названии категории объектов переданы запрещенные символы.",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/OutOfScopeError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальное название категории объектов": {
                                "$ref": "#/components/examples/ObjectCategoryNameNotUniqueError"
                            },
                            "В русскоязычном названии категории объектов присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/ObjectCategoryBadRusNameError"
                            },
                            "В англоязычном названии категории объектов присутствуют запрещенные символы": {
                                "$ref": "#/components/examples/ObjectCategoryBadEnNameError"
                            }
                        }
                    }
                }
            },
            "DictionaryNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id справочника не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id справочника": {
                                "$ref": "#/components/examples/DictionaryNotFoundError"
                            }
                        }
                    }
                }
            },
            "DictionaryNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id справочника не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id справочника": {
                                "$ref": "#/components/examples/DictionaryNotFoundError"
                            }
                        }
                    }
                }
            },
            "ExportNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id экспорта не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id экспорта": {
                                "$ref": "#/components/examples/ExportNotFoundError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogBadRequestPostResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Передана комбинация полного и технического наименований, которая уже используется в другом каталоге;\n  - Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту или вложенному атрибуту;\n  - Email ответственного не прошел проверку на соответствие регулярному выражению;\n  - Ограничение выборки не проходит валидацию;\n  - В SEF URL используются запрещенные символы;\n  - Видимость (поле `isVisible`) для атрибутов global_id, Дата подписания и Признак удаления в настройках публикации для системы не может быть передана со значением `false`;\n  - Не заполнены обязательные поля при наличии геопривязки;\n  - Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно;",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/BadRequestError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальная комбинация полного и технологического наименования каталога": {
                                "$ref": "#/components/examples/PublicationCatalogNotUniqueNameError"
                            },
                            "Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту": {
                                "$ref": "catalogs.yaml#/components/examples/MultipleMainAttributesInCatalogError"
                            },
                            "Email ответственного не прошел проверку на соответствие регулярному выражению": {
                                "$ref": "catalogs.yaml#/components/examples/InvalidRespPersonEmail"
                            },
                            "В идентификационном номере используются запрещенные символы": {
                                "$ref": "#/components/examples/IdentNumberFormatError"
                            },
                            "В SEF URL используются запрещенные символы": {
                                "$ref": "#/components/examples/SefUrlFormatError"
                            },
                            "Ограничение выборки не прошло валидацию": {
                                "$ref": "#/components/examples/PublicationConditionsValidationError"
                            },
                            "Системный атрибут должен быть видимым в настройках публикации": {
                                "$ref": "#/components/examples/PublicationSettingsSystemAttributeShouldBeVisibleError"
                            },
                            "Не заполнены обязательные поля при наличии геопривязки": {
                                "$ref": "#/components/examples/PublicationCatalogMissingMapFieldsError"
                            },
                            "Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно": {
                                "$ref": "catalogs.yaml#/components/examples/IncorrectGeoTypeArrayError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogBadRequestPutResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Передана комбинация полного и технического наименований, которая уже используется в другом каталоге;\n  - Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту или вложенному атрибуту;\n  - Email ответственного не прошел проверку на соответствие регулярному выражению;\n  - Передан измененный атрибут, который синхронизируется с каталогом заполнения;\n  - Передан измененный идентификатор каталога заполнения;\n  - В SEF URL используются запрещенные символы;\n  - Ограничение выборки не проходит валидацию;\n  - Видимость (поле `isVisible`) для атрибутов global_id, Дата подписания и Признак удаления в настройках публикации для системы не может быть передана со значением `false`.",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/UniqueValueError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/BadRequestError"
                                },
                                {
                                    "$ref": "_common.yaml#/components/schemas/ResourceCannotBeEditedError"
                                }
                            ]
                        },
                        "examples": {
                            "Неуникальная комбинация полного и технологического наименования каталога": {
                                "$ref": "#/components/examples/PublicationCatalogNotUniqueNameError"
                            },
                            "Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту": {
                                "$ref": "catalogs.yaml#/components/examples/MultipleMainAttributesInCatalogError"
                            },
                            "Email ответственного не прошел проверку на соответствие регулярному выражению": {
                                "$ref": "catalogs.yaml#/components/examples/InvalidRespPersonEmail"
                            },
                            "Попытка изменить синхронизируемый атрибут": {
                                "$ref": "#/components/examples/SyncedPropertyChangedError"
                            },
                            "Попытка изменить связанный каталог заполнения": {
                                "$ref": "#/components/examples/FillingCatalogChangedError"
                            },
                            "В идентификационном номере используются запрещенные символы": {
                                "$ref": "#/components/examples/IdentNumberFormatError"
                            },
                            "В SEF URL используются запрещенные символы": {
                                "$ref": "#/components/examples/SefUrlFormatError"
                            },
                            "Ограничение выборки не прошло валидацию": {
                                "$ref": "#/components/examples/PublicationConditionsValidationError"
                            },
                            "Системный атрибут должен быть видимым в настройках публикации": {
                                "$ref": "#/components/examples/PublicationSettingsSystemAttributeShouldBeVisibleError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Передан несуществующий id вида каталога;\n  - Передан несуществующий id типа каталога;\n  - Передан несуществующий id тематической категории;\n  - Передан несуществующий id ОИВа;\n  - Передан несуществующий id системы;\n  - Передан id системы, которая не добавлена в каталог в качетсве потребителя;\n  - Передан несуществующий id атрибута;\n  - Передан несуществующий в каталоге заполнения id атрибута;\n  - Передан id альтернативного названия атрибута, не найденный в атрибуте;\n  - Передан несуществующий столбец справочника;\n  - Передан несуществующий id каталога;\n  - Передан несуществующий id системного атрибута;\n  - Передан несуществующий id группы атрибутов;\n  - Передан несуществующий id рубрикатора (для yandex).",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id вида каталога": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogKindNotFoundError"
                            },
                            "Несуществующий id типа каталога": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogTypeNotFoundError"
                            },
                            "Несуществующий id тематической категории": {
                                "$ref": "thematicCategories.yaml#/components/examples/ThematicCategoryNotFoundError"
                            },
                            "Несуществующий id ОИВа": {
                                "$ref": "oivs.yaml#/components/examples/OivNotFoundError"
                            },
                            "Несуществующий id системы": {
                                "$ref": "systems.yaml#/components/examples/SystemNotFoundError"
                            },
                            "Несуществующий в каталоге публикации id системы": {
                                "$ref": "#/components/examples/SystemNotFoundInPublicationCatalogError"
                            },
                            "Несуществующий id атрибута": {
                                "$ref": "attributes.yaml#/components/examples/AttributeNotFoundError"
                            },
                            "Несуществующий в каталоге заполнения id атрибута": {
                                "$ref": "#/components/examples/AttributeNotFoundInFillingCatalogError"
                            },
                            "Альтернативное название не найдено в атрибуте": {
                                "$ref": "attributes.yaml#/components/examples/AttributeAlterNameNotFoundError"
                            },
                            "Несуществующий столбец справочника": {
                                "$ref": "dictionaries.yaml#/components/examples/DictionaryColumnNotFoundError"
                            },
                            "Несуществующий id каталога": {
                                "$ref": "#/components/examples/PublicationCatalogNotFoundError"
                            },
                            "Несуществующий id системного атрибута": {
                                "$ref": "attributes.yaml#/components/examples/SystemAttributeNotFoundError"
                            },
                            "Несуществующий id группы атрибутов": {
                                "$ref": "attributes.yaml#/components/examples/AttributeGroupNotFoundError"
                            },
                            "Несуществующий id рубрикатора (для yandex)": {
                                "$ref": "#/components/examples/RubricatorNotFoundError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogIdNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога публикации не существует;",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога публикации": {
                                "$ref": "#/components/examples/PublicationCatalogNotFoundError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogOrVersionNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога публикации не существует;\n  - Указанной версии каталога публикации не существует;",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога публикации": {
                                "$ref": "#/components/examples/PublicationCatalogNotFoundError"
                            },
                            "Несуществующий версия каталога публикации": {
                                "$ref": "#/components/examples/PublicationCatalogVersionNotFoundError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogAccessNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога публикации не существует;\n  - Передан несуществующий id системы;\n  - Передан id системы, которая не добавлена в каталог в качетсве потребителя;",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога публикации": {
                                "$ref": "#/components/examples/PublicationCatalogNotFoundError"
                            },
                            "Несуществующий id системы": {
                                "$ref": "systems.yaml#/components/examples/SystemNotFoundError"
                            },
                            "Несуществующий в каталоге публикации id системы": {
                                "$ref": "#/components/examples/SystemNotFoundInPublicationCatalogError"
                            }
                        }
                    }
                }
            },
            "PublicationCatalogReleaseNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога публикации не существует;\n  - Не найдены опубликованные объекты для формирования релиза",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Запрошенный id каталога публикации не существует": {
                                "$ref": "#/components/examples/PublicationCatalogNotFoundError"
                            },
                            "Не найдены опубликованные объекты для формирования релиза": {
                                "$ref": "#/components/examples/PublicationCatalogReleaseNotFoundDataErrorResponse"
                            }
                        }
                    }
                }
            },
            "CatalogGroupNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Не существует группы каталогов с указанным идентификатором.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Не существует группы каталогов с указанным идентификатором": {
                                "$ref": "#/components/examples/CatalogGroupNotFoundError"
                            }
                        }
                    }
                }
            },
            "PublicationObjectSearchNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога не существует;\n  - Переданный в фильтре или сортировке атрибут `attribute` не существует в корневом или вложенном каталоге;\n  - id вложенного каталога `childCatalogId`, переданный в фильтре, не существует в корневом каталоге.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogNotFoundError"
                            },
                            "Атрибут фильтра или сортировки не существует в каталоге": {
                                "$ref": "_common.yaml#/components/examples/FilterSortingAttributeNotFoundError"
                            },
                            "Вложенный каталог не найден в каталоге": {
                                "$ref": "catalogs.yaml#/components/examples/ChildCatalogNotFoundInCatalogError"
                            }
                        }
                    }
                }
            },
            "ChildPublicationObjectSearchNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный объект (вложенный, родительский, корневой) не существует в переданном каталоге (вложенном, родительском, корневом);\n  - Запрошенный каталог (вложенный или родительский) не входит в (родительский или корневой) каталог;\n  - Запрошенный объект (вложенный или родительский) не входит в (родительский или корневой) объект;\n  - Переданный в фильтре или сортировке атрибут `attribute` не существует в корневом каталоге.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Объект не найден в соответствующей каталоге": {
                                "$ref": "catalogObjects.yaml#/components/examples/CatalogObjectNotFoundError"
                            },
                            "Вложенный каталог не найден в каталоге": {
                                "$ref": "catalogs.yaml#/components/examples/ChildCatalogNotFoundInCatalogError"
                            },
                            "Вложенный объект не входит в родительский объект": {
                                "$ref": "catalogObjects.yaml#/components/examples/ChildObjectNotFoundInObjectError"
                            },
                            "Атрибут фильтра или сортировки не существует в каталоге": {
                                "$ref": "_common.yaml#/components/examples/FilterSortingAttributeNotFoundError"
                            }
                        }
                    }
                }
            },
            "CatalogObjectSearchNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога не существует;\n  - Переданный в фильтре или сортировке атрибут `attribute` не существует в корневом или вложенном каталоге;\n  - id вложенного каталога `childCatalogId`, переданный в фильтре, не существует;\n  - id вложенного каталога `childCatalogId`, переданный в фильтре, не существует в корневом каталоге.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogNotFoundError"
                            },
                            "Атрибут фильтра или сортировки не существует в каталоге": {
                                "$ref": "_common.yaml#/components/examples/FilterSortingAttributeNotFoundError"
                            },
                            "Несуществующий id вложенного каталога в фильтре": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogNotFoundError"
                            },
                            "Вложенный каталог не найден в каталоге": {
                                "$ref": "catalogs.yaml#/components/examples/ChildCatalogNotFoundInCatalogError"
                            }
                        }
                    }
                }
            },
            "ChildCatalogObjectSearchNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога (в т.ч. родительского и корневого) не существует;\n  - Запрошенный объект (вложенный, родительский, корневой) не существует в переданном каталоге (вложенном, родительском, корневом);\n  - Запрошенный каталог (вложенный или родительский) не входит в (родительский или корневой) каталог;\n  - Запрошенный объект (вложенный или родительский) не входит в (родительский или корневой) объект;\n  - Переданный в фильтре или сортировке атрибут `attribute` не существует в корневом каталоге.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogNotFoundError"
                            },
                            "Объект не найден в соответствующей каталоге": {
                                "$ref": "#/components/examples/CatalogObjectNotFoundError"
                            },
                            "Вложенный каталог не найден в каталоге": {
                                "$ref": "catalogs.yaml#/components/examples/ChildCatalogNotFoundInCatalogError"
                            },
                            "Вложенный объект не входит в родительский объект": {
                                "$ref": "#/components/examples/ChildObjectNotFoundInObjectError"
                            },
                            "Атрибут фильтра или сортировки не существует в каталоге": {
                                "$ref": "_common.yaml#/components/examples/FilterSortingAttributeNotFoundError"
                            }
                        }
                    }
                }
            },
            "PushsubNotFound": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Не существует подписки с указанным идентификатором.",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/NotFoundError"
                                }
                            ]
                        },
                        "examples": {
                            "Пример": {
                                "$ref": "#/components/examples/PushsubNotFoundError"
                            }
                        }
                    }
                }
            },
            "FileNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный Uuid файла не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий Uuid файла": {
                                "$ref": "#/components/examples/FileNotFoundError"
                            }
                        }
                    }
                }
            },
            "LocksNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога не существует;\n  - Запрошенный id пользователя, установавливающего блокировку не существует;\n  - Запрошенный id системы, установавливающей блокировку не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Каталога не существует": {
                                "$ref": "catalogs.yaml#/components/examples/CatalogNotFoundError"
                            },
                            "Пользователя не существует": {
                                "$ref": "users.yaml#/components/examples/UserNotFoundError"
                            },
                            "Системы не существует": {
                                "$ref": "systems.yaml#/components/examples/SystemNotFoundError"
                            }
                        }
                    }
                }
            },
            "LockNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id блокировки не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id блокировки": {
                                "$ref": "#/components/examples/LockNotFoundError"
                            }
                        }
                    }
                }
            },
            "CatalogNotFoundErrorResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id каталога не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id каталога": {
                                "$ref": "#/components/examples/CatalogIdNotFoundError"
                            }
                        }
                    }
                }
            },
            "DictionaryForbiddenResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Доступ к запрошенным справочникам запрещен.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/ForbiddenError"
                        },
                        "examples": {
                            "Запрещен доступ к справочникам с указанными id": {
                                "$ref": "#/components/examples/DictionaryForbiddenErrorResponse"
                            }
                        }
                    }
                }
            },
            "CatalogForbiddenResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Доступ к запрошенному каталогу запрещен.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/ForbiddenError"
                        },
                        "examples": {
                            "Запрещен доступ к каталогу с указанными id": {
                                "$ref": "#/components/examples/CatalogForbiddenErrorResponse"
                            }
                        }
                    }
                }
            },
            "UnauthorizedErrorResponse": {
                "description": "- Ошибка аутентификации и/или авторизации",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/UnauthorizedError"
                        },
                        "examples": {
                            "Неверный токен": {
                                "$ref": "#/components/examples/UnauthorizedErrorResponse"
                            }
                        }
                    }
                }
            },
            "RequestNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id запроса не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "_common.yaml#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id запроса": {
                                "$ref": "#/components/examples/RequestNotFoundError"
                            }
                        }
                    }
                }
            },
            "ExportFileNotFoundResponse": {
                "description": "### Возможные ошибки бизнес-логики:\n  - Запрошенный id файла экспорта не существует.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/NotFoundError"
                        },
                        "examples": {
                            "Несуществующий id файла": {
                                "$ref": "#/components/examples/ExportFileNotFoundError"
                            }
                        }
                    }
                }
            },
            "AccumulatedCatalogNotFound": {
                "description": "Сборный каталог не найден.",
                "content": {
                    "application/json": {
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "_common.yaml#/components/schemas/NotFoundError"
                                }
                            ]
                        },
                        "examples": {
                            "Пример": {
                                "$ref": "#/components/examples/AccumulatedCatalogNotFoundError"
                            }
                        }
                    }
                }
            }
        }
  },
  "paths": {
    "/catalogs/search": {
      "post": {
          "tags": [
              "catalogs"
          ],
          "summary": "Поиск по списку каталогов заполнения",
          "description": "Возвращает список неудалённых каталогов, где по каждому каталогу содержится информация необходимая для отображения в разделах `Данные по ...`\n\nМетод позволяет выполнять сортировку, фильтрацию, текстовый поиск и пагинацию. Подробнее см. параметры запроса.\n\nДля фильтрации используется тело запроса.",
          "parameters": [
              {
                  "name": "limit",
                  "in": "query",
                  "required": false,
                  "description": "Количество возвращаемых каталогов (от `1` до `1000`).",
                  "schema": {
                      "type": "integer",
                      "format": "int32",
                      "default": 100,
                      "minimum": 1,
                      "maximum": 1000
                  }
              },
              {
                  "$ref": "_common.yaml#/components/parameters/offsetQueryParam"
              },
              {
                  "name": "search",
                  "in": "query",
                  "required": false,
                  "description": "Текстовый поисковый запрос в списке каталогов.\nПоиск производится по атрибутам идентификатору и полному наименованию каталога.\n\nЗапрос со значением `12` вернет все каталоги, идентификатор или наименование которых содержит подстроку `12`.",
                  "schema": {
                      "type": "string"
                  }
              },
              {
                  "name": "sortBy",
                  "in": "query",
                  "description": "Поле, по которому производится сортировка.",
                  "required": false,
                  "schema": {
                      "type": "string",
                      "default": "id",
                      "enum": [
                          "id",
                          "fullName",
                          "responsiblePerson",
                          "countActiveObjects",
                          "countUnsignedObjects",
                          "countObjects",
                          "dateLastSign",
                          "dateNextUpdate",
                          "statusSignObjects",
                          "statusSignMetadata"
                      ]
                  }
              },
              {
                  "$ref": "_common.yaml#/components/parameters/orderByAscQueryParam"
              },
              {
                  "name": "statusSigning",
                  "in": "query",
                  "required": false,
                  "description": "Статус подписания каталога. Может принимать следующие значения:\n  - `signed` - подписанный, изменения отсутствуют. Каталог имеет этот статус при выполнении условия:\n    statusSignObjects = signed И statusSignMetadata = signed\n  - `neverSigned` - ни разу не подписан. Каталог имеет этот статус при выполнении условия:\n    dateLastSign=null И statusSignObjects != archive\n  - `hasChange` - подписанный, имеются изменения. Каталог имеет этот статус при выполнении условия:\n    dateLastSign = {value} И (statusSignObjects = unsigned ИЛИ statusSignMetadata = unsigned)\n  - `archive` - в архиве. Каталог имеет этот статус при выполнении условия:\n    statusSignObjects = archive И statusSignMetadata = archive",
                  "schema": {
                      "type": "array",
                      "items": {
                          "type": "string",
                          "enum": [
                              "signed",
                              "neverSigned",
                              "hasChange",
                              "archive"
                          ]
                      }
                  }
              },
              {
                  "name": "planSigning",
                  "in": "query",
                  "required": false,
                  "description": "Статус просрочки подписания каталога. Может принимать следующие значения:\n  - `ok` - срок планового подписания не нарушен. Включает каталоги, для которых dateNextUpdate строго больше текущей даты ИЛИ является null.\n  - `less3Day` - до планового подписания менее 3-х дней. Вклячает каталоги, у которых dateNextUpdate меньше или равна текущей даты + 3 дня.\n  - `expired` - плановое подписание просрочено. Включает каталоги, для которых dateNextUpdate строго меньше текущей даты.",
                  "schema": {
                      "type": "array",
                      "items": {
                          "type": "string",
                          "enum": [
                              "ok",
                              "less3Day",
                              "expired"
                          ]
                      }
                  }
              }
          ],
          "requestBody": {
              "$ref": "#/components/requestBodies/catalogListRequestBody"
          },
          "responses": {
              "200": {
                  "description": "Успешный ответ.\nПри отсутствии элементов, удовлетворяющих условиям запроса, возвращается пустой массив.\nЕсли переданы несуществующие идентификаторы категории, ОИВ, системы-потребителя, то также возвращается пустой массив.",
                  "content": {
                      "application/json": {
                          "schema": {
                              "type": "array",
                              "items": {
                                  "$ref": "#/components/schemas/FillingCatalogListItem"
                              }
                          },
                          "examples": {
                              "Пример": {
                                  "$ref": "#/components/examples/FillingCatalogListItemArrayResponse"
                              }
                          }
                      }
                  },
                  "headers": {
                      "X-Total-Count": {
                          "$ref": "_common.yaml#/components/headers/X-Total-Count"
                      }
                  }
              }
          }
      }
  },
  "/catalogs": {
      "post": {
          "tags": [
              "catalogs"
          ],
          "summary": "Первичное сохранение каталога",
          "description": "Метод используется при создании каталога заполнения.\nПри создании каталога необходимо обязательно заполнить общую информацию и атрибутивный состав.\n\nЕсли при сохранении передаются настройки конструктора, условной или групповой уникальности,\nто код проверок проходит валидацию.\n\nВ случае наличия ошибок в настройках каталога возвращается одна.\n\nВ результате сохранения каталога создаются соответствующие структуры для объектов каталога в БД заполнения.",
          "requestBody": {
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/FillingCatalogSettings"
                      },
                      "examples": {
                          "Пример": {
                              "$ref": "#/components/examples/FillingCatalogSettingsRequest"
                          }
                      }
                  }
              }
          },
          "responses": {
              "201": {
                  "description": "Успешный ответ",
                  "content": {
                      "application/json": {
                          "schema": {
                              "$ref": "_common.yaml#/components/schemas/CreatedResponse"
                          },
                          "examples": {
                              "Пример": {
                                  "$ref": "#/components/examples/CatalogCreatedResponse"
                              }
                          }
                      }
                  }
              },
              "400": {
                  "$ref": "#/components/responses/FillingCatalogBadRequestErrors"
              },
              "404": {
                  "$ref": "#/components/responses/FillingCatalogEntitiesNotFoundError"
              }
          }
      },
      "delete": {
          "tags": [
              "catalogs"
          ],
          "summary": "Отметка каталога удалённым",
          "description": "Метод используется для отметки удалёнными одного или нескольких каталогов.",
          "parameters": [
              {
                  "$ref": "#/components/parameters/catalogIdsQueryParam"
              }
          ],
          "responses": {
              "200": {
                  "description": "Успешный ответ",
                  "content": {
                      "application/json": {
                          "schema": {
                              "$ref": "_common.yaml#/components/schemas/OkResponse"
                          },
                          "examples": {
                              "Пример": {
                                  "$ref": "#/components/examples/CatalogDeletedResponse"
                              }
                          }
                      }
                  }
              },
              "400": {
                  "description": "Ошибка построения запроса или целостности переданных данных.\nОшибка может быть в параметре, заголовке или полях тела запроса.\nВ зависимости от этого текст ошибки может отличаться.\n\n### Возможные ошибки бизнес-логики:\n  - Каталог находится в процессе импорта;\n  - Один или несколько из переданных каталогов используются в конструкторе проверок других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в настройках уникальности других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в ссылочных атрибутах других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в настройках ограничения выборки каталогов публикации;\n  - На основе одиного или нескольких из переданных каталогов созданы справочники.",
                  "content": {
                      "application/json": {
                          "schema": {
                              "oneOf": [
                                  {
                                      "$ref": "_common.yaml#/components/schemas/BadRequestError"
                                  }
                              ]
                          },
                          "examples": {
                              "Каталог находится в процессе импорта": {
                                  "$ref": "#/components/examples/CatalogInImportCantBeDeletedError"
                              },
                              "Каталог используется в конструкторе проверок другого каталога заполнения": {
                                  "$ref": "#/components/examples/CatalogInCatalogPackagesCantBeDeletedError"
                              },
                              "Каталог используется в настройках уникальностей другого каталога заполнения": {
                                  "$ref": "#/components/examples/CatalogInCatalogUniqCantBeDeletedError"
                              },
                              "Каталог используется в ссылочном атрибуте другого каталога заполнения": {
                                  "$ref": "#/components/examples/CatalogInCatalogAttributesCantBeDeletedError"
                              },
                              "Каталог используется в настройках ограничения выборки каталога публикации": {
                                  "$ref": "#/components/examples/CatalogInPublCatalogConditionsCantBeDeletedError"
                              },
                              "На основе каталога создан справочник": {
                                  "$ref": "#/components/examples/CatalogInDictionaryCantBeDeletedError"
                              }
                          }
                      }
                  }
              },
              "404": {
                  "description": "### Возможные ошибки бизнес-логики:\n  - Не существует каталога с переданным идентификатором. Если передаётся массив каталогов, то ошибка выдаётся, если найден хотя бы 1 несуществующий каталог;",
                  "content": {
                      "application/json": {
                          "schema": {
                              "oneOf": [
                                  {
                                      "$ref": "_common.yaml#/components/schemas/NotFoundError"
                                  }
                              ]
                          },
                          "examples": {
                              "Каталога не существует": {
                                  "$ref": "#/components/examples/FillingCatalogNotFoundError"
                              }
                          }
                      }
                  }
              }
          }
      }
  },
  "/catalogs/{catalogId}": {
      "put": {
          "tags": [
              "catalogs"
          ],
          "summary": "Изменение настроек каталога заполнения",
          "description": "Изменяет настройки каталога заполения.\n\nНастройки вкладок \"Общая информация\" и \"Атрибуты\" передаются всегда.\nОстальные - только при изменении настроек.\n\nЕсли при сохранении передаются настройки конструктора, условной или групповой уникальности,\nто код проверок проходит валидацию.\n\nВ случае наличия ошибок в настройках каталога возвращается одна.",
          "parameters": [
              {
                  "$ref": "#/components/parameters/catalogIdPathParam"
              }
          ],
          "requestBody": {
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/FillingCatalogSettings"
                      },
                      "examples": {
                          "Пример": {
                              "$ref": "#/components/examples/FillingCatalogSettingsRequest"
                          }
                      }
                  }
              }
          },
          "responses": {
              "200": {
                  "description": "Успешный ответ",
                  "content": {
                      "application/json": {
                          "schema": {
                              "$ref": "_common.yaml#/components/schemas/OkResponse"
                          },
                          "examples": {
                              "Пример": {
                                  "$ref": "#/components/examples/CatalogEditedResponse"
                              }
                          }
                      }
                  }
              },
              "400": {
                  "$ref": "#/components/responses/FillingCatalogBadRequestErrors"
              },
              "404": {
                  "$ref": "#/components/responses/FillingCatalogEntitiesNotFoundError"
              }
          }
      }
  },
  },
  "openapi": "3.0.3",
  "info": {
      "title": "Описание внутреннего API для ЕХД 2.0",
      "description": "Описание методов для работы со сборными каталогами",
      "version": "1.0.0"
  }
}

export const mockDataPathForParams = {
    components: mockDataMini.components,
    paths: {
        "/catalogs/search": mockDataMini.paths["/catalogs/search"]
    }
}

export const mockDataOnlyRecursive = {
"components": {
    "schemas": {
        "CommonAttributePublicationSettings": {
            "description": "Общие настройки публикации атрибута для систем",
            "type": "object",
            "properties": {
                "attrId": {
                    "description": "Идентификатор атрибута",
                    "type": "integer",
                    "format": "int32"
                },
                "attributes": {
                    "description": "Атрибуты, входящие в табличный атрибут",
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CommonAttributePublicationSettings"
                    }
                }
            },
            "required": [
                "attrId",
            ]
        },
    },
    "requestBodies": {
        "catalogListRequestBody": {
              "description": "Пример тела запроса с информацией о категории объектов.",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/CommonAttributePublicationSettings"
                      },
                      "examples": {
                          "Пример": {
                              "$ref": "#/components/examples/ObjectCategoryRequest"
                          }
                      }
                  }
              }
          },
    }
},
  "openapi": "3.0.3",
  "info": {
      "title": "Описание внутреннего API для ЕХД 2.0",
      "description": "Описание методов для работы со сборными каталогами",
      "version": "1.0.0"
  }
}