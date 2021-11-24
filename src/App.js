import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import { useHistory } from "react-router";

const App = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const history = useHistory();
  const fetchQuestions = async (type = false) => {
    console.log("Category is ", category);
    const url = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }&difficulty=easy&type=multiple`;
    console.log("URL is ", url);
    axios.get(url).then((res) => {
      setQuestions(res.data.results);
      type && history.push("/quiz");
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <div className='app' style={{ backgroundImage: "url(./home2.jpg)" }}>
        <Header />
        <Switch>
          {/* home */}
          <Route path='/' exact>
            <Home
              category={category}
              setCategory={setCategory}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path='/quiz' exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path='/result' exact>
            <Result score={score} name={name} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
