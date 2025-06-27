export const MockOutputMini = [
    {
        "path": "/catalogs/search",
        "method": "post",
        "methodDesc": "Возвращает список неудалённых каталогов, где по каждому каталогу содержится информация необходимая для отображения в разделах `Данные по ...`\n\nМетод позволяет выполнять сортировку, фильтрацию, текстовый поиск и пагинацию. Подробнее см. параметры запроса.\n\nДля фильтрации используется тело запроса.",
        "responses": {
            "200": {
                "description": "Успешный ответ.\nПри отсутствии элементов, удовлетворяющих условиям запроса, возвращается пустой массив.\nЕсли переданы несуществующие идентификаторы категории, ОИВ, системы-потребителя, то также возвращается пустой массив.",
                "schema": [
                    {
                        "paramName": "[index]",
                        "description": "",
                        "paramType": "array[object]",
                        "required": false
                    },
                    {
                        "paramName": "[index]",
                        "paramType": "object",
                        "description": "Элемент списка каталогов заполнения",
                        "required": false
                    },
                    {
                        "paramName": "[index].id",
                        "paramType": "integer",
                        "description": "Идентификатор каталога",
                        "required": true
                    },
                    {
                        "paramName": "[index].fullName",
                        "paramType": "string",
                        "description": "Полное наименование каталога",
                        "required": true
                    },
                    {
                        "paramName": "[index].objectCategories",
                        "paramType": "string",
                        "description": "Категории объектов каталога, перечисленные через запятую с пробелом",
                        "required": true
                    },
                    {
                        "paramName": "[index].thematicCategory",
                        "paramType": "string",
                        "description": "Тематическая категория каталога",
                        "required": true
                    },
                    {
                        "paramName": "[index].oivs",
                        "paramType": "string",
                        "description": "ОИВ, ответственные за наполнение каталога, перечисленные через запятую с пробелом",
                        "required": true
                    },
                    {
                        "paramName": "[index].countActiveObjects",
                        "paramType": "integer",
                        "description": "Количество активных объектов в каталоге.\n\nДля заполнения считаются объекты со статусами:\n  - Подписанный,\n  - На изменении,\n  - На удалении.\n\nДля публикации считаются неудаленные объекты.",
                        "required": true
                    },
                    {
                        "paramName": "[index].countObjects",
                        "paramType": "integer",
                        "description": "Общее количество объектов в каталоге",
                        "required": true
                    },
                    {
                        "paramName": "[index].systemsConsumers",
                        "paramType": "string",
                        "description": "Системы-потребители каталога, перечисленные через запятую с пробелом",
                        "required": true
                    },
                    {
                        "paramName": "[index].responsiblePerson",
                        "paramType": "string",
                        "description": "Ответственный за каталог. Указывается ФИО, email, телефон через запятую с пробелом",
                        "required": true
                    },
                    {
                        "required": true,
                        "paramName": "[index].periodUpdate",
                        "paramType": "string",
                        "description": "Название периодичности обновления каталога"
                    },
                    {
                        "paramName": "[index].systemsSuppliers",
                        "paramType": "string",
                        "description": "Системы-поставщики данных в каталог, перечисленные через запятую с пробелом",
                        "required": true
                    },
                    {
                        "paramName": "[index].dateLastSign",
                        "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$]",
                        "description": "Дата последнего подписания всех объектов каталога или подписания отсутствия изменений в объектах.\nМожет отличаться от последней даты подписания из истории, так как в историю попадают записи с подписанием отдельных объектов.\nФормат даты: DD.MM.YYYY",
                        "required": true
                    },
                    {
                        "paramName": "[index].dateNextUpdate",
                        "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])\\.([1-2]\\d{3})$]",
                        "description": "Рассчитанная дата следующего подписания каталога, вычисленной на основе даты последней подписи и периодичности обновления.\nФормат даты: DD.MM.YYYY",
                        "required": false
                    },
                    {
                        "required": true,
                        "paramName": "[index].statusSignObjects",
                        "paramType": "string[\nsigned,\nunsigned,\narchive\n]",
                        "description": "Техническое название статуса данных каталога заполнения:\n  - `signed` - подписано,\n  - `unsigned` - не подписано,\n  - `archive` - архив."
                    },
                    {
                        "required": true,
                        "paramName": "[index].statusSignMetadata",
                        "paramType": "string[\nsigned,\nunsigned,\narchive\n]",
                        "description": "Техническое название статуса подписания метаданных каталога заполнения:\n  - `signed` - метаданные подписаны;\n  - `unsigned` - метаданные не подписаны;\n  - `archive` - архив."
                    },
                    {
                        "paramName": "[index].countUnsignedObjects",
                        "paramType": "integer",
                        "description": "Количество неподписанных объектов в каталоге. Считаются объекты со статусами:\n  - На изменении,\n  - На удалении,\n  - На восстановлении.",
                        "required": true
                    },
                    {
                        "paramName": "[index].signatureInfo",
                        "paramType": "string",
                        "description": "Информация о подписании каталога, включающая дату последнего подписания и наименование подписанта",
                        "required": false
                    },
                    {
                        "paramName": "[index].countErrorObjects",
                        "paramType": "integer",
                        "description": "Количество объектов каталога, имеющих статус \"Ошибка\"",
                        "required": false
                    },
                    {
                        "paramName": "[index].countPublicationCatalogs",
                        "paramType": "integer",
                        "description": "Число каталогов публикации, созданных на основе каталога заполнения",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges",
                        "paramType": "object",
                        "description": "Привилегии каталогов заполнения и групп каталогов",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canView",
                        "paramType": "boolean",
                        "description": "Просмотр",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canExport",
                        "paramType": "boolean",
                        "description": "Экспорт",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canEditMeta",
                        "paramType": "boolean",
                        "description": "Редактирование метаданных",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canEdit",
                        "paramType": "boolean",
                        "description": "Редактирование",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canSign",
                        "paramType": "boolean",
                        "description": "Подписание",
                        "required": true
                    },
                    {
                        "paramName": "[index].userPrivileges.canImport",
                        "paramType": "boolean",
                        "description": "Импорт",
                        "required": true
                    }
                ]
            },
            "201": {
                "description": "В схеме ответов нет кода 201",
                "schema": []
            },
            "400": {
                "description": "В схеме ответов нет кода 400",
                "schema": []
            }
        },
        "requests": {
            "schema": [
                {
                    "paramName": "filters[index]",
                    "description": "",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "filters[index]",
                    "paramType": "object",
                    "description": "Объект базового фильтра для запросов с фильтрацией по столбцам таблиц",
                    "required": false
                },
                {
                    "paramName": "filters[index].attribute",
                    "paramType": "string",
                    "description": "Техническое наименование столбца, по которому производится сортировка или фильтрация.\n\nДля атрибутов каталога передается в следующем формате:\n  - \"field_{attrId}\" для каталога заполнения\n  - \"field_{catalogAttrId}\" для каталога публикации\n      - attrId - идентификатор атрибута в ЕХД\n      - catalogAttrId - идентификатор атрибута каталога",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "filters[index].operator",
                    "paramType": "string[\nempty,\nnotEmpty,\ncontains,\ninEnum,\nequals,\ngreaterThan,\ngreaterOrEqualsThan,\nlessThan,\nlessOrEqualsThan\n]",
                    "description": "Техническое название оператора базовой фильтрации"
                },
                {
                    "paramName": "filters[index].value",
                    "description": "Значение для сравнения со значением атрибута при применении оператора",
                    "paramType": "Один из вариантов",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 filters[index].value",
                    "paramType": "string",
                    "description": "Значение для фильтрации по строковому столбцу или дате",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 filters[index].value",
                    "paramType": "integer",
                    "description": "Значение для фильтрации по столбцу с целыми числами",
                    "required": false
                },
                {
                    "paramName": "Вариант 3 filters[index].value",
                    "paramType": "number",
                    "description": "Значение для фильтрации по столбцу с дробными числами",
                    "required": false
                },
                {
                    "paramName": "filters[index].attribute",
                    "paramType": "string[\nid,\nfullName,\nthematicCategory\n]",
                    "description": "",
                    "required": false
                }
            ],
            "required": false,
            "description": "Пример тела запроса для поиска по списку каталогов"
        },
        "inputParams": [
            {
                "paramName": "limit",
                "paramIn": "query",
                "paramType": "integer[int32]",
                "description": "Количество возвращаемых каталогов (от `1` до `1000`).",
                "required": false
            },
            {
                "paramName": "offset",
                "paramIn": "query",
                "paramType": "integer[int32]",
                "description": "Позиция (индекс), с которой необходимо возвращать элементы из БД (не меньше `0`).\n\nПо умолчанию `0`.",
                "required": false
            },
            {
                "paramName": "search",
                "paramIn": "query",
                "paramType": "string",
                "description": "Текстовый поисковый запрос в списке каталогов.\nПоиск производится по атрибутам идентификатору и полному наименованию каталога.\n\nЗапрос со значением `12` вернет все каталоги, идентификатор или наименование которых содержит подстроку `12`.",
                "required": false
            },
            {
                "paramName": "sortBy",
                "paramIn": "query",
                "paramType": "string[\nid,\nfullName,\nresponsiblePerson,\ncountActiveObjects,\ncountUnsignedObjects,\ncountObjects,\ndateLastSign,\ndateNextUpdate,\nstatusSignObjects,\nstatusSignMetadata\n]",
                "description": "Поле, по которому производится сортировка.",
                "required": false
            },
            {
                "paramName": "orderBy",
                "paramIn": "query",
                "paramType": "string[\nasc,\ndesc\n]",
                "description": "Порядок сортировки. Допустимые значения:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию.\n\nПо умолчанию: `asc`.",
                "required": false
            },
            {
                "paramName": "statusSigning",
                "paramIn": "query",
                "paramType": "array[string[\nsigned,\nneverSigned,\nhasChange,\narchive\n]]",
                "description": "Статус подписания каталога. Может принимать следующие значения:\n  - `signed` - подписанный, изменения отсутствуют. Каталог имеет этот статус при выполнении условия:\n    statusSignObjects = signed И statusSignMetadata = signed\n  - `neverSigned` - ни разу не подписан. Каталог имеет этот статус при выполнении условия:\n    dateLastSign=null И statusSignObjects != archive\n  - `hasChange` - подписанный, имеются изменения. Каталог имеет этот статус при выполнении условия:\n    dateLastSign = {value} И (statusSignObjects = unsigned ИЛИ statusSignMetadata = unsigned)\n  - `archive` - в архиве. Каталог имеет этот статус при выполнении условия:\n    statusSignObjects = archive И statusSignMetadata = archive",
                "required": false
            },
            {
                "paramName": "planSigning",
                "paramIn": "query",
                "paramType": "array[string[\nok,\nless3Day,\nexpired\n]]",
                "description": "Статус просрочки подписания каталога. Может принимать следующие значения:\n  - `ok` - срок планового подписания не нарушен. Включает каталоги, для которых dateNextUpdate строго больше текущей даты ИЛИ является null.\n  - `less3Day` - до планового подписания менее 3-х дней. Вклячает каталоги, у которых dateNextUpdate меньше или равна текущей даты + 3 дня.\n  - `expired` - плановое подписание просрочено. Включает каталоги, для которых dateNextUpdate строго меньше текущей даты.",
                "required": false
            }
        ]
    },
    {
        "path": "/catalogs",
        "method": "post",
        "methodDesc": "Метод используется при создании каталога заполнения.\nПри создании каталога необходимо обязательно заполнить общую информацию и атрибутивный состав.\n\nЕсли при сохранении передаются настройки конструктора, условной или групповой уникальности,\nто код проверок проходит валидацию.\n\nВ случае наличия ошибок в настройках каталога возвращается одна.\n\nВ результате сохранения каталога создаются соответствующие структуры для объектов каталога в БД заполнения.",
        "responses": {
            "200": {
                "description": "В схеме ответов нет кода 200",
                "schema": []
            },
            "201": {
                "description": "Успешный ответ",
                "schema": [
                    {
                        "paramName": "",
                        "paramType": "object",
                        "description": "Успешное создание объекта.",
                        "required": false
                    },
                    {
                        "paramName": "id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "code",
                        "paramType": "number[\n201\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string[\nCreated\n]",
                        "description": "",
                        "required": false
                    }
                ]
            },
            "400": {
                "schema": [
                    {
                        "paramName": "",
                        "description": "",
                        "paramType": "Один из вариантов",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 ",
                        "paramType": "object",
                        "description": "Ошибка построения запроса или целостности переданных данных.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 ",
                        "paramType": "object",
                        "description": "Ошибка уникальности значений поля.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны быть уникальными.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string[\nUnique value error\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 ",
                        "paramType": "object",
                        "description": "Переданное значение параметра, заголовка или поля не соответствует формату.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны соответствовать определенному формату.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.\n\nВозможные варианты возникновения ошибки:\n  - Строковое значение должно удовлетворять маске или регулярному выражению.\n  - Строковое значение должно быть определенной длины.\n  - Массив должен включать определенное число элементов.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string[\nParameter format error,\nHeader format error,\nRequest body field format error\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 ",
                        "paramType": "object",
                        "description": "Ошибка отсутствия обязательных параметров, заголовков или полей в запросе.\n\nВ тексте ошибки перечисляются названия обязательных параметров, заголовков или полей запроса.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string[\nMissing parameter,\nMissing header,\nMissing request body fields\n]",
                        "description": "",
                        "required": false
                    }
                ],
                "description": "### Ошибки бизнес-логики при создании и изменении каталога:\n  - Неуникальная комбинация полного и технологического наименования каталога;\n  - Не заполнен период фоновой проверки;\n  - Email ответственного не прошел проверку на соответствие регулярному выражению;\n  - Список атрибутов каталога содержит неуникальные techName атрибутов;\n  - Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту или вложенному атрибуту;\n  - Минимальное кол-во элементов множественного атрибута больше максимального кол-ва элементов;\n  - Множественный атрибут имеет свойство \"Обязательный\", но минимальное кол-во элементов равно 0;\n  - Некорректный parentDictAttrId;\n  - Некорректно указано свойство isUniqWithinParent.\n  - Настройки конструктора не прошли проверку валидации;\n  - Условие условной уникальности не прошло проверку валидации;\n  - Настройки групповой уникальности не прошли проверку валидации;\n  - Не заполнены обязательные поля при наличии геопривязки;\n  - Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно;\n  - Признак isNotReqGeoForService может принимать значение true, только при обязательности геопривязки.\n\n### Ошибки бизнес-логики при ИЗМЕНЕНИИ каталога:\n  - Каталог находится в процессе подписания;\n  - Попытка удалить атрибут каталога, который используется в справочнике, синхронизированном с каталогом;\n  - Каталог находится в процессе импорта;\n  - Для каталога запущен процесс удаления всех объектов;"
            }
        },
        "requests": {
            "schema": [
                {
                    "paramName": "",
                    "paramType": "object",
                    "description": "Настройки каталога заполнения",
                    "required": false
                },
                {
                    "paramName": "generalInfo",
                    "paramType": "object",
                    "description": "Общая информация каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "generalInfo.id",
                    "paramType": "integer",
                    "description": "Идентификатор каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.fullName",
                    "paramType": "string",
                    "description": "Полное наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.technicalName",
                    "paramType": "string",
                    "description": "Технологическое наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.shortName",
                    "paramType": "string",
                    "description": "Краткое наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.kindCatalog",
                    "paramType": "object",
                    "description": "Вид каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.kindCatalog.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор вида каталога",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.kindCatalog.name",
                    "paramType": "string",
                    "description": "Название вида каталога"
                },
                {
                    "paramName": "generalInfo.kindCatalogId",
                    "paramType": "integer",
                    "description": "Идентификатор вида каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.typeCatalog",
                    "paramType": "object",
                    "description": "Тип каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.typeCatalog.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа каталога",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.typeCatalog.name",
                    "paramType": "string",
                    "description": "Название типа каталога"
                },
                {
                    "paramName": "generalInfo.typeCatalogId",
                    "paramType": "integer",
                    "description": "Идентификатор типа каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.thematicCategory",
                    "paramType": "object",
                    "description": "Общая информация о тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategory.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategory.name",
                    "paramType": "string",
                    "description": "Русскоязычное наименование тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategoryId",
                    "paramType": "integer",
                    "description": "Идентификатор тематической категории каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.objectCategories[index]",
                    "description": "Категории объекта",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index]",
                    "paramType": "object",
                    "description": "Категории объекта",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор категории объектов",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование категории объектов, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование категории объектов",
                    "required": false
                },
                {
                    "paramName": "generalInfo.oivs[index]",
                    "description": "Поставщики информации каталога (ответственные ОИВы)",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index]",
                    "paramType": "object",
                    "description": "Поставщики информации каталога (ответственные ОИВы)",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов поставщиков информации каталога (ответственные ОИВы)",
                    "required": false
                },
                {
                    "paramName": "generalInfo.accountingObject",
                    "paramType": "string",
                    "description": "Объект учёта",
                    "required": false
                },
                {
                    "paramName": "generalInfo.keywords",
                    "paramType": "string",
                    "description": "Ключевые слова",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index]",
                    "description": "Системы потребители данных каталога",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index]",
                    "paramType": "object",
                    "description": "Системы потребители данных каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index].name",
                    "paramType": "string",
                    "description": "Название информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsConsumersIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов систем потребителей данных",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isShowDeleteObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Показывать удалённые объекты\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.periodUpdate",
                    "paramType": "object",
                    "description": "Периодичность обновления каталога заполнения",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly,\nminutely,\nhourly,\nnumDays,\ncalendarDays,\nmultiple,\nwithChanges,\nrealTime\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "paramName": "generalInfo.periodUpdate.numDays",
                    "paramType": "integer",
                    "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.calendarDays[index]",
                    "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.calendarDays[index].day",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "День месяца в формате DD.MM",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.isCheckLastDay",
                    "paramType": "boolean",
                    "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index]",
                    "description": "Настройки периодичности обновления \"Множественная периодичность\". Обязателен, если tagId = multiple.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.multiple[index].tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly,\nminutely,\nhourly,\nnumDays,\ncalendarDays,\nmultiple,\nwithChanges,\nrealTime\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.multiple[index].name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].dateStart",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "Дата начала действия указанной периодичности. Используется формат DD.MM",
                    "required": true
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].numDays",
                    "paramType": "integer",
                    "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].calendarDays[index]",
                    "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].calendarDays[index].day",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "День месяца в формате DD.MM",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].isCheckLastDay",
                    "paramType": "boolean",
                    "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index]",
                    "description": "Системы-поставщики данных в каталог заполнения",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index]",
                    "paramType": "object",
                    "description": "Системы-поставщики данных в каталог заполнения",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index].name",
                    "paramType": "string",
                    "description": "Название информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsSuppliersIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов систем поставщиков данных",
                    "required": false
                },
                {
                    "paramName": "generalInfo.hasBackgroundCheck",
                    "paramType": "boolean",
                    "description": "Признак наличия в каталоге периодической фоновой проверки",
                    "required": true
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriodTagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "paramName": "generalInfo.backgroundCheckPeriod",
                    "paramType": "object",
                    "description": "Период фоновой проверки в каталоге",
                    "required": false
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriod.name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriod.tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "paramName": "generalInfo.backgroundCheckEmails",
                    "paramType": "string",
                    "description": "Список электронных почт получателей результатов фоновой проверки, перечисленные через запятую БЕЗ пробела",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isDeleteAllObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Возможно одновременное удаление всех объектов\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isPriorityProcess",
                    "paramType": "boolean",
                    "description": "Признак \"Установить приоритет подписания данных\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index]",
                    "description": "Поставщики информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index]",
                    "paramType": "object",
                    "description": "Поставщики информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsIdsBlockEditObjectsGUI[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов поставщиков информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isBlockEditObjectsService",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать подписание данных (сервис)\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockRestoreObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать восстановление данных\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockSignObjectsGUI",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать подписание данных (веб)\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isCopyObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Возможно копирование объектов\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockEditObjectsGUI",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать редактирование данных (веб)\"",
                    "required": true
                },
                {
                    "paramName": "attributes[index]",
                    "description": "Настройки вкладки \"Атрибуты\" каталога заполнения",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "attributes[index]",
                    "description": "Атрибут каталога заполнения",
                    "paramType": "Один из вариантов",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index]",
                    "paramType": "object",
                    "description": "Строковый атрибут каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Атрибут.\n\nСхема включает общие для всех типов атрибутов поля.",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута ЕХД",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].catalogAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута каталога",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].selectedAlterNameId",
                    "paramType": "integer",
                    "description": "Идентификатор выбранного альтернативного наименования атрибута в каталоге",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].order",
                    "paramType": "integer",
                    "description": "Порядковый номер атрибута в каталоге",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isMain",
                    "paramType": "boolean",
                    "description": "Свойство, что атрибут считается главным при связывании с другими каталогами",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isReq",
                    "paramType": "boolean",
                    "description": "Свойство обязательности атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isUniq",
                    "paramType": "boolean",
                    "description": "Свойство уникальности значения атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isUniqWithinParent",
                    "paramType": "boolean",
                    "description": "Признак, что уникальность значений атрибутов внутри табличного атрибута будет проверятся в рамках объекта-родителя.",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isBanEdit",
                    "paramType": "boolean",
                    "description": "Свойство запрета на редактирование",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isSystemModify",
                    "paramType": "boolean",
                    "description": "Свойство, что значение атрибута изменяется системой",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].objOperatingMode",
                    "paramType": "string[\ncreateObj,\nupdateObj,\ndeleteObj\n]",
                    "description": "Режим работы с объектом, при котором доступно изменение значений атрибута:\n  - `createObj` - только при создании,\n  - `updateObj` - при редактировании (в т.ч. создании),\n  - `deleteObj` - при удалении."
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index]",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index]",
                    "paramType": "object",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isManualInput",
                    "paramType": "boolean",
                    "description": "Настроено ли на этот атрибут заполнение значениями не из справочника (ручной ввод) в блоках Автозаполнения конструктора",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index]",
                    "description": "Массив атрибутов, значение которых зависит от заполнения данного атрибута при автозаполнении.\nОписываются в блоке `Автозаполнение` конструктора в массиве [[blocks.properties.mapping]].\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута в ЕХД",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index].isDependent",
                    "paramType": "boolean",
                    "description": "Является ли атрибут зависимым в рамках ручного ввода",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputSources[index]",
                    "paramType": "array[integer[int32]]",
                    "description": "Массив идентификаторов атрибутов, от значения которых зависит значение данного атрибута при Автозаполнении.\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].defaultValue",
                    "paramType": "string",
                    "description": "Значение атрибута по умолчанию",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldMask",
                    "paramType": "string",
                    "description": "Маска ввода, которой должно соответствовать значение атрибута. Обозначения:\n  - X - любые буквы,\n  - 0 - любые цифры.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndexId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор поискового индекса, которому должно соответствовать значение атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex",
                    "paramType": "object",
                    "description": "Общая информация о поисковом индексе в списке поисковых индексов",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор поискового индекса",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex.name",
                    "paramType": "string",
                    "description": "Наименование поискового индекса",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegexId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор регулярного выражения, которому должно соответствовать значение атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex",
                    "paramType": "object",
                    "description": "Общая информация регулярного выражения",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор регулярного выражения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.name",
                    "paramType": "string",
                    "description": "Название регулярного выражения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.value",
                    "paramType": "string",
                    "description": "Регулярное выражение",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].maxLength",
                    "paramType": "integer",
                    "description": "Максимальная длина строкового значения",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index]",
                    "paramType": "object",
                    "description": "Справочный атрибут каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Атрибут.\n\nСхема включает общие для всех типов атрибутов поля.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута ЕХД",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].catalogAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута каталога",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].selectedAlterNameId",
                    "paramType": "integer",
                    "description": "Идентификатор выбранного альтернативного наименования атрибута в каталоге",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].order",
                    "paramType": "integer",
                    "description": "Порядковый номер атрибута в каталоге",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isMain",
                    "paramType": "boolean",
                    "description": "Свойство, что атрибут считается главным при связывании с другими каталогами",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isReq",
                    "paramType": "boolean",
                    "description": "Свойство обязательности атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isUniq",
                    "paramType": "boolean",
                    "description": "Свойство уникальности значения атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isUniqWithinParent",
                    "paramType": "boolean",
                    "description": "Признак, что уникальность значений атрибутов внутри табличного атрибута будет проверятся в рамках объекта-родителя.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isBanEdit",
                    "paramType": "boolean",
                    "description": "Свойство запрета на редактирование",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isSystemModify",
                    "paramType": "boolean",
                    "description": "Свойство, что значение атрибута изменяется системой",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].objOperatingMode",
                    "paramType": "string[\ncreateObj,\nupdateObj,\ndeleteObj\n]",
                    "description": "Режим работы с объектом, при котором доступно изменение значений атрибута:\n  - `createObj` - только при создании,\n  - `updateObj` - при редактировании (в т.ч. создании),\n  - `deleteObj` - при удалении."
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index]",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index]",
                    "paramType": "object",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isManualInput",
                    "paramType": "boolean",
                    "description": "Настроено ли на этот атрибут заполнение значениями не из справочника (ручной ввод) в блоках Автозаполнения конструктора",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index]",
                    "description": "Массив атрибутов, значение которых зависит от заполнения данного атрибута при автозаполнении.\nОписываются в блоке `Автозаполнение` конструктора в массиве [[blocks.properties.mapping]].\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута в ЕХД",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index].isDependent",
                    "paramType": "boolean",
                    "description": "Является ли атрибут зависимым в рамках ручного ввода",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputSources[index]",
                    "paramType": "array[integer[int32]]",
                    "description": "Массив идентификаторов атрибутов, от значения которых зависит значение данного атрибута при Автозаполнении.\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].isMultiple",
                    "paramType": "boolean",
                    "description": "Указывает, что атрибут может содержать несколько значений одновременно",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].maxCntElement",
                    "paramType": "integer",
                    "description": "Максимально допустимое количество элементов, которое возможно добавить в рамках атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].minCntElement",
                    "paramType": "integer",
                    "description": "Минимальное количество элементов, которое должно быть добавлено в атрибут",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Справочный атрибут",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary",
                    "paramType": "object",
                    "description": "Информация о справочнике в справочном атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.name",
                    "paramType": "string",
                    "description": "Наименование справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.parentId",
                    "paramType": "integer",
                    "description": "Идентификатор справочника-родителя",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionaryId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].parentDictAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор справочного атрибута, который содержит элементы более высокого уровня иерархии. При заполнении атрибута будет ограничиваться список элементов, связанных с элементом родительского справочника.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDictTechName",
                    "paramType": "string",
                    "description": "Указывает значения какого атрибута будут использоваться для сопоставления с объектом справочника при загрузке данных через сервис.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict",
                    "paramType": "object",
                    "description": "Столбец списка элементов справочников.\nДополнительный столбец справочника.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict.techName",
                    "paramType": "string[^[a-zA-Z][_a-zA-Z0-9]*$]",
                    "description": "Техническое название столбца определенного формата.\nНазвание может содержать английские буквы, цифры и символы нижнего подчеркивания _. Должно начинаться с буквы",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное название столбца",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDictTechName",
                    "paramType": "string",
                    "description": "Позволяет выбрать атрибут справочника, который будет отображаться в каталоге. По умолчанию поле \"Наименование\".",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict",
                    "paramType": "object",
                    "description": "Столбец списка элементов справочников.\nДополнительный столбец справочника.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict.techName",
                    "paramType": "string[^[a-zA-Z][_a-zA-Z0-9]*$]",
                    "description": "Техническое название столбца определенного формата.\nНазвание может содержать английские буквы, цифры и символы нижнего подчеркивания _. Должно начинаться с буквы",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное название столбца",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].sort",
                    "paramType": "string[\nasc,\ndesc\n]",
                    "description": "Техническое название порядка сортировки:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию."
                },
                {
                    "paramName": "meta",
                    "paramType": "object",
                    "description": "Метаданные каталога заполнения",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonFIO",
                    "paramType": "string",
                    "description": "ФИО ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonEmail",
                    "paramType": "string",
                    "description": "Адрес электронной почты ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonPhone",
                    "paramType": "string",
                    "description": "Телефон ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.description",
                    "paramType": "string",
                    "description": "Описание каталога",
                    "required": false
                },
                {
                    "paramName": "constructor[index]",
                    "description": "Настройки конструктора процессов. Представляет собой массив пакетов.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index]",
                    "paramType": "object",
                    "description": "Настройки конструктора процессов. Представляет собой массив пакетов.",
                    "required": false
                },
                {
                    "paramName": "constructor[index].tomlFormat",
                    "paramType": "string",
                    "description": "Настройка одного пакета конструктора процессов, описанная пользователем в формате TOML.\nПередаётся в качестве строки с экранированием символов.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat",
                    "paramType": "object",
                    "description": "Пакет конструктора процессов",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.packName",
                    "paramType": "string",
                    "description": "Название пакета",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.packTechName",
                    "paramType": "string",
                    "description": "Технологическое наименование пакета. Должно быть уникально в рамках каталога.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.isMain",
                    "paramType": "boolean",
                    "description": "Признак главного процесса. Если для каталога настраивается конструктор, то обязательно должен быть только 1 файл со значением true. С файла со свойством isMain: true начинается обработка описанного процесса.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.event",
                    "paramType": "string[\ncreate,\nchange,\ndelete\n]",
                    "description": "Событие, при котором запускается процесс, описанный в конструкторе. Может принимать значения:\n  - change - изменение объекта, включая создание\n  - create - создание объекта,\n  - delete - удаление объекта.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.applyTableAttr",
                    "paramType": "string",
                    "description": "Применить процесс пакета к объектам табличного атрибута. Указывается табличный атрибут в формате attr.{TableTechName1}.{TableTechName11}.{TableTechName111}.{и т.д.}. То есть указывается вся последовательность табличных атрибутов от корня до того, для которого настраивается пакет.\nЕсли передано данное поле, то в описании блоков могут использоваться только атрибуты внутри указанной таблицы.",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.mode",
                    "paramType": "string[\noff,\nevent,\nbackground,\neventAndBackground\n]",
                    "description": "Режим работы процесса. Может принимать значения:\n  - event - событие,\n  - backgroung - фоновый процесс,\n  - eventAndBackground - событие и фоновый процесс,\n  - off - отключён.\nЗначение off является приоритетным над остальными. Если указано в массиве, то считается, что процесс отключен и не будет выполняться.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index]",
                    "description": "Массив блоков конструктора. Каждый блок представляет набор общих свойств и дополнительных настроек в зависимости от типа блока.\nБлок \"START\" явно не указывается. Процесс начинается с блока идущего первым в массиве.\nБлок \"END\" явно не указывается, но чтобы сослаться на него необходимо указать идентификатор \"end\".\nЕсли блок не ссылается на другие блоки, например \"Уведомление\", то в ссылках указывается пустая строка \"\".",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор блока конструктора. Должен быть уникален в рамках пакета каталога.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].type",
                    "paramType": "string[\npackage,\ncondition,\nnotice,\nemail,\nautochange,\nautofill\n]",
                    "description": "Тип блока конструктора. Возможные значения:\n  - package - пакет,\n  - condition - условие,\n  - notice - уведомление,\n  - email - письмо на электронную почту,\n  - autochange - автоизменение,\n  - autofill - автозаполнение.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].name",
                    "paramType": "string",
                    "description": "Наименование блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].trueBlockTagId",
                    "paramType": "string",
                    "description": "Идентификатор блока, который должен обрабатываться следующим в случае истинности условия/корректной обработки блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].falseBlockTagId",
                    "paramType": "string",
                    "description": "Идентификатор блока, который должен обрабатываться следующим в случае ложности условия/некорректной обработки блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].properties",
                    "description": "Набор дополнительных свойств блока, зависящих от типа блока.",
                    "paramType": "Один из вариантов",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Пакет\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 constructor[index].jsonFormat.blocks[index].properties.packTechName",
                    "paramType": "string",
                    "description": "Технологическое наименование пакета, который должен выполниться в данном блоке.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Условие\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties.condition",
                    "paramType": "string",
                    "description": "Условие проверки значений атрибутов. Cинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties.uniqAttr",
                    "paramType": "string",
                    "description": "Технологическое наименование атрибута каталога, для которого будет производиться проверка уникальности в рамках исполнения блока.\nАтрибут прописывается как и в настройках условий - attr.{techName}\nМожно указать атрибуты всех типов данных, кроме типов: таблица, файл, флаг. Указывается непосредственно корневой атрибут.",
                    "required": false
                },
                {
                    "paramName": "Вариант 3 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Уведомление\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 3 constructor[index].jsonFormat.blocks[index].properties.message",
                    "paramType": "string",
                    "description": "В блоке \"notice\":\nТекст уведомления, который должен получить пользователь/система при работе с объектом каталога.",
                    "required": false
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"E-mail\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties.message",
                    "paramType": "string",
                    "description": "Текст письма, который должен быть отправлен на указанный адрес электронной почты при выполнении блока.",
                    "required": false
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties.email",
                    "paramType": "string",
                    "description": "Адрес электронной почты, на который должно быть отправлено письмо при выполнении блока.",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Автоизменение\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.condition",
                    "paramType": "string",
                    "description": "Условие при выполнении, которого будет происходит заполнение атрибутов. В условии можно использовать атрибуты любого типа, включая системные.\nCинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.markObjDelete",
                    "paramType": "boolean",
                    "description": "Позволяет после изменения значений в атрибутах пометить объект как удаленный.\nДанное свойство может быть true, только в случае, если в режиме работы пакета указан фоновый процесс event = \"background\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index]",
                    "description": "Список сопоставления атрибутов каталога и значений, которые должны подставиться в рамках выполнения автоизменения.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index].catalogAttr",
                    "paramType": "string",
                    "description": "Атрибут каталога, которому необходимо присвоить значение автоизменением.\nУказывается в формате attr.{techName}\nВозможно указать все типы атрибутов, кроме: файл, ссылка на объект, таблица.",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index].value",
                    "paramType": "string",
                    "description": "Значение, которое будет подставляться в указанный атрибут.\nДоступен ввод конкретного значения в формате строки. Если в catalogAttr указан атрибут с типом:\n- \"Строка\", \"Целое число\", \"Дробное число\", \"Дата\", то в value указывается значение в кавычках, далее на стороне сервиса эти значения будут преобразованы к типу данных атрибута.\n- \"Флаг\", то в value указывается значение в кавычках 1 или 0, true или false.\n- \"Справочник\", то в value передаётся в кавычках идентификатор значения из справочника этого атрибута.\nТакже для всех вышеперечисленных типов атрибутов можно указать в value функцию, описанную в пакете, в виде func.{tagId}",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Автозаполнение\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.refValue",
                    "paramType": "string",
                    "description": "Значение для сопоставления со справочником",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.dictId",
                    "paramType": "integer",
                    "description": "Идентификатор справочника, с которым сопоставляется значение",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.dictAttr",
                    "paramType": "string",
                    "description": "Столбец справочника, по которому производится сопоставление в формате dictAttr.{techName}",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.caseSensitive",
                    "paramType": "boolean",
                    "description": "Учитывать ли регистр значения при сопоставлении со справочником\n\nЕсли не указан, то сравнение выполняется без учета регистра",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.allowManualInput",
                    "paramType": "boolean",
                    "description": "Признак позволяющий пользователю при работе с объектам указывать значение не из справочника, для атрибута, который участвует в сопоставлении со справочным.",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index]",
                    "description": "Список сопоставления атрибутов каталога и атрибутов справочника.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index].catalogAttr",
                    "paramType": "string",
                    "description": "Атрибут каталога, которому необходимо присвоить значение автозаполнением.\nУказывается в формате attr.{techName}\nВозможно указать только атрибуты, имеющие свойство \"Изменяемый системой\" (isSystemModify: true).\nТакими атрибутами могут быть все типы атрибутов, кроме: файл, таблица.",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index].value",
                    "paramType": "string",
                    "description": "Атрибут справочника, из которого необходимо использовать значение для автозаполнения.\nУказывается в формате dictAttr.{techName}",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index]",
                    "description": "Массив функций, которые используются в рамках пакета.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор функции. Должен быть уникален в рамках пакета.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].outputType",
                    "paramType": "string[\nstring,\nnumber,\ndate\n]",
                    "description": "Выходной тип данных функции. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].func",
                    "paramType": "string",
                    "description": "Тело функции. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index]",
                    "description": "Массив функций, которые будут использоваться в основной функции в качестве переменных.\nПри описании функций важен их порядок в массиве. Функцию-переменную F1 можно использовать в другой функции-переменной F2, если F1 описана раньше чем F2.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор функции-переменной. Должен быть уникален в рамках пакета.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].outputType",
                    "paramType": "string[\nstring,\nnumber,\ndate\n]",
                    "description": "Выходной тип данных функции-переменной. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].func",
                    "paramType": "string",
                    "description": "Тело функции-переменной. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": true
                },
                {
                    "paramName": "conditionalUniq",
                    "paramType": "string",
                    "description": "Настройки условной уникальности. Передаётся строка с условием, которое описано в формате условий, используемом в конструкторе процессов.",
                    "required": false
                },
                {
                    "paramName": "groupUniq",
                    "paramType": "string",
                    "description": "Настройка групповой уникальности, описанная пользователем в формате TOML. Передаётся в качестве строки с экранированием символов.",
                    "required": false
                },
                {
                    "paramName": "map",
                    "paramType": "object",
                    "description": "Настройки карты каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "map.hasGeo",
                    "paramType": "boolean",
                    "description": "Наличие геопривязки в каталоге",
                    "required": true
                },
                {
                    "paramName": "map.typeGeoTagIds[index]",
                    "description": "Массив строковых идентификаторов типов геометрии",
                    "paramType": "array[string[\nPoint,\nMultiPoint,\nMultiLineString,\nMultiPolygon\n]]",
                    "required": false
                },
                {
                    "required": false,
                    "paramName": "map.typeGeoTagIds[index]",
                    "paramType": "string[\nPoint,\nMultiPoint,\nMultiLineString,\nMultiPolygon\n]",
                    "description": "Типы геометрии в geojson"
                },
                {
                    "paramName": "map.isWGS84",
                    "paramType": "boolean",
                    "description": "Система координат (СК), в которой хранятся геоданные объектов каталога. Если принимает значение\n  - true, то СК - WGS84\n  - false, то СК - MSK77",
                    "required": false
                },
                {
                    "paramName": "map.isReq",
                    "paramType": "boolean",
                    "description": "Обязательность геопривязки",
                    "required": false
                },
                {
                    "paramName": "map.isOneTypeGeoForObj",
                    "paramType": "boolean",
                    "description": "Признак, указывающий, что объект может иметь только один тип геометрии",
                    "required": false
                },
                {
                    "paramName": "map.isNotReqGeoForService",
                    "paramType": "boolean",
                    "description": "Необязательность геометрии при загрузке через сервис",
                    "required": false
                }
            ],
            "required": false,
            "description": ""
        },
        "inputParams": []
    },
    {
        "path": "/catalogs",
        "method": "delete",
        "methodDesc": "Метод используется для отметки удалёнными одного или нескольких каталогов.",
        "responses": {
            "200": {
                "description": "Успешный ответ",
                "schema": [
                    {
                        "paramName": "",
                        "paramType": "object",
                        "description": "Успешный ответ на запрос.",
                        "required": false
                    },
                    {
                        "paramName": "id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "code",
                        "paramType": "number[\n200\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string[\nOk\n]",
                        "description": "",
                        "required": false
                    }
                ]
            },
            "201": {
                "description": "В схеме ответов нет кода 201",
                "schema": []
            },
            "400": {
                "description": "Ошибка построения запроса или целостности переданных данных.\nОшибка может быть в параметре, заголовке или полях тела запроса.\nВ зависимости от этого текст ошибки может отличаться.\n\n### Возможные ошибки бизнес-логики:\n  - Каталог находится в процессе импорта;\n  - Один или несколько из переданных каталогов используются в конструкторе проверок других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в настройках уникальности других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в ссылочных атрибутах других каталогов заполнения;\n  - Один или несколько из переданных каталогов используются в настройках ограничения выборки каталогов публикации;\n  - На основе одиного или нескольких из переданных каталогов созданы справочники.",
                "schema": [
                    {
                        "required": false,
                        "paramName": "",
                        "paramType": "object",
                        "description": "Ошибка построения запроса или целостности переданных данных."
                    },
                    {
                        "required": false,
                        "paramName": "id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка."
                    },
                    {
                        "required": true,
                        "paramName": "code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки"
                    },
                    {
                        "required": true,
                        "paramName": "messageType",
                        "paramType": "string",
                        "description": "Тип ответа"
                    },
                    {
                        "required": true,
                        "paramName": "message",
                        "paramType": "string",
                        "description": "Текст ответа"
                    },
                    {
                        "required": false,
                        "paramName": "code",
                        "paramType": "number[\n400\n]",
                        "description": ""
                    },
                    {
                        "required": false,
                        "paramName": "messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": ""
                    }
                ]
            }
        },
        "requests": {
            "schema": [],
            "required": false,
            "description": ""
        },
        "inputParams": [
            {
                "paramName": "catalogIds",
                "paramIn": "query",
                "paramType": "array[integer]",
                "description": "Массив идентификаторов каталогов.\n\nЧисло элементов в списке от `1` до `100`.",
                "required": true
            }
        ]
    },
    {
        "path": "/catalogs/{catalogId}",
        "method": "put",
        "methodDesc": "Изменяет настройки каталога заполения.\n\nНастройки вкладок \"Общая информация\" и \"Атрибуты\" передаются всегда.\nОстальные - только при изменении настроек.\n\nЕсли при сохранении передаются настройки конструктора, условной или групповой уникальности,\nто код проверок проходит валидацию.\n\nВ случае наличия ошибок в настройках каталога возвращается одна.",
        "responses": {
            "200": {
                "description": "Успешный ответ",
                "schema": [
                    {
                        "paramName": "",
                        "paramType": "object",
                        "description": "Успешный ответ на запрос.",
                        "required": false
                    },
                    {
                        "paramName": "id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "code",
                        "paramType": "number[\n200\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "messageType",
                        "paramType": "string[\nOk\n]",
                        "description": "",
                        "required": false
                    }
                ]
            },
            "201": {
                "description": "В схеме ответов нет кода 201",
                "schema": []
            },
            "400": {
                "schema": [
                    {
                        "paramName": "",
                        "description": "",
                        "paramType": "Один из вариантов",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 ",
                        "paramType": "object",
                        "description": "Ошибка построения запроса или целостности переданных данных.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 1 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 1 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 ",
                        "paramType": "object",
                        "description": "Ошибка уникальности значений поля.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны быть уникальными.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 2 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 2 .messageType",
                        "paramType": "string[\nUnique value error\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 ",
                        "paramType": "object",
                        "description": "Переданное значение параметра, заголовка или поля не соответствует формату.\n\nВ тексте ошибки перечисляются названия полей, значения которых должны соответствовать определенному формату.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.\n\nВозможные варианты возникновения ошибки:\n  - Строковое значение должно удовлетворять маске или регулярному выражению.\n  - Строковое значение должно быть определенной длины.\n  - Массив должен включать определенное число элементов.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 3 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 3 .messageType",
                        "paramType": "string[\nParameter format error,\nHeader format error,\nRequest body field format error\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 ",
                        "paramType": "object",
                        "description": "Ошибка отсутствия обязательных параметров, заголовков или полей в запросе.\n\nВ тексте ошибки перечисляются названия обязательных параметров, заголовков или полей запроса.\nНазвание поля включает названия всех родительских объектов, если поле с ошибкой находится во вложенном объекте.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .id",
                        "paramType": "integer[int32]",
                        "description": "Идентифкатор ресурса, для которого передан ответ\n\nВозможные варианты использования:\n  - Идентификатор созданного ресурса в POST-запросе;\n  - Идентификатор ресурса, для которого возвращена ошибка.",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .code",
                        "paramType": "integer[int32]",
                        "description": "HTTP-код ошибки",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string",
                        "description": "Тип ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .message",
                        "paramType": "string",
                        "description": "Текст ответа",
                        "required": true
                    },
                    {
                        "paramName": "Вариант 4 .code",
                        "paramType": "number[\n400\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string[\nBad request\n]",
                        "description": "",
                        "required": false
                    },
                    {
                        "paramName": "Вариант 4 .messageType",
                        "paramType": "string[\nMissing parameter,\nMissing header,\nMissing request body fields\n]",
                        "description": "",
                        "required": false
                    }
                ],
                "description": "### Ошибки бизнес-логики при создании и изменении каталога:\n  - Неуникальная комбинация полного и технологического наименования каталога;\n  - Не заполнен период фоновой проверки;\n  - Email ответственного не прошел проверку на соответствие регулярному выражению;\n  - Список атрибутов каталога содержит неуникальные techName атрибутов;\n  - Свойство \"Главный атрибут\" присвоено более чем 1 атрибуту или вложенному атрибуту;\n  - Минимальное кол-во элементов множественного атрибута больше максимального кол-ва элементов;\n  - Множественный атрибут имеет свойство \"Обязательный\", но минимальное кол-во элементов равно 0;\n  - Некорректный parentDictAttrId;\n  - Некорректно указано свойство isUniqWithinParent.\n  - Настройки конструктора не прошли проверку валидации;\n  - Условие условной уникальности не прошло проверку валидации;\n  - Настройки групповой уникальности не прошли проверку валидации;\n  - Не заполнены обязательные поля при наличии геопривязки;\n  - Типы геометрии Точка и Мультиточка не могут быть выбраны одновременно;\n  - Признак isNotReqGeoForService может принимать значение true, только при обязательности геопривязки.\n\n### Ошибки бизнес-логики при ИЗМЕНЕНИИ каталога:\n  - Каталог находится в процессе подписания;\n  - Попытка удалить атрибут каталога, который используется в справочнике, синхронизированном с каталогом;\n  - Каталог находится в процессе импорта;\n  - Для каталога запущен процесс удаления всех объектов;"
            }
        },
        "requests": {
            "schema": [
                {
                    "paramName": "",
                    "paramType": "object",
                    "description": "Настройки каталога заполнения",
                    "required": false
                },
                {
                    "paramName": "generalInfo",
                    "paramType": "object",
                    "description": "Общая информация каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "generalInfo.id",
                    "paramType": "integer",
                    "description": "Идентификатор каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.fullName",
                    "paramType": "string",
                    "description": "Полное наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.technicalName",
                    "paramType": "string",
                    "description": "Технологическое наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.shortName",
                    "paramType": "string",
                    "description": "Краткое наименование каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.kindCatalog",
                    "paramType": "object",
                    "description": "Вид каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.kindCatalog.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор вида каталога",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.kindCatalog.name",
                    "paramType": "string",
                    "description": "Название вида каталога"
                },
                {
                    "paramName": "generalInfo.kindCatalogId",
                    "paramType": "integer",
                    "description": "Идентификатор вида каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.typeCatalog",
                    "paramType": "object",
                    "description": "Тип каталога",
                    "required": true
                },
                {
                    "paramName": "generalInfo.typeCatalog.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа каталога",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.typeCatalog.name",
                    "paramType": "string",
                    "description": "Название типа каталога"
                },
                {
                    "paramName": "generalInfo.typeCatalogId",
                    "paramType": "integer",
                    "description": "Идентификатор типа каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.thematicCategory",
                    "paramType": "object",
                    "description": "Общая информация о тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategory.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategory.name",
                    "paramType": "string",
                    "description": "Русскоязычное наименование тематической категории",
                    "required": true
                },
                {
                    "paramName": "generalInfo.thematicCategoryId",
                    "paramType": "integer",
                    "description": "Идентификатор тематической категории каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.objectCategories[index]",
                    "description": "Категории объекта",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index]",
                    "paramType": "object",
                    "description": "Категории объекта",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор категории объектов",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование категории объектов, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "generalInfo.objectCategories[index].enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование категории объектов",
                    "required": false
                },
                {
                    "paramName": "generalInfo.oivs[index]",
                    "description": "Поставщики информации каталога (ответственные ОИВы)",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index]",
                    "paramType": "object",
                    "description": "Поставщики информации каталога (ответственные ОИВы)",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов поставщиков информации каталога (ответственные ОИВы)",
                    "required": false
                },
                {
                    "paramName": "generalInfo.accountingObject",
                    "paramType": "string",
                    "description": "Объект учёта",
                    "required": false
                },
                {
                    "paramName": "generalInfo.keywords",
                    "paramType": "string",
                    "description": "Ключевые слова",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index]",
                    "description": "Системы потребители данных каталога",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index]",
                    "paramType": "object",
                    "description": "Системы потребители данных каталога",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsConsumers[index].name",
                    "paramType": "string",
                    "description": "Название информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsConsumersIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов систем потребителей данных",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isShowDeleteObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Показывать удалённые объекты\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.periodUpdate",
                    "paramType": "object",
                    "description": "Периодичность обновления каталога заполнения",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly,\nminutely,\nhourly,\nnumDays,\ncalendarDays,\nmultiple,\nwithChanges,\nrealTime\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "paramName": "generalInfo.periodUpdate.numDays",
                    "paramType": "integer",
                    "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.calendarDays[index]",
                    "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.calendarDays[index].day",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "День месяца в формате DD.MM",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.isCheckLastDay",
                    "paramType": "boolean",
                    "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index]",
                    "description": "Настройки периодичности обновления \"Множественная периодичность\". Обязателен, если tagId = multiple.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.multiple[index].tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly,\nminutely,\nhourly,\nnumDays,\ncalendarDays,\nmultiple,\nwithChanges,\nrealTime\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "required": true,
                    "paramName": "generalInfo.periodUpdate.multiple[index].name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].dateStart",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "Дата начала действия указанной периодичности. Используется формат DD.MM",
                    "required": true
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].numDays",
                    "paramType": "integer",
                    "description": "Настройки периодичности обновления \"Настраиваемая (произвольный срок)\". Обязателен, если tagId = numDays.",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].calendarDays[index]",
                    "description": "Настройки периодичности обновления \"Настраиваемая (Календарные дни)\". Обязателен, если tagId = calendarDays.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].calendarDays[index].day",
                    "paramType": "string[^(0[1-9]|[1-2]\\d|3[0-1])\\.(0[1-9]|1[0-2])$]",
                    "description": "День месяца в формате DD.MM",
                    "required": false
                },
                {
                    "paramName": "generalInfo.periodUpdate.multiple[index].isCheckLastDay",
                    "paramType": "boolean",
                    "description": "Дополнительное свойство для периодичности обновления \"Ежемесячно\" - \"Обновлять не позднее последнего дня следующего месяца за месяцем последнего подписания\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index]",
                    "description": "Системы-поставщики данных в каталог заполнения",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index]",
                    "paramType": "object",
                    "description": "Системы-поставщики данных в каталог заполнения",
                    "required": false
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsSuppliers[index].name",
                    "paramType": "string",
                    "description": "Название информационной системы",
                    "required": true
                },
                {
                    "paramName": "generalInfo.systemsSuppliersIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов систем поставщиков данных",
                    "required": false
                },
                {
                    "paramName": "generalInfo.hasBackgroundCheck",
                    "paramType": "boolean",
                    "description": "Признак наличия в каталоге периодической фоновой проверки",
                    "required": true
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriodTagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "paramName": "generalInfo.backgroundCheckPeriod",
                    "paramType": "object",
                    "description": "Период фоновой проверки в каталоге",
                    "required": false
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriod.name",
                    "paramType": "string",
                    "description": "Название периодичности обновления каталога"
                },
                {
                    "required": false,
                    "paramName": "generalInfo.backgroundCheckPeriod.tagId",
                    "paramType": "string[\ndaily,\nweekly,\nmonthly,\nquarterly,\nyearly\n]",
                    "description": "Техническое название периодичности обновления"
                },
                {
                    "paramName": "generalInfo.backgroundCheckEmails",
                    "paramType": "string",
                    "description": "Список электронных почт получателей результатов фоновой проверки, перечисленные через запятую БЕЗ пробела",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isDeleteAllObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Возможно одновременное удаление всех объектов\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isPriorityProcess",
                    "paramType": "boolean",
                    "description": "Признак \"Установить приоритет подписания данных\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index]",
                    "description": "Поставщики информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index]",
                    "paramType": "object",
                    "description": "Поставщики информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsBlockEditObjectsGUI[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "generalInfo.outOivsIdsBlockEditObjectsGUI[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов поставщиков информации, которым остаётся доступным редактирование содержания каталога при отмеченном свойстве \"Заблокировать редактирование данных (веб)\"",
                    "required": false
                },
                {
                    "paramName": "generalInfo.isBlockEditObjectsService",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать подписание данных (сервис)\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockRestoreObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать восстановление данных\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockSignObjectsGUI",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать подписание данных (веб)\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isCopyObjects",
                    "paramType": "boolean",
                    "description": "Признак \"Возможно копирование объектов\"",
                    "required": true
                },
                {
                    "paramName": "generalInfo.isBlockEditObjectsGUI",
                    "paramType": "boolean",
                    "description": "Признак \"Заблокировать редактирование данных (веб)\"",
                    "required": true
                },
                {
                    "paramName": "attributes[index]",
                    "description": "Настройки вкладки \"Атрибуты\" каталога заполнения",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "attributes[index]",
                    "description": "Атрибут каталога заполнения",
                    "paramType": "Один из вариантов",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index]",
                    "paramType": "object",
                    "description": "Строковый атрибут каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Атрибут.\n\nСхема включает общие для всех типов атрибутов поля.",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута ЕХД",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].catalogAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута каталога",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].selectedAlterNameId",
                    "paramType": "integer",
                    "description": "Идентификатор выбранного альтернативного наименования атрибута в каталоге",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].order",
                    "paramType": "integer",
                    "description": "Порядковый номер атрибута в каталоге",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isMain",
                    "paramType": "boolean",
                    "description": "Свойство, что атрибут считается главным при связывании с другими каталогами",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isReq",
                    "paramType": "boolean",
                    "description": "Свойство обязательности атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isUniq",
                    "paramType": "boolean",
                    "description": "Свойство уникальности значения атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isUniqWithinParent",
                    "paramType": "boolean",
                    "description": "Признак, что уникальность значений атрибутов внутри табличного атрибута будет проверятся в рамках объекта-родителя.",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isBanEdit",
                    "paramType": "boolean",
                    "description": "Свойство запрета на редактирование",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isSystemModify",
                    "paramType": "boolean",
                    "description": "Свойство, что значение атрибута изменяется системой",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 1 attributes[index].objOperatingMode",
                    "paramType": "string[\ncreateObj,\nupdateObj,\ndeleteObj\n]",
                    "description": "Режим работы с объектом, при котором доступно изменение значений атрибута:\n  - `createObj` - только при создании,\n  - `updateObj` - при редактировании (в т.ч. создании),\n  - `deleteObj` - при удалении."
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index]",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index]",
                    "paramType": "object",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].isManualInput",
                    "paramType": "boolean",
                    "description": "Настроено ли на этот атрибут заполнение значениями не из справочника (ручной ввод) в блоках Автозаполнения конструктора",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index]",
                    "description": "Массив атрибутов, значение которых зависит от заполнения данного атрибута при автозаполнении.\nОписываются в блоке `Автозаполнение` конструктора в массиве [[blocks.properties.mapping]].\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута в ЕХД",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputTargets[index].isDependent",
                    "paramType": "boolean",
                    "description": "Является ли атрибут зависимым в рамках ручного ввода",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].manualInputSources[index]",
                    "paramType": "array[integer[int32]]",
                    "description": "Массив идентификаторов атрибутов, от значения которых зависит значение данного атрибута при Автозаполнении.\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].defaultValue",
                    "paramType": "string",
                    "description": "Значение атрибута по умолчанию",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldMask",
                    "paramType": "string",
                    "description": "Маска ввода, которой должно соответствовать значение атрибута. Обозначения:\n  - X - любые буквы,\n  - 0 - любые цифры.",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndexId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор поискового индекса, которому должно соответствовать значение атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex",
                    "paramType": "object",
                    "description": "Общая информация о поисковом индексе в списке поисковых индексов",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор поискового индекса",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].searchIndex.name",
                    "paramType": "string",
                    "description": "Наименование поискового индекса",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegexId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор регулярного выражения, которому должно соответствовать значение атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex",
                    "paramType": "object",
                    "description": "Общая информация регулярного выражения",
                    "required": false
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор регулярного выражения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.name",
                    "paramType": "string",
                    "description": "Название регулярного выражения",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].fieldRegex.value",
                    "paramType": "string",
                    "description": "Регулярное выражение",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 attributes[index].maxLength",
                    "paramType": "integer",
                    "description": "Максимальная длина строкового значения",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index]",
                    "paramType": "object",
                    "description": "Справочный атрибут каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Атрибут.\n\nСхема включает общие для всех типов атрибутов поля.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута ЕХД",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].catalogAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута каталога",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].selectedAlterNameId",
                    "paramType": "integer",
                    "description": "Идентификатор выбранного альтернативного наименования атрибута в каталоге",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].order",
                    "paramType": "integer",
                    "description": "Порядковый номер атрибута в каталоге",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isMain",
                    "paramType": "boolean",
                    "description": "Свойство, что атрибут считается главным при связывании с другими каталогами",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isReq",
                    "paramType": "boolean",
                    "description": "Свойство обязательности атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isUniq",
                    "paramType": "boolean",
                    "description": "Свойство уникальности значения атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isUniqWithinParent",
                    "paramType": "boolean",
                    "description": "Признак, что уникальность значений атрибутов внутри табличного атрибута будет проверятся в рамках объекта-родителя.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isBanEdit",
                    "paramType": "boolean",
                    "description": "Свойство запрета на редактирование",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isSystemModify",
                    "paramType": "boolean",
                    "description": "Свойство, что значение атрибута изменяется системой",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].objOperatingMode",
                    "paramType": "string[\ncreateObj,\nupdateObj,\ndeleteObj\n]",
                    "description": "Режим работы с объектом, при котором доступно изменение значений атрибута:\n  - `createObj` - только при создании,\n  - `updateObj` - при редактировании (в т.ч. создании),\n  - `deleteObj` - при удалении."
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index]",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index]",
                    "paramType": "object",
                    "description": "Список ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivs[index].name",
                    "paramType": "string",
                    "description": "Наименование ОИВа",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].oivsIds[index]",
                    "paramType": "array[integer]",
                    "description": "Список идентификаторов ОИВ, ответственных за значение, содержащееся в атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].isManualInput",
                    "paramType": "boolean",
                    "description": "Настроено ли на этот атрибут заполнение значениями не из справочника (ручной ввод) в блоках Автозаполнения конструктора",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index]",
                    "description": "Массив атрибутов, значение которых зависит от заполнения данного атрибута при автозаполнении.\nОписываются в блоке `Автозаполнение` конструктора в массиве [[blocks.properties.mapping]].\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index].attrId",
                    "paramType": "integer",
                    "description": "Идентификатор атрибута в ЕХД",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputTargets[index].isDependent",
                    "paramType": "boolean",
                    "description": "Является ли атрибут зависимым в рамках ручного ввода",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].manualInputSources[index]",
                    "paramType": "array[integer[int32]]",
                    "description": "Массив идентификаторов атрибутов, от значения которых зависит значение данного атрибута при Автозаполнении.\n\nПоле обязательное. Если атрибутов нет, то возвращается пустой массив.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].isMultiple",
                    "paramType": "boolean",
                    "description": "Указывает, что атрибут может содержать несколько значений одновременно",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].maxCntElement",
                    "paramType": "integer",
                    "description": "Максимально допустимое количество элементов, которое возможно добавить в рамках атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].minCntElement",
                    "paramType": "integer",
                    "description": "Минимальное количество элементов, которое должно быть добавлено в атрибут",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute",
                    "paramType": "object",
                    "description": "Справочный атрибут",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.techName",
                    "paramType": "string",
                    "description": "Техническое наименование атрибута, не может иметь значение \"id\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное наименование атрибута, должно быть уникальным",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.enName",
                    "paramType": "string",
                    "description": "Англоязычное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.description",
                    "paramType": "string",
                    "description": "Описание атрибута",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type",
                    "paramType": "object",
                    "description": "Тип атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.type.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор типа атрибута",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.name",
                    "paramType": "string",
                    "description": "Наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.type.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].attribute.typeTag",
                    "paramType": "string[\nSTRING,\nNUMBER,\nDATE,\nDICTIONARY,\nCATALOG,\nFLAG,\nFILE,\nLINK\n]",
                    "description": "Техническое наименование типа атрибута"
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "description": "Альтернативные названия атрибута",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index]",
                    "paramType": "object",
                    "description": "Альтернативные названия атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор альтернативного наименования\n\nЕсли он передается в методе PUT, альтернативное наименование атрибута будет изменено в БД. Иначе - создается новое альтернативное название.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].rusAlterName",
                    "paramType": "string",
                    "description": "Русскоязычное альтернативное наименование атрибута\n\n_Должно быть уникальным для каждого атрибута_",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.alterNames[index].enAlterName",
                    "paramType": "string",
                    "description": "Англоязычное альтернативное наименование атрибута",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary",
                    "paramType": "object",
                    "description": "Информация о справочнике в справочном атрибуте",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.id",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.name",
                    "paramType": "string",
                    "description": "Наименование справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionary.parentId",
                    "paramType": "integer",
                    "description": "Идентификатор справочника-родителя",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].attribute.dictionaryId",
                    "paramType": "integer[int32]",
                    "description": "Идентификатор справочника",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].parentDictAttrId",
                    "paramType": "integer",
                    "description": "Идентификатор справочного атрибута, который содержит элементы более высокого уровня иерархии. При заполнении атрибута будет ограничиваться список элементов, связанных с элементом родительского справочника.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDictTechName",
                    "paramType": "string",
                    "description": "Указывает значения какого атрибута будут использоваться для сопоставления с объектом справочника при загрузке данных через сервис.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict",
                    "paramType": "object",
                    "description": "Столбец списка элементов справочников.\nДополнительный столбец справочника.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict.techName",
                    "paramType": "string[^[a-zA-Z][_a-zA-Z0-9]*$]",
                    "description": "Техническое название столбца определенного формата.\nНазвание может содержать английские буквы, цифры и символы нижнего подчеркивания _. Должно начинаться с буквы",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].refColDict.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное название столбца",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDictTechName",
                    "paramType": "string",
                    "description": "Позволяет выбрать атрибут справочника, который будет отображаться в каталоге. По умолчанию поле \"Наименование\".",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict",
                    "paramType": "object",
                    "description": "Столбец списка элементов справочников.\nДополнительный столбец справочника.",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict.techName",
                    "paramType": "string[^[a-zA-Z][_a-zA-Z0-9]*$]",
                    "description": "Техническое название столбца определенного формата.\nНазвание может содержать английские буквы, цифры и символы нижнего подчеркивания _. Должно начинаться с буквы",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 attributes[index].defaultColDict.rusName",
                    "paramType": "string",
                    "description": "Русскоязычное название столбца",
                    "required": true
                },
                {
                    "required": true,
                    "paramName": "Вариант 2 attributes[index].sort",
                    "paramType": "string[\nasc,\ndesc\n]",
                    "description": "Техническое название порядка сортировки:\n  - `asc` - по возрастанию;\n  - `desc` - по убыванию."
                },
                {
                    "paramName": "meta",
                    "paramType": "object",
                    "description": "Метаданные каталога заполнения",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonFIO",
                    "paramType": "string",
                    "description": "ФИО ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonEmail",
                    "paramType": "string",
                    "description": "Адрес электронной почты ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.respPersonPhone",
                    "paramType": "string",
                    "description": "Телефон ответственного за каталог",
                    "required": false
                },
                {
                    "paramName": "meta.description",
                    "paramType": "string",
                    "description": "Описание каталога",
                    "required": false
                },
                {
                    "paramName": "constructor[index]",
                    "description": "Настройки конструктора процессов. Представляет собой массив пакетов.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index]",
                    "paramType": "object",
                    "description": "Настройки конструктора процессов. Представляет собой массив пакетов.",
                    "required": false
                },
                {
                    "paramName": "constructor[index].tomlFormat",
                    "paramType": "string",
                    "description": "Настройка одного пакета конструктора процессов, описанная пользователем в формате TOML.\nПередаётся в качестве строки с экранированием символов.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat",
                    "paramType": "object",
                    "description": "Пакет конструктора процессов",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.packName",
                    "paramType": "string",
                    "description": "Название пакета",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.packTechName",
                    "paramType": "string",
                    "description": "Технологическое наименование пакета. Должно быть уникально в рамках каталога.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.isMain",
                    "paramType": "boolean",
                    "description": "Признак главного процесса. Если для каталога настраивается конструктор, то обязательно должен быть только 1 файл со значением true. С файла со свойством isMain: true начинается обработка описанного процесса.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.event",
                    "paramType": "string[\ncreate,\nchange,\ndelete\n]",
                    "description": "Событие, при котором запускается процесс, описанный в конструкторе. Может принимать значения:\n  - change - изменение объекта, включая создание\n  - create - создание объекта,\n  - delete - удаление объекта.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.applyTableAttr",
                    "paramType": "string",
                    "description": "Применить процесс пакета к объектам табличного атрибута. Указывается табличный атрибут в формате attr.{TableTechName1}.{TableTechName11}.{TableTechName111}.{и т.д.}. То есть указывается вся последовательность табличных атрибутов от корня до того, для которого настраивается пакет.\nЕсли передано данное поле, то в описании блоков могут использоваться только атрибуты внутри указанной таблицы.",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.mode",
                    "paramType": "string[\noff,\nevent,\nbackground,\neventAndBackground\n]",
                    "description": "Режим работы процесса. Может принимать значения:\n  - event - событие,\n  - backgroung - фоновый процесс,\n  - eventAndBackground - событие и фоновый процесс,\n  - off - отключён.\nЗначение off является приоритетным над остальными. Если указано в массиве, то считается, что процесс отключен и не будет выполняться.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index]",
                    "description": "Массив блоков конструктора. Каждый блок представляет набор общих свойств и дополнительных настроек в зависимости от типа блока.\nБлок \"START\" явно не указывается. Процесс начинается с блока идущего первым в массиве.\nБлок \"END\" явно не указывается, но чтобы сослаться на него необходимо указать идентификатор \"end\".\nЕсли блок не ссылается на другие блоки, например \"Уведомление\", то в ссылках указывается пустая строка \"\".",
                    "paramType": "array[object]",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор блока конструктора. Должен быть уникален в рамках пакета каталога.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].type",
                    "paramType": "string[\npackage,\ncondition,\nnotice,\nemail,\nautochange,\nautofill\n]",
                    "description": "Тип блока конструктора. Возможные значения:\n  - package - пакет,\n  - condition - условие,\n  - notice - уведомление,\n  - email - письмо на электронную почту,\n  - autochange - автоизменение,\n  - autofill - автозаполнение.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].name",
                    "paramType": "string",
                    "description": "Наименование блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].trueBlockTagId",
                    "paramType": "string",
                    "description": "Идентификатор блока, который должен обрабатываться следующим в случае истинности условия/корректной обработки блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].falseBlockTagId",
                    "paramType": "string",
                    "description": "Идентификатор блока, который должен обрабатываться следующим в случае ложности условия/некорректной обработки блока.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.blocks[index].properties",
                    "description": "Набор дополнительных свойств блока, зависящих от типа блока.",
                    "paramType": "Один из вариантов",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Пакет\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 1 constructor[index].jsonFormat.blocks[index].properties.packTechName",
                    "paramType": "string",
                    "description": "Технологическое наименование пакета, который должен выполниться в данном блоке.",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Условие\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties.condition",
                    "paramType": "string",
                    "description": "Условие проверки значений атрибутов. Cинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 2 constructor[index].jsonFormat.blocks[index].properties.uniqAttr",
                    "paramType": "string",
                    "description": "Технологическое наименование атрибута каталога, для которого будет производиться проверка уникальности в рамках исполнения блока.\nАтрибут прописывается как и в настройках условий - attr.{techName}\nМожно указать атрибуты всех типов данных, кроме типов: таблица, файл, флаг. Указывается непосредственно корневой атрибут.",
                    "required": false
                },
                {
                    "paramName": "Вариант 3 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Уведомление\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 3 constructor[index].jsonFormat.blocks[index].properties.message",
                    "paramType": "string",
                    "description": "В блоке \"notice\":\nТекст уведомления, который должен получить пользователь/система при работе с объектом каталога.",
                    "required": false
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"E-mail\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties.message",
                    "paramType": "string",
                    "description": "Текст письма, который должен быть отправлен на указанный адрес электронной почты при выполнении блока.",
                    "required": false
                },
                {
                    "paramName": "Вариант 4 constructor[index].jsonFormat.blocks[index].properties.email",
                    "paramType": "string",
                    "description": "Адрес электронной почты, на который должно быть отправлено письмо при выполнении блока.",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Автоизменение\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.condition",
                    "paramType": "string",
                    "description": "Условие при выполнении, которого будет происходит заполнение атрибутов. В условии можно использовать атрибуты любого типа, включая системные.\nCинтаксис условий подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.markObjDelete",
                    "paramType": "boolean",
                    "description": "Позволяет после изменения значений в атрибутах пометить объект как удаленный.\nДанное свойство может быть true, только в случае, если в режиме работы пакета указан фоновый процесс event = \"background\".",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index]",
                    "description": "Список сопоставления атрибутов каталога и значений, которые должны подставиться в рамках выполнения автоизменения.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index].catalogAttr",
                    "paramType": "string",
                    "description": "Атрибут каталога, которому необходимо присвоить значение автоизменением.\nУказывается в формате attr.{techName}\nВозможно указать все типы атрибутов, кроме: файл, ссылка на объект, таблица.",
                    "required": false
                },
                {
                    "paramName": "Вариант 5 constructor[index].jsonFormat.blocks[index].properties.mapping[index].value",
                    "paramType": "string",
                    "description": "Значение, которое будет подставляться в указанный атрибут.\nДоступен ввод конкретного значения в формате строки. Если в catalogAttr указан атрибут с типом:\n- \"Строка\", \"Целое число\", \"Дробное число\", \"Дата\", то в value указывается значение в кавычках, далее на стороне сервиса эти значения будут преобразованы к типу данных атрибута.\n- \"Флаг\", то в value указывается значение в кавычках 1 или 0, true или false.\n- \"Справочник\", то в value передаётся в кавычках идентификатор значения из справочника этого атрибута.\nТакже для всех вышеперечисленных типов атрибутов можно указать в value функцию, описанную в пакете, в виде func.{tagId}",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties",
                    "paramType": "object",
                    "description": "Настройки для блока \"Автозаполнение\"",
                    "required": true
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.refValue",
                    "paramType": "string",
                    "description": "Значение для сопоставления со справочником",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.dictId",
                    "paramType": "integer",
                    "description": "Идентификатор справочника, с которым сопоставляется значение",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.dictAttr",
                    "paramType": "string",
                    "description": "Столбец справочника, по которому производится сопоставление в формате dictAttr.{techName}",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.caseSensitive",
                    "paramType": "boolean",
                    "description": "Учитывать ли регистр значения при сопоставлении со справочником\n\nЕсли не указан, то сравнение выполняется без учета регистра",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.allowManualInput",
                    "paramType": "boolean",
                    "description": "Признак позволяющий пользователю при работе с объектам указывать значение не из справочника, для атрибута, который участвует в сопоставлении со справочным.",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index]",
                    "description": "Список сопоставления атрибутов каталога и атрибутов справочника.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index].catalogAttr",
                    "paramType": "string",
                    "description": "Атрибут каталога, которому необходимо присвоить значение автозаполнением.\nУказывается в формате attr.{techName}\nВозможно указать только атрибуты, имеющие свойство \"Изменяемый системой\" (isSystemModify: true).\nТакими атрибутами могут быть все типы атрибутов, кроме: файл, таблица.",
                    "required": false
                },
                {
                    "paramName": "Вариант 6 constructor[index].jsonFormat.blocks[index].properties.mapping[index].value",
                    "paramType": "string",
                    "description": "Атрибут справочника, из которого необходимо использовать значение для автозаполнения.\nУказывается в формате dictAttr.{techName}",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index]",
                    "description": "Массив функций, которые используются в рамках пакета.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор функции. Должен быть уникален в рамках пакета.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].outputType",
                    "paramType": "string[\nstring,\nnumber,\ndate\n]",
                    "description": "Выходной тип данных функции. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].func",
                    "paramType": "string",
                    "description": "Тело функции. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index]",
                    "description": "Массив функций, которые будут использоваться в основной функции в качестве переменных.\nПри описании функций важен их порядок в массиве. Функцию-переменную F1 можно использовать в другой функции-переменной F2, если F1 описана раньше чем F2.",
                    "paramType": "array[object]",
                    "required": false
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].tagId",
                    "paramType": "string",
                    "description": "Строковый идентификатор функции-переменной. Должен быть уникален в рамках пакета.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].outputType",
                    "paramType": "string[\nstring,\nnumber,\ndate\n]",
                    "description": "Выходной тип данных функции-переменной. Может принимать значения:\n  - string - строка,\n  - number - целое или дробное число,\n  - date - дата.",
                    "required": true
                },
                {
                    "paramName": "constructor[index].jsonFormat.functions[index].varables[index].func",
                    "paramType": "string",
                    "description": "Тело функции-переменной. Cинтаксис описания функций подробно описан в статье в вики в разделе \"Конструктор процессов\".",
                    "required": true
                },
                {
                    "paramName": "conditionalUniq",
                    "paramType": "string",
                    "description": "Настройки условной уникальности. Передаётся строка с условием, которое описано в формате условий, используемом в конструкторе процессов.",
                    "required": false
                },
                {
                    "paramName": "groupUniq",
                    "paramType": "string",
                    "description": "Настройка групповой уникальности, описанная пользователем в формате TOML. Передаётся в качестве строки с экранированием символов.",
                    "required": false
                },
                {
                    "paramName": "map",
                    "paramType": "object",
                    "description": "Настройки карты каталога заполнения",
                    "required": true
                },
                {
                    "paramName": "map.hasGeo",
                    "paramType": "boolean",
                    "description": "Наличие геопривязки в каталоге",
                    "required": true
                },
                {
                    "paramName": "map.typeGeoTagIds[index]",
                    "description": "Массив строковых идентификаторов типов геометрии",
                    "paramType": "array[string[\nPoint,\nMultiPoint,\nMultiLineString,\nMultiPolygon\n]]",
                    "required": false
                },
                {
                    "required": false,
                    "paramName": "map.typeGeoTagIds[index]",
                    "paramType": "string[\nPoint,\nMultiPoint,\nMultiLineString,\nMultiPolygon\n]",
                    "description": "Типы геометрии в geojson"
                },
                {
                    "paramName": "map.isWGS84",
                    "paramType": "boolean",
                    "description": "Система координат (СК), в которой хранятся геоданные объектов каталога. Если принимает значение\n  - true, то СК - WGS84\n  - false, то СК - MSK77",
                    "required": false
                },
                {
                    "paramName": "map.isReq",
                    "paramType": "boolean",
                    "description": "Обязательность геопривязки",
                    "required": false
                },
                {
                    "paramName": "map.isOneTypeGeoForObj",
                    "paramType": "boolean",
                    "description": "Признак, указывающий, что объект может иметь только один тип геометрии",
                    "required": false
                },
                {
                    "paramName": "map.isNotReqGeoForService",
                    "paramType": "boolean",
                    "description": "Необязательность геометрии при загрузке через сервис",
                    "required": false
                }
            ],
            "required": false,
            "description": ""
        },
        "inputParams": [
            {
                "paramName": "catalogId",
                "paramIn": "path",
                "paramType": "integer",
                "description": "Идентификатор сборного каталога.",
                "required": true
            }
        ]
    }
] as const

export const mockOutputParam = MockOutputMini.at(0)?.inputParams