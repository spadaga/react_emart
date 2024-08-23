import React, { useState, useEffect } from 'react';
import Landingpage from './Pages/Landingpage'
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/300.css'; // Light weight
import '@fontsource/roboto/500.css'; // Medium weight
import '@fontsource/roboto/700.css'; // Bold weight
import Loader from './store/components/Loader';
import { LoadingProvider } from './Pages/LoadingContext';



const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate fetching data or some async operation
  //   const fetchData = async () => {
  //     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulates a 2-second delay
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
   
  //   return <Loader />;
  // }


  return (
    <div>
      <LoadingProvider>
         <Loader />
         <Landingpage/>
      </LoadingProvider>
      
    </div>
  )
}

export default App
