# Experience Meter

The experience meter is utilized in the [About Menu](../header/aboutMenu.jsx) and on the [About Page](../about/page.jsx). The experience meter shows a progress bar that indicates the number of years I have used the technology compared to the number of years I have been designing/developing _(Since March 2014)_.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#conceptual-design">Conceptual Design</a></li>
    <li><a href="#anatomy">Anatomy</a></li>
    <li><a href="#properties">Properties</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## Conceptual Design

![Experience Meter](/img/ExperienceMeter.png)

## Anatomy

The experience meter can be broken down into three panels: Label, Meter, and Details. The label consist of the technology and the icon, which uses the [React Aria Label component](https://react-spectrum.adobe.com/react-aria/forms.html#labels-and-help-text). The **meter** also uses [React Aria Meter compnent](https://react-spectrum.adobe.com/react-aria/ProgressBar.html#meter) and the _**details**_ are integrated into this component. The _**details**_ portion is inheritted from the **valueLabel** property and displays the number of years.

<table>
<tr><td>

![Experience Meter Anatomy](/img/ExperienceMeterAnatomy.png)

</td><td>

| Section   |  Panel  | Details                                                                   |
| --------- | :-----: | ------------------------------------------------------------------------- |
| Icon      |  Label  | Technology SVG icon pulled from the [Icons Generator](../icons/README.md) |
| Technoogy |  Label  | Name of the technology being evaluated _(tech.name) _                     |
| Meter     |  Meter  | React Aria component shows visual representation of experience            |
| Details   | Details | Visible number of years using the technology                              |

</td></tr>
</table>

## Properties

The majority of the properties for this component are inheritted from the React Aria components, however the **tech** property is the defining property which pulls in all the information required for the component.

| Property   |  Type  | Description                                                              | React Aria |
| ---------- | :----: | ------------------------------------------------------------------------ | :--------: |
| tech       | object | JSON object returned from **[Technology](/README.md)** table in database |            |
| value      | number | Number of years of experience with technology _(Based off Start Date)_   |     ✓      |
| maxValue   | number | Number of years developing _(Based on first SharePoint project)_         |     ✓      |
| valueLabel | string | Label to show beside the bar _(## years)_                                |     ✓      |

## Getting Started

To use this component throughout the application follow these simple steps:

- Import the module into the component you wan to use it in
- Use the React component format and include the **tech** property as an object with the following keys:
  - **name** - The name of the technology
    - _(Example: SharePoint)_
  - **startDate** - The date of the first project using this technology
    - _Example: Date.Parse('3/1/2014')_
    - **Must be in JavaScript Date format.**

```jsx
import ExperienceMeter from '../experienceMeter/layout';

<ExperienceMeter tech={tech} />;
```
