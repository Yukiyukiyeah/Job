import React, {Component} from 'react';
import { Card, Col, Row, Badge } from 'antd';
import { FormattedMessage } from 'umi';


export default class GlobalJobs extends Component {
  render() {
    return (
      <div>
        <Card
          title={
            <FormattedMessage
              id="globaljobs"
              defaultMessage="Global Jobs"
            />
          }
          bordered={false}
        >
        <Row>
          <Col span={18}>
            <Badge status="success" />
            Success
          </Col>
          <Col span={6}>
            <p style={{float: 'right'}}><b>16</b></p>
          </Col>
        </Row>
        <Row>
            <Col span={18}>
              <Badge status="error" />
              Failed
            </Col>
            <Col span={6}>
              <p style={{float: 'right'}}><b>15</b></p>
            </Col>
        </Row>
        <Row>
        <Col span={18}>
              <Badge status="processing" />
              Running
            </Col>
            <Col span={6}>
              <p style={{float: 'right'}}><b>24</b></p>
            </Col>
        </Row>
        </Card>
      </div>
    )
  }
}
