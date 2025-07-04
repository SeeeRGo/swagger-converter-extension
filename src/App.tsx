import './App.css'
import { UploadSwagger } from './components/upload-swagger.js';
// import { ConvertOnline } from './components/convert-online.js'; // @ts-ignore
import imgUrl from './assets/github-mark.png'

const strings = {
  title: "Конвертер JSON/YAML в DOCX"
}
function App() {
  return (
    <div className="w-[350px] flex flex-col gap-1">
      <p className='text-lg'>{strings.title}</p>
      <UploadSwagger />
      {/* <ConvertOnline /> */}
      <div className='flex flex-row justify-between'>
      <a href="https://pay.cloudtips.ru/p/6b58eceb" target="_blank">Поддержать рублём</a>
      <a className="size-[24px]" href="https://github.com/SeeeRGo/swagger-converter-extension" target="_blank">
        <img src={imgUrl} width={24} height={24} />
      </a>
      </div>
    </div>
  )
}

export default App
