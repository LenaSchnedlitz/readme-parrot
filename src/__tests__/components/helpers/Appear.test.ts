import { render, screen } from '@testing-library/svelte';
import Appear from '../../../components/helpers/Appear.svelte';

describe('Appear Component', () => {
  it('should _NOT_ be visible when configured to be hidden', () => {
    render(Appear, { hidden: true });

    expect(screen.getByTestId('appear')).not.toBeVisible();
  });

  it('should be visible when _NOT_ configured to be hidden', () => {
    render(Appear);

    expect(screen.getByTestId('appear')).toBeVisible();
  });
});
