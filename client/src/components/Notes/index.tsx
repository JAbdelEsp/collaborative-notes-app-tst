import type { NotesProps } from "../../types";
import { Column, Content, Wrapper, ChildDate, Link } from "./styles";

const Notes = ({ source }: NotesProps) => {
  return (
    <Wrapper>
      {source &&
        source.map((note, key) => (
          <Link href={`/edit/${note.id}`} key={key}>
            <Column>
              <Content>
                <ChildDate>
                  {new Date(note.timestamp).toLocaleString()}
                </ChildDate>
                <div
                  dangerouslySetInnerHTML={{
                    __html: note.note.substring(0, 100) || "Untitled Note",
                  }}
                />
              </Content>
            </Column>
          </Link>
        ))}
    </Wrapper>
  );
};

export default Notes;
