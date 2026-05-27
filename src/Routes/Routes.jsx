import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import BooksPage from "../pages/BooksPage/BooksPage";
import ErrorPage from "../pages/ErrorPages/ErrorPages";
import BookDetails from "../pages/BookDetails/BookDetails";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import { createBrowserRouter } from "react-router";

export const router=createBrowserRouter([
  {
  path:'/',
  element:<MainLayout/>,
  children:[
    {
      index:true,
      element:<HomePage/>,
    },
    {path:'/books',
    element:<BooksPage></BooksPage>,},
    {
        path:'/bookDetails/:bookId',
        Component:BookDetails,
    },
    {
        path:'/page-to-read',
        Component:PagesToRead
    }
  ],
  errorElement:<ErrorPage/>
},



])