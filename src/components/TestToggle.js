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
