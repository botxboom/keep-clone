import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function onChangeHandle(e){
    const {name, value } = e.target

    setNote((prevValue) => {
      return {
        ...prevValue, 
        [name] : value
      }
    })

  }

  function submitNote(e){

    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })

    e.preventDefault()
  }

  return (
    <div>
      <form>
        <input value={note.title} onChange={onChangeHandle} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={onChangeHandle} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
