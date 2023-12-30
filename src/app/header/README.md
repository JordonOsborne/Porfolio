# Header

The header is visible on all pages of the website and inherits its styling from the [global CSS](../globals.css) and [Tailwind Config Theme](/tailwind.config.js). The component structure can be found in the [layout.jsx](./layout.jsx) while the popover components can be found their respective folder. There are two distinct navigation menu components (i.e. [Menu](./menu.jsx) and [Mobile menu](./mobileMenu.jsx)) which will be dependent on the page width.

<details>
<summary>Navigation Menus</summary>

- [About Menu](./about/popover.jsx)
- [Projects Menu](./projects/popover.jsx)
- [Contact Menu](./contact/popover.jsx)
- [User Menu](./user/popover.jsx)

</details>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#conceptual-design">Conceptual Design</a></li>
    <li><a href="#anatomy">Anatomy</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## Conceptual Design

### Desktop Design

![Header](/img/Header.png)

<table>
<tr><th>About Menu</th><th>Projects Menu</th><th>Contact Menu</th><th>User Menu</th></tr>
<tr><td>

![About Menu](/img/AboutMenu.png)

</td><td>

![Projects Menu](/img/ProjectsMenu.png)

</td><td>

![Contact Menu](/img/ContactMenu.png)

</td><td>

![User Menu](/img/UserMenu.png)

</td></tr>
</table>

<details>
<summary>Mobile Design</summary>

## Mobile Desing

<table>
<tr><th>Closed</th><th>Opened</th></tr>
<tr><td>

![Header](/img/HeaderMobile.png)

</td><td>

![Header](/img/HeaderMobile_Open.png)

</td></tr>
</table>

<table>
<tr><th>About Menu</th><th>Projects Menu</th><th>Contact Menu</th><th>User Menu</th></tr>
<tr><td>

![About Menu(Mobile)](/img/AboutMenuMobile.png)

</td><td>

![Project Menu(Mobile)](/img/ProjectsMenuMobile.png)

</td><td>

![Contact Menu(Mobile)](/img/ContactMenuMobie.png)

</td><td>

![User Menu(Mobile)](/img/UserMenuMobile.png)

</td></tr>
</table>

</details>

## Anatomy

