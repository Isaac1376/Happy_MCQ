import { useState, useEffect } from "react";
import topics from "./data";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [totalTime] = useState(300);

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);
  const quizQuestions = selectedTopic ? selectedTopic.questions : [];

  useEffect(() => {
    if (!selectedTopic || showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTopic, showResult]);

  const handleTopicSelect = (topicId) => {
    setSelectedTopicId(topicId);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(totalTime);
  };

  const handleAnswer = (option) => {
    if (quizQuestions[current]?.answer === option) {
      setScore((prev) => prev + 1);
    }

    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(totalTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getTimePercentage = (timeLeft / totalTime) * 100;
  const timeColor = getTimePercentage > 33 ? "#667eea" : getTimePercentage > 15 ? "#ff9500" : "#e74c3c";

  return (
    <div className="app">
      <div className="header-section">
        <h1>🎓 Quiz Topics</h1>
        <p className="header-subtitle">Choose one topic and answer 5 questions.</p>
      </div>

      {!selectedTopic ? (
        <div className="topic-selection">
          <div className="topic-grid">
            {topics.map((topic) => (
              <button
                key={topic.id}
                className="topic-card"
                onClick={() => handleTopicSelect(topic.id)}
              >
                <img src={topic.image} alt={topic.name} className="topic-image" />
                <div className="topic-card-content">
                  <h3>{topic.name}</h3>
                  <p>{topic.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="quiz-header">
            <div>
              <h1>{selectedTopic.name}</h1>
              <p className="header-subtitle">{selectedTopic.description}</p>
            </div>
            <button className="change-topic-btn" onClick={() => setSelectedTopicId(null)}>
              Change Topic
            </button>
          </div>

          <div className="timer-section">
            <div className="timer-display" style={{ borderColor: timeColor }}>
              <span className="timer-label">Time Left</span>
              <span className="timer-value" style={{ color: timeColor }}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="timer-bar-container">
              <div
                className="timer-bar"
                style={{ width: `${getTimePercentage}%`, backgroundColor: timeColor }}
              />
            </div>
          </div>

          {showResult ? (
            <Result
              score={score}
              total={quizQuestions.length}
              onReset={resetQuiz}
              timeUsed={totalTime - timeLeft}
            />
          ) : (
            <Question
              data={quizQuestions[current]}
              index={current}
              total={quizQuestions.length}
              onAnswer={handleAnswer}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
