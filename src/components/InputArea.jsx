import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setNote((prev) => ({ ...prev, [name]: value }));
    }

    function submitNote(event) {
        props.onAdd(note, setNote);
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange}
                    />
                )}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content}
                    onChange={handleChange}
                    onClick={expand}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;
