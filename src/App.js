import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Planet from './Components/Planet';
import './CSS/reset.css';
import './CSS/style.scss';
import './CSS/responsive.scss';
import planets from './data.json'
const colors = ['#419EBB', '#EDA249', '#6D2ED5', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0']
function App() {
  const Planets = planets.map((planet,index) => {
    planet.color= colors[index]
    return planet
  })
  return (
    <div className="container">
      <Routes>
        <Route path='/planets-facts/' element={<Header planets={Planets} />}>
          <Route path='/planets-facts/:planet' element={<Planet planets={Planets} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
