import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

import Dashboard from '../../components/dashboard/Dashboard'
import Loading from '../../components/loading/loading'

import { checkToken } from '../../services/account/checkToken'


export default function Main() {

  const [isTokenValid, setTokenValid] = useState(false);
  const [isLoading, setLoading] = useState(true);

  let token = null;
  
  useEffect(() => {
    async function fetchData() {
      token = await checkToken(window.localStorage.getItem('user_token'));

      if (!token.success) {
        window.localStorage.removeItem('user_token');
        setTokenValid(false);
      } else {
        setTokenValid(true);
      }
      setLoading(false);

    }
    fetchData();
  }, [])

  const checkTokenValid = () => {
    console.log("Token valid: ", isTokenValid)
    console.log("Loading: ", isLoading)
    if (isTokenValid && !isLoading) {
      return <Dashboard />
    } else if (isLoading) {
      return <Loading />
    } else {
      return <Navigate state={302} to={{pathname: '/'}}/>
    }
  }

  return (
    <React.Fragment>
        <MediaQuery minWidth={1024}>
          <Helmet>
            <title>Kaillut - Dashboard</title>
          </Helmet>
          { checkTokenValid() }
        </MediaQuery>
    </React.Fragment>
  )
}