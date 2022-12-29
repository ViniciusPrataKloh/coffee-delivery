import { createContext, ReactNode, useState } from "react";

interface IPaymentContextProvider {
    children: ReactNode;
}

interface IPaymentContext {
    paymentType: string;
    onSetPaymentType: (type: string) => void;
}

export const PaymentContext = createContext({} as IPaymentContext);

export function PaymentContextProvider({ children }: IPaymentContextProvider) {
    const [paymentType, setPaymentType] = useState('');

    function onSetPaymentType(type: string) {
        setPaymentType(type);
    }

    return (
        <PaymentContext.Provider
            value={{
                paymentType,
                onSetPaymentType
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
}