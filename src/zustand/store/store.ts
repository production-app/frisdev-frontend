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

export default useDocumentStore;
