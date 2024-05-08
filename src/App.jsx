import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Titulo from './components/Titulo'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'
import { useState, useEffect } from 'react'

function App() {
  const arrayCategorias = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics"
  ];
  const [noticias, setNoticias] = useState([]);
  let datos = '';
  useEffect(() => {
   consultarAPI()
  }, [])

  const consultarAPI = async(categoria) => {
      // const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_43558d152d5e2b359b4f33f42ea4a4f266063&category={categotia}`)

      const respuesta = await fetch('https://newsdata.io/api/1/news?apikey=pub_43558d152d5e2b359b4f33f42ea4a4f266063&category=' + categoria);
      datos = await respuesta.json();

      if(respuesta.status < 400){
        setNoticias(datos.articles)
        console.log(datos)


      }
  }


  return (
    <>
      <Titulo/>
      <Formulario consultarAPI={consultarAPI} arrayCategorias={arrayCategorias}/>
      <ListaNoticias noticias={noticias}/>

    </>
  )
}

export default App
