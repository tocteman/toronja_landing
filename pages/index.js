import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Eclipse from "./components/eclipse"
import Raja from "./components/raja"
import Lynx from './components/lynx'
import Bienal from './components/bienal'
import ElTiempo from './components/eltiempo'
import BgMagazine from './components/bgmagazine'
import Ubank from './components/ubank'
import Airpals from './components/airpals'
import Dynamic from 'next/dynamic'
import Sabroso from './components/sabroso'
import Feriado from './components/feriado'
import Vrooms from './components/vrooms'
import UCuenca from './components/ucuenca'

 
export default function Home() {
  const [reveal, setReveal] = useState("")
  
  const showGreeting = () => {
    const time = new Date().getHours()
    if (time >= 5 && time < 12){
      return `Buenos días.`
    } else if (time >= 12 && time < 19) {
       return "Buenas tardes."
    } else {
      return "Buenas noches."  
    }
  }

    return (
    <>
    <Head>
    <title>Toronja</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen bg-yellow-100 w-full md:py-8 text-lg font-sans">
      <div className="py-8 mx-auto max-w-3xl border-white border-2 rounded-lg bg-white">
        <div className="flex w-full justify-end pl-16">
          <div></div>
          <div className="-mr-1">
            <img src="/images/hojasIlustradas.png" alt=""/>
          </div>
        </div>
        <div className="font-display text-5xl italic font-extrabold pl-8 md:pl-16">toronja</div>
        <div className="leading-normal mt-4 max-w-2xl px-8 md:px-16">
        La toronja es más amarga que la naranja, pero tiene hasta seis veces más vitamina C. ¿Pero es competencia? No puede ser competencia. <em>Claro</em> que es competencia, es por eso que usted está aquí. {showGreeting()} Un gusto. Soy Juan Francisco, saludos desde Cuenca, sur del Ecuador. Me dedico a ensamblar productos digitales. Sobre las toronjas: por favor no nos pasemos el día enumerando nutrientes. Ambos sabemos que lo que importa es el sabor.
        </div>
        <div className="italic mt-4 max-w-2xl px-8 md:px-16 font-bold md:ml-6">Hitos profesionales que me enorgullecen.</div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Nací en un eclipse, <span className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200 animate-anibg" onClick={()=> setReveal("eclipse")}>y no cualquier eclipse.</span></div>
          </div>
          {reveal === "eclipse" && 
            <div className="my-4 mr-6">
              <Eclipse/>
            </div>
          }
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Hice una novela de 120 páginas cuando tenía diez años.<br/> Hay quien dijo que contenía <em>demasiada</em> acción.</div>
          </div>
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Nos fuimos a la China en el año 2008 a jugar naipe en el Mundial de los Juegos de la Mente. Le remontamos a Singapur, pero China Taipei nos enseñó una lección.</div>
          </div>
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Hicimos una <span className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200" onClick={()=> setReveal("raja")}>revista digital moderadamente escandalosa.</span></div>
          </div> 
          {reveal === "raja" && 
            <div className="my-4 mr-6">
              <Raja/>
            </div>
          }
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Hicimos <span onClick={()=> setReveal("eltiempo")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">periódicos que salían todos los días</span>, <span onClick={()=> setReveal("bienal")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">catálogos de crípticas bienales</span>, <span onClick={()=> setReveal("lynx")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">prototipos y manuales para software financiero</span>, <span onClick={()=> setReveal("bgmagazine")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">revistas muy vistosas en papel de alto gramaje.</span></div>
          </div>
            {reveal === "eltiempo" && 
            <div className="my-4 mr-6">
              <ElTiempo/>
            </div>
            }
            {reveal === "lynx" && 
            <div className="my-4 mr-6">
              <Lynx/>
            </div>
            }
            {reveal === "bienal" && 
            <div className="my-4 mr-6">
              <Bienal/>
            </div>
            }
            {reveal === "bgmagazine" && 
            <div className="my-4 mr-6">
              <BgMagazine/>
            </div>
            }
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Viví nueve meses en el Humilladero, en Granada, y como no fue suficiente me fui a vivir a Cracovia.<a href="https://eloquentjavascript.net/" target="_blank"> <span className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">Aprendí a programar.</span> </a>Una época me pagaban en bitcoins.</div>
          </div>
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>Hicimos <span onClick={()=> setReveal("ubank")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">muchas apps</span> para muchos bancos con las que se ha ahorrado muchos millones de dólares.</div>
          </div>
          {reveal === "ubank" && 
            <div className="my-4 mr-6">
              <Ubank/>
            </div>
            }
        </div>
        <div className=" leading-normal mt-2">
          <div className="flex max-w-2xl pl-8 md:pl-16 pr-12 md:pr-24">
            <div className="mr-2 text-lg">☞</div>
            <div>También <span onClick={()=> setReveal("airpals")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">levantamos una aplicación web para un courier neoyorquino</span>, <span onClick={() => setReveal("vrooms")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">organizamos congregaciones postadolescentes</span> 
              <span onClick={ () => setReveal("sabroso")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">, construimos una plataforma de almuerzos corporativos,</span>&nbsp; 

              <span onClick={ () => setReveal("sabroso")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">construimos una plataforma de almuerzos corporativos </span> y&nbsp;
<span onClick={ () => setReveal("ucuenca")} className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">
                compilamos un catálogo editorial universitario.
                </span>
                
              &nbsp;En esas estamos.</div>
          </div>
            {reveal === "airpals" && 
            <div className="my-4 mr-6">
              <Airpals/>
            </div>
            }
            {reveal === "vrooms" && 
            <div className="my-4 mr-6">
              <Vrooms/>
            </div>
            }
            {reveal === "sabroso" && 
            <div className="my-4 mr-6">
              <Sabroso/>
            </div>
            }
            {reveal === "ucuenca" && 
            <div className="my-4 mr-6">
              <UCuenca/>
            </div>
            }
        </div>
        <div className="leading-normal mt-4 max-w-2xl px-8 md:px-16">
        Sé javascript, sé elixir y sé hurgar por el internet. No hace falta el deadline para trasnocharse. También he borrado varias milas de filas en tablas en producción, he transmitido KPIs bochornosamente equivocados a tiempo real, y he sido víctima de secuestros de bases de datos a cambio de criptomonedas. Con hurgar por el internet me refiero más que nada a descifrar el perennially unimpressed neckbeard jargon en hacker news: cors crud cron, cat sed grep; <em>qué le impide a usted enviar esos dieciocho mil emails?</em>
        </div>
        <div className="leading-normal mt-4 max-w-2xl px-8 md:px-16">
        Amo tanto el internet que incluso me ha llegado a gustar trabajar haciendo un poquito de internet. No amo que el internet se esté volviendo todo igual: tantas interfaces, tan hermosas y tan insípidas. Y eso en el mejor de los casos: aquí, en latinoamérica, bien puede ser preferible hacer el trámite en persona que hacerlo por internet; es más <em>sencillo</em>. Se lo dice un millennial. Entonces llegan los productos de otros lados y todo el mundo se pone a ponderar cuán amigables son. Pero y los nuestros, ¿qué? No digo que sean competencia, no deberían ser competencia. Pero, a ver, dígame usted, ¿cómo no van a ser competencia?
        </div>
        <div className="leading-normal mt-4 max-w-2xl px-8 md:px-16 pb-4">
        Hola, qué tal, gracias por llegar hasta aquí.
        ¿Quisiera construir productos asombrosos? ¿Conversar? ¿Protestar sobre lo que acaba de experimentar? Por favor hágamelo saber. Mi dirección es <a href="mailto:juanfrancisco@hey.com"><span className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">juanfrancisco@hey.com</span></a> y mi número es <a href="tel:+593998478479"><span className="font-bold underline cursor-pointer bg-yellow-100 hover:bg-yellow-200">0998478479</span></a>.<br/> 
        </div>
        <div className="leading-normal mt-4 max-w-2xl px-8 md:px-16">
        Hasta luego.
        </div>
      </div>
    </div>
    </>
  )
}
