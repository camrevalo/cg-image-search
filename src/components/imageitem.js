import React from 'react';

/* Template borrowed from tighten.co and adapted for images */
const ImageItem = (image) => {
    var url = 'https://farm' + image.img.farm + '.staticflickr.com/' + image.img.server + '/' + image.img.id + '_' + image.img.secret + '.jpg';
    return (
        <li>
            <img src={url}/> 
        </li>
    )
};

export default ImageItem;