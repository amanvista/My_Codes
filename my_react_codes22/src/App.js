import FetchApi from './api/fetchApi';
import UseRefHook from './hooks/useRefHook';
import { Provider } from 'react-redux';
import configureStore from './reduxToolkit/store'
import CustomerCard from './reduxToolkit/component';
import UseMemoHook from './hooks/useMemo';


function App() {
  return (
    <div className="App">
       <UseMemoHook/>
    </div>
  );
}

export default App;
