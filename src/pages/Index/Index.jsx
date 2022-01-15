import React from 'react';
import MediaQuery from 'react-responsive';

import Menu from '../../components/menuPc/menu';
import MenuMobile from '../../components/menuMobile/menuMobile';

export default function Main() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={1080}>
        <Menu />
      </MediaQuery>
    </React.Fragment>
  )
} 