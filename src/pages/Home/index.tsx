import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {  Col, Row } from 'antd';
import MyJobs from './components/MyJobs';
import GlobalJobs from './components/GlobalJobs';
import Map from './components/Map';
import Servers from './components/Servers';

export default (): React.ReactNode => {
  return (
    <PageContainer>
        <Row gutter={[24, 24]} justify="space-around" align="bottom">
          <Col xl={8} lg={8} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <MyJobs />
          </Col>
          <Col xl={16} lg={16} md={24} sm={24} xs={24} >
              <Row gutter={[24, 18]}>
                <Map />
              </Row>
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <GlobalJobs />
                </Col>
                <Col span={8}>
                  <Servers />
                </Col>
              </Row>
          </Col>
        </Row>
    </PageContainer>
  );
};
