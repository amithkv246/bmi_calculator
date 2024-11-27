import React from "react";
import CalculationPage from "./pages/calculationPage";
import ResultPage from "./pages/resultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CalculationPage />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}