import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './search';
import Results from './results';
import Recipe from './recipe';

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}
export default App;
