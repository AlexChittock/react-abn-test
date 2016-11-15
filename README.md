# Declarative A/B/n Testing in React
[![NPM Version](https://badge.fury.io/js/react-abn-test.svg)](https://badge.fury.io/js/react-abn-test)
[![Dependency Status](https://david-dm.org/AlexChittock/react-abn-test.svg)](https://david-dm.org/AlexChittock/react-abn-test)

Simple declarative ABN testing for React


```jsx
<Experiment name="Example Experiment">
  <Variant name="A">
    <button>Click me!</button>
  </Variant>
  <Variant name="B">
    <button>Please click me!</button>
  </Variant>
</Experiment>
```

Send data to your chosen provider using `onImpression`:


```jsx
const track = (experiment, variant) => {
  let obj = {}
  obj[experiment] = variant
  mixpanel.register_once(obj)
}

const win = () =>
  mixpanel.track("win")

<Experiment name="Example Experiment" onImpression={track}}>
  <Variant name="A">
    <button onClick={win}>Click me!</button>
  </Variant>
  <Variant name="B">
    <button onClick={win}>Please click me!</button>
  </Variant>
</Experiment>
```

Change the variant weights:

```jsx
const track = (experiment, variant) => {
  let obj = {}
  obj[experiment] = variant
  mixpanel.register_once(obj)
}

const win = () =>
  mixpanel.track("win")

<Experiment name="Example Experiment" onImpression={track}}>
  <Variant name="A" weight="5">
    <button onClick={win}>Click me!</button>
  </Variant>
  <Variant name="B" weight="1">
    <button onClick={win}>Please click me!</button>
  </Variant>
</Experiment>
```

Persist variant selection using Local Storage:

```jsx
import {Experiment, Variant, Persistence} from 'react-abn-test'

const track = (experiment, variant) => {
  let obj = {}
  obj[experiment] = variant
  mixpanel.register_once(obj)
}

const win = () =>
  mixpanel.track("win")

<Experiment name="Example Experiment" onImpression={track}} persistence={Persistence.LocalStoragePersistence}>
  <Variant name="A" weight="5">
    <button onClick={win}>Click me!</button>
  </Variant>
  <Variant name="B" weight="1">
    <button onClick={win}>Please click me!</button>
  </Variant>
</Experiment>
```
