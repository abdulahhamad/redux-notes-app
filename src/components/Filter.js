import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/notes/notesSlice";

function Filter() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
    setTitle(e.target.value);
  }

  return (
    <div className="row Search">
          <input
            placeholder="Search"
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
            className="form-control col-10"
          />
    </div>
  );
}

export default Filter;
