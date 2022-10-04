import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import Foods from './components/Foods/Foods';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/', 
    element:<Main></Main>,
    children: [
      {path: '/', element:<Home></Home>},
      {path: '/home', element:<Home></Home>},
      {path: '/about', element:<About></About>},
      {path: '/foods',
      loader: ()=>{
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
       element:<Foods></Foods>
      },
       {
        path:'/food/:foodId',
        loader:({params})=>{
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
        },
        element:<DetailsProduct></DetailsProduct>
       },
       {
        path:'/categories',
        loader: ()=>{
          return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        },
        element: <Categories></Categories>
       },
      {path: '/contact', element:<Contact></Contact>},
    ]
  },
  {
    path:'*', element:<h1>Data is not found</h1>
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
