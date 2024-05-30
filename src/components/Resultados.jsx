const Resultados = ({ result, category, planetaNatal }) => {
    return (
        <div className='resultados'>
            {category === 'people' && (
                <>
                    <h2>{result.name}</h2>
                    <p>Género: {result.gender}</p>
                    <p>Altura: {result.height} cm</p>
                    <p>Peso: {result.mass} kg</p>
                    <p>Color de cabello: {result.hair_color}</p>
                    <p>Color de ojos: {result.eye_color}</p>
                    <p>Año de nacimiento: {result.birth_year}</p>
                    <p>Planeta natal: {planetaNatal}</p>
                </>
            )}
            {category === 'planets' && (
                <>
                    <h2>{result.name}</h2>
                    <p>Diámetro: {result.diameter} km</p>
                    <p>Clima: {result.climate}</p>
                    <p>Terreno: {result.terrain}</p>
                    <p>Población: {result.population}</p>
                </>
            )}
            {category === 'films' && (
                <>
                    <h2>{result.title}</h2>
                    <p>Id de episodio: {result.episode_id}</p>
                    <p>Director: {result.director}</p>
                    <p>Productor: {result.producer}</p>
                    <p>Fecha de lanzamiento: {result.release_date}</p>
                </>
            )}
            {category === 'species' && (
                <>
                    <h2>{result.name}</h2>
                    <p>Clasificación: {result.classification}</p>
                    <p>Designación: {result.designation}</p>
                    <p>Altura promedio: {result.average_height} cm</p>
                    <p>Lenguaje: {result.language}</p>
                    <p>Color de cabello: {result.hair_colors}</p>
                    <p>Color de ojos: {result.eye_colors}</p>
                </>
            )}
            {(category === 'vehicles' || category === 'starships') && (
                <>
                    <h2>{result.name}</h2>
                    <p>Modelo: {result.model}</p>
                    <p>Fabricante: {result.manufacturer}</p>
                    <p>Costo en créditos: {result.cost_in_credits}</p>
                    <p>Longitud: {result.length} m</p>
                    <p>Velocidad máxima atmosférica: {result.max_atmosphering_speed} km/h</p>
                    <p>Capacidad de carga: {result.cargo_capacity} kg</p>
                </>
            )}
        </div>
    );
}

export default Resultados;