import React from 'react';
import ImageItem from './imageitem'

/* Template borrowed from tighten.co and adapted for images */
const ImageList = (props) => {
    var imageItems;
    console.log("generating a new list...")
    // only map photo array if an object has been returned by Flickr server
    if (props.images.photo) {
        imageItems = props.images.photo.map((image) => {
            return <ImageItem key={image.id} img={image} />
        });
    }

    return (
        <ul>{imageItems}</ul>
    );
};

export default ImageList;