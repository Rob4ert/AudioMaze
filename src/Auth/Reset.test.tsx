import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Reset from './Reset';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Reset />);

  expect(asFragment).toMatchSnapshot();
});
