import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Buscador = ({ onBuscar }) => {

    const [criterioBusqueda, setCriterioBusqueda] = useState('');
    return (
          <Paper
            component="div"
            sx={{ display: 'flex', alignItems: 'center', width: 700, mt:10,mb:5 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1}}
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={criterioBusqueda}
              onChange={(e) => { 
                setCriterioBusqueda(e.target.value)
              }}

              onKeyPress={(e) => {
                if(e.key === "Enter"){

                  if(criterioBusqueda.length > 2) {
                    onBuscar(criterioBusqueda)
                  }
                }
              }}
            />
            <>
              {criterioBusqueda.length > 2 &&
              <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={() => {
                if(criterioBusqueda.length > 2) {
                  onBuscar(criterioBusqueda)
                }
              }}
              
              >
                <SearchIcon />
              
              </IconButton>
              }
            </>
          </Paper>
        );
}

export default Buscador