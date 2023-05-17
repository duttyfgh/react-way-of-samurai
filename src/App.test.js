import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import SamuraiJSApp from './App';
import ProfileStatus from './components/profile/profileStatus/ProfileStatus';
import ProfileStatusWithHooks from './components/profile/profileStatus/profileStatusWithHooks';

test('renders learn react link', () => {
  const div = document.createElement('div')
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div)
});
