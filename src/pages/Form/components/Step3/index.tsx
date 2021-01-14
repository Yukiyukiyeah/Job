import { Form, Button,  Input } from 'antd';
import React from 'react';
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

interface Step3Props {
  data?: StateType['step'];
  dispatch?: Dispatch<any>;
}

const Step3: React.FC<Step3Props> = (props) => {
  const [form] = Form.useForm();
  const { data, dispatch, submitting } = props;
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
        payload: 'jobinfo',
      });
    }
  };
  const onValidateForm = async () => {
    const values = await validateFields();
    if (dispatch) {
      dispatch({
        type: 'formAndstepForm/submitStepForm',
        payload: {
          ...data,
          ...values,
        },
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
          label="hostName"
          name="hostName"
          rules={[{ message: 'Please enter your name' }]}
        >
          <Input placeholder="Please enter your name" />
        </Form.Item>
        <Form.Item
          label="hostType"
          name="hostType"
          rules={[{  message: 'Please enter the type' }]}
        >
          <Input placeholder="Please enter the type" />
        </Form.Item>
        <Form.Item
          label="hostDesc"
          name="hostDesc"
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
        <Button type="primary" onClick={onValidateForm} loading={submitting}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(({
  formAndstepForm,
  loading,
}: {
  formAndstepForm: StateType;
  loading: {
    effects: { [key: string]: boolean };
  };
}) => ({
  submitting: loading.effects['formAndstepForm/submitStepForm'],
  data: formAndstepForm.step,
}),)(Step3);
