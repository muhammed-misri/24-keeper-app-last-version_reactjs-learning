import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    /*
    This way you'll notice if I go back over here and I type 
    something in here and I click Add, 
    notice how the screen is not flashing anymore.
    
    So I'm preventing this entire reloading of the page by using the
    event.preventDefault
    */
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/*
        Now remember what we said about forms and buttons inside forms.
        
        Whenever you click on a button inside a form, the default 
        behavior is to refresh the page. 
        
        So we can pass the event to this submitNote and the event 
        is triggered by the onClick and we can call event.preventDefault.

        
        */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
