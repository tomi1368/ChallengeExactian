export const logOut = (nav)=>{
    localStorage.removeItem("user-token")
    localStorage.removeItem("user-name")
    nav("/login")
}