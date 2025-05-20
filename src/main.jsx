import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // এইটা ভুলে যেও না!
import './index.css'
import { router } from './routes/Router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer /> {/* ✅ টাইপো ঠিক করা হয়েছে */}
    </AuthProvider>
  </StrictMode>
)
