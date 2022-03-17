import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

import Dashboard from '../../components/dashboard/Dashboard'
import Loading from '../../components/loading/loading'

import { checkToken } from '../../services/account/checkToken'


export default function Main() {

  const [isTokenValid, setTokenValid] = useState(true);
  const [loading, setLoading] = useState(true);

  let token = null;
  
  useEffect(() => {
    async function fetchData() {
      token = await checkToken(window.localStorage.getItem('user_token'));

      if (!token.success) {
        window.localStorage.removeItem('user_token');
        setTokenValid(false);
      }
    }
    fetchData();

    setLoading(false);
  }, [])

  return (
    <React.Fragment>
      {
        !isTokenValid 
          ? <Navigate state={302} to={{pathname: '/'}}/>
          : true
      }
      <Helmet>
        <title>Kaillut - Dashboard</title>
      </Helmet>
      <MediaQuery minWidth={1024}>
      {
      loading ? <Loading /> : <Dashboard />
      }
      </MediaQuery>
    </React.Fragment>
  )
}