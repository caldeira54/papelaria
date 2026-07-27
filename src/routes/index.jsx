import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/index';
import Products from '../pages/products/index';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/papelaria" exact element={<Home />} />
            <Route path="/produtos" element={<Products />} />
        </Routes>
    );
}