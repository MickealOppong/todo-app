import { useEffect } from "react";
import Message from "./Message";

const ShowMessage = ({ msg, msgType, closeMsg }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeMessage();
    }, 3000)
    return () => clearTimeout(timeOut);
  }, [])

  return <Message msg={msg} msgType={msgType} closeMsg={closeMsg} />
}
export default ShowMessage;