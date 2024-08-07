import {ChangeEvent, FC, FormEvent, useContext} from "react";
import {FormContext} from "../context/FormContext";
import {useNavigate} from "react-router-dom";
import {Paths} from "../enums";

type Props = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const LoanParametersForm: FC<Props> = ({onSubmit}) => {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            loanParameters: {
                ...prev.loanParameters,
                [name]: Number(value),
            },
        }));
    };

    const handleBack = () => navigate(Paths.Address);

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="form-group">
                <label className="form-label">Сумма займа</label>
                <input type="range" className="form-control" name="loanAmount" min="200" max="1000" step="100" value={formData.loanParameters.loanAmount} onChange={handleChange} required />
            </div>
            <div className="form-additional">{formData.loanParameters.loanAmount}$</div>
            <div className="form-group">
                <label className="form-label">Срок займа (дней)</label>
                <input type="range" className="form-control" name="loanTerm" min="10" max="30" step="1" value={formData.loanParameters.loanTerm} onChange={handleChange} required />
            </div>
            <div className="form-additional">{formData.loanParameters.loanTerm} дней</div>
            <div className="buttons">
                <button type="button" className="button" onClick={handleBack}>Назад</button>
                <button type="submit" className="button">Подать заявку</button>
            </div>
        </form>
    );
};

export default LoanParametersForm;
