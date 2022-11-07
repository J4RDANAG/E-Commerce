import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import MobileCart from '../../components/MobileCart/MobileCart'
import { MobileNav } from '../../components/MobileNav/MobileNav'
import { Carousel } from 'react-carousel-minimal';
import tester from '../../assets/background-images/trippy-concrete.jpg'
import { doc } from 'firebase/firestore'
import { db } from '../../firebase'
import './About.scss'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function About() {
//   const [images, setImages] = useState()
//   const fetchData = async () => {

//     const docRef = doc(db, "Products", "uqoAFwr2KQrdlMKwvJor");
//     try {
//         const docSnap = await getDoc(docRef);
//          let data = docSnap.data()    
//          setImages(data)
//           // setUserInput(data)
//     } catch(error) {
//         console.log(error)
//     }
    
// }
// useEffect(()=>{
//   fetchData()
// },[])


  const thanksImages = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50457601.JPG?alt=media&token=e4d20053-ee0e-4444-8a84-618ddb85adf1",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50422017.JPG?alt=media&token=26f2a1af-f3ff-4f09-923f-1ed07096c00e",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50433281.JPG?alt=media&token=b64d6517-98af-4979-b618-5e6c66f9b175",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50437377.JPG?alt=media&token=4f6990bb-1782-4bea-90d4-6943d9edab25",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50386177.JPG?alt=media&token=e27d4b1a-84a6-4d40-9abb-4dfeaf4b260b",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50426881.JPG?alt=media&token=4048dce4-8857-4ae5-8452-4ffdc5b709c5",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50444801.JPG?alt=media&token=9adead63-f253-40c0-8bd8-b462c30cf35d",
    },
  ];

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <>
    <NavBar/>
    <ShoppingCart/>
    <div className='about'>
      <FaArrowAltCircleLeft/>
    <Carousel
            data={thanksImages}
            time={3000}
            width="850px"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "20px auto",
            }}
          />
          <div className='about__container'>
          <h2>THANKS</h2>
          <div>
            <a href='https://www.google.com/search?q=Thanks+Vancouver&rlz=1C1ONGR_enCA1015CA1015&tbm=lcl&sxsrf=ALiCzsaGcMhyW3SBgjk6NQIj7N-FIUhJiw%3A1667790266264&ei=unVoY8_dD7nf0PEPrcaM0AQ&ved=0ahUKEwjPooXzipv7AhW5LzQIHS0jA0oQ4dUDCAk&uact=5&oq=Thanks+Vancouver&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBAgjECcyCAgAEBYQHhAKMggIABAWEB4QCjICCCYyBQgAEIYDMgUIABCGAzIFCAAQhgMyBQgAEIYDOgcIIxDqAhAnOgQIABBDOgoIABCxAxCDARBDOgsIABCABBCxAxCDAToHCAAQsQMQQzoICAAQgAQQsQM6BQgAEIAEOgoIABCABBCHAhAUOggIABCxAxCDAToNCAAQgAQQhwIQsQMQFDoHCAAQgAQQCjoNCAAQgAQQsQMQgwEQCjoFCAAQkQI6CAgAEBYQHhAPOgYIABAWEB46CggAEBYQHhAPEApQAFi7KmCbK2gBcAB4AIABYIgBhweSAQIxNpgBAKABAbABCsABAQ&sclient=gws-wiz-local#rlfi=hd:;si:2985560792556155567,l,ChBUaGFua3MgVmFuY291dmVySIXoqNeIuYCACFoYEAAYABgBIhB0aGFua3MgdmFuY291dmVykgEOY2xvdGhpbmdfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjFhRFpoUkdsblJSQUI;mv:[[49.285204799999995,-123.09536550000001],[49.274699299999995,-123.12863910000002]]'>
              <h3 className='about__address'>369 Carrall Street, 4th Floor, Vancouver B.C.</h3>
              </a>
              <h3 className='about__hours'>Open Daily 12-6pm</h3>
              <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>

          <div className='about__container'>
          <h2>GORE STREET VINTAGE</h2>
          <div>
            <a href='https://www.google.com/search?q=Gore+Street+Vintage&rlz=1C1ONGR_enCA1015CA1015&tbm=lcl&sxsrf=ALiCzsbBF0LLrRJRrmIuAsC1itOSl-gBKw%3A1667790285485&ei=zXVoY5KdHd2F0PEP3q-1oAE&ved=0ahUKEwjSt5r8ipv7AhXdAjQIHd5XDRQQ4dUDCAk&uact=5&oq=Gore+Street+Vintage&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyBQgAEIAEMgQIABBDMgUIABCABDIGCAAQFhAeMgIIJjoHCCMQ6gIQJzoKCAAQsQMQgwEQQzoFCAAQkQI6CwgAEIAEELEDEIMBOgQIIxAnOhAIABCABBCHAhCxAxCDARAUOgcIABCxAxBDOggIABCABBCxAzoICAAQsQMQgwE6BQgAELEDUABYthxgrh1oAXAAeACAAVqIAa8IkgECMTmYAQCgAQGwAQrAAQE&sclient=gws-wiz-local#rlfi=hd:;si:4619136058353856452,l,ChNHb3JlIFN0cmVldCBWaW50YWdlSKOJvLK8toCACForEAAQARACGAAYARgCIhNnb3JlIHN0cmVldCB2aW50YWdlKggIAhAAEAEQApIBFnZpbnRhZ2VfY2xvdGhpbmdfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTJaM1poTFc5QlJSQUI,y,2X0FDL2-q50;mv:[[49.278612177319026,-123.09697852353712],[49.27825222268096,-123.09753027646288]]'>
              <h3 className='about__address'>298 E Gerogia Street, Vancouver B.C.</h3>
              </a>
              <h3 className='about__hours'>Open Daily 12-8pm</h3>
              <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
          
    </div>
    <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
    </div>
    </>
  )
}
