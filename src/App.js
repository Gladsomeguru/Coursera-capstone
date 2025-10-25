import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './HomePage.js';
import BookingPage from './BookingPage.js';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/bookingpage", element: <BookingPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
