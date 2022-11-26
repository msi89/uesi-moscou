import { useState } from 'react'
import logo from './assets/img/logominified.png'
import imgpdt1 from './assets/img/imgpdt1.jpeg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* https://ageefep.qc.ca/ */}


      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <nav className="header-nav">
          <a className="active" href="/home">Acceuil</a>
          <a href="/activities">Activités</a>
          <a href="/activities">L'essentiel</a>
          <a href="/advices">Conseils</a>
          <a href="/community">Communautés</a>
          <a href="/contacts">Contacts</a>
        </nav>
        <input type="text" name="input-search" className="input-search" placeholder="Recherche rapide" />
      </header>
      <div className="main">
        <section>
          <div className="top">
            <div className="infos">
              <p className="italic">Bienvenue sur la plateforme communautaire de l'UESI</p>
              <h1>
                Notre priorité,<br />c'est la Communauté.
                <br />Ensemble pour une UESI forte et reunie!
              </h1>
              <p>Vous trouverez ici, toutes les informations relatives a la communauté.</p>
              <div className="groups-btns">
                <div className="btn btn-active">Commencer</div>
                <div className="btn">En savoir plus</div>
              </div>
            </div>

            <img src={imgpdt1} alt="photo du president" />
          </div>
        </section>
        <section className="middle">
          <div className="caption">
            <h3>Notre défi, s'engager avec vous et pour vous!</h3>
            <p>Regrouper - Informer - défendre -  accompagner - promouvoir</p>
          </div>
        </section>
      </div>

    </div>
  )
}

export default App
