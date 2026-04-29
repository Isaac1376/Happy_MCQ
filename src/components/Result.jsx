import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result({ score, total, onReset, timeUsed }) {
  const percentage = Math.round((score / total) * 100);
  const wrongAnswers = total - score;
  const message =
    percentage >= 80
      ? "🏆 Excellent! Outstanding performance!"
      : percentage >= 60
        ? "🎉 Good! You did well!"
        : percentage >= 40
          ? "📚 Fair. Keep practicing!"
          : "💪 Don't worry! Try again!";

  const chartData = {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        data: [score, wrongAnswers],
        backgroundColor: ["#667eea", "#e74c3c"],
        borderColor: ["#667eea", "#e74c3c"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ": " + context.parsed + " questions";
          },
        },
      },
    },
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="result-box">
      <h2>Quiz Completed! ✨</h2>
      
      <div className="result-stats">
        <div className="stat-item">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score}/{total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Percentage</span>
          <span className="stat-value">{percentage}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Time Used</span>
          <span className="stat-value">{formatTime(timeUsed)}</span>
        </div>
      </div>

      <div className="chart-container">
        <Pie data={chartData} options={chartOptions} />
      </div>

      <p className="result-message">{message}</p>

      <button onClick={onReset} className="retake-btn">
        🔄 Retake Quiz
      </button>
    </div>
  );
}

export default Result;