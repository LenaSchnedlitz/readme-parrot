import { render, screen } from '@testing-library/svelte';
import Link from '../../components/Link.svelte';

describe('Link Component', () => {
  it('should render a link with configured href', () => {
    render(Link, { href: '/expected' });

    expect(screen.getByRole('link').getAttribute('href')).toBe('/expected');
  });

  it('should have an icon if link is marked as external', () => {
    render(Link, { href: 'https://www.lenaschnedlitz.me', external: true });

    const link = screen.getByRole('link');
    expect(link.children.length).toBe(2);
    expect(link.children[1].tagName).toBe('svg');
  });

  it('should use target="_blank" if link is marked as external', () => {
    render(Link, { href: 'https://www.lenaschnedlitz.me', external: true });

    expect(screen.getByRole('link').getAttribute('target')).toBe('_blank');
  });
});
