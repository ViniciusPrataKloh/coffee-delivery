import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { FormContext } from '../../../context/FormLocationContextProvider';
import { Form } from "./styles";

const newFormValidationSchema = zod.object({
    pac: zod.string().length(9, 'Informe o CEP'),
    road: zod.string().min(5, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o numero'),
    complement: zod.string(),
    district: zod.string().min(1, 'Informe o distrito'),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().length(2, 'Informe a UF')
});

type formType = zod.infer<typeof newFormValidationSchema>

export function LocationForm() {
    const { register, handleSubmit, watch, formState } = useForm({
        resolver: zodResolver(newFormValidationSchema),
    });

    const {
        updatePac,
        updateRoad,
        updateNumber,
        updateComplement,
        updateDistrict,
        updateCity,
        updateFu
    } = useContext(FormContext);

    const pac = watch('pac');
    const road = watch('road');
    const number = watch('number');
    const complement = watch('complement');
    const district = watch('district');
    const city = watch('city');
    const fu = watch('fu');

    updatePac(pac);
    updateRoad(road);
    updateNumber(number);
    updateComplement(complement);
    updateDistrict(district);
    updateCity(city);
    updateFu(fu);

    return (
        <Form>
            <input type="text" id="input-pac" placeholder="CEP" required pattern="\d{5}-?\d{3}" {...register('pac')} />
            <input type="text" id="input-road" placeholder="Rua" {...register('road')} />
            <div>
                <input type="text" id="input-number" placeholder="Número" {...register('number')} />
                <input type="text" id="input-complement" placeholder="Complemento" {...register('complement')} />
                {/* <input type="text" name="input-optional" id="input-optional" placeholder="Opcional" /> */}
            </div>
            <div>
                <input type="text" id="input-district" placeholder="Bairro" {...register('district')} />
                <input type="text" id="input-city" placeholder="Cidade" {...register('city')} />
                <input type="text" id="input-fu" placeholder="UF" {...register('fu')} />
            </div>
        </Form>
    );
}