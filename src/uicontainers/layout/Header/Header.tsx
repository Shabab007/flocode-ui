import React from 'react';
import { Image, Layout } from 'antd';

import Navigation from 'uicontainers/layout/Navigation';

import styles from './Header.module.css';

export const Header = () => {
  const logo =
    'https://www.flowcode.com/_next/image?url=%2Flogos%2FflowcodeTM_horizontal_white.svg&w=256&q=100';

  return (
    <Layout.Header className={styles.headerStyle}>
      <div className={styles.headerLogo}>
        <Image preview={false} width="100%" src={logo} />
      </div>
      <Navigation />
    </Layout.Header>
  );
};

export default Header;
