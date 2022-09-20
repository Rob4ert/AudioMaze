import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { auth, db, logout } from './firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import Container from '../Components/Container';

function Dashboard(props: any) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  // function handleClick() {
  //   setTake(prevState =>
  //       prevState = !prevState);
  //        }

  const taker = () => {
    setShow(true);
    if (show) return navigate('/profile');
  };

  useEffect(() => {
    if (loading) return;
    // if (taker) return navigate("/profile");
    if (!user) return navigate('/');

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={taker}>
          Get in
        </button>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
