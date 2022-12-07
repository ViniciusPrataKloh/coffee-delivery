import { Bank, CreditCard, Money } from "phosphor-react";
import { TypeCard } from "./style";

interface PaymentTypeCardProps {
    iconType: 'credit-card' | 'bank' | 'money';
    name: string;
}

export function PaymentTypeCard({ iconType, name }: PaymentTypeCardProps) {
    return (
        <TypeCard>
            {(iconType === 'credit-card')
                ? <CreditCard size={16} color='#8047F8' />
                : (iconType === 'bank') ? <Bank size={16} color='#8047F8' />
                    : <Money size={16} color='#8047F8' />
            }
            <span>{name}</span>
        </TypeCard>
    );
}