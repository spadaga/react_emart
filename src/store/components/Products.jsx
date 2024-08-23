import React, { useEffect, useState } from 'react';
// import Mobiles from './Mobiles'
import TopMobile from './TopMobile'
import Loader from './Loader';
// import TopComputers from './TopComputers'
// import TopAircondition from './TopAircondition'
// import TopFurniture from './TopFurniture'
// import TopMen from './TopMen'
// import TopWomen from './TopWomen'
// import TopWatches from './TopWatches'
// import { mobileData } from '../data/mobiles'
// import { acData } from '../data/ac'
// import { booksData } from '../data/books'

// import { watchData } from '../data/watch'
// import { furnitureData } from '../data/furniture'
// import { womanData } from '../data/woman'
// import { menData } from '../data/men'


const Products = () => {
    const [computerData, setcomputerData] = useState([]);

    const [mobileData, setmobileData] = useState([]);
    const [acData, setacData] = useState([]);
    const [watchData, setwatchData] = useState([]);
    const [menData, setmenData] = useState([]);
    const [womanData, setwomanData] = useState([]);
    const [furnitureData, setfurnitureData] = useState([]);


   


    // useEffect(() => {
    //     fetch('/data/computers.json')  // Fetching from the public folder
    //       .then(response => response.json())
    //       .then(data => setcomputerData(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);

    useEffect(() => {
        // Define the URLs
        const url1 = "/data/mobiles.json";
        const url2 = "/data/computers.json";
        const url3 = "/data/ac.json";
        const url4 = "/data/watch.json";
        const url5 = "/data/men.json";
        const url6 = "/data/woman.json";
        const url7 = "/data/furniture.json";
    
        // Fetch all URLs concurrently
        const fetchAllData = async () => {
          try {
            const responses = await Promise.all([fetch(url1), fetch(url2), fetch(url3),fetch(url4), fetch(url5), fetch(url6), fetch(url7)]);
    
            // Parse the JSON from each response
            const mobilesresult = await responses[0].json();
            const computerresult = await responses[1].json();
            const acresult = await responses[2].json();
            const watchresult = await responses[3].json();
            const menresult = await responses[4].json();
            const womenresult = await responses[5].json();
            const furnitureresult = await responses[6].json();
    
            // Set the data in the respective state variables
            setcomputerData(mobilesresult);
            setmobileData(computerresult);
            setacData(acresult);
            setwatchData(watchresult);
            setmenData(menresult);
            setwomanData(womenresult);
            setfurnitureData(furnitureresult);

          } catch (error) {
            console.error("Error fetching data:", error);
          }
          
        };
    
        fetchAllData();
      }, []); // Empty dependency array ensures this runs once when the component mounts

   
    console.log("computers data",computerData)
    return (
        <div>

            <TopMobile headername="TopMobile" mobileData={mobileData}></TopMobile>
            <TopMobile headername="Top Computers" mobileData={computerData}></TopMobile>
            <TopMobile headername="Top ACs" mobileData={acData}></TopMobile >

            
            <TopMobile headername="Top Watches" mobileData={watchData}></TopMobile>
            <TopMobile headername="Top Men" mobileData={menData}></TopMobile>
            <TopMobile headername="TopWomen" mobileData={womanData}></TopMobile>

            <TopMobile headername="Top Furniture" mobileData={furnitureData}></TopMobile>

        </div>
    )
}

export default Products
