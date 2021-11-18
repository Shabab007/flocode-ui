import React from 'react';

import { Col, Row } from 'antd';

import TemplateCard from 'components/TemplateCard';

import { ALL_TEMPLATES, RESPONSIVE_ROW_GUTTER } from './constants';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.bodyHeader}>
        <Row className={styles.body} gutter={RESPONSIVE_ROW_GUTTER}>
          {ALL_TEMPLATES.map((template) => (
            <Col className={styles.card} span={8}>
              <TemplateCard {...template} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
