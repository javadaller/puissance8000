import React from 'react'
import ReactDOM from 'react-dom/client'

import './sass/style.scss'

import { init } from './ts/init'

import  Header  from './components/header/header'
import  Main  from './components/main/main'
import  Footer  from './components/footer/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)

init()