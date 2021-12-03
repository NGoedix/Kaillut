import React from 'react';
import MediaQuery from 'react-responsive';

import MenuPc from '../../components/menu/menuPc';
import MenuMobile from '../../components/menu/menuMobile';

// TODO responsive
import '../../styles.css'

export function Main() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={768}>
        <MenuPc />
      </MediaQuery>
    </React.Fragment>
  )
}