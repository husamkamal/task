import { RouterProvider } from "react-router-dom";
import router from "./root";

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
