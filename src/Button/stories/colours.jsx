import React from 'react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'

import { Button } from '../../index'
import { GridLayout } from '../../util'
import { ThemeProvider } from '../../styles'
import accentTheme from '../../styles/themes/accent'
import coreTheme from '../../styles/themes/core'
import defaultTheme from '../../styles/themes/default'

const COLOURS = ['default', 'primary', 'secondary']

const md = `
# Colours

The \`<Button>\` component has three different colours:

* \`default\`: A button with no visual emphasis, it should be used for
  everything else.
* \`primary\`: A button with the highest visual emphasis, it should be used for
  primary actions like "Create", "Save", "Publish", etc.
* \`secondary\`: A button with an alternate visual emphasis, it should be used
  for auxilary actions like "Delete", "Suspend", etc.

You can set the colour of a button using the \`colour\` prop:

~~~js
<Button colour='primary'>
  Click Me!
</Button>
~~~

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <React.Fragment>
    <ThemeProvider theme={defaultTheme()}>
      <GridLayout>
        {COLOURS.map((colour) =>
          <Button key={colour} colour={colour} onClick={action(colour)}>
            {colour}
          </Button>
        )}
      </GridLayout>
    </ThemeProvider>

    <ThemeProvider theme={coreTheme()}>
      <GridLayout>
        {COLOURS.map((colour) =>
          <Button key={colour} colour={colour} onClick={action(colour)}>
            {colour}
          </Button>
        )}
      </GridLayout>
    </ThemeProvider>

    <ThemeProvider theme={accentTheme()}>
      <GridLayout>
        {COLOURS.map((colour) =>
          <Button key={colour} colour={colour} onClick={action(colour)}>
            {colour}
          </Button>
        )}
      </GridLayout>
    </ThemeProvider>
  </React.Fragment>
)
