import React, { useEffect } from "react";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Dashboad = () => {
    const navigate = useNavigate()

    const {user} = useSelector((state)=> state.auth)
    useEffect(()=> {
        if(!user) {
            navigate('/login')
        }

    },[user, navigate])
  return (
    <>
      <section className="heading">
        <h1>Welcome, {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        <div className="goals">
          <GoalItem />
        </div>
        <h3>You have not yet set any goals</h3>
      </section>
    </>
  );
};

export default Dashboad;
