import {ChangeEvent, FC, FormEvent, useContext} from "react";
import {FormContext} from "../context/FormContext";

type Props = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const PersonalDataForm: FC<Props> = ({onSubmit}) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            personalData: {
                ...prev.personalData,
                [name]: value,
            },
        }));
    };

    return (
        <form onSubmit={onSubmit} className="form" noValidate>
            <div className="form-group">
                <label className="form-label">Телефон</label>
                <input type="tel" className="form-control" name="phone" value={formData.personalData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Имя</label>
                <input type="text" className="form-control" name="firstName" value={formData.personalData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Фамилия</label>
                <input type="text" className="form-control" name="lastName" value={formData.personalData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Пол</label>
                <select className="form-control" name="gender" value={formData.personalData.gender} onChange={handleChange} required>
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </div>
            <button type="submit" className="button">Далее</button>
        </form>
    );
};

export default PersonalDataForm;
