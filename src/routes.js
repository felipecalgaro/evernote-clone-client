import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notes' element={<NotesIndex />} />
        <Route path='/users/edit' element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  )
}