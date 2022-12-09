import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea, Grid } from "@mui/material"
import { Box } from "@mui/system";
import { DateTime } from "luxon";


const Noticia = ({noticia})=>{
    const ConvertDate = (date) => {
        let dt = DateTime.fromISO(date)
        let str_date = dt.toFormat('dd-MM-yyyy');
        let str_hour = dt.toFormat('HH:mm');
        return str_date + ' a las ' + str_hour + ' hs'
    }
    return (
        <Card sx={{width:700, marginBottom:2}}>
            <CardActionArea href={noticia.url}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <CardContent spacing={0}>
                            <Typography sx={{fontWeight: 'bold', mb:2}}>
                                {noticia.title}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
                                {noticia.description}
                            </Typography>
                            <Typography color="text.secondary" sx={{marginTop:1}}>
                                {ConvertDate(noticia.publishedAt)}
                            </Typography>
                            <Typography color="text.secondary" >
                                {noticia.source.name}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid  item xs={3}>
                        <CardMedia 
                        sx={{borderRadius:3, boxShadow:10, mt:2}}
                        component="img"
                        height={140}
                        width={200}
                        image={noticia.urlToImage}
                        >
                        </CardMedia>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
        
    )
}
export default Noticia;