import './App.css';
import AutosuggestTags from './components'
import countries from './countries';

function App() {
  return (
    <AutosuggestTags
      suggestionsPool={countries}
      placeholder='Type to select or to create...'
      maxSuggestionLength={10}
    />
  );
}

export default App;
