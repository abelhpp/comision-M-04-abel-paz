import React from 'react';
import { FaSignInAlt, FaUser } from 'react-icons/fa'; 

export const IcoSalir = () => {
  return (
    <FaSignInAlt style={{ marginRight: '5px' }} />
  );
};

export const IcoLogin = ({ onClick }) => {
  return (
    <FaUser style={{ marginRight: '5px' }} />
  );
};
