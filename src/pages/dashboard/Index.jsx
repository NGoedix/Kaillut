import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

import Dashboard from '../../components/dashboard/Dashboard'

import { checkToken } from '../../services/account/checkToken'

export default function Main() {

  let token = null;

  useEffect(() => {
    token = checkToken(window.localStorage.getItem('user_token'));
  })

  if (!token || token === 'null' || token === null || token === undefined) 
    return <Navigate state={302} to={{pathname: '/'}}/>

  return (
    <React.Fragment>
      <Helmet>
        <title>Kaillut - Dashboard</title>
      </Helmet>
      <MediaQuery minWidth={1024}>
        <Dashboard />
      </MediaQuery>
    </React.Fragment>
  )
}