import React, { useContext } from 'react';

import { AppContext } from '../../Context/AppContext';

import './StoreProduct.scss';

export interface StoreProductInterfaceProps {
    type: string,
    name: string,
    production: number,
    cost: number
}

const StoreProduct: React.FC<StoreProductInterfaceProps> = ({type, name, production, cost}: StoreProductInterfaceProps) => {
    const appContext = useContext(AppContext)
    
    if(!appContext) return null;

    const {buyStaff} = appContext;

    return ( 
    <div className="prodcut">
        <p className="prodcut-name">{name}: will give you {production} cookies per second!</p>
        <button className="prodcut-button" onClick={() => buyStaff(type, cost)}>buy with {cost} cookies</button>
    </div>);
}
 
export default StoreProduct;