import LoanParametersForm from "../components/LoanParametersForm";
import {FormEvent, useContext, useState} from "react";
import {FormContext} from "../context/FormContext";
import {useNavigate} from "react-router-dom";
import {Paths} from "../enums";

const LoanParametersPage = () => {
    const { formData, resetFormData } = useContext(FormContext);
    const [error, setError] = useState('');
    const {firstName, lastName} = formData.personalData;
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { loanAmount, loanTerm } = formData.loanParameters;
        if (!loanAmount || !loanTerm) {
            setError('Все поля обязательны для заполнения');
        } else {
            setError('');
            try {
                const response = await fetch('https://dummyjson.com/products/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: `${formData.personalData.firstName} ${formData.personalData.lastName}`,
                    })
                });
                if (response.ok && response.status === 201) {
                    alert(`Поздравляем, ${lastName} ${firstName}. Вам одобрена ${loanAmount} на ${loanTerm} дней.`)
                    resetFormData();
                    navigate(Paths.PersonalData);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="page">
            <LoanParametersForm onSubmit={handleSubmit}/>
            {error && <p className="text-danger">{error}</p>}
        </div>
    );
}

export default LoanParametersPage;
