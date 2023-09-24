import React from "react";

const GoalForm = () => {
  return (
    <section className="form">
      <form>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" name="text" id="text" value="text" />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
