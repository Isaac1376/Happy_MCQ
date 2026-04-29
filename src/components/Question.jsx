function Question({ data, index, total, onAnswer }) {
  return (
    <div className="question-box">
      <h3>Question {index + 1} / {total}</h3>
      <p>{data.question}</p>

      {data.options.map((opt, i) => (
        <button key={i} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Question;