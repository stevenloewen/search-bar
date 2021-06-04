import React, {useState} from 'react';
import './App.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import CountryList from './Components/CountryList/CountryList';


function App() {

  const [searchCountry, setSearchCountry] = useState('');
  const inputChange = (e) => {
    setSearchCountry(e.target.value);
  }

  return (
    <div className="App">
      <SearchBar inputChange = {inputChange}/>
      <CountryList searchCountry = {searchCountry}/>      
    </div>
  );
}

export default App;
