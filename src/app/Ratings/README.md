# Ratings

This page shows a summary of all project ratings with a highlight on the logged in user's reviews. This folder contains a variety smaller re-usable components. These components are described below.

- **[Average Rating](./avgRating.jsx)** - Utilized in the [Projects Menu](../header/projectsMenu.jsxMenu.jsx) and on the [Projects Page](../projects/page.jsx). The rating component is used to show the average rating and summarize quantity of reviews and comments.

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

<details>
<summary>Average Rating</summary>

![Rating](/img/Rating.png)

</details>

## Anatomy

<details>
<summary>Average Rating</summary>

### Average Rating

The anatomy of this component can be broken down into two three parts: Rating, Reviews, Comments. The **Raating** portion is required and contains the stars. The **Reviews** and **Comments** portion are both optional and will not display if left _null_.

<table>
<tr><td>

![Rating Anatomy](/img/RatingAnatomy.png)

</td><td>

| Section  | Panel  | Details                                                                            |
| -------- | :----: | ---------------------------------------------------------------------------------- |
| Label    |  Top   | The text 'Rating' to display in front of the stars.                                |
| Stars    |  Top   | Five star icons that are filled based on the **rating** property.                  |
| Reviews  |  Top   | The text 'Reviews' and the value of **reviewCount** displayed beside the stars.    |
| Comments | Bottom | The text 'Comments' and the value **commentCount** displayed underneath the stars. |

</td></tr>
</table>
</details>

## Properties

<details>
<summary>Average Rating</summary>

### Average Rating

All rating, reviewCount, and commentCount properties shoud be calculated by the parent element and passed to the component as the type specified.

| Property     |  Type   | Description                                                             |
| ------------ | :-----: | ----------------------------------------------------------------------- |
| className    | string  | Class name to be used on the individua stars for filled stars.          |
| size         | string  | Size of the logo ('small', 'medium', 'large', 'x-large') OR pixel size. |
| rating       | number  | Number of stars to be filled. (_Star Rating: 1- 5_)                     |
| reviewCount  | integer | Total count of reviews. _(Optional)_                                    |
| commentCount | integer | Total count of comments included in the reviews. _(Optional)_           |

</details>

## Getting Started

<details>
<summary>Average Rating</summary>

### Average Rating

To use this component throughout the application follow these simple steps:

- Import the module into the component you wan to use it in
- Use the React component format and include the required **_rating_** property

```jsx
import Rating from '../Ratings/avgRating'

export default function MyComponent() {
	return <Rating size='small' rating={3.6} reviewCount={3} commentCount={2} />
}
```

</details>
