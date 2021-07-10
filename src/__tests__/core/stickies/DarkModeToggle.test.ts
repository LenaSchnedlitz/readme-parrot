import { fireEvent, render, screen } from '@testing-library/svelte';
import DarkModeToggle from '../../../core/stickies/DarkModeToggle.svelte';
import { setMatchMedia } from '../../utils';

describe('DarkModeToggle Component', () => {
  beforeAll(() => {
    setMatchMedia(false);
  });

  it('should start in light mode by default', async () => {
    const { container } = render(DarkModeToggle);

    const toggle = container.querySelector('input[type=checkbox]') as HTMLInputElement;
    expect(toggle.checked).toBe(true);
    expect(screen.getByText('light mode')).toBeInTheDocument();
  });

  it('should toggle mode', async () => {
    const { container } = render(DarkModeToggle);

    const toggle = container.querySelector('input[type=checkbox]') as HTMLInputElement;
    await fireEvent.click(toggle);

    expect(toggle.checked).toBe(false);
    expect(screen.getByText('dark mode')).toBeInTheDocument();
  });

  it('should start in dark mode when user prefers dark mode', async () => {
    setMatchMedia(true); // match prefers-dark-mode query
    const { container } = render(DarkModeToggle);

    const toggle = container.querySelector('input[type=checkbox]') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
    expect(screen.getByText('dark mode')).toBeInTheDocument();
  });
});
