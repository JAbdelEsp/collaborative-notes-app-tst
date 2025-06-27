import { useForm, type SubmitHandler } from "react-hook-form";
import type { HomeProps } from "../../types";
import { Button, Container, ModalContent, ModalOverlay } from "./styles";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
import Notes from "../../components/Notes";
import { SvgIcon } from "../../common/SvgIcon";
interface FormValues {
  note: string;
  user: string;
  timestamp: string;
}
const Home = ({ notes, onCreate, onEdit, showModal, show }: HomeProps) => {
  const { handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.note = note;
    onCreate(data);
    showModal();
  };
  const [note, setNote] = useState("");
  return (
    <Container>
      <h1>Home</h1>
      <Button onClick={showModal}>
        <SvgIcon src="new-svgrepo-com.svg" />
      </Button>
      <Notes source={notes} edit={onEdit} />
      {show && (
        <ModalOverlay onClick={showModal}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            <h4>Creating new note...</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="note">Note</label>
              <ReactQuill theme="snow" value={note} onChange={setNote} />
              <button className="sentButton" type="submit">
                Save
              </button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Home;
