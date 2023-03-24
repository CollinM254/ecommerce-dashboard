import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SizeOptions from '../SizeOptions';

test('size option background change works properly', () => {
  const { getByText } = render(<SizeOptions sizeOptions={['L', 'XL', 'XS']} />);

  const sizeXL = getByText('XL');
  fireEvent.click(sizeXL);
  const updatedSizeXL = getByText('XL');
  expect(getComputedStyle(updatedSizeXL).backgroundColor).toBe('rgb(251, 235, 181)');
});
