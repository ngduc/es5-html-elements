import 'react-native';

import * as React from 'react';
import renderer from 'react-test-renderer';

import * as Headings from '../Headings';

for (const name of Object.keys(Headings)) {
  const Heading = Headings[name];
  it(`renders ${name}`, () => {
    const tree = renderer.create(<Heading />);
    expect(tree).toMatchSnapshot();
  });
}
