# Icons

The [Icons page](https://JOsborne.dev/Icons) is a backend administrator page used for viewing, searching, and tracking use of all icons found on the JOsborne.dev site.

The [Icons Component](./icon.jsx) is used throughout the site to consistently display the icon as an SVG with inheritted styling and flexible sizing.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#anatomy">Anatomy</a></li>
    <li><a href="#properties">Properties</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## Anatomy

## Properties

The [Icons page](https://JOsborne.dev/Icons) utilizes the search bar to help filter. The filter properties are listed below and are capable of being queried using URL parameters.

| Property |  Type  | Description                                                               |
| -------- | :----: | ------------------------------------------------------------------------- |
| q        | string | Any query text string _(Icon **name** must contain the provided text)_    |
| type     | string | Selectable options in the Icons header menu. _(UI \|Navigations \| Logo)_ |

<details>
  <summary>Icon Component</summary>

| Property  |     Type      | Description                                                            |
| --------- | :-----------: | ---------------------------------------------------------------------- |
| name      |    string     | Any query text string _(Icon **name** must contain the provided text)_ |
| size      | string/number | Size options from list _(sm \|md\| lg \| xl)_ OR pixel size as number  |
| className |    string     | Tailwind fill class _(Default inherits current Color)_                 |
| onClick   |   function    | Any function passed down from parent component.                        |

</details>

## Getting Started

<details>
  <summary>Icon Component</summary>

To use this component throughout the application follow these simple steps:

- Import the module into the component you want to use it in
- - Use the React component format and include the **name** property.
- All other properties are optional

```jsx
import Icon from '../Icons/icon'

export default YourComponent(){
  const RunFunction = () => {
    console.log('Function Ran')
    }
  return (
    // Other page components or html . . .
    <Icon name='example1' /> // size = 40px
    <Icon name='example2' size='sm' /> // size = 20px
    <Icon name='example3' size={30} /> // size = 30px
    <Icon name='example4' className='fill-primary' /> // fill is primary color
    <Icon name='example5' onClick={RunFunction} /> // runs the defined function onClick
  )
}
```

</details>
