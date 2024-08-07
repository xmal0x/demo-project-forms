import PersonalDataForm from "../components/PersonalDataForm";
import {FormEvent, useContext, useState} from "react";
import Error from "../components/Error";
import {FormContext} from "../context/FormContext";
import {useNavigate} from "react-router-dom";
import {Paths} from "../enums";

const PersonalDataPage = () => {
    const [error, setError] = useState(false);
    const { formData } = useContext(FormContext);
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { phone, firstName, lastName, gender } = formData.personalData;
        if (!phone || !firstName || !lastName || !gender) {
            setError(true);
        } else {
            setError(false);
            navigate(Paths.Address);
        }
    };

    return (
        <div className="page">
            <PersonalDataForm onSubmit={handleSubmit}/>
            {error && <Error />}
        </div>
    )
}

export default PersonalDataPage;
