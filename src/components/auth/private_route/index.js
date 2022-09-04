import React, { useEffect, useState } from 'react';
import { Route, Redirect, Navigate, Routes, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate()

  if (localStorage.getItem('user')) {
    return (
      Component
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}

export default PrivateRoute