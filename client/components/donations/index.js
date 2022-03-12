import React, { useState, useEffect, useRef } from 'react'
import Slider from "react-slick";

import './styles.scss';

const mockData = [
  {
    name: 'Christine Dinh',
    price: '$13'
  },
  {
    name: 'Christine Dinh',
    price: '$14'
  },
  {
    name: 'Christine Dinh',
    price: '$15'
  },
  {
    name: 'Christine Dinh',
    price: '$16'
  },
  {
    name: 'Christine Dinh',
    price: '$17'
  },
]

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

export const Donation = () => {
  const [dimension, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  const numberSlideShow = useRef(1);

  const handleNumberSlide = (width) => {
    if(width >= 480 && width < 768) {
      return 2;
    } else if (width >= 768 && width < 1024) {
      return 3;
    } else if (width >= 1024) {
      return 4;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      }, 1000)
    })

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  })

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: handleNumberSlide(dimension.width),
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='donation'>
      <h2 className='donation-title'>Latest donations</h2>
      <Slider {...settings}>
        {
          mockData.map((item, idx) => (
            <div key={item.name} className='donation-board'>
              <h3 className='donation-board-title'> {item.name} </h3>
              <h3 className='donation-board-price'> {item.price} </h3>
            </div>
          ))
        }
      </Slider>
    </div>

  )
}
