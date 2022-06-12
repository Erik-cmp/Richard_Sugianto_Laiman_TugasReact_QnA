import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import SearchBar from "../components/SearchBar";


const QuestionListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:4000/questions");
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  const renderQuestionList = () => {
    let questionList = questions;
    if (searchQuery) {
      questionList = questionList.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return questionList.map(({ title, detail, id }) => {
      return <QuestionCard title={title} detail={detail} id={id} key={id} />;
    });
  };

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

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <br></br><br></br><br></br>
      <form onSubmit={(e) => createQuestion(e)} className="question-form">
        <h1 className="question-form__title">Create Question</h1>
        <h3>Title</h3>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="question-form__input"
        />
        <h3>Detail</h3>
        <input
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          type="text"
          className="question-form__input"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="list">{renderQuestionList()}</div>
    </>
  );
};

export default QuestionListPage;
