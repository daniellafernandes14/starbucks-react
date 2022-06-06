const Longcards = () => {
  return(
    <div className='long-cards'>
      <div className='long-card'>
        <div className='img-container'>
          <img src='../images/image3.webp' alt='image1'/>
        </div>
        <div className='long-card-textbox'>
          <h1>Iced shaken awakening</h1>
          <p>Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso with rich, creamy layers and nondairy goodness.</p>
          <a className='btn-white' href='https://google.com'>Order now</a>
        </div>
      </div>
      <div className='long-card'>
        <div className='img-container'>
          <img src='../images/image4.webp' alt='image1' />
        </div>
        <div className='long-card-textbox'>
          <h1>Cheerfully chill</h1>
          <p>Spring sips await with our nondairy Pink Drink, complete with real strawberry pieces and coconutmilk.</p>
          <a className='btn-white' href='https://google.com'>Order now</a>
        </div>
      </div>
    </div>

  )
}

export default Longcards;
