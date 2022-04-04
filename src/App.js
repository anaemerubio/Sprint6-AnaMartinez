import Scene from './components/scene/scene';
import './App.css';
import { dataStory } from './dataStory';
import { useState } from 'react';
import { ButtonHover } from './styles';

function App() {
  const [condition, setCondition] = useState(true);
  return ( condition ?
    <div className='home'>
      <h1>Click the button to start your story</h1>
      <ButtonHover onClick={() => setCondition(false)}>START</ButtonHover>
    </div>

    : <ul><Scene story={dataStory} /></ul>
  );
}

export default App;