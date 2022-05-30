import create from "zustand";
type store = {
  authStatus: {
    statusType: "success" | "info" | "error" | "warning" | undefined,
    msg: string | undefined
  },
  setAuthStatus: ( msg: (string | undefined), _statusType: ("success" | "info" | "error" | "warning" | undefined) ) => void
  unsetauthStatus: () => void
}
const useStore = create<store>(set => ({
  authStatus: {
    statusType: undefined,
    msg: undefined
  },
  setAuthStatus: (msg: (string | undefined), _statusType: ("success" | "info" | "error" | "warning" | undefined) ) => set(() => ({ authStatus:{
    msg: msg,
    statusType: _statusType
  }})),
  unsetauthStatus: () => set(() => ({ authStatus:{
    msg: undefined,
    statusType: undefined
  }}))
}))

export default useStore;