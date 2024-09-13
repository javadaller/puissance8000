import React from 'react'
import ReactDOM from 'react-dom/client'

import './sass/style.scss'

import  Header  from './components/header/header'
import  Home  from './components/home/home'
import  Footer  from './components/footer/footer'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)