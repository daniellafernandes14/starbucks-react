const Card = (props) => {
  const {className, className2, className3, className4, img, title, para, btnClass, button} = props
  return (
    <div className={className}>
      <div className={className2}>
        <img src={img} alt='image1' />
      </div>
      <div className={className3}>
        <div className={className4}>
          <h5>{title}</h5>
          <p>{para}</p>
          <a className={btnClass} href='https://google.com'>{button}</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
