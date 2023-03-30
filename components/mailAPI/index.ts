import axios from 'axios';

export const config = {
  baseURL: `/api/contact`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const configFeedback = {
  baseURL: `/api/feedback`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const mailAPI = axios.create(config);
export const feedbackAPI = axios.create(configFeedback);
