const Note = ({ id, text, colour, onDelete }) => {
  return (
    <div 
      className="note" 
      style={{ 
        backgroundColor: colour, 
        padding: "20px", 
        margin: "10px", 
        minWidth: "150px",
        minHeight: "150px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Note;