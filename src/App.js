import { BrowserRouter, Routes, Route } from "react-router-dom";

import SingleTask from "./SingleTask";
import ViewTasks from "./ViewTasks";
import Login from "./Login";

import AuthCheck from "./AuthCheck";
import NotFound from "./NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <ViewTasks />
            </AuthCheck>
          }
        />
        <Route
          path="/task/:id"
          element={
            <AuthCheck>
              <SingleTask />
            </AuthCheck>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
