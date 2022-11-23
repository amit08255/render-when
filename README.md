# Render When

A zero-dependency lightweight clean conditional rendering component for React.

It works similar to if-else and switch case. If first condition gets true in the children tree, then only that one will be executed. An optional props `limit` will allow to limit the number of true conditions to render at a time. By default `limit` is 1. There is another optional props `isTrue` in ReactWhen which allows you to set condition for entire parent conditional component.

## RenderWhen Component

| **Prop Name** | **Is Required** | **Default Value** |
|---------------|-----------------|-------------------|
| children      | Yes             | -                 |
| isTrue        | No              | true              |
| limit         | No              | 1                 |


## RenderWhen.If Component

| **Prop Name** | **Is Required** | **Default Value** |
|---------------|-----------------|-------------------|
| children      | Yes             | -                 |
| isTrue        | Yes             | -                 |


## Examples

**Example 1:**

```tsx
import React from 'react';

export function App(props) {
  const x = 2;

  return (
    <RenderWhen>
      <RenderWhen.If isTrue={x === 2}>
        Hello 2
      </RenderWhen.If>
      <RenderWhen.If isTrue={x === 2}>
        Bye 2
      </RenderWhen.If>
    </RenderWhen>
  );
}
```

**Example 2:**

```tsx

export function App(props) {
  const day = 'Monday';

  return (
    <RenderWhen>
      <RenderWhen.If isTrue={day === 'Sunday'}>
        Let's go to picnic!
      </RenderWhen.If>
      <RenderWhen.If isTrue={day === 'Saturday'}>
        Let's plan for weekend man!
      </RenderWhen.If>
      <RenderWhen.If isTrue={day === 'Friday'}>
        Party tonight
      </RenderWhen.If>
      <RenderWhen.If isTrue>
        Boring weekdays
      </RenderWhen.If>
    </RenderWhen>
  );
}
```
