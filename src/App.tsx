import { useEffect, useState } from 'react';

import { AppContext, AppContextInterface } from './Context/AppContext';

import './App.scss';
import Store from './components/Store/Store';
import UserInterface from './components/UserInterface/UserInterface';

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

  const buyStaff = (type: string, cost: number) => {
    console.log('Buy staff');
  }

  const addCookieOnClick = () => {
    setCookies(prevValue => (prevValue + 1))
  }

  const appContextValues: AppContextInterface = {
    cookieCounter: cookies,
    staff: [],
    store: store,
    buyStaff: buyStaff,
    addCookieByClick: addCookieOnClick
  }

  if(!store.length) return null;

  return ( 
    <AppContext.Provider value={appContextValues}>
      <div className="app">
        <Store/>
        <UserInterface/>
      </div>
    </AppContext.Provider>
   );
}
 
export default App;
