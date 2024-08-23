import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { LoadingContext } from '../../Pages/LoadingContext';
const CommonProducts = () => {
    const { setLoading } = useContext(LoadingContext);



    const { category } = useParams();
    console.log(category)
    const [products, setProducts] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    
    // useEffect(() => {
    //     setProducts([])
    //     fetch(`/src/store/data/${category}.json`)
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);


    useEffect(() => {
        // Assuming selectedMenuItem is an object with an ID or something that uniquely identifies it
        if (category) {
          const fetchData = async () => {
            try {
                setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
              const response = await fetch(`/data/${category}.json`);
              const data = await response.json();
              setProducts(data);
            } catch (error) {
              console.error("Error fetching product data:", error);
            }
          };
    
          fetchData();
        }
      }, [category]); // useEffect will only run when selectedMenuItem changes

    console.log("data", products)





    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = async(image) => {
     
        // navigate(`/image/${id}`);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        navigate('/image-details', { state: { image } });
    };


    const handleCheckboxChange = async(id) => {

        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        setSelectedIds(prevState =>
            prevState.includes(id)
                ? prevState.filter(item => item !== id)
                : [...prevState, id]
        );

    };
    const filteredImages = selectedIds.length
    ? products.filter(image => selectedIds.includes(image.id))
    : products;

    console.log(selectedIds)

    return (
        <div className='products-flex'>
            <div className='checkbox-section'>
                {products.map((item) => (
                    <div key={item.id} className='checkboxdiv'>
                        <label>
                            <input type="checkbox" id={item.id} value={item.id}

                                checked={selectedIds.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}

                            />
                            {item.model}
                        </label>
                    </div>
                ))}
            </div>
            <div className="image-gallery">


                {filteredImages.map(product => (
                    <div key={product.id} className="image-item">
                        <img src={product.image} alt={product.description} onClick={() => handleImageClick(product)} />
                        <p>{product.model}</p>
                    </div>
                ))}

            </div></div>
    )
}

export default CommonProducts
