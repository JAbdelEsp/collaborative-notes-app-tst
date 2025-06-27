export interface Note {
  id: string;
  user: string;
  timestamp: number;
  note: string;
}

export interface TableNotesProps {
  source: Note[];
  edit: () => void;
}

export interface HomeProps {
  notes: Note[];
  onCreate: any;
  onEdit: any;
  onDelete: any;
  showModal: () => void;
  show: boolean;
}

export interface NotesProps {
  source: Note[];
  edit: any;
}

export interface SvgIconProps {
  src: string;
}

export interface ButtonProps {
  icon: string;
  fn?: () => void;
}

export interface EditProps {
  notes: Note[];
  onEdit: any;
  onDelete: any;
}

export interface LeaderBoardProps {
  notes: Note[];
}
