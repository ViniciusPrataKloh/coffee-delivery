import { Bank, CreditCard, Money } from "phosphor-react";
import { useContext } from "react";
import { PaymentContext } from "../../../context/PaymentContextProvider";
import { TypeCardButton } from "./style";

interface PaymentTypeCardProps {
    iconType: 'credit-card' | 'bank' | 'money';
    name: string;
}

export function PaymentTypeCard({ iconType, name }: PaymentTypeCardProps) {
    const { onSetPaymentType } = useContext(PaymentContext);

    function handleSetPaymentType() {
        onSetPaymentType(name);
    }

    return (
        <TypeCardButton
            type="button"
            onClick={handleSetPaymentType}
        >
            {(iconType === 'credit-card')
                ? <CreditCard size={16} color='#8047F8' />
                : (iconType === 'bank') ? <Bank size={16} color='#8047F8' />
                    : <Money size={16} color='#8047F8' />
            }
            <span>{name}</span>
        </TypeCardButton>
    );
}