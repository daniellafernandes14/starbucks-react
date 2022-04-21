const Card = (props) => {
  return (
    <div className={props.className}>
      <div className={props.className2}>
        <img src={props.img} alt='image1' />
      </div>
      <div className={props.className3}>
        <div className={props.className4}>
          <h5>{props.title}</h5>
          <p>{props.para}</p>
          <a className={props.btnClass} href='https://google.com'>{props.button}</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
