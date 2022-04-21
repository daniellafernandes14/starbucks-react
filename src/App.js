import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Longcards from './components/Longcards'

const App = () => {
    return(
      <div id='body'>
        <Navbar
        className='navbar'/>
        <Card
          className='banner'
          className2='banner-img'
          className3='banner-text'
          className4='banner-text-center'
          img='../images/image1.webp'
          title='Turn your usual into free faves*'
          button='Join Starbucks Rewards'
          btnClass='btn-white'
        />
        <Card
          className='long-card-img-right'
          className2='long-light-img'
          className3='long-light-card-text'
          className4='long-light-card-text-center'
          img='../images/image2.webp'
          title='Planet-positive tips'
          para='April is earth month, but our commitment to reducing our environmental impact is year round. Try these tips on your next Starbucks visit.'
          button='Learn how'
          btnClass='btn-black'
        />
        <Longcards
          className='long-cards'
          className2='long-card'
          className3='long-card-textbox'
          img1='../images/image3.webp'
          img2='../images/image4.webp'
          title1='Iced shaken awakening'
          title2='Cheerfully chill'
          para1='Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso with rich, creamy layers and nondairy goodness.'
          para2='Spring sips await with our nondairy Pink Drink, complete with real strawberry pieces and coconutmilk.'
          button='Order now'
          btnClass='btn-white'
        />
        <Card
          className='card-img-left'
          className2='small-card-img'
          className3='dark-card-text'
          className4='dark-card-text-center'
          img='../images/image5.jpeg'
          title='Vegetarian goodness'
          para='Our Spinach, Feta and Egg White Wrap offers a meatless way to seize the day.'
          button='Order now'
          btnClass='btn-white'
        />
        <Card
          className='card-img-right'
          className2='small-card-img'
          className3='light-card-text'
          className4='light-card-text-center'
          img='../images/image6.webp'
          title='A good day, on its way'
          para='Get your favorites delivered on Uber Eats.**'
          button='Order now'
          btnClass='btn-black'
        />
        <Card
          className='card-img-left'
          className2='small-card-img'
          className3='light-card-text'
          className4='light-card-text-center'
          img='../images/image7.webp'
          title='Earning 4,500 Bonus Stars is Super Starifying'
          para='Earn more Stars and even more Rewards with a $0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.'
          button='Learn more'
          btnClass='btn-black'
        />
        {/* <Footer /> */}
      </div>
    )
}

export default App;
