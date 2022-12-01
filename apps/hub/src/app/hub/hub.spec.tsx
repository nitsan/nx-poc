import { render } from '@testing-library/react';

import Hub from './hub';

describe('Hub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hub />);
    expect(baseElement).toBeTruthy();
  });
});
