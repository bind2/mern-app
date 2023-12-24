import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const Context = createContext()
const ContextProvider = ({ children }) => {

    /*==============================================  All states / functions  ========================================*/

    const [registerDetail, setRegisterDetail] = useState({ username: "", email: "", phone: "", password: "", profilePic: "" }); // register user details
    const [loginDetail, setLoginDetail] = useState({ email: "", password: "" }); // login user details
    const [showSignup, setShowSignup] = useState(true); // state for switching forms
    const [showPassword, setShowPassword] = useState(true); // state for show / hide password
    const [modalState, setModalState] = useState(false);
    const [userDetails, setUserDetails] = useState({})
    const [logoutState, setLogoutState] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isLoading, setIsLoading] = useState(false)

    // getting token on local storage and convert value true
    const isLoggedIn = !!token;

    // scrollbar show / hide functionality
    modalState ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
    logoutState ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";

    // modal open or close functionality
    const openOrCloseModal = () => {
        setLoginDetail({ email: "", password: "" })
        setRegisterDetail({ username: "", email: "", phone: "", password: "", profilePic: "" })
        setShowSignup(true)
        setModalState(!modalState)
    }

    // jwt authentication to get th currently loggedin user data
    const userAuthentication = async () => {
        try {
            const response = await axios.get(`${window.location.origin}/user`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.status === 200) {
                const { userData } = response.data;
                setUserDetails(userData)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    
    useEffect(() => {
        if (isLoggedIn) userAuthentication()
    }, [])





    // handling the register input value
    const handleRegisterInput = (e) => {
        const { name, value } = e.target;
        setRegisterDetail({ ...registerDetail, [name]: value });
    };

    // Converts a file to its base64 representation asynchronously using FileReader.
    const imageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Set up an event handler for when the file has been read successfully
            reader.onload = () => {
                // The result attribute contains the data URL
                resolve(reader.result);
            };

            // Set up an event handler for errors during reading
            reader.onerror = (error) => {
                reject(error);
            };

            // Check if a file is selected
            if (file) {
                // Read the file as a data URL
                reader.readAsDataURL(file);
            } else {
                // Reject the promise if no file is selected
                toast.info('You clicked cancel button')
            }
        });
    };

    // hadling the user profile pic
    const handleProfilePic = async (e) => {
        try {
            const imgUri = await imageToBase64(e.target.files[0]);
            setRegisterDetail({ ...registerDetail, profilePic: imgUri });
        } catch (error) {
            // Handle the error, e.g., show a user-friendly message to the user
            toast.error('Error handling profile picture:', error.message);
        }
    };

    // handling the login input
    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginDetail({ ...loginDetail, [name]: value });
    };

    // Event handler for keydown events
    const handleKeyDown = (event) => {
        // Prevent default behavior for ArrowUp and ArrowDown keys
        if (event.key === 'ArrowUp') {
            event.preventDefault();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
        }
    };

    // switching form register to login and login to register in between
    const handleLinkClick = () => {
        setShowSignup(!showSignup);
    };

    // show and hide password
    const showPass = () => {
        setShowPassword(!showPassword);
    };

    // handling the form signup
    const register = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            const response = await axios.post(
                `${window.location.origin}/register`,
                registerDetail
            );


            if (response.status === 201) {
                setIsLoading(false)
                setRegisterDetail({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                    profilePic: "",
                });
                handleLinkClick();
                toast.success(response.data.message);
            }

        } catch (error) {
            setIsLoading(false)
            toast.error(error.response.data.extraDetails ? error.response.data.extraDetails : error.response.data.message);
        }
    };

    // store the token on local storage
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    // handling the form singin
    const login = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            const response = await axios.post(
                `${window.location.origin}/login`,
                loginDetail
            );

            
            if (response.status === 200) {
                setIsLoading(false)
                setLoginDetail({ email: "", password: "" });
                openOrCloseModal();
                storeTokenInLS(response.data.token)
                toast.success(response.data.message)
            }


        } catch (error) {
            setIsLoading(false)
            toast.error(error.response.data.extraDetails ? error.response.data.extraDetails : error.response.data.message);
        }
    };

    // logout confirmation functionality
    const logoutConfirmationHandler = () => {
        setLogoutState(!logoutState)

    };

    // logout functionality
    const logout = () => {
        setToken("")
        localStorage.removeItem("token");
        setLogoutState(!logoutState)
        toast.success('logout successful')
    }


    const [activeForm, setActiveForm] = useState('login');

    const switchForm = (form) => {
      setActiveForm(form);
    };



    return (
        <Context.Provider
            value={{
                isLoggedIn,
                token,
                userDetails,
                modalState,
                registerDetail,
                loginDetail,
                showSignup,
                showPassword,
                logoutState,
                isLoading,
                activeForm,
                switchForm,
                openOrCloseModal,
                handleRegisterInput,
                handleProfilePic,
                handleLoginInput,
                handleKeyDown,
                handleLinkClick,
                showPass,
                register,
                login,
                logoutConfirmationHandler,
                logout
            }}
        >
            {children}
        </Context.Provider>
    )
}

const useStore = () => useContext(Context)
export { useStore, ContextProvider }