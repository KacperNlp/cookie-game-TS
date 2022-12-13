import React from 'react';
import './StoreButton.scss';

interface ButtonInterfaceProps {
    type: string,
    text: string,
    cost: number
}

const StoreButton: React.FC<ButtonInterfaceProps> = ({type, text, cost}: ButtonInterfaceProps) => {
    return ( <button></button> );
}
 
export default StoreButton;