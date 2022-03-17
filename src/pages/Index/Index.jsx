import React from 'react';
import MediaQuery from 'react-responsive';

import Menu from '../../components/menu/menuPc/menu';
import MenuMobile from '../../components/menu/menuMobile/menuMobile';

export default function Main() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={1081}>
        <Menu />
      </MediaQuery>
      <MediaQuery maxWidth={1080}>
        <MenuMobile />
      </MediaQuery>
    </React.Fragment>
  )
}