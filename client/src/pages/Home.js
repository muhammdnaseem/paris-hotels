import React from 'react';
import '../css/home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import InputComponent from '../components/InputComponent';
import Slider from '../components/Slider';
import {Modal} from '../components/Popup';
import ContactSection from '../components/ContactSection';
import MainHeading from '../components/Headings';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import GalleryCategory from '../components/GalleryCategory';
import SliderComponent from '../components/SliderComponent';
import MultiSliderComponent from '../components/MultiSliderComponent';
import img1 from '../img/about.jpg';
import img2 from '../img/about.jpg';
import img3 from '../img/about.jpg';
import img4 from '../img/about.jpg';
import ContactPopup from '../components/ContactPopup';
import TitleComponent from '../components/TitleComponent';
import HomeProducts from '../components/HomeProducts';
import Products from '../components/Products';
import ReviewSection from '../components/ReviewSection';



function Home() {

  const sliderSlides1 = [
  {
    id: 1,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-suite-cabochons-suite-terrace-4?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
    buttonclass: "d-none"
  },
   {
    id: 2,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-lobby-garden-evening?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        buttonclass: "d-none"
  },
   {
    id: 3,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-spa-pool-4?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        buttonclass: "d-none"
  },
   {
    id: 4,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-hotel-restaurant-sur-mesure-par-thierry-marx-8?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        buttonclass: "d-none"
  },

    {
    id: 5,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-hotel-lobby-01?wid=1280&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        buttonclass: "d-none"
  },
  
];

  const sliderSlides2 = [
  {
    id: 1,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-hotel-entrance-01?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
    title: 'In the Heart of Paris',
    description: 'description',
  },
   {
    id: 2,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-camelia-tea-time-lifestyle?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
  },
   {
    id: 3,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2016-luxury-spa-suite-02?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
  },
   {
    id: 4,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-view-3?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
  },
   {
    id: 5,
    imageUrl: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-suite-mandarin-royale-suite?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
  },
  
];
const sliderImageUrlpaletinehotel = [
  //First image url
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/bdbca8a7342787162b4a08ad6b6e93e6a0acb2dd-bdbca8-1980-1024-auto.jpg?q=1696597091",
      name: "Concentration",
      title: "Seminars",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
        category: "Paletine Hotel"
  },
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/platine-hotel-breakfast-176867-1280-600-portrait.jpg?q=1696597480",
      name: "Start the day on the right foot…",
      title: "Breakfast",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
},
  
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/d77bad9dae4dc1e98d84016a9705151c3aceaa7d-d77bad-1980-1024-auto.jpg?q=1696597057",
      name: "Relax…",
      title: "Fitness & Spa",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",  
         category: "Paletine Hotel" 
},
  //Third image url
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/b607a1b38858851e4d0ad45c8a263afeba3e67a4-b607a1-1980-1024-auto.jpg?q=1696597057",
      name: "Chill out…",
      title: "Honesty Bar",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
  },

  //Fourth image url

  {
  url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/platine-hotel-salle-de-jeux-176886-1280-600-portrait.jpg?q=1696597061",
      name: "Have fun…",
      title: "Games Room",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
  },
];


