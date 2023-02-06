import React, { useState } from 'react';
import { db, auth, fb } from './post/firebase/FirebaseInit';
import ProfileMain from './ProfileMain';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await auth.signInWithEmailAndPassword(email, password);
        setUser(response.user);
      } else {
      const response = await auth.createUserWithEmailAndPassword(email, password,username);
      await db.collection('users').doc(response.user.uid).set({
        email: email,
        createdAt: fb.firestore.Timestamp.fromDate(new Date()),
        password:password,
        username:username,
        
      });
      setUser(response.user);
    }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='app__signUp'>
            {user ? (
        <ProfileMain />
      ) : (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!isLogin && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      )}
      {error && <div>{error.message}</div>}
      {!user && (
        <div>
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setIsLogin(false)}>Sign up</button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)}>Login</button>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
