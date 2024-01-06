# Login

The login page is used primarily for clients and project reviewers. The base login option is **Email and Password** however three other options will be provided to the user _(Google, Windows, and Apple)._

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

<details>
<summary>Desktop</summary>

![Login](/img/Login.png)

</details>

<details>
<summary>Mobile</summary>

![Mobile Login](/img/LoginMobile.png)

</details>

## Anatomy

<table>
<tr><td>

![Login Page Anatomy](/img/LoginAnatomy.png)

</td><td>

| Section       | Panel  | Details                                                            |
| ------------- | :----: | ------------------------------------------------------------------ |
| Welcome       |  Top   | Welocme message that displays the user's name if logged in.        |
| Email Form    |  Left  | Form for email and password login.                                 |
| Separator     | Middle | Separator with 'OR' text.                                          |
| Auth Provider | Right  | Three different options for authenticating using another provider. |

</td></tr>
</table>

<details>
<summary>Mobile Login</summary>

The mobile login re-uses the same components as the desktop but lays them out vertically and removes the _separator_ section.

<table>
<tr><td>

![Mobile Login Anatomy](/img/LoginMobileAnatomy.png)

</td><td>

| Section        | Panel  | Details                                                            |
| -------------- | :----: | ------------------------------------------------------------------ |
| Welcome        |  Top   | Welcome message that displays the user's name if logged in.        |
| Email Form     |  Top   | Form for email and password login.                                 |
| Auth Providers | Bottom | Three different options for authenticating using another provider. |

</td></tr>
</table>
</details>

## Getting Started

### Authentication

- [x] Install Authentication using documented practice ([Firebase Documentation](https://firebase.google.com/docs/auth/web/start))
- [ ] Install other Authentication providers
  - [ ] Google
  - [ ] Windows
  - [ ] Apple
