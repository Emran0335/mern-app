import React from "react";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";

const Dashboad = () => {
  return (
    <>
      <section className="heading">
        <h1>Welcome Emran</h1>
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
