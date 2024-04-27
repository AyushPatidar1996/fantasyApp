import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <LoginPage /> }]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
