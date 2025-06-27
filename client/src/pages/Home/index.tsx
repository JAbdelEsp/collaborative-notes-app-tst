import { useForm, type SubmitHandler } from "react-hook-form";
import type { HomeProps } from "../../types";
import { Button, Container, ModalContent, ModalOverlay } from "./styles";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { memo, useState } from "react";
import Notes from "../../components/Notes";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";
interface FormValues {
  note: string;
  user: string;
  timestamp: string;
}
const Home = memo(({ notes, onCreate, onEdit, showModal, show }: HomeProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.note = note;
    onCreate(data);
    showModal();
  };
  const [note, setNote] = useState("");
  return (
    <Container>
      <h1>Home</h1>
      <Button title="Create new" onClick={showModal}>
        <SvgIcon src="new-svgrepo-com.svg" />
      </Button>
      <Button
        title="Go to leaderboard"
        onClick={() => navigate("/leaderboard")}
      >
        <SvgIcon src="leaderboard-svgrepo-com.svg" />
      </Button>
      <Notes source={notes} edit={onEdit} />
      {show && (
        <ModalOverlay onClick={showModal}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="user">User</label>
                <input type="text" {...register("user")} />
              </div>
              <div>
                <ReactQuill theme="snow" value={note} onChange={setNote} />
              </div>
              <button className="sentButton" type="submit">
                Save
              </button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
});

export default Home;
