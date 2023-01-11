// import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrendingPage from "./pages/Trending";
import SearchPage from "./pages/search";
import RandomPage from "./pages/random";
import Layout from "./pages/layout";
import GifDetail from "./pages/gif-detail";
import { getTrending, getSpecificGif, getRandom } from "./api/index";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "trending",
        element: <TrendingPage />,
        loader: () => {
          return getTrending();
        },
      },
      {
        path: "random",
        element: <RandomPage />,
        // loader: () => {
          // return getRandom();
        // },
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/gif/:gifId",
    element: <GifDetail />,
    loader: ({ params }) => {
      const gifId = params.gifId;

      return getSpecificGif(gifId);
    }
  }
]);

function App() {
  return (
    // <ChakraProvider>
      <RouterProvider router={router} />
    // </ChakraProvider>
  );
}

export default App;
