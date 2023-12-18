import { create } from "zustand";

interface DeleteModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeleteModel = create<DeleteModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeleteModel;
