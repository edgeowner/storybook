import React from 'react';
import { storiesOf } from '@storybook/react';
import { baseFonts } from '@storybook/components';

import { Viewport, withViewport } from '@storybook/addon-viewport';

// eslint-disable-next-line react/prop-types
const Panel = ({ children }) => <div style={baseFonts}>{children}</div>;

storiesOf('Addons|Viewport', module).add('default', () => (
  <Panel>I don't have problems being rendered using the default viewport.</Panel>
));

storiesOf('Addons|Viewport.Custom Default (Kindle Fire 2)', module)
  .addDecorator(withViewport('kindleFire2'))
  .add('Inherited', () => (
    <Panel>
      I've inherited <b>Kindle Fire 2</b> viewport from my parent.
    </Panel>
  ))
  .add(
    'Overridden via "withViewport" decorator',
    withViewport('iphone6')(() => (
      <Panel>
        I respect my parents but I should be looking good on <b>iPhone 6</b>.
      </Panel>
    ))
  )
  .add('Overridden via "Viewport" component', () => (
    <Viewport name="iphone6p">
      <Panel>
        I respect my parents but I should be looking good on <b>iPhone 6 Plus</b>.
      </Panel>
    </Viewport>
  ));
