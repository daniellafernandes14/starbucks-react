const Card = (props) => {
  const {variation, position, img, title, para, btnClass, button} = props
  // const styleName = {
  //   if (variation === 'dark') {
  //     'dark'
  //   }
  // }
  return (
    <div className={`${variation}-img-${position}`}>
      <div className={`${variation}-card-img`}>
        <img src={img} alt='image1' />
      </div>
      <div className={`${variation}-card-text`}>
        <div className={`${variation}-card-text-center`}>
          <h5>{title}</h5>
          <p>{para}</p>
          <a className={btnClass} href='https://google.com'>{button}</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
