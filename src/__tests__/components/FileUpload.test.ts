import { fireEvent, render, screen } from '@testing-library/svelte';
import FileUpload from '../../components/FileUpload.svelte';

describe('FileUpload Component', () => {
  it('should render configured label', () => {
    render(FileUpload, { label: 'My Custom Label', onchange: jest.fn() });

    expect(screen.getByText('My Custom Label')).toBeInTheDocument();
  });

  it('should run `onchange` when value changes', async () => {
    const mockChangeHandler = jest.fn();
    const { container } = render(FileUpload, { onchange: mockChangeHandler });

    const input = container.querySelector('input[type=file]');
    await fireEvent.change(input, { target: { value: '' } });

    expect(mockChangeHandler).toHaveBeenCalled();
  });
});
