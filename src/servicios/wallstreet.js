const API_KEY = '3d6a2ff4204b4ec39d9eb2e78a32aed3'
const NEWS_API = ' https://newsapi.org/v2/everything?'

// export const getListadoPeliculas = async (criterioBusqueda, paginaActual) => {
//     const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&s=${criterioBusqueda}&page=${paginaActual}`);
//     const peliculas = await respuesta.json();
//     return peliculas;
// }


// export const getPelicula = async idPelicula => {
//     const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&i=${idPelicula}`);
//     const pelicula = await respuesta.json();
//     return pelicula;
// }   



export const getListJournal = async (criterioBusqueda, paginaActual) => {
    const res = await fetch(`${NEWS_API}q=${criterioBusqueda}&pageSize=10&language=es&page=${paginaActual}&apiKey=${API_KEY}`)
    const journal = await res.json()
    return journal
}

