// import React, { createContext } from 'react';
// import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
// import app from '../../Contexts/AuthProvider/AuthProvider';
// import {useState,useEffect} from 'react';


// export const AuthConText = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//      const createUser = (email,password) =>{
//         return createUserWithEmailAndPassword(auth,email.password);
//      }

//   useEffect( () =>{
//       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
//         console.log(currentUser);
//         setUser(currentUser);
//        });

//        return () =>{
//          return unsubscribe();
//        }

//   }, [])

//     const authInfo = {
//        user,
//        loading,
//        createUser
//     }

//     return (
//         <AuthConText.Provider value={authInfo}>
//             {children}
//         </AuthConText.Provider>
//     );
// };

// export default AuthProvider;