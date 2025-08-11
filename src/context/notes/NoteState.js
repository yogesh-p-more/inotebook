import NoteContext from "./noteContext";

const NoteState = (props) => {

    const state = {
        "name": "Yogesh",
        "class": "5th",
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>       
    );
}

export default NoteState;