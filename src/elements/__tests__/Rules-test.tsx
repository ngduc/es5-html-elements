import 'react-native';

import * as React from 'react';
import renderer from 'react-test-renderer';

import { HR } from '../Rules';

it(`renders HR`, () => {
  const tree = renderer.create(<HR />);
  expect(tree).toMatchSnapshot();
});
