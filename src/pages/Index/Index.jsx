import React from 'react';
import MediaQuery from 'react-responsive';

import MenuPc from '../../components/menu/menuPc';
import MenuMobile from '../../components/menu/menuMobile';

export default function Main() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={768}>
        <MenuPc />
      </MediaQuery>
    </React.Fragment>
  )
}