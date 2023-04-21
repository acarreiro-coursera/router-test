import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  useMatches,
} from "react-router-dom";

const Root = () => (
  <div>
    <div>root!</div>
    <Outlet />
  </div>
);

const CoolComponent = ({ message }) => {
  const match = useMatches();
  console.log(match);

  return (<div>{message}</div>)
};

const router = createBrowserRouter(
  createRoutesFromElements(

      <Route id='the-cool-root' path="/" Component={Root}>
        <Route id='id-hello' path="hello" element={<CoolComponent message="hello" />} />
        <Route id='id-goodbye' path="goodbye" element={<CoolComponent message="goodbye" />} />
      </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
