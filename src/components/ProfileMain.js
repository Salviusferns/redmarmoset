import React, { useState, useEffect } from 'react';
import { db , auth } from './post/firebase/FirebaseInit';

const ProfileMain = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userData = await db.collection('users').doc(user.uid).get();
        setUser(userData.data());
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app__profile'>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {user.profilePictureUrl && (
        <img src={user.profilePictureUrl} alt={user.username} />
      )}
    </div>
  );
};

export default ProfileMain;