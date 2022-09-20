import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Ranking from './Ranking';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Ranking />);

  expect(asFragment).toMatchSnapshot();
});
