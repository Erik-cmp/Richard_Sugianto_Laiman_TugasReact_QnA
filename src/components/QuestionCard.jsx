import { Link } from "react-router-dom";
import Axios from 'axios';

const postDelete = (id, e) => {
  e.preventDefault();
  Axios.delete(`http://localhost:4000/questions/${id}`).then(res => {
    console.log('Deleted!', res)
  }).catch(err => console.log(err))
}

const QuestionCard = ({ title, detail, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <div className="card__action">
        <Link className="btn btn-primary" to={`/question/${id}/edit`}>
          Edit
        </Link>
      </div>
      <button className="btn btn-danger" onClick={(e) => postDelete(id, e)}>Delete</button>
    </div>
  );
};

export default QuestionCard;
