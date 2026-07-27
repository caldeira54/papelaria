import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/index';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/papelaria" exact element={<Home />} />
        </Routes>
    );
}