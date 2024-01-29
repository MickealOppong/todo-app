import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Content from "./components/Content";
import InputContainer from "./components/InputContainer";
import { load } from './load';
import { save } from "./save";
const Todo = () => {

  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState(false)
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const addItem = (item) => {

    if (!item) {
      toast.error("Please provide a value")
      return;
    }
    const obj = {
      id: Date.now(),
      completed: false,
      name: item
    }
    const d = [...items, obj];
    save('todo', d);
    setItems(d)
    toast.success("item added to the list")
  }

  const findItem = (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    const newItems = items.find((item) => item.id === id);
    if (!newItems.completed) {
      return;
    }
    toast.success("item removed from the list")
    return newItems;
  }

  const deleteItem = (e) => {
    const toDel = findItem(e);
    const newItems = items.filter((item) => item.id !== toDel?.id);
    save('todo', newItems);
    setItems(newItems);

  }

  const handleChange = (e) => {
    const index = e.target.dataset.id;
    items[index].completed = !items[index].completed;
    save('todo', items)
    setCompleted(!completed)
    setShowDeleteBtn(!showDeleteBtn)
  }

  useEffect(() => {
    const data = load('todo');
    setItems(data);
  }, [completed])

  const closeMessage = () => {
    setIsEmpty(false);
  }

  return <main>
    <ToastContainer position="top-center" />
    <section className="todo-container">
      <InputContainer addItem={addItem} />
      <Content handleChange={handleChange} data={items} deleteItem={deleteItem} />
    </section>

  </main>
}
export default Todo;