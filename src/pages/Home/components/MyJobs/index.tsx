import React, { Component } from 'react';
import { Card, Button, Badge, Row, Col } from 'antd';
import { Pie } from '@ant-design/charts';
import { FormattedMessage } from 'umi';

let data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其他',
    value: 5,
  },
]

let config = {
  appendPadding: 10,
  data: data,
  angleField: 'value',
  colorField: 'type',
  radius: 1,
  innerRadius: 0.6,
  label: {
    type: 'inner',
    offset: '-50%',
    content: '{value}',
    style: {
      textAlign: 'center',
      fontSize: 12,
    },
  },
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      formatter: function formatter() {
        return '';
      },

    },
  },
};

export default class MyJobs extends Component {
  render() {
    return (
      <div>
        <Card
          title={
            <FormattedMessage
              id="myjobs"
              defaultMessage="My Jobs"
            />
          }
          bordered={false}
        >
           <Pie {...config} />
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
          <div style ={{margin: 50}}></div>
          <Row>
            <Button type="primary" href="/form" block>Create Job</Button>
          </Row>

        </Card>
      </div>
    )
  }
}
