import { useNavigate, useParams } from "react-router-dom";
import type { EditProps, Note } from "../../types";
import { BackButton, ConflictWarning, Container, Header, Info } from "./styles";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import { SvgIcon } from "../../common/SvgIcon";
const Edit = ({ notes, onEdit, onDelete }: EditProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const note = notes.find((note) => note.id === id);
  const [content, setContent] = useState(note?.note || "");
  const [lastSaved, setLastSaved] = useState(note?.timestamp || 0);
  const [conflict, setConflict] = useState(false);

  useEffect(() => {
    setContent(note?.note || "");
    setLastSaved(note?.timestamp || 0);
  }, [note?.note, note?.timestamp]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "notes") {
        const updatedNotes = JSON.parse(e.newValue || "[]");
        const updatedNote = updatedNotes.find((n: Note) => n.id === id);
        if (updatedNote && updatedNote.timestamp > lastSaved) {
          setConflict(true);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [id, lastSaved]);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (value: string) => {
    setContent(value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (note) {
        const currentTime = Date.now();
        if (note.timestamp !== lastSaved) {
          setConflict(true);
          return;
        }
        onEdit(note.id, value, note.user, currentTime);
        setLastSaved(currentTime);
        setConflict(false);
      }
    }, 400);
  };
  return (
    <Container>
      <Header>
        <Info>
          <div>
            <strong>User:</strong>
            {note?.user}
          </div>
          <div>
            <strong>Last saved:</strong>
            {note && new Date(note.timestamp).toLocaleString()}
          </div>
        </Info>
        <BackButton onClick={() => navigate("/")}>
          <SvgIcon src="back-square-svgrepo-com.svg" />
        </BackButton>
        <BackButton
          onClick={() => {
            if (note && confirm("Are you sure you want to delete this note?")) {
              onDelete(note.id);
              navigate("/");
            }
          }}
        >
          <SvgIcon src="delete-svgrepo-com.svg" />
        </BackButton>
      </Header>
      {conflict && (
        <ConflictWarning>
          ⚠️ Conflicting update detected. Another user has edited this note.
          Please refresh to get the latest version or continue editing to
          overwrite. ⚠️
        </ConflictWarning>
      )}
      <ReactQuill value={content} onChange={handleChange} />
    </Container>
  );
};

export default Edit;
