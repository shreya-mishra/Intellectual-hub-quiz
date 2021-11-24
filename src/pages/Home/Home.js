import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import ComponentModal from "../../components/ComponentModal/ComponentModal";
import { categories } from "../../Data/Data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
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
    fetchQuestions(true);
  };

  const selectedCategory = (category, id) => {
    console.log(`selected category ${category}`);
    toast(`You have selected ${category}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    setCategory(id);
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
          {categories.map((text, index) => (
            <div key={index} className='circular-figure__category-name'>
              <div className='music__circle'>
                <span
                  onClick={() =>
                    selectedCategory(text.setCat, text.categoryId)
                  }>
                  <img className='images' src={text.pic} />
                </span>
              </div>

              <h2 className='category__name'>{text.category}</h2>
            </div>
          ))}
        </div>
        {/* {arr ? (
          <button className='submit__button' onClick={startQuiz}>
            Start Quiz
          </button>
        ) : (
          <button className='submit__button' onClick={handleOpen}>
            Register
          </button>
        // )} */}

        <button className='submit__button' onClick={startQuiz}>
          Start Quiz
        </button>
        <ComponentModal open={open} setOpen={setOpen} />
      </div>
    </Container>
  );
};

export default Home;
