import { Container } from "@mui/system"
import Buscador from "../components/buscador"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListJournal } from "../servicios/wallstreet";
import Loading from "../components/Loading/Loading";
import ListaNoticias from "../components/Noticias/ListaNoticias";
import Paginador from "../components/Paginador/Paginador"
import CantidadNoticias from "../components/Noticias/CantidadNoticias";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const PaginaJournal = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading,setIsLoading] = useState(false)
    const [noticias, setNoticias] = useState()
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [totalResults ,setTotalResults] = useState(0)

    useEffect(() => {
        if(searchParams.get('query')) {
            searchJournal(pagina)
        }
    }, [searchParams, pagina]);

    const searchJournal = async (pagina) => {
        setIsLoading(true)
        const {articles , totalResults } = await getListJournal(searchParams.get('query'), pagina)
        setNoticias(articles);
        setTotalResults(totalResults)
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
    }
    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };
    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };
    return(
        <>
        <Header/>
        <Container maxWidth='sm' >
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { noticias && <CantidadNoticias cantidad={totalResults}></CantidadNoticias>}
            { noticias && <ListaNoticias noticias={noticias}/>}
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}></Paginador>}
        </Container>
        <Footer/>   
        </>
    )
}

export default PaginaJournal 