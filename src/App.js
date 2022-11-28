import Buscador from "./components/buscador";
import { getListJournal } from "./servicios/wallstreet";


function App() {
  console.log(getListJournal())
  return (
    <div>
      <div>
        <Buscador></Buscador>
      </div>
    </div>
  );
}

export default App;
