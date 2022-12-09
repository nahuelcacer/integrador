import Noticia from "./Noticia"

const ListaNoticias = ({ noticias }) => {
    return (
        <section>
            {
                noticias.map((noticia)=>{
                    return (
                        <Noticia noticia={noticia}></Noticia>
                    )
                })
            }
        </section>
    )
}

export default ListaNoticias