import PaginaJournal from "./pages/PaginaJournal";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import Error404 from "./components/Errores/Error404";


const router = createBrowserRouter([
  {
    path:"/",
    element:<PaginaJournal/>,
    errorElement:<Error404/>
    
  },
  {
    path:"/buscador",
    element:<PaginaJournal/>,
    errorElement:<Error404/>
    
  }
])
function App() {
  return (
    <div >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
