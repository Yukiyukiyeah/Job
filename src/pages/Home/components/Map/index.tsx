/*
 * @Author: your name
 * @Date: 2021-01-14 02:59:07
 * @LastEditTime: 2021-01-14 10:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JobList/job/src/pages/Home/components/Map/index.jsx
 */
import React, {Component} from 'react';
import { Card } from 'antd';
import Tencent from './Tencent';

export default class Map extends Component {
  render() {
    return (
      <div>
        <Card
          bordered={false}
          style={
            {
              width: 500,
              height:450,
              position: 'relative',
              bottom: 23,
              left: 23
            }
          }
        >
          <Tencent />
        </Card>
      </div>
    )
  }
}
