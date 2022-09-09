import React, { useState } from 'react';
import { Button } from "rbx";
import UsersService from '../../../services/users';
import { Redirect, useNavigate } from "react-router-dom";

function UsersDelete() {
  const navigate = useNavigate()

  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete your account?')) {
      await UsersService.delete()
      navigate('/')
    }
  }

  return (
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  )
}

export default UsersDelete;