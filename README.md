# gatsby-plugin-splitio

The plugin provides an easy integration for the [React Client SDK](https://github.com/splitio/react-client) of [Split.io](https://www.split.io/) to use Feature Flags within GatsbyJS.

## Installation

with yarn  
`yarn add gatsby-plugin-splitio`

with npm  
`npm install --save gatsby-plugin-splitio`

## How to use the plugin

1. Get an account at [Split.io](https://www.split.io/)
2. Get the authorizationKey in the app of Split.io  
   `Admin Settings -> API Keys -> Javascript SDK (browser)`
3. Get the key at  
   `Admin Settings -> All Environments`

Add the plugin with the respective options in your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-splitio`,
      options: {
        authorizationKey: ``,
        key: ``,
      },
    },
  ],
}
```

## Simple Example

Place the TestToggle component into your components directory and use it in one of your pages. Rename `YOUR_FEATURE` to one of the feature names you added to your Split account.

```jsx
// TestToggle.js
import React from 'react'
import { SplitTreatments } from 'gatsby-plugin-splitio'

const feature = 'YOUR_FEATURE'

const TestToggle = () => (
  <SplitTreatments names={[feature]}>
    {({ treatments }) => {
      const treatment = treatments[feature].treatment
      return (
        <>
          {treatment === 'on' ? (
            <VariantOne treatment={treatment} feature={feature} />
          ) : (
            <VariantTwo treatment={treatment} feature={feature} />
          )}
        </>
      )
    }}
  </SplitTreatments>
)

function VariantOne({ treatment, feature }) {
  return (
    <div style={{ padding: `1rem`, backgroundColor: `HONEYDEW` }}>
      <h2>Component: Variant One</h2>
      <p>
        Feature: <b>{feature}</b> with{' '}
        <a href="https://help.split.io/hc/en-us/articles/360038825091-React-SDK#using-the-sdk">
          Split.io
        </a>{' '}
        is {treatment}
      </p>
    </div>
  )
}

function VariantTwo({ treatment, feature }) {
  return (
    <div style={{ padding: `1rem`, backgroundColor: `LAVENDERBLUSH` }}>
      <h2>Component: Variant Two</h2>
      <p>
        Feature: <b>{feature}</b> with{' '}
        <a href="https://help.split.io/hc/en-us/articles/360038825091-React-SDK#using-the-sdk">
          Split.io
        </a>{' '}
        is {treatment}
      </p>
    </div>
  )
}

export default TestToggle
```

## Advanced Usage

More detailed information describes the [help page of Split.io](https://help.split.io/hc/en-us/articles/360038825091-React-SDK#using-the-sdk)

## Named Exports

The plugin exposes these named exports:

### Components

- SplitTreatments
- SplitClient
- SplitContext

### Hooks

- useTreatments
- useManager
- useTrack

### HoC

- withSplitTreatments
- withSplitClient

## Contribution

Please reach out for any question regarding this plugin or open a PR if you would like add or amend something.
