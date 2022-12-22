import { createContext, ReactNode, useState } from "react";

interface FormLocationContextProviderProps {
    children: ReactNode;
}

interface IFormContext {
    pac: string;
    updatePac: (pac: string) => void;
    // road: string;
    // number: string;
    // complement: string;
    // district: string;
    // city: string;
    // fu: string;
}

export const FormContext = createContext({} as IFormContext);

export function FormLocationContextProvider({ children }: FormLocationContextProviderProps) {
    const [pac, setPac] = useState('');

    function updatePac(pac: string) {
        setPac(pac);
        console.log(pac);
    }

    console.log(pac);

    return (
        <FormContext.Provider value={{
            pac,
            updatePac
        }}>
            {children}
        </FormContext.Provider>
    );
}