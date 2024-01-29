const Message = ({ msg, msgType, closeMsg }) => {
  return <article className="message-container">
    <div className="message-top">
      <span><i className={`fa fa-exclamation ${msgType}`} aria-hidden="true"></i></span>
      <h4 className={`message ${msgType}`}>{msg}</h4>
    </div>
    <div className={`underline ${msgType}`}>

    </div>
    <button className="close-btn" onClick={closeMsg}><i className="fa fa-times"></i></button>
  </article>

}
export default Message