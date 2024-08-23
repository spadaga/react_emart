import React, { useContext } from 'react'
import '../../assets/css/common.css'
import { LoadingContext } from '../../Pages/LoadingContext';

const Loader = () => {
    const { loading } = useContext(LoadingContext);
    if (!loading) return null;

    return (
        <div className="loading-overlay">
            <progress-bar ><div className="loader" aria-hidden="false" progressbar><div className="loader__icon_container" progressbar><div className="loader__icon" progressbar><span className="loader__line loader__line_1" progressbar /><span className="loader__line loader__line_2" progressbar /><span className="loader__line loader__line_3" progressbar /></div></div><p className="text-heading-small loader__text" progressbar>Loading content, please wait....</p></div></progress-bar>
            {/* <div className="spinner"></div> */}
        </div>
    )
}

export default Loader
