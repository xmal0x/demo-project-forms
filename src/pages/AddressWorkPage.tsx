import AddressWorkForm from "../components/AddressWorkForm";
import Error from "../components/Error";
import {FormEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FormContext} from "../context/FormContext";
import {Paths} from "../enums";

const AddressWorkPage = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formData} = useContext(FormContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { workPlace, address } = formData.addressWork;
        if (!workPlace || !address) {
            setError(true);
        } else {
            setError(false);
            navigate(Paths.Loan)
        }
    };


    return (
        <div className="page">
            <AddressWorkForm onSubmit={handleSubmit}/>
            {error && <Error />}
        </div>
    );
}

export default AddressWorkPage;
