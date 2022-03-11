import React from 'react';
import MediaQuery from 'react-responsive';

import Dashboard from '../../components/dashboard/Dashboard'

export default function Main() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={1024}>
        <Dashboard />
      </MediaQuery>
    </React.Fragment>
  )
}