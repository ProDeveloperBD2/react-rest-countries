import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}









/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Country Of The World!!!</h1>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div >
  )
}
function Country(props) {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <h3>Population: {props.population}</h3>
    </div>
  )
} */
export default App;
