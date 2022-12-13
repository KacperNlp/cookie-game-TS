import { useContext } from "react";
import StoreProduct from "../StoreProduct/StoreProduct";

import { AppContext } from "../../Context/AppContext";

const Store = () => {
    const appContext = useContext(AppContext);
    if(!appContext) return null;

    const { store } = appContext;

    if(!store) return null;

    const stuffInStore = store.map(({name, cost, production, type}) => (
        <li className="store-pruduct" key={type}>
            <StoreProduct type={type} name={name} production={production} cost={cost}/>
            <p></p>
        </li>
    ));
    return ( 
        <div className="store">
            <ul className="store-list">{ stuffInStore }</ul>
        </div>
     );
}
 
export default Store;