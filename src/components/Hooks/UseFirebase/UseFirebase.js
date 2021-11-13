import { useEffect, useState } from "react"
import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut,updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    // console.log(user?.providerData[0].email)
    

    const auth = getAuth();

    const registerUser = (email, password,name,history) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
               
    
            });
    }

     // observer user state
     useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const loginUser = (email, password,location,history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));;
    }

    useEffect(() => {
        fetch(`https://glacial-spire-55948.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])
    

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));;
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://glacial-spire-55948.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut

    }
}
export default useFirebase;