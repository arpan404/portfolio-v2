import { create } from "zustand";
type STATE = {
  isMusicPlaying: boolean;
  currentProject: string | null;
};
type ACTION = {
  setMusicPlaying: (isMusicPlaying: boolean) => void;
  setCurrentProject: (currentProject: string | null) => void;
};
const useGlobalStore = create<STATE & ACTION>((set) => ({
  isMusicPlaying: false,
  setMusicPlaying: (isMusicPlaying) =>
    set(() => ({ isMusicPlaying: isMusicPlaying })),
  currentProject: null,
  setCurrentProject: (currentProject) =>
    set(() => ({ currentProject: currentProject })),
}));

export default useGlobalStore;
