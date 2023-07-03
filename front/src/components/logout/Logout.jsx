// import React, { useState } from "react";
// import axios from "axios";

// const Logout = () => {
//   const [token, setToken] = useState(null);

//   const logout = async () => {
//     try {
//       const response = await axios.post("/auth/logout");
//       if (response.status === 200) {
//         setToken(null);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Logout;

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const LogoutButton = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
