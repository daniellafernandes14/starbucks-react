const Modal = (props) => {
  const {} = props
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='modal-close'>X</button>
        <div className='modal-header'>
          <h3 className="modal-title">Become a Starbucks Rewards Member</h3>
        </div>
        <div className='modal-body'>
          Enter email address
          <div>
            <input></input>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='modal-cta'>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
