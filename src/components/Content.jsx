const Content = ({ data, handleChange, deleteItem }) => {
  return <section className="content-container">
    {
      data.map((todo, index) => {
        const { id, name, completed } = todo;
        return <div className="content" key={id}>
          <div className="content-center">
            <input type="checkbox" className="box" onChange={handleChange} data-id={index} checked={completed} />
            <p className="item" style={{ textDecoration: `${completed ? 'line-through' : ""}` }}>{name}</p>
          </div>
          <button className="btn" onClick={deleteItem} data-id={id} >
            <i className="fa fa-times"></i>
          </button>
        </div>
      })

    }

  </section>
}
export default Content;