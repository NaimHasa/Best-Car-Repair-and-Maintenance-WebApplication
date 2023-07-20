import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router/Routes';

const App = () => {

  return (
    <div data-theme="light" className='max-w-7xl	 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;