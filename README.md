
++++++++++++++++++++++ Understanding about the routes in react +++++++++++++++++++++++++++++++++++


React Routing is not a core part of React; it is an additional technology provided by an external library called React Router (react-router-dom for web applications).

Key Points:
1. React (Core): React itself is a JavaScript library for building UI components but does not include built-in routing.
2. React Router (Additional Library): To handle navigation between different pages or views in a React application, you need to install and use React Router.

How to install : npm install react-router-dom

Note: 

1. We are not using <a> tag because whole pages reload but We use <Link> at that place.
2. we are using <Navlink> thats provide us with active class.


+++++++++++++++ Outlet Uses +++++++++++++


In React Router, <Outlet> (imported by react-router-dom) is used as a placeholder for rendering nested routes inside a parent route component. It allows you to create layouts where child components (nested routes) will be rendered dynamically based on the current URL.

Use Case
When you define nested routes in your application, <Outlet> helps to render the corresponding child components inside the parent component.
It is useful for layouts that have common components like a navbar, sidebar, or footer while switching different content in a specific section.


***************** useParams ******************

useParams in React Router
The useParams hook in React Router is used to access URL parameters inside a component. It is useful when working with dynamic routes, such as fetching specific user details based on an ID in the URL.

How useParams Works
When defining routes with dynamic parameters (e.g., /user/:id), useParams allows us to extract those values inside the corresponding component.


***************** useLoaderData() ********************

useLoaderData() in React Router
The useLoaderData() hook in React Router (v6.4 and later) is used to fetch and access data from a route loader function. It allows for data fetching before rendering the component, improving performance and reducing unnecessary re-renders.

Why Use useLoaderData()?
✔ Fetches data before rendering the component
✔ Eliminates the need for useEffect and useState
✔ Ensures the component has data ready at the time of rendering
✔ Improves performance and SEO (useful for SSR in Remix and Next.js)


end..

