import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResultadoRuta = () => {
    const { id } = useParams();
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const URL_API = 'https://swapi.dev/api/people/'

    useEffect(() => {
        const fetchData = async (id) => {
            const URL = URL_API + id;
            setLoading(true);
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setResult(data);
                setLoading(false);
            } catch (error) {
                console.log('Error al obtener los datos del servidor');
                setLoading(false);
            }
        };
        fetchData(id);
    }, [id]);

    return (
        <>
            <div className="App">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo de Star Wars" />
                <div className="resultadoRuta">
                    {loading && <l-bouncy size="45" speed="1.75" color="yellow"></l-bouncy>}
                    {!loading && result.url && (
                        <div className='resultado'>
                            <h2>{result.name}</h2>
                            <p>Género: {result.gender}</p>
                            <p>Altura: {result.height} cm</p>
                            <p>Peso: {result.mass} kg</p>
                            <p>Color de cabello: {result.hair_color}</p>
                            <p>Color de ojos: {result.eye_color}</p>
                            <p>Año de nacimiento: {result.birth_year}</p>
                        </div>
                    )}
                    {!loading && !result.url && (
                        <div className='resultado'>
                            <h2>Personaje no encontrado</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ResultadoRuta;