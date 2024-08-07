import React from 'react';
import './App.css';
import {FormProvider} from "./context/FormContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonalDataPage from "./pages/PersonalDataPage";
import AddressWorkPage from "./pages/AddressWorkPage";
import LoanParametersPage from "./pages/LoanParametersPage";
import {Paths} from "./enums";

function App() {
    return (
        <FormProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={Paths.PersonalData} element={<PersonalDataPage/>}/>
                    <Route path={Paths.Address} element={<AddressWorkPage/>}/>
                    <Route path={Paths.Loan} element={<LoanParametersPage/>}/>
                </Routes>
            </BrowserRouter>
        </FormProvider>
    );
}

export default App;
