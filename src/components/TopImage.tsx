
import { useEffect, useState } from 'react';

const TopImage = () => {
    const [imageHeight, setImageHeight] = useState('260px');

    const updateHeight = () => {
        if (window.innerWidth >= 992) {
            setImageHeight('440px');
        } else {
            setImageHeight('260px');
        }
    };

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const ImageStyle = {
        backgroundImage: 'url(https://eco-n-tech.com/wp-content/cache/thumb/ec/890ddcd1c2ce5ec_3806x1034.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: imageHeight,
        color: 'white', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="container-fluid" style={ImageStyle}>
            <div className="container d-flex flex-column h-100 background-text-home position-relative">

                <div className="d-flex d-lg-none justify-content-between mt-3">
                    <button className="btn">
                        <Arrow/>
                    </button>
                    <button className="btn btn-outline-light fw-bolder" >Leave Group</button>

                </div>
               
                <div className='position-absolute bottom-0'>
                    <h1 className='fw-bolder' >Computer Engineering</h1>
                    <p className="mb-5 fw-semibold  ">142,765 Computer Engineers follow this</p></div>
                </div>
               
            
        </div>
    );
};
const Arrow=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
  
}
export default TopImage;
