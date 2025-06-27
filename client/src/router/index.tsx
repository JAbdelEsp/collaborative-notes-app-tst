import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import type { Note } from "../types";
import { Styles } from "../styles/styles";
import Edit from "../pages/Edit";
import { LeaderBoardTable } from "../pages/LeaderBoard/styles";
import LeaderBoard from "../pages/LeaderBoard";
interface RouterProps {
  notes: Note[];
  fnHandleCreate: any;
  fnHandleEdit: any;
  fnHandleDelete: any;
  showModal: () => void;
  show: boolean;
}
const Router = ({
  notes,
  fnHandleCreate,
  fnHandleEdit,
  fnHandleDelete,
  showModal,
  show,
}: RouterProps) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Styles />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              notes={notes}
              onCreate={fnHandleCreate}
              onEdit={fnHandleEdit}
              onDelete={fnHandleDelete}
              showModal={showModal}
              show={show}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Edit
              notes={notes}
              onEdit={fnHandleEdit}
              onDelete={fnHandleDelete}
            />
          }
        />
        <Route path="/leaderboard" element={<LeaderBoard notes={notes} />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
