import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { getListJournal } from '../servicios/wallstreet';


const Buscador = () => {

    const [criterioBusqueda, setCriterioBusqueda] = useState('');
    return (
          <Paper
            component="div"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop:10 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={criterioBusqueda}
              onChange={(e) => { 
                setCriterioBusqueda(e.target.value)
              }}
              // onKeyDown={}
            />
            <>
              {criterioBusqueda.length > 3 &&
              <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={() => {
                console.log(getListJournal())
                setCriterioBusqueda('')
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