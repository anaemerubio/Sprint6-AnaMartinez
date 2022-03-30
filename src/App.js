import Scene from './components/scene/scene';
import { dataStory } from './dataStory';

function App() {
  return (
    <Scene story={dataStory} />
  );
}

export default App;