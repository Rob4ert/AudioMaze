import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Container from './Container';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Container />);

  expect(asFragment).toMatchSnapshot();
});
