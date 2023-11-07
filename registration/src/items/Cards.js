import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h3>Will</h3>
      <h3 className='phone'>425-281-9698</h3>
      <h3 className='email'>rpw98027@gmail.com</h3>
     
      <h1>Our Services Offered</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/maxresdefault.jpg'
              text='Cleaning includes Patios, Decks, Driveways, and more!'
              label='Surface Cleaning'
              path='/services'
            />
            <CardItem
              src='images/guttercleaning.jpeg'
              text="Don't Let rainwater pile up in your homes gutter system!"
              label='Gutter Cleaning'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/powerroof.jpeg'
              text='Have your roof pressurewashed safely and effectively'
              label='Roof Cleaning'
              path='/services'
            />
            <CardItem
              src='images/window-washing.jpeg'
              text="Clean those dirty home windows!"
              label='Window Cleaning'
              path='/products'
            />
            <CardItem
              src='images/christmas-lights.jpeg'
              text='Tired of messing around with Christmas Lights? Let us put them up for you!'
              label='Christmas Lights'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;