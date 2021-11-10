
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';


const App = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {

    const { data } = await axios.get(
      // `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`

      // `https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple`
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}&difficulty=easy&type=multiple`


    );
    console.log("hello", data)
    setQuestions(data.results);

  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (

    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./home2.jpg)" }} >
        <Header />
        <Switch>
          {/* home */}
          <Route path='/' exact>
            <Home category={category} setCategory={setCategory} fetchQuestions={fetchQuestions} />
          </Route>
          <Route path='/quiz' exact>
            <Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions} />
          </Route>
          <Route path='/result' exact>
            <Result score={score} name={name} />
          </Route>

        </Switch>

      </div>
      <Footer />

    </BrowserRouter>



  );
}

export default App;
