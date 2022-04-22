const Longcards = (props) => {
  const {className, className2, className3, img1, img2, title1, title2, para1, para2, btnClass, button} = props
  return(
    <div className={className}>
      <div className={className2}>
        <img src={img1} alt='image1'/>
        <div className={className3}>
          <h1>{title1}</h1>
          <p>{para1}</p>
          <a className={btnClass} href='https://google.com'>{button}</a>
        </div>
      </div>
      <div className={className2}>
        <img src={img2} alt='image1' />
        <div className={className3}>
          <h1>{title2}</h1>
          <p>{para2}</p>
          <a className={btnClass} href='https://google.com'>{button}</a>
        </div>
      </div>
    </div>

  )
}

export default Longcards;