const sliderImageUrlShangriLaParis = [
  //First image url
  {
    url:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/344182151.jpg?k=aed5f6cb1e5fe1f2adf9eb26a3eed72c558d23511e99170dc5186d6720979b3f&o=&hp=1",
      name: "Concentration",
      title: "World Class Service",
      bookinglink: "https://www.booking.com/hotel/fr/shangri-la-paris.en-gb.html?aid=1649686&label=shangri-la-paris-sVIBbb9gab05cbZb5pMiuwS630916349505%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-572909883032%3Akwd-5310570222%3Alp1011086%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdwTcLIbWZlfefYGj3m2lIc&sid=d8810d24e87b6474ae28d9dd6d215f42&dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1702637847;srpvid=2e334d0a2298010c;type=total;ucfs=1&#availability",
    category: "Shangri La Paris"
  },
  {
    url:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/344182150.jpg?k=4ef8cff764b6588ffb6fba96d08dc5851e9642fea0ab687389bff444e0acde94&o=&hp=1",
      name: "Shangri-La Paris",
      title: "(Hotel) (France) deals",
      bookinglink: "https://www.booking.com/hotel/fr/shangri-la-paris.en-gb.html?aid=1649686&label=shangri-la-paris-sVIBbb9gab05cbZb5pMiuwS630916349505%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-572909883032%3Akwd-5310570222%3Alp1011086%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdwTcLIbWZlfefYGj3m2lIc&sid=d8810d24e87b6474ae28d9dd6d215f42&dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1702637847;srpvid=2e334d0a2298010c;type=total;ucfs=1&#availability",
   category: "Shangri La Paris"
},
  
  {
    url:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295686280.jpg?k=3345ba2d117f7ca8e531a9962009b3669c451c4734cda01c5a9ea84e4e888e4b&o=&hp=1",
      name: "Shangri-La Paris",
      title: "Get the celebrity",
      bookinglink: "https://www.booking.com/hotel/fr/shangri-la-paris.en-gb.html?aid=1649686&label=shangri-la-paris-sVIBbb9gab05cbZb5pMiuwS630916349505%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-572909883032%3Akwd-5310570222%3Alp1011086%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdwTcLIbWZlfefYGj3m2lIc&sid=d8810d24e87b6474ae28d9dd6d215f42&dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1702637847;srpvid=2e334d0a2298010c;type=total;ucfs=1&#availability",
   category: "Shangri La Paris"
},
  //Third image url
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/b607a1b38858851e4d0ad45c8a263afeba3e67a4-b607a1-1980-1024-auto.jpg?q=1696597057",
      name: "Chill out…",
      title: "Honesty Bar",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
   category: "Shangri La Paris"  
},

  //Fourth image url

  {
  url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/platine-hotel-salle-de-jeux-176886-1280-600-portrait.jpg?q=1696597061",
      name: "Have fun…",
      title: "Games Room",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
   category: "Shangri La Paris"  
},
];




 const sliderImageUrlMandarinOriental = [
  {
    id: 1,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/hong-kong-experiences-wine-tasting-master-class2?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
    title: "Paris",
    name: "Outstanding Wines Experience",
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web",
    category: "Mandarin Oriental",
},
   {
    id: 2,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-experiences-paris-running-tour-resized?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
      title: "Paris",
    name: "Paris Running Tour",
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web",
    category: "Mandarin Oriental",
  },
   {
    id: 3,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-experiences-unleash-your-kids-creativity?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
      title: "Paris",
    name: "Unleash Your Kid's Creativity",
    category: "Mandarin Oriental",
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web",
  },
   {
    id: 4,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2016-fine-dining-sur-mesur-par-thierry-marx-8?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
      title: "Paris",
    name: "Unique Testing Menu at Sur Mesure par Thierry Marx",
    category: "Mandarin Oriental",
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web",
  },
   {
    id: 5,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-experiences-private-mixology-experience-resized?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
    title: "Paris",
    name: "Enjoy a Tailor-made Cocktail Testing",
    category: "Mandarin Oriental", 
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web", 
},

 {
    id: 6,
    url: "https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-spa-velvety-rose?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
    title: "Paris",
    name: "Romance in Paris", 
    category: "Mandarin Oriental", 
    bookinglink: "https://giftcards.mandarinoriental.com/egift-card-031505?utm_source=navigation&utm_medium=shop_button&utm_campaign=mo_web",
},
  
];
 

  return (
   <React.Fragment>
      <div  className="home-wrapper mb-3">
      <TopBar /> 
      <Header />
        <HeroSection 
        videosrc="https://photos.mandarinoriental.com/is/content/MandarinOriental/paris-hotel-video-2021-desktop"
        pagetitle = "Paris"
        pagedescription="Mandarin Oriental"
        />

        

 {/*      <div className="row mt-3 left-image-container">
       <div className="col-sm-6 left-slider" >
   <SliderComponent slides={sliderSlides1} size="small" buttonclass="d-none" contentclass="d-none"/>
      </div>
<div className="col-sm-6" >
  <MainHeading Text="Paris" className="main-heading" />


<p>
A timeless celebration of Paris, inspired by fashion, artistic creativity and underpinned by the brand’s legendary service. The elegant rooms and spacious suites offer a stylish Parisian experience with a nod to couture and art. Sat in the heart of Paris, the hotel features an inner garden, providing a sanctuary from the bustling city and a peaceful dining haven. A wide range of dining options, overseen by Chef Thierry Marx, include the two-Michelin starred Sur Mesure, all-day dining Camelia and a cool cocktail bar. Treat yourself to our unique Spa treatments in a soothing environment, featuring private treatment rooms, an indoor pool and a state-of-the-art fitness centre.
</p>
  
    <Button id="boot-table" className="gray-colored-button" text="Contact Us" iconClass="fa-print d-none" />
    <Button id="boot-table" className="orangered-colored-button mt-3" text="Festive Season" iconClass="fa-print d-none" />

      </div>
      </div> */}



     
<div className="large-slider">

        <SliderComponent slides={sliderSlides2}  buttonclass="d-none"  contentclass="d-none"/>
</div>
<div className="small-multi-slider mt-sm-5" id="PlatineHotel">
      <MultiSliderComponent  
      slides={sliderImageUrlpaletinehotel}
      slidertitle="Platine Hotel"
      sliderdescription="In the heart of an eclectic district, ideally situated between the Eiffel Tower and the Porte de Versailles exhibition center, the Platine Hotel ****
       welcomes you in a charming fifties atmosphere, inspired by the most glamorous icon that Hollywood has ever known." 
      sliderlinktext="View all"
      sliderlink="https://www.platinehotel.fr/en/hotel-services#content"
      />

      <ReviewSection average="4.1" reviews="215"/>
</div>


<div className="small-multi-slider" id="ShangriLaParis">
      <MultiSliderComponent  
      slides={sliderImageUrlShangriLaParis}
      slidertitle="Shangri La Paris"
      sliderdescription="A former residence of Prince Roland Bonaparte and listed in the French “Monuments Historiques”, Shangri-La Hotel, Paris is a hotel palace located across the Seine and facing the Eiffel Tower. It reflects both Asian hospitality and French art de vivre. It has 2 restaurants and 1 of which has a Michelin star. An indoor pool and a spa are featured. Place Trocadero can be found 500 metres away." 
      sliderlinktext="View all"
      sliderlink="https://www.booking.com/searchresults.en-gb.html?aid=1649686&label=shangri-la-paris-sVIBbb9gab05cbZb5pMiuwS630916349505%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-572909883032%3Akwd-5310570222%3Alp1011086%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdwTcLIbWZlfefYGj3m2lIc&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT_bY9WZVq1kJqMDClcQf1z__cv4baaPn9fRF4SV4QQZg9zRoL1vPfkaAoNTEALw_wcB&highlighted_hotels=305285&redirected=1&city=-1456928&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=d8810d24e87b6474ae28d9dd6d215f42"
      />

        <ReviewSection  average="4.3" reviews="312"/>
</div>

<div className="small-multi-slider" id="MandarinOriental">
      <MultiSliderComponent  
      slides={sliderImageUrlMandarinOriental}
      slidertitle="Mandarin Oriental"
      sliderdescription="Discover a selection of experiences of the French Art de vivre, dedicated tolovers of fashion, food, art, history and design." 
      sliderlinktext="View all Experiences"
      sliderlink="https://www.mandarinoriental.com/en/paris/place-vendome/explore"
      />
  
        <ReviewSection  average="4.3" reviews="312"/>
</div>



      <div className="row gallery-section">
      <div className="col-sm-12 d-flex">
        <MainHeading Text="Gallery" className="main-heading" />
     
      </div>
      <div className="col-sm-12 mb-5">
<GalleryCategory data={{ sliderImageUrlShangriLaParis, sliderImageUrlpaletinehotel, sliderImageUrlMandarinOriental }} />


      </div>
      </div>

<TitleComponent buttonlink="https://www.mandarinoriental.com/en/fans-of-mo/benefits-enrolment" />

{/*
<div className="home-large-section-2">
        
<h1>Spa & Wellness</h1>

  <p>
  Your journey to relaxation and rejuvenation begins the moment you step into the Spa at Mandarin Oriental, 
  recently awarded Best Unique Spa Experience and Best Luxury Hotel Spa at the World Luxury Spa Awards.
  </p>
  <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-spa-pool?wid=1600&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0" />
   <MainHeading Text="Treatments" className="main-heading" />
     <Link className="link-style">
       View Details  <i class="fa fa-chevron-right"></i>
       </Link>
</div>

<div className="large-multi-slider">


          <SliderComponent slides={sliderSlides3}
           slidertitle="Mandarin Oriental"
        sliderdescription="Discover a selection of experiences of the French Art de vivre, dedicated tolovers of fashion, food, art, history and design."
      sliderlinktext="View all Experiences"
      sliderlink="https://www.mandarinoriental.com/en/paris/place-vendome/explore"
      >
         
          
          </SliderComponent>
</div>

<div className="row product-container mb-5">
<div className="col-sm-6">
<HomeProducts imgsource="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2016-hotel-venues-banquet-dinner?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
productclass=""
producttitle="Celebrate"
productdescription="An intimate experience."
productlink="Learn More"
/>

</div>
<div className="col-sm-6">
<HomeProducts imgsource="https://photos.mandarinoriental.com/is/image/MandarinOriental/MA0B23~1?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
productclass=""
producttitle="Shop"
productdescription="Bring luxury home. Get gift cards, bedding, spa products and more."
productlink="Shop Now"
/>
</div>
</div>
<div className="row">
<Products 
  imagesource="https://photos.mandarinoriental.com/is/image/MandarinOriental/MA0B23~1?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
  description="Bring luxury home. Get gift cards, bedding, spa products and more."
  producttitle="Shop"
  productid="1"
     />
</div>
 */}
     {/*  <Modal /> */}

        {/* Footer */}
     

      </div>
   
       <Footer />

        </React.Fragment>
  );
}

export default Home;
