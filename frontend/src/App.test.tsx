import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom';
import GoogleLogin from 'react-google-login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const googleLogin = (response) => {
// login 로직 구현
  const option = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    data: {
      accessToken: response.accessToken
    },
    url: this.serverHost + '/auth/googleLogin'
  };

  try {
    return await axios(option);
  } catch (e) {
    throw e
  }

}
