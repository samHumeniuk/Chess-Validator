import { createContext } from "react";
import ChessBoardSetupService from "../services/ChessBoardSetupService";

type Services = {
    chessBoardSetupService: ChessBoardSetupService
}

const services = {
    chessBoardSetupService: new ChessBoardSetupService(),
};

interface AppContextType {
    services: Services;
}

export const appContextDefault = {
    services: services,
};

const AppContext = createContext<AppContextType>(appContextDefault);

const { Provider } = AppContext;

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <Provider value={{ services }}>{children}</Provider>;
};
export { AppContext, AppProvider }