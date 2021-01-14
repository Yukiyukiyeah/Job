import React from 'react';
import { Form, Button,  Input } from 'antd';
import { connect, Dispatch } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
interface Step2Props {
  data?: StateType['step'];
  dispatch?: Dispatch<any>;
}

const Step2: React.FC<Step2Props> = (props) => {
  const { dispatch, data } = props;
  const [form] = Form.useForm();

  if (!data) {
    return null;
  }
  const { validateFields, getFieldsValue } = form;
  const onPrev = () => {
    if (dispatch) {
      const values = getFieldsValue();
      dispatch({
        type: 'formAndstepForm/saveStepFormData',
        payload: {
          ...data,
          ...values,
        },
      });
      dispatch({
        type: 'formAndstepForm/saveCurrentStep',
        payload: 'basicinfo',
      });

    }
  };
  const onValidateForm = async () => {
    const values = await validateFields();
    if (dispatch) {
      dispatch({
        type: 'formAndstepForm/saveStepFormData',
        payload: values,
      });
      dispatch({
        type: 'formAndstepForm/saveCurrentStep',
        payload: 'hostinfo',
      });
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="horizontal"
      className={styles.stepForm}
      initialValues={{ data }}
    >
      <Form.Item
          label="jobName"
          name="jobName"
          rules={[{ message: 'Please enter your name' }]}
        >
          <Input placeholder="Please enter your name" />
        </Form.Item>
        <Form.Item
          label="jobType"
          name="jobType"
          rules={[{ message: 'Please enter the type' }]}
        >
          <Input placeholder="Please enter the type" />
        </Form.Item>
        <Form.Item
          label="jobDesc"
          name="jobDesc"
          rules={[{ message: 'Please enter the description' }]}
        >
          <Input.TextArea placeholder="Please enter the description" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
        >
          <Button onClick={onPrev} style={{ marginLeft: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm}>
            下一步
          </Button>
      </Form.Item>

    </Form>
  );
};
export default connect(
  ({
    formAndstepForm
  }: {
    formAndstepForm: StateType;
  }) => ({
    data: formAndstepForm.step,
  }),
)(Step2);
