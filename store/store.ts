import create from "zustand";
type store = {
  authStatus: {
    statusType: "success" | "info" | "error" | "warning" | undefined,
    msg: string | undefined
  },
  setAuthStatus: ( msg: (string | undefined), _statusType: ("success" | "info" | "error" | "warning" | undefined) ) => void,
  unsetauthStatus: () => void,
  userLoginInfo: {
    username?: string | undefined,
    password?: string | undefined
  },
  setUserLoginInfo: (_uname: string | undefined, _password: string | undefined) => void
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
  }})),
  userLoginInfo: {
    username: undefined,
    password: undefined
  },
  setUserLoginInfo: (_uname, _password) => set((state) => ({ ...state, userLoginInfo:{
    username: (_uname !== undefined) ? _uname : state.userLoginInfo.username,
    password: (_password !== undefined ) ? _password : state.userLoginInfo.password
  }}))
}))

export default useStore;