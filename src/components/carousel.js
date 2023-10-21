import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    // Make the API request and parse the response as shown in the previous step
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Assuming the response data is an array of objects
        setCarouselData(data); // Update the state with the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Rest of the component's code

    const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide and setCurrentSlide using useState
    const data = [
        { id: 1, title: 'First Slide', description: 'This is the first slide', image: 'construction.jpg' },
        { id: 2, title: 'Second Slide', description: 'This is the second slide', image: 'https://example.com/image2.jpg' },
        { id: 3, title: 'Third Slide', description: 'This is the third slide', image: 'https://example.com/image3.jpg' },
      ];
    
  
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
