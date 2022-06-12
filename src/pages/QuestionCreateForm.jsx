import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionCreateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/questions`).then(res => {
        console.log("Getting from ::::", res.data)
    }).catch(err => console.log(err))
  }, []);

  const createQuestion = (e) => {
    e.preventDefault();
     axios.post(`http://localhost:4000/questions`, {
        title,
        detail,
      }).then(res => console.log('Posting data...', res)).catch(err => console.log(err));
  };

  const navigateBack = () => {
    navigate('/src/pages/QuestionListPage.jsx')
  }

  return (
    <form onSubmit={(e) => createQuestion(e)} className="question-form">
      <h1 className="question-form__title">Create Question</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <button type="submit" className="btn btn-primary" onClick={navigateBack}>
        Submit
      </button>
    </form>
  );
};

export default QuestionCreateForm;
