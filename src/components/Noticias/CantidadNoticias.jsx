import { Typography } from "@mui/material"


const CantidadNoticias = ({cantidad}) => {

    return (
       
        <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
            Estas viendo 10 noticas de un total de {cantidad} resultados
        </Typography>

    )

}

export default CantidadNoticias