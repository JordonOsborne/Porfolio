![Site Logo](/img/Logo.png)

This is a porfolio website showcases my skills from the 9 years working with Eastman Chemical Company, as well as the personal development I have made in HTML, CSS, and JavaScript.

This site is intended to replace the [JOsborne.dev](https://www.JOsborne.dev) HTML/CSS only site using the Next.JS platform.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#conceptual-design">Conceptual Design</a></li>
    <li><a href="#style-guide">Style Guide</a></li>
    <li><a href="#anatomy">Anatomy</a></li>
    <li><a href="#data-structure">Data Structure</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

<!-- DEPENDENCIES -->

## Dependencies

<table>
<tr><th>Module</th><th>NPM Install</th><th>Details</th></tr>
<tr><td><img alt='Next JS' src='img/NextJS.png' width=30px height=30px /></td><td>

```bash
npx create-next-app@latest
```

</td><td>JavaScript/React Framework</td></tr>
<tr><td><img alt='Tailwind CSS' src='img/Tailwind.png' width=30px height=30px /></td><td>
</td><td>CSS Framework installed with Next JS</td></tr>
<tr><td><img alt='Firebase' src='img/Firebase.png' width=30px height=30px /></td><td>

```bash
npm install firebase
```

</td><td>Authentication, Database and Storage</td></tr>
<tr><td><img alt='React Icons' src='img/ReactIcons.png' width=30px height=30px /></td><td>

```bash
npm install react-aria
```

</td><td>Components library fully supported with accessibility tags and symantic HTML</td></tr>
</table>

## Conceptual Design

## Style Guide

### Brand Colors

Brand colors are used throughout the design and are consistent in both light and dark themes. You can view the formal documentation in PDF format [here](/guide/Colors.pdf).

<table>
<tr><td>

#### PRIMARY

_#367CFF_

![#367CFF](https://placehold.co/350x50/367CFF/367CFF.png)

| Shades                                                   | Variable    |   Hex   |        RGB        |
| -------------------------------------------------------- | ----------- | :-----: | :---------------: |
| ![#1B3E7F](https://placehold.co/15x15/1B3E7F/1B3E7F.png) | primary-900 | #1B3E7F | rgb(27, 62 ,127)  |
| ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) | primary-800 | #2556B2 | rgb( 37, 86, 178) |
| ![#86B0FF](https://placehold.co/15x15/86B0FF/86B0FF.png) | primary-700 | #86B0FF |        ---        |
| ![#AECAFF](https://placehold.co/15x15/AECAFF/AECAFF.png) | primary-600 | #AECAFF |        ---        |
| ![#D6E4FF](https://placehold.co/15x15/D6E4FF/D6E4FF.png) | primary-500 | #D6E4FF |        ---        |

</td><td>

#### SECONDARY

_#EA394A_

![#EA394A](https://placehold.co/350x50/EA394A/EA394A.png)

| Shades                                                   | Variable      |   Hex   | RGB |
| -------------------------------------------------------- | ------------- | :-----: | :-: |
| ![#A32733](https://placehold.co/15x15/A32733/A32733.png) | secondary-900 | #A32733 | --- |
| ![#D23342](https://placehold.co/15x15/D23342/D23342.png) | secondary-800 | #D23342 | --- |
| ![#EC4C5C](https://placehold.co/15x15/EC4C5C/EC4C5C.png) | secondary-700 | #EC4C5C | --- |
| ![#F07480](https://placehold.co/15x15/F07480/F07480.png) | secondary-600 | #F07480 | --- |
| ![#F8C3C8](https://placehold.co/15x15/F8C3C8/F8C3C8.png) | secondary-500 | #F8C3C8 | --- |

</td></tr>
<tr><th>

#### NEUTRAL

</th><th>

#### ALERT & STATUS

</th></tr>
<tr><td>

|                                                          | Variable    |   Hex   | RGB |
| -------------------------------------------------------- | ----------- | :-----: | :-: |
| ![#FCFCFC](https://placehold.co/15x15/FCFCFC/FCFCFC.png) | light       | #FCFCFC | --- |
| ![#CECECE](https://placehold.co/15x15/CECECE/CECECE.png) | neutral-600 | #CECECE | --- |
| ![#9D9D9D](https://placehold.co/15x15/9D9D9D/9D9D9D.png) | neutral-700 | #9D9D9D | --- |
| ![#6D6D6D](https://placehold.co/15x15/6D6D6D/6D6D6D.png) | neutral-800 | #6D6D6D | --- |
| ![#3D3D3D](https://placehold.co/15x15/D3D3D/D3D3D.png)   | neutral-900 | #3D3D3D | --- |
| ![#0C0C0C](https://placehold.co/15x15/0C0C0C/0C0C0C.png) | dark        | #0C0C0C | --- |

</td><td>

|                                                          | Variable    |   Hex   | RGB |
| -------------------------------------------------------- | ----------- | :-----: | :-: |
| ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) | info        | #2556B2 | --- |
| ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) | success     | #2F9524 | --- |
| ![#FFCC33](https://placehold.co/15x15/FFCC33/FFCC33.png) | warning     | #FFCC33 | --- |
| ![#95242F](https://placehold.co/15x15/95242F/95242F.png) | error       | #95242F | --- |
| ![#D8D8D8](https://placehold.co/15x15/D8D8D8/D8D8D8.png) | disabled    | #D8D8D8 | --- |
| ![#AECAFF](https://placehold.co/15x15/AECAFF/AECAFF.png) | disabledBtn | #AECAFF | --- |

</td></tr>
</table>

### Typography

![Font](/img/Font.png)

<table>
<tr><td>

|           | HTML Tag | Font Size | Font Weight |
| --------- | :------: | :-------: | :---------: |
| Heading 1 |    h1    |   48px    |   Normal    |
| Heading 2 |    h2    |   36px    |   Normal    |
| Heading 3 |    h3    |   30px    |   Normal    |
| Heading 4 |    h4    |   24px    |    Bold     |
| Heading 5 |    h5    |   20px    |    Bold     |

</td><td>

|              | Variable | Font Size | Font Weight |
| ------------ | :------: | :-------: | :---------: |
| Body X-Large |    xl    |   24px    |   Normal    |
| Body Large   |    lg    |   20px    |   Normal    |
| Body Medium  |   base   |   16px    |   Normal    |
| Body Small   |    sm    |   14px    |   Normal    |
| Body X-Small |    xs    |   12px    |   Normal    |

</td></tr>
</table>

## Anatomy

Site anatomy refers to the layout and grid system for each device type. The grid system page widths are set as the max-width for screen size. For more detail and visual reference refer to the style guide [here](/guide/Colors.pdf).

<table>
<tr><td>

![#0C0C0C](/img/Anatomy.png)

</td><td>

| Layout     | Variable | Page Width | Grid Columns | Column Width | Gutter |
| ---------- | :------: | :--------: | :----------: | :----------: | :----: |
| Besktop    |    xl    |   1440px   |      12      |     65px     |  30px  |
| Laptop     |    lg    |   1024px   |      12      |     50px     |  30px  |
| Tablet     |    md    |   768px    |      6       |     88px     |  30px  |
| Mobile     |    sm    |   480px    |      2       |    150px     |  30px  |
| Old Mobile |    xs    |   320px    |      2       |    130px     |  30px  |

</td></tr>
</table>

## Data Structure

The data structure for this project breaks down into 3 table types which will be represented by color codes. The authentication for all data is handled by Firebase with three role sets that aid in securing data but providing visibility.

### Table Types

|                          Color                           | Table Type | Security Role | Description                                                                                                 |
| :------------------------------------------------------: | ---------- | :-----------: | ----------------------------------------------------------------------------------------------------------- |
| ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) | Base       |   Read Only   | Tables are used in multiple aspects of the site and should be viewable without any login or authentication. |
| ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) | Client     |  Client Edit  | Tables are used by authenticated users, but have restricted permissions based on user's defined company.    |
| ![#FFCC33](https://placehold.co/15x15/FFCC33/FFCC33.png) | User       |   User Edit   | Tables are used by authenticated users, and are restricted to the user who created the item.                |

### Tables

All tables have a structured schema that can be found on the [DataStructure.md](/guide/DataStructure.md) file. For information about Firebase tables review the documentation on [Firebase Docs](https://firebase.google.com/docs/database?authuser=0).

| Table Name     |                           Type                           | Columns | Description                                                                         |
| -------------- | :------------------------------------------------------: | :-----: | ----------------------------------------------------------------------------------- |
| Users          | ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) |    8    | Private user information                                                            |
| Clients        | ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) |    6    | Client contact information and details                                              |
| Technology     | ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) |   15    | Full list of technology and applications used at Eastman and in personal projects.  |
| Services       | ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) |   15    | Full list of services provided to clientel.                                         |
| Projects       | ![#2F9524](https://placehold.co/15x15/2F9524/2F9524.png) |   15    | Porfolio project information and details                                            |
| Communications | ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) |   15    | Contact form submissions and chat history                                           |
| Invoices       | ![#2556B2](https://placehold.co/15x15/2556B2/2556B2.png) |   15    | Client invoice data such as reminder dates and payment status with link to PDF file |
| Reviews        | ![#FFCC33](https://placehold.co/15x15/FFCC33/FFCC33.png) |   15    | Ratings and Review submissions on porfolio projects by users                        |
| Quotes         | ![#FFCC33](https://placehold.co/15x15/FFCC33/FFCC33.png) |   15    | Online quote submissions by users. This submission does not require authentication. |

### Table Connections

Tables are designed using standard relational tables and each key has an _ID_ key. Any connected tables use reference the _ID_ key from the connected table. A list of the connections are listed below, but a visual diagram is provided [here](/img/TableConnections.png).

| Table        | Reference Column | Reference Column Type | Reference Table |
| ------------ | :--------------: | :-------------------: | :-------------: |
| **Users**    |      Client      |        String         |     Clients     |
| **Clients**  |     Contact      |        String         |      Users      |
|              |     Services     |         Array         |    Services     |
| **Projects** |      Client      |        String         |     Clients     |
|              |    Technology    |         Array         |   Technology    |
| **Reviews**  |       User       |        String         |      Users      |
|              |     Project      |        String         |    Projects     |
| **Quotes**   |       User       |        String         |      Users      |
| **Invoices** |      Client      |        String         |     Clients     |

## Getting Started

The building blocks to this project have been documented below for use in future sight templates:

#### Initial Set-Up

- [x] Create project using the 'Create Next App' CLI
- [x] Include Tailwind CSS in the import
- [x] Add theme variables to the [Tailwind Config](/tailwind.config.js) file
- [x] Define base styles to the [Global CSS](/src/app/globals.css) file
- [x] Import custom font family on the [layout.js](/src/app/layout.js) file

#### App Design and Development

- [x] Create and style the [Header](src/app/header.jsx) component

First, run the development server:

```bash
npm run dev
```
