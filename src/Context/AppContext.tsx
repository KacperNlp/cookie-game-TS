import { createContext } from "react";

export interface AppContextInterface {
    cookieCounter: number,
    staff: Array<object>,
    store: Array<object>,
    buyStaff(type: string, cost: number): void;
}

export const AppContext = createContext<AppContextInterface | null>(null)