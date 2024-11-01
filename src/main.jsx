import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Desabord from './Components/Desabord/Desabord';
import Home from './Components/Home/Home';
import ErrorPags from './Components/Error/ErrorPags';
import BookDetalis from './Components/BookDetalis/BookDetalis';
import Booklist from './Components/BookList/Booklist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPags></ErrorPags>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        element: <BookDetalis></BookDetalis>,
        loader: () => fetch('booksData.json')
      },
      {
        path: '/booklist',
        element: <Booklist></Booklist>,
        loader: () => fetch('booksData.json')
      },
      {
        path: '/desabord',
        element: <Desabord></Desabord>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
    />
  </StrictMode>,
)
