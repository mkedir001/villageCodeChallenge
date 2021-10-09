import React, { useState, useEffect} from 'react';
import Card from './Components/CardComponent/card'
import Programs from './config/mock'
import Pagination from './Components/pagination/pagination';
import './App.css';
console.log('this is programs:    ==>', Programs.programs);
function App() {
  const  { programs } = Programs
  const [listOfPrograms, getListOfPrograms] = useState([]) // Ideally this would get from the graphql layer or from an api endpoint to populate programs
  const [currentPage, setCurrentPage] = useState(1);
  const [programsPerPage] = useState(12);

  const lastIndex = currentPage * programsPerPage;
  const firstIndex = lastIndex - programsPerPage;
  const currentPrograms = programs.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <div className="page-container">
        <div className="results-title">
          {`Showing ${currentPrograms.length} of ${programs.length} results`}
        </div>
        {currentPrograms.map((program) =>{
          return <Card program={program} key={program.name} />
        })}
        <Pagination programsPerPage={programsPerPage} totalPrograms={programs.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;
