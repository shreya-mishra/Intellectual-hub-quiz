import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import ComponentModal from "../../components/ComponentModal/ComponentModal";

const Home = ({
  category,
  setCategory,
  name,
  setName,
  email,
  setEmail,
  setPassword,
  password,
  fetchQuestions,
  location,
}) => {
  const history = useHistory();
  const userInfo = "";
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const startQuiz = () => {
    history.push("/quiz");
  };

  const selectedCategoryFilm = async () => {
    await setCategory("Film");
  };
  const selectedCategoryMusic = async () => {
    await setCategory("Music");
  };
  const selectedCategoryComputer = () => {
    setCategory("Computer");
  };

  const arr = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <Container>
      <div className='main-div'>
        <div className='subheader'>
          <h3 className='subtitle'>
            Choose one from the categories below and see how many questions you
            can answer correctly out of 10 questions!
          </h3>
        </div>

        <div className='categories'>
          <div className='circular-figure__category-name'>
            <div className='music__circle'>
              <span onClick={selectedCategoryFilm}>
                <img
                  className='images'
                  src='http://devinardya-quizmaster.surge.sh/static/media/movie-icon.719897dc.svg'
                />
              </span>
            </div>

            <h2 className='category__name'>Movie</h2>
          </div>
          <div className='circular-figure__category-name'>
            <div className='music__circle'>
              <span onClick={selectedCategoryMusic}>
                <img
                  className='images'
                  src='http://devinardya-quizmaster.surge.sh/static/media/music-icon.469e959f.svg'
                />
              </span>
            </div>
            <h2 className='category__name'>Music</h2>
          </div>
          <div className='circular-figure__category-name'>
            <div className='music__circle'>
              <span onClick={selectedCategoryComputer}>
                <img
                  className='images'
                  src='http://devinardya-quizmaster.surge.sh/static/media/books-icon.3b876aa2.svg'
                />
              </span>
            </div>
            <h2 className='category__name'>Book</h2>
          </div>
        </div>
        {/* {arr ?


                    <button className="submit__button" onClick={startQuiz}>
                        Start Quiz
            </button> : <button className="submit__button" onClick={handleOpen}>
                        Register
            </button>} */}
        <button className='submit__button' onClick={startQuiz}>
          Start Quiz
        </button>

        <ComponentModal open={open} setOpen={setOpen} />
      </div>
    </Container>
  );
};

export default Home;
