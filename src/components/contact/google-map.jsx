import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
               <iframe src="https://maps.app.goo.gl/r6mhiY6m76gt6zBS8" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;