import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./layouts/Main";
import Topics from "./components/Topics/Topics";
import Quiz from "./Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },

        {
          path: "/topics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
