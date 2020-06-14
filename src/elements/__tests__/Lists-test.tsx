import 'react-native';

import * as React from 'react';
import renderer from 'react-test-renderer';

import { LI, UL } from '../Lists';

it(`renders UL nested in LI`, () => {
  const tree = renderer.create(
    <LI>
      <LI>item</LI>
      <UL>
        <LI>item</LI>
      </UL>
    </LI>
  );
  expect(tree).toMatchSnapshot();
});
