import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './logic/context/AuthContext';
import { BlogProvider } from './logic/context/BlogContext';
import { ShopProvider } from './logic/context/ShopContext';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyAccount from './pages/MyAccount/MyAccount';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';

export default function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <BlogProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/my-account"
                element={(
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
              )}
              />
              <Route path="/product/:productSku" element={<SingleProduct />} />
            </Routes>
          </BrowserRouter>
        </BlogProvider>
      </ShopProvider>
    </AuthProvider>
  );
}