The header element of this website consist of three parts: Logo, Developer Status/Searchbar, and Navigation Menu. The center portion of the header is reserved for searchbar when applicable, but will display 'Site Administrator' when the user signed in is a site admin. The navigation element utilizes [React Aria Menu](https://react-spectrum.adobe.com/react-aria/Menu.html) components. Each navigation menu item has its own popover with another three section layout defined below.

<table>
<tr><td>

![Navigation Menu Anatomy](/img/NavigationMenuAnatomy.png)

</td><td>

| Menu Section   | Panel | Details                                                      |
| -------------- | :---: | ------------------------------------------------------------ |
| Image          | Left  | Large visual representation of menu (i.e. Project Mock-up)   |
| Visual Details | Left  | Title for visual image (i.e. Project Title or User Name)     |
| Menu Header    | Right | Description or instructions for Top Links                    |
| Top Links      | Right | Summary information or filters for menu (i.e. Technology)    |
| Bottom Links   | Right | Large link icons that navigate to site pages (i.e. Projects) |

</td></tr>
</table>

<details>
<summary>Mobile Menu</summary>

The mobile header element of this website eliminates the search bar and replaces the navigation with a hamburger menu with expandable menus for more options. Each expandable menu can be found in the respective folder under the **details** file. For the most part the **details** component breaks down into two parts: top and bottom layers.

<table>
<tr><td>

![Navigation Menu Anatomy](/img/NavigationMobileMenuAnatomy.png)

</td><td>

| Menu Section | Panel  | Details                                                      |
| ------------ | :----: | ------------------------------------------------------------ |
| Menu Header  |  Top   | Description or instructions for Top Links                    |
| Top Links    |  Top   | Summary information or filters for menu (i.e. Technology)    |
| Bottom Links | Bottom | Large link icons that navigate to site pages (i.e. Projects) |

</td></tr>
</table>
</details>

## Components & Properties

The header component contains several smaller components some with custom properties. The components utilizing [React Aria](https://react-spectrum.adobe.com/react-aria/Menu.html#menuitem) inherit their properties and are indicated below.

<details>
<summary>Site Logo</summary>

### [Logo](./Logo.jsx)

![Logo](/img/Logo.svg)

The site logo is an SVG that utilizes the [Theme Colors](/README.md#brand-colors) in the [tailwind configuration](/tailwind.config.js).

| Property |  Type  | Description                                                               | React Aria |
| -------- | :----: | ------------------------------------------------------------------------- | :--------: |
| size     | string | Size of the logo ('small', 'medium', 'large', 'x-large') OR pixel height. |            |

</details>
<details>
<summary>Search Bar</summary>

### [Search Bar](./SearchBar.jsx)

![Search Bar](/img/SearchBar.png)

The center of the header is reserved for the search bar that allows users to immediately search through the porfoio using key words like _'SharePoint'_ or _'SQL'_.

| Property |  Type   | Description                                              | React Aria |
| -------- | :-----: | -------------------------------------------------------- | :--------: |
| isAdmin  | boolean | Is the signed in user flagged as the site Administrator? |            |

</details>
<details>
<summary>Link Icons</summary>

### [Link Icon](./linkIcon.jsx)

![Certification Icon](/img/Certification.png)

The link icon is a reusable component for menu items in the navigation. Each link icon consist of an icon and label with a configurable layout dependent on the size property.

| Property |  Type  | Description                                                             | React Aria |
| -------- | :----: | ----------------------------------------------------------------------- | :--------: |
| size     | string | Size of the logo ('small', 'medium', 'large', 'x-large') OR pixel size. |            |
| src      | string | Source of the icon image.                                               |            |
| icon     | string | Name of the icon _(Used in the [Icons Component](../icons/README.md))_. |            |
| label    | string | The text description to be displayed underneath/beside the icon.        |     ✓      |
| href     | string | The url for the item (Icon will be 'read-only' if not provided).        |     ✓      |
| target   | string | HTML attribute that determines how the link is opened                   |     ✓      |

</details>
<details>
<summary>Experience Meter</summary>

### [Experience Meter](../experienceMeter/README.md)

![Experience Meter](/img/ExperienceMeter.png)

The experience meter shows a progress bar that indicates the number of years I have used the technology compared to the number of years I have been designing/developing _(Since March 2014)_.

| Property   |  Type  | Description                                                              | React Aria |
| ---------- | :----: | ------------------------------------------------------------------------ | :--------: |
| tech       | object | JSON object returned from **[Technology](/README.md)** table in database |            |
| value      | number | Number of years of experience with technology _(Based off Start Date)_   |     ✓      |
| maxValue   | number | Number of years developing _(Based on first SharePoint project)_         |     ✓      |
| valueLabel | string | Label to show beside the bar _(## years)_                                |     ✓      |

</details>
<details>
<summary>Rating Summary</summary>

### [Rating Summary](../rating/README.md)

![Rating](/img/Rating.png)

The rating summary shows the average rating of all selected projects along with the number of reviews. The rating and review count are properties and shoud be calculated prior to rendering. Optionally, your can provide count of comments provided by the users.

| Property     |  Type   | Description                                                                       |
| ------------ | :-----: | --------------------------------------------------------------------------------- |
| className    | string  | Class name to be used on the individua stars for filled stars.                    |
| size         | string  | Size of the logo ('small', 'medium', 'large', 'x-large') OR pixel size.           |
| rating       | number  | Average rating calcuated from parent component. (_Star Rating: 1- 5_)             |
| reviewCount  | integer | Total count of reviews calculated from parent component.                          |
| commentCount | integer | Total count of comments included in the review, calculated from parent component. |

</details>
<details>
<summary>Company Info</summary>

### [Company Info](./companyInfo.jsx)

![Company Info](/img/CompanyInfo.png)

The company information component provides a visual of the company logo, name, and optional date of first project.

| Property |  Type  | Description                                                               |
| -------- | :----: | ------------------------------------------------------------------------- |
| company  | object | JSON object returned from the **[Clients](/README.md)** table in database |

</details>

## Getting Started

### Initial Set-Up

- [x] Design Logo and consider contrast againg light and dark modes
- [x] Design each navigational element (i.e. About Links, Projects Links, Contact Links)
- [x] [Install React Aria](/README.md#dependencies) for component imports
- [x] Develop basic layout using reusable components for easy modification
  - [x] Experience Meter
  - [x] Link Icon
  - [x] Rating & Reviews

### Mobile Platform

- [x] Implement CSS for mobile platforms
- [x] Develop mobile component menu
- [x] Implement logic to render correct menu based on screen width

### Authentication

- [x] Install Authentication using documented practice ([Firebase Documentation](https://firebase.google.com/docs/auth/web/start))
- [ ] Add required contexts for reading and updating user information.
  - [x] Email & Password
  - [ ] Google
  - [ ] Windows
  - [ ] Apple
