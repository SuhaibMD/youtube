import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head"
import { Provider } from "react-redux";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";

// const AppLayout = () => {
//   return (
//     <>
//       <Head></Head>
//       <Outlet />
//     </>
//   )
// }
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <MainContainer />
        },
        {
        path : "watch",
        element: <WatchPage />
      }

      ]
    }
  ])
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );

}

export default App;
