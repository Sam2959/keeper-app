import React, { useState } from "react";

function CreateArea(props) {
  const [titleContent, setTitleContent] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setTitleContent((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleClick(event) {
    props.sendNote(titleContent);
    setTitleContent({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={titleContent.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={titleContent.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
