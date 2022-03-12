import React from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import Dashboard from '../../components/dashboard/Dashboard'

export default function Main() {
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