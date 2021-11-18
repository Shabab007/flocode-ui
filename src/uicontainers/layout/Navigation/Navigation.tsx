import React from 'react';
import { Button, Menu } from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <Menu mode="horizontal" className={styles.menuContainer}>
        <Menu.Item key={1}>
          <Button type={'link'} className={styles.loginButton}>
            <PlusOutlined /> Create New
          </Button>
        </Menu.Item>
        <Menu.Item key={2}>
          <Button type={'link'} className={styles.navButton}>
            Learn More <DownOutlined />
          </Button>
        </Menu.Item>
        <Menu.Item key={3}>
          <Button type={'link'} className={styles.navButton}>
            FAQ <DownOutlined />
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
