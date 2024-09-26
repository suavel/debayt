import { Route, Routes } from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>

        </Route>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        {/* private routes */}
        <Route element={<RootLayout />}>

        </Route>
        <Route index element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App