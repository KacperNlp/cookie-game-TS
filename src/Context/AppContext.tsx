import { createContext } from "react";

import { StoreProductInterfaceProps } from '../components/StoreProduct/StoreProduct';

export interface AppContextInterface {
    cookieCounter: number,
    staff: Array<object>,
    store: Array<StoreProductInterfaceProps>,
    buyStaff(type: string, cost: number): void;
    addCookieByClick(): void;
}

export const AppContext = createContext<AppContextInterface | null>(null)