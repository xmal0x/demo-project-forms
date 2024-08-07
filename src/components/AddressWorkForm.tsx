import {ChangeEvent, FC, FormEvent, useContext, useEffect, useState} from "react";
import {FormContext} from "../context/FormContext";
import {useNavigate} from "react-router-dom";
import {Paths} from "../enums";

type Props = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const AddressWorkForm: FC<Props> = ({onSubmit}) => {
    const { formData, setFormData } = useContext(FormContext);
    const [workPlaces, setWorkPlaces] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(setWorkPlaces);
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            addressWork: {
                ...prev.addressWork,
                [name]: value,
            },
        }));
    };

    const handleBack = () => navigate(Paths.PersonalData);

    return (
        <form onSubmit={onSubmit} className="form" noValidate>
            <div className="form-group">
                <label className="form-label">Место работы</label>
                <select className="form-control" name="workPlace" value={formData.addressWork.workPlace} onChange={handleChange} required>
                    <option value="">Выберите место работы</option>
                    {workPlaces.map((place) => (
                        <option key={place} value={place}>{place}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Адрес проживания</label>
                <input type="text" className="form-control" name="address" value={formData.addressWork.address} onChange={handleChange} required />
            </div>
            <div className="buttons">
                <button type="button" className="button" onClick={handleBack}>Назад</button>
                <button type="submit" className="button">Далее</button>
            </div>
        </form>
    );
};

export default AddressWorkForm;
