const Card = (props) => {
  const {variation, position, img, title, para, btnClass, button, onClick} = props
  return (
    <div className={`${variation}-img-${position}`}>
      <div className={`${variation}-card-img`}>
        <img src={img} alt='image1' />
      </div>
      <div className={`${variation}-card-text`}>
        <div className={`${variation}-card-text-center`}>
          <h5>{title}</h5>
          <p>{para}</p>
          <button type='button' onClick={onClick} className={btnClass}>{button}</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
