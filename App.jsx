import './App.css';
import { useGlobalContext } from './useContext';

function App() {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <>
      <div>{name}</div>
    </>
  );
}

export default App;
