import { useLoaderData } from "react-router-dom";
import AllQuiz from "../components/AllQuiz/AllQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;
  const length = questions.length;

  return (
    <div className="mb-10">
      <h2 className="text-4xl mt-10">Quiz of {name}</h2>
      <p className="text-xl text-lime-600 p-4 mb-5">Total Quiz: {length}</p>
      {questions.map((qs) => (
        <AllQuiz key={qs.id} qs={qs}></AllQuiz>
      ))}
    </div>
  );
};

export default Quiz;
