import React, {useState, useEffect} from 'react';

interface SlideShowProps {
    images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <>
            <div className="slideshow">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Slide ${index}`}
                        className={index === currentImageIndex
                            ? 'active image h-full w-full absolute inset-0 object-cover object-center'
                            : 'image h-full w-full absolute inset-0 object-cover object-center'}
                    />
                ))}
            </div>
            <div className="absolute w-full h-full bg-black/50"/>
        </>
    );
};

export default SlideShow;
