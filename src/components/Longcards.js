const Longcards = (props) => {
  return(
    <div className={props.className}>
      <div className={props.className2}>
        <img src={props.img1} alt='image1'/>
        <div className={props.className3}>
          <h1>{props.title1}</h1>
          <p>{props.para1}</p>
          <a className={props.btnClass} href='https://google.com'>{props.button}</a>
        </div>
      </div>
      <div className={props.className2}>
        <img src={props.img2} alt='image1' />
        <div className={props.className3}>
          <h1>{props.title2}</h1>
          <p>{props.para2}</p>
          <a className={props.btnClass} href='https://google.com'>{props.button}</a>
        </div>
      </div>
    </div>

  )
}

export default Longcards;
