import { createContext } from "react";

interface AppContextInterface {
    cookieCounter: number,
    staff: Array<object>,
    buyStaff(): void;
}

export const AppContext = createContext<AppContextInterface | null>(null)