import { useState } from "react";

const InputContainer = ({ addItem }) => {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    addItem(item);
    setItem('');
  }


  return <section className="input-container">
    <form onSubmit={handleSubmit} className="form-control">
      <input type="text" className="input" placeholder="enter todo item" name="item" value={item} onChange={(e) => setItem(e.target.value)} />
    </form>

  </section>
}
export default InputContainer;