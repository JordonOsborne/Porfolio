# JOsborne.dev Outline

The main source application contains the [contexts](../context/README.md) that provides the [authentication](../context/auth.js) and the [data](../context/data.js) from Firebase. This application utilizes the Next.js V14 design where each route is defined by the **page.jsx** file of its respective folder. To view the designs and components used in each page reference their respective **README.md** files.

### Static Pages

- [About](.app/About/README.md) - A summary description of my skills and personal background.
- [Contact](.app/Contact/README.md) - A simply contact page with links to personallized forms for quotes and skill checks.
- [Data](./app/Data/README.md) - A backend page for administrators to view their database items in table or grid mode.
- [Icons](./app/Icons/README.md) - A simple search page for viewing customized icons used on this site. Based off the [React Icons](https://react-icons.github.io/react-icons/) page.
- [Login](./app/Login/README.md) - A simple login page with four options for authentication.
- [Projects](.app/Projects/README.md) - A porfolio page to display all past projects with highlights on the most popular.
- [Ratings](./app/Ratings/README.md) - A place to view project ratings.
- [Users](.app/Users/README.md) - A backend page for administrators to view all users.

### Dynamic Pages

- [Projects/[ID]](.app/Projects/README.md) - A porfolio page to display all past projects and also dynamic pages for viewing single project details.
- [Ratings/[UID]](./app/Ratings/README.md) - A place to view project ratings and also leave your own personal rating on a project. _(Primarily Eastman Users)_
- [Users/[UID]](.app/Users/README.md) - A place to view personal data and modify information. Also allows company personnel to view other users. _(Primarily Eastman Users)_

### Error Pages

- [404 - Not Found](./app/not-found.jsx) - Custom 404 page for undefined routes
- [Error Page](./app/error.jsx) - Error page for backend errors such as **503 Not Authorized** errors from the server.

<table>
<tr><th>404 - Not Found</th><th>500 - Internal Server Errors</th></tr>
<tr><td>

![Not Found](/img/404-NotFound.png)

</td><td>

![Error Page](/img/500-Error.png)

</td></tr>
</table>

## Anatomy

```jsx
import Page from '/app/Page/layout.jsx'

export default function App() => {
  <Layout>
    <ErrorBoundary fallback={<Error/>}>
      <ErrorBoundary fallback={<NotFound/>}>
        <Page/>
      <ErrorBoundary/>
    </ErrorBoundary>
  </Layout>
}

```
