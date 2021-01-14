/*
 * @Author: your name
 * @Date: 2021-01-14 01:59:42
 * @LastEditTime: 2021-01-14 04:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JobList/job/src/pages/Form/model.ts
 */
import { Effect, Reducer } from 'umi';

import { fakeSubmitForm } from './service';

export interface StateType {
  current?: string;
  step?: {
    name: string;
    jobName: string;
    hostName: string;
  };
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    submitStepForm: Effect;
  };
  reducers: {
    saveStepFormData: Reducer<StateType>;
    saveCurrentStep: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'formAndstepForm',

  state: {
    current: '',
    step: {
      name: '',
      jobName: '',
      hostName: '',
    },
  },

  effects: {
    *submitStepForm({ payload }, { call, put }) {
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put({
        type: 'saveCurrentStep',
        payload: 'result',
      });
    },
  },

  reducers: {
    saveCurrentStep(state, { payload }) {
      return {
        ...state,
        current: payload,
      };
    },

    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...(state as StateType).step,
          ...payload,
        },
      };
    },
  },
};

export default Model;
