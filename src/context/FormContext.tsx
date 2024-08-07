import React, {createContext, ReactNode, useState} from "react";

interface PersonalData {
    phone: string;
    firstName: string;
    lastName: string;
    gender: string;
}

interface AddressWork {
    workPlace: string;
    address: string;
}

interface LoanParameters {
    loanAmount: number;
    loanTerm: number;
}

interface FormData {
    personalData: PersonalData;
    addressWork: AddressWork;
    loanParameters: LoanParameters;
}

interface FormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    resetFormData: () => void;
}

const defaultFormData: FormData = {
    personalData: {
        phone: '',
        firstName: '',
        lastName: '',
        gender: '',
    },
    addressWork: {
        workPlace: '',
        address: '',
    },
    loanParameters: {
        loanAmount: 200,
        loanTerm: 10,
    },
};

export const FormContext = createContext<FormContextProps>({
    formData: defaultFormData,
    setFormData: () => {},
    resetFormData: () => {},
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState(defaultFormData);

    const resetFormData = () => {
        setFormData(defaultFormData);
    }

    return (
        <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
            {children}
        </FormContext.Provider>
    );
};
