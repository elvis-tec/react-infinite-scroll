import { useFetchData } from './hooks/useFetchData';

function App() {
  const { characters, isLoading } = useFetchData();
  return (
    <div className="App">
      {
            isLoading && ( <h1>Loading...</h1> )
      }
      <div className="content">
        {characters.map((char)=><p>{char.name}</p>)}
      </div>
    </div>
  )
}

export default App;
