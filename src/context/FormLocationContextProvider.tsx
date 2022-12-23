import { createContext, ReactNode, useState } from "react";

interface FormLocationContextProviderProps {
    children: ReactNode;
}

interface ILocation {
    pac: string;
    road: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    fu: string;
}

interface IFormContext {
    location: ILocation;
    pac: string;
    road: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    fu: string;
    updatePac: (pac: string) => void;
    updateRoad: (road: string) => void;
    updateNumber: (number: string) => void;
    updateComplement: (complement: string) => void;
    updateDistrict: (district: string) => void;
    updateCity: (city: string) => void;
    updateFu: (fu: string) => void;
}

export const FormContext = createContext({} as IFormContext);

export function FormLocationContextProvider({ children }: FormLocationContextProviderProps) {
    const [pac, setPac] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [fu, setFu] = useState('');

    function updatePac(pac: string) {
        setPac(pac);
    }

    function updateRoad(road: string) {
        setRoad(road);
    }

    function updateNumber(number: string) {
        setNumber(number);
    }

    function updateComplement(complement: string) {
        setComplement(complement);
    }

    function updateDistrict(district: string) {
        setDistrict(district);
    }

    function updateCity(city: string) {
        setCity(city);
    }

    function updateFu(fu: string) {
        setFu(fu);
    }

    const location: ILocation = Object.assign({
        pac,
        road,
        number,
        complement,
        district,
        city,
        fu,
    });

    // console.log(location);

    return (
        <FormContext.Provider value={{
            location,
            pac,
            road,
            number,
            complement,
            district,
            city,
            fu,
            updatePac,
            updateRoad,
            updateNumber,
            updateComplement,
            updateDistrict,
            updateCity,
            updateFu
        }}>
            {children}
        </FormContext.Provider>
    );
}