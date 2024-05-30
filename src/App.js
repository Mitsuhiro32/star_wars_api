import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Resultados from './components/Resultados';
import { Route, Routes } from 'react-router-dom';
import ResultadoRuta from './components/ResultadoRuta';

function App() {
  const [URL_API, setURL_API] = useState('https://swapi.dev/api/people/')
  const [category, setCategory] = useState('people')
  const [result, setResult] = useState({})
  const [planetaNatal, setPlanetaNatal] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = (id) => {
    const URL = URL_API + id;
    setCategory(URL_API.split('/')[4])
    setLoading(true)
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        setResult(response.data)
        setError('')
        if (category === 'people') {
          axios.get(response.data.homeworld)
            .then((response) => {
              setPlanetaNatal(response.data.name)
              setError('')
              setLoading(false)
            }).catch(() => {
              console.log('Error al obtener los datos del servidor')
              setError('Estos no son los droides que está buscando')
              setLoading(false)
            })
        }
        setLoading(false)
      }).catch(() => {
        console.log('Error al obtener los datos del servidor')
        setError('Estos no son los droides que está buscando')
        setLoading(false)
      })
  }

    return (
      <Routes>
        <Route path="/" element={
          <div className="App">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo de Star Wars" />
            <div className='search'>
              <form onSubmit={(e) => {
                e.preventDefault();
                fetchData(document.getElementById('id').value);
              }}>
                <label htmlFor="url">Buscar por:</label>
                <select onChange={(e) => setURL_API(e.target.value)}>
                  <option value="https://swapi.dev/api/people/">Personajes</option>
                  <option value="https://swapi.dev/api/planets/">Planetas</option>
                  <option value="https://swapi.dev/api/films/">Películas</option>
                  <option value="https://swapi.dev/api/species/">Especies</option>
                  <option value="https://swapi.dev/api/vehicles/">Vehículos</option>
                  <option value="https://swapi.dev/api/starships/">Naves espaciales</option>
                </select>
                <label htmlFor='id'>ID:</label>
                <input type='number' id='id' defaultValue={1} />
                <button type='submit'>Buscar</button>
              </form>
            </div>
            {loading && <l-bouncy size="45" speed="1.75" color="yellow"></l-bouncy>}
            {!error && !loading && result.url && <Resultados result={result} category={category} planetaNatal={planetaNatal} />}
            {error && !loading && (
              <div className='error'>
                <p>{error}</p>
                <img src={process.env.PUBLIC_URL + '/Obi-Wan-Kenobi-PNG-Image.png'} alt="Obi-Wan Kenobi" />
              </div>
            )}
          </div>
        } />
        <Route path="/:id" element={<ResultadoRuta />} onSubmit={(e) => e.preventDefault()} />
      </Routes>
    );
  }

  export default App;
