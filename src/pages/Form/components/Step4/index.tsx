import {  Result, Descriptions } from 'antd';
import React from 'react';
import { connect, Dispatch } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';

interface Step4Props {
  data?: StateType['step'];
  dispatch?: Dispatch<any>;
}

const Step4: React.FC<Step4Props> = (props) => {
  const { data, dispatch } = props;
  if (!data) {
    return null;
  }
  const { name, jobName, hostName } = data;
  const information = (
    <div className={styles.information}>
      <Descriptions column={1}>
        <Descriptions.Item label="name"> {name}</Descriptions.Item>
        <Descriptions.Item label="job"> {jobName}</Descriptions.Item>
        <Descriptions.Item label="host"> {hostName}</Descriptions.Item>
      </Descriptions>
    </div>
  );

  return (
    <Result
      status="success"
      title="成功"
      className={styles.result}
    >
      {information}
    </Result>
  );
};

export default connect(({ formAndstepForm }: { formAndstepForm: StateType }) => ({
  data: formAndstepForm.step,
}))(Step4);
