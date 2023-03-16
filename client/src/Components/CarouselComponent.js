import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image,Group } from '@mantine/core';



export default function CarouselComponent() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Group  style={{
        width:"70%"
    }}>
    <Carousel
    style={{
        height:'auto',width:'auto',overflow:'hidden'
    }}
    
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
  >
    <Carousel.Slide>
    <Image
           
           src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
    </Carousel.Slide>
    <Carousel.Slide>
    <Image
           
           src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
    </Carousel.Slide>
    <Carousel.Slide>
    <Image
           
           src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
    </Carousel.Slide>
    <Carousel.Slide>
    <Image
           
           src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
    </Carousel.Slide>
    <Carousel.Slide>
    <Image
           
           src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
    </Carousel.Slide>

    {/* ...other slides */}
  </Carousel>
  </Group>
  )
}



