import { useMemo } from "react";
import type { LeaderBoardProps } from "../../types";
import { BackButton, Container, LeaderBoardTable, Title } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";

const LeaderBoard = ({ notes }: LeaderBoardProps) => {
  const navigate = useNavigate();
  const rankings = useMemo(() => {
    const counts: Record<string, number> = {};

    notes.forEach((note) => {
      counts[note.user] = (counts[note.user] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([user, count]) => ({ user, count }))
      .sort((a, b) => b.count - a.count);
  }, [notes]);

  return (
    <Container>
      <Title> Leaderboard </Title>
      <BackButton onClick={() => navigate("/")}>
        <SvgIcon src="back-square-svgrepo-com.svg" />
      </BackButton>
      <LeaderBoardTable>
        <thead>
          <tr>
            <th>User</th>
            <th>Notes created</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((rank, key) => (
            <tr key={key}>
              <td>{rank.user}</td>
              <td>{rank.count}</td>
            </tr>
          ))}
        </tbody>
      </LeaderBoardTable>
    </Container>
  );
};

export default LeaderBoard;
