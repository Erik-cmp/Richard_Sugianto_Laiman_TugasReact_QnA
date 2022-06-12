import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import QuestionCreateForm from "./pages/QuestionCreateForm";
import QuestionEditForm from "./pages/QuestionEditForm";
import QuestionListPage from "./pages/QuestionListPage";
import "./styles/main.scss";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<QuestionListPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/question/:id/edit" element={<QuestionEditForm />} />
      <Route path="/question/create" element={<QuestionCreateForm />} />
    </Routes>
  </Layout>
);

export default App;
