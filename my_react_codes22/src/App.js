import FetchApi from './api/fetchApi';
import UseRefHook from './hooks/useRefHook';
import { Provider, useSelector } from 'react-redux';
import UseMemoHook from './hooks/useMemo';
import MyReduxComponent from './reduxToolkit/reduxToolkitExample';
import UseEffectHook from './hooks/useEffectHook';
import UseCallbackHook from './hooks/useCallback';


function App() {
  return (
      <div className="App">
        <h1>Hi</h1>
        <UseCallbackHook/>
      </div>
  );
}

export default App;
