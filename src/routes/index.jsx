import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/index';
import Products from '../pages/products/index';
import SchoolSupplies from '../pages/schoolSupplies/index';
import Office from '../pages/office/index';
import Contact from '../pages/contact/index';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/papelaria" exact element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/materiais" element={<SchoolSupplies />} />
            <Route path="/escritorio" element={<Office />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    );
}