import './App.scss';

import { AppContext } from './Context/AppContext';

const App = () => {
  return ( 
    <AppContext.Provider>
          <div className="app"></div>
    </AppContext.Provider>
   );
}
 
export default App;
