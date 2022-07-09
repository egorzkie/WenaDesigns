import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
export const doUserLogIn = async function ({ username, password, setPassword, setUsername,setCurrentUser}) {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          'username'
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUsername('');
      setPassword('');
      // Update state variable holding current user
      getCurrentUser({setCurrentUser});
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  export const doUserLogOut = async function ({navigate}) {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
        navigate('/home');
      }
      // Update state variable holding current user
      // getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  export const userLogin = (newUser) => {
    const user = new Parse.User();
  
    user.set('username', newUser.email);
    user.set('password', newUser.password);
    // user.set('email', newUser.email);
  
    console.log('User: ', user);
    return user
        .logIn()
      .then((newUserSaved) => newUserSaved)
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  
  };


    // Function that will return current user and also update current username
    export const getCurrentUser = async function ({ setCurrentUser}) {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
      };
      
export const parse = Parse