import { create } from "zustand";
type STATE = {
  isMusicPlaying: boolean;
};
type ACTION = {
  setMusicPlaying: (isMusicPlaying: boolean) => void;
};
const useGlobalStore = create<STATE & ACTION>((set) => ({
  isMusicPlaying: false,
  setMusicPlaying: (isMusicPlaying) =>
    set(() => ({ isMusicPlaying: isMusicPlaying })),
}));

export default useGlobalStore;