import React, { useEffect } from 'react';
import { requestForToken, onMessageListener } from './Services/firebase';

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(function (registration) {
          console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (err) {
          console.log('Service worker registration failed, error:', err);
        });
    }

    // Request for token
    requestForToken();

    // Set up onMessage listener
    onMessageListener()
      .then(payload => {
        console.log('Message received. ', payload);
      })
      .catch(err => console.log('Failed to receive message.', err));
  }, []);

  return (
    <div className="App">
      <h1>Task Management App</h1>
    </div>
  );
}

export default App;
