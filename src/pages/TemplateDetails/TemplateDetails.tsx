import React from 'react';

import { Col, Row, Space } from 'antd';

import FCFileUploader from 'components/FCFileUploader';

import FCDropDown from 'components/FCDropdown';

import VideoPlayer from 'components/VideoPlayer';

import styles from './TemplateDetails.module.scss';

const options = [
  { value: 'sdfjssdsd', key: 'sdkjfskd' },
  { value: 'sdfjs', key: 'sdkjfss' },
];

const TemplateDetails = () => {
  return (
    <>
      <Row justify="center" gutter={[18, 0]} className={styles.container}>
        <Col span={8} className="gutter-row">
          <div>
            <Row gutter={[0, 3]}>
              <Col span={24} className="gutter-row">
                <div className={styles.tabs}>Tabs</div>
              </Col>
              <Col span={24} className="gutter-row">
                <div className={styles.tabDetails}>Tab details</div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={13} className="gutter-row">
          <div>
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <div className={styles.overlayOptions}>Overlay options</div>
              </Col>
              <Col span={24}>
                <div className={styles.player}>Video Player Component</div>
              </Col>
              <Col span={24}>
                <div className={styles.player}>
                  <VideoPlayer durationInFrames={300} playerBackgroundColor="#fff" />
                </div>
              </Col>
              <Col span={24}>
                <div className={styles.templateNameSection}>Template Name Component</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Space direction="vertical" size="large">
        <FCDropDown headerText={'Icon Select'} options={options} />
        <FCFileUploader
          titleText={'Side rail image'}
          bottomText={'Please upload an image with 474 X 817px and max 5MB'}
          buttonText={'Upload'}
          resize={true}
        />
      </Space>
    </>
  );
};

export default TemplateDetails;
