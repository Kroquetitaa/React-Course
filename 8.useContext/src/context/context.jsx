import { createContext  } from "react";

export const ExampleContext = createContext();

export const ExampleContextProvider = ( { children } ) => {
    const name = 'Neoland';
    const sayHello = () => {
        return 'Hello';
    }
    return (
        <ExampleContext.Provider value={{ name , sayHello }}>
            { children }
        </ExampleContext.Provider>
    );
}