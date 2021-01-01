import Slider from "react-slick"
import Image from 'next/image'

import Button from '../components/button'

export default function SimpleSlider(props) {
  var settings = {
		dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }
  
  return (
    <div className="relative">      
      <Slider {...settings} >
        { props.data.map(item => (
          <div className="flex text-center bg-blueless" key={item.node._meta.uid}>  
            <h2 className="text-bluelight w-full text-center text-10xl uppercase font-playfair700 absolute z-10 top-20">Fashion</h2>
            <div className="w-full flex flex-col items-center top-1/2 text-center absolute z-30">
              <h3 className="font-playfair700 text-7xl text-white">New Arrival</h3>
              <Button className="px-4 py-2" type="button" bg="bg-blueless" rounded="rounded-full" text="Buy Now" color="text-white" fontFamily="font-montserrat" fontSize="text-xss" textTransform="uppercase"/>
            </div>
            <Image
              alt={item.node.images.alt}
              className="h-12 w-12 z-20"
              src={item.node.images.url}
              width={item.node.images.dimensions.width}
              height={item.node.images.dimensions.height}
            />   
          </div>
        ))}
      </Slider>
    </div>
  )
}