import create from "zustand";

export type store = {
  authStatus: {
    statusType: "success" | "info" | "error" | "warning" | undefined,
    msg: string | undefined
  },
  setAuthStatus: ( msg: (string | undefined), _statusType: ("success" | "info" | "error" | "warning" | undefined) ) => void,
  unsetauthStatus: () => void,
  userLoginInfo: {
    username?: string | "",
    password?: string | ""
  },
  setUserLoginInfo: (_uname: string | undefined, _password: string | undefined) => void,

  isLoginBtnPressed: boolean, 
  setIsLoginBtnPressed: (status: boolean) => void,

  userCheckingOverlay: boolean,
  toggleUserCheckingOverlay: () => void

  sessionFilter: "today" | "this month" | "by date",
  setSessionFilter: (session_name: "today" | "this month" | "by date" ) => void

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
    username: "",
    password: ""
  },
  setUserLoginInfo: (_uname, _password) => set((state) => ({ ...state, userLoginInfo:{
    username: (_uname !== undefined) ? _uname : state.userLoginInfo.username,
    password: (_password !== undefined ) ? _password : state.userLoginInfo.password
  }})),

  isLoginBtnPressed: false,
  setIsLoginBtnPressed: (status) => set({isLoginBtnPressed: status}),
  userCheckingOverlay: false,
  toggleUserCheckingOverlay: () => set((state) => ({userCheckingOverlay: !state.userCheckingOverlay})),

  sessionFilter: "today",
  setSessionFilter: (session_name) => set(() => ({sessionFilter: session_name}))
}))


export default useStore;