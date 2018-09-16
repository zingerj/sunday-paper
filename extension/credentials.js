// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase

var config = {
  apiKey: "AIzaSyDuUOjt5r7wAl0f5WvRSLOSwDjxtzkVwXg",
  authDomain: "sunday-paper-2018.firebaseapp.com",
  databaseURL: "https://sunday-paper-2018.firebaseio.com",
  projectId: "sunday-paper-2018",
  storageBucket: "sunday-paper-2018.appspot.com",
  messagingSenderId: "298992067325"
};
firebase.initializeApp(config);
/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  // Listen for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // // User is signed in.
      // Enable the add site button
      document.getElementById("add-site").disabled = false;
      document.getElementById("add-site").hidden = false;
      // // [START_EXCLUDE]
      document.getElementById('quickstart-button').textContent = 'Sign out';
      // [END_EXCLUDE]
    } else {
      // Let's try to get a Google auth token programmatically.
      document.getElementById("add-site").disabled = true;
      // Disable add-site
      document.getElementById("add-site").disabled = true;
      document.getElementById("add-site").hidden = true;
      // [START_EXCLUDE]
      document.getElementById('quickstart-button').textContent = 'Sign-in with Google';
      // [END_EXCLUDE]
    }
  });
  // [END authstatelistener]
  document.getElementById('quickstart-button').addEventListener('click', startSignIn, false);
  // document.getElementById('add-site').addEventListener('click', scrapeMedium, false);
  document.getElementById('add-site').addEventListener('click', scrapeMedium, false);
}

function scrapeMedium() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    var tabID = tab.id;
    // Gets the dom data as a json with title, author, content, date posted, and link to article 
    chrome.tabs.sendMessage(tabID, {text: 'getDom'}, (x) => {console.log(x)});
  });

}

function getData() {
  var user = firebase.auth().currentUser;
  console.log(user);

  const userRef = await firebase.firestore().collection('users').doc(user.uid).add({ name: 'swag' })

  const paper = await userRef.collection('papers').add({
    author: 'memes', content: 'memes', date: 'memes', link: 'memes', timestamp: 'memes', title: 'memes'
  })
}

/**
 * Start the auth flow and authorizes to Firebase.
 * @param{boolean} interactive True if the OAuth flow should request with an interactive mode.
 */
function startAuth(interactive) {
  // Request an OAuth token from the Chrome Identity API.
  chrome.identity.getAuthToken({ interactive: !!interactive }, function(token) {
    if (chrome.runtime.lastError && !interactive) {
      console.log("It was not possible to get a token programmatically.");
    } else if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else if (token) {
      // Authorize Firebase with the OAuth Access Token.
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch(function(error) {
          // The OAuth token might have been invalidated. Lets' remove it from cache.
          if (error.code === "auth/invalid-credential") {
            chrome.identity.removeCachedAuthToken({ token: token }, function() {
              startAuth(interactive);
            });
          }
        });
    } else {
      console.error("The OAuth Token was null");
    }
  });
  document.getElementById('add-site').disabled = false;
  chrome.contextMenus.create({"title":"Save for Sunday"});
  chrome.contextMenus.onClicked(scrapeMedium());
}

/**
 * Starts the sign-in process.
 */
function startSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    startAuth(true);
  }
}

window.onload = function() {
  initApp();
}
