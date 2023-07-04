import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./main.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import {setContext} from "@apollo/client/link/context"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {apiKey, stashUrl} from "./util.ts"
import Test from "./Test.tsx"

const httpLink = createHttpLink({
  uri: `${stashUrl}/graphql`,
})

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      ApiKey: apiKey,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
