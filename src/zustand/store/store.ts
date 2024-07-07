import { create } from "zustand";

interface DOC {
  id: string;
  name: string;
  type: string;
  size: number;
  path: string;
}
interface FileState {
  documents: DOC[];
  updateDocument: (doc: DOC) => void;
  deleteDocument: (id: number | string) => void;
}

interface DialogProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  toggle: () => void;
  setData: (data: any) => void;
}

interface ModelProps {
  Open: boolean;
  Close: boolean;
  OnOpen: () => void;
  OnClose: () => void;
  // onClose: () => void;
  toggle: () => void;
  // setData: (data: any) => void;
}

interface DataProps {
  user: {};
}

const useDocumentStore = create<FileState>((set) => ({
  documents: [],
  updateDocument: (newDoc) =>
    set((state) => ({
      documents: [...state.documents, newDoc],
    })),
  deleteDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
    })),
}));

export const useDialog = create<DialogProps>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: true }),
  toggle: () => set({ isOpen: false }),
  data: {},
  setData: (data) => set({ data: { data } }),
}));

export const useModel = create<ModelProps>((set) => ({
  Open: false,
  Close: false,
  OnOpen: () => set({ Open: true }),
  OnClose: () => set({ Open: false }),
  toggle: () => set({ Open: true }),
}));

export const useData = create<DataProps>((set) => ({
  user: {
    email: "",
    first_name: "",
    last_name: "",
    status: "",
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
}));

export default useDocumentStore;
