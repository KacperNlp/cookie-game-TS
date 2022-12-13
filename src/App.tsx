import { useEffect, useState } from 'react';

import { AppContext, AppContextInterface } from './Context/AppContext';

import './App.scss';

const App = () => {
  const [cookies, setCookies] = useState(0);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch('./data/app.json')
      .then(res => {
        if(res.status !== 200) throw new Error(`Wrong status ${res.status}`);
        return res.json();
      }).then(res => {
        setStore(res.store)
      }).catch(err => {
        throw new Error(err);
      })
  }, []);

  const buyStaff = () => {
    console.log('Buy staff');
  }

  const appContextValues: AppContextInterface = {
    cookieCounter: cookies,
    staff: [],
    store: store,
    buyStaff: buyStaff
  }

  return ( 
    <AppContext.Provider value={appContextValues}>
      <div className="app"></div>
    </AppContext.Provider>
   );
}
 
export default App;
