import React, { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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

  function onClickExpand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={titleContent.title}
          />
        )}

        <textarea
          onClick={onClickExpand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={titleContent.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <PlaylistAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
