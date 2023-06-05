import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Karakterler from './components/Karakterler';
import Sayfalama from './components/Sayfalama';
import 'bootstrap/dist/css/bootstrap.min.css'
import Arama from './components/Arama';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [data, setData] = useState([])
const [pageCount, setPageCount] = useState(1);
const [page, setPage] = useState(1)

useEffect(()=> {
  axios.get("https://swapi.dev/api/people?page=" + page)
  .then(res =>{
    setData(res.data.results);
    setPageCount(res.data.count);
  })
},[page])

const handleChangePage = (e) =>{
  setPage(e.target.textContent)
}

const increasePage = (e) => {
  const newPage = page - 1;
  if(newPage > 0){
    setPage(newPage);
  }
}

const decreasePage = (e) => {
  const newPage = Number(page )+ 1;
  console.log(newPage)
  if(newPage < Math.floor(pageCount / 10)){
    setPage(newPage);
  }
}

const lastPage = (e) => {
  setPage(Math.floor(pageCount / 10))
}

const firstPage = (e) => {
  setPage(1)
}

const onChange = () => {

}
  return (
    <div className="App">
      <Arama onChange={onChange} />
      <h1 className="Header">Karakterler</h1>
      <Karakterler data = {data}/>
      <Sayfalama handleChangePage={handleChangePage} increasePage = {increasePage} decreasePage = {decreasePage} firstPage ={firstPage} lastPage={lastPage}/>
    </div>
  );
}

export default App;
