import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editQuiz } from "../../store/quiz";

// returned form filled with previous data from original form
// add a cancel button
// 

const UpdateQuiz = () => {
  //grab data from selected quiz (maybe global state for selected quiz)
  
  //backend recieves name, is_private, question_quantity, category
  //state should be changed to current quiz data
  const [name, setName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editQuiz({ 
        name, 
        is_private: isPrivate}));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Update Quiz</h1>
        <h2>A Quiz is a set of Questions</h2>
        <input
          name="name"
          type="text"
          placeholder="e.g. Biology 101, Constitutional Law"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <br></br>
        <label for="is_private">Private?</label>
        <input
          value={isPrivate}
          onChange={(e) => setIsPrivate(true)}
          name="is_private"
          type="checkbox"
        ></input>
        <br></br>
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default UpdateQuiz;
