import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'
import PrivateRoute from "./components/auth/private_route";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notes' element={<PrivateRoute component={<NotesIndex />} />} />
        <Route path='/users/edit' element={<PrivateRoute component={<UserEdit />} />} />
      </Routes>
    </BrowserRouter>
  )
}