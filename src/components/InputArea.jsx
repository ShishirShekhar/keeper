import React from "react";

function InputArea(props) {
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

    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={handleChange}
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default InputArea;
