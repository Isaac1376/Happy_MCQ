<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated README Text</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top, #272b62 0%, #0b0f1e 100%);
      color: #f8f9ff;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .hero {
      text-align: center;
      padding: 2rem;
      max-width: 720px;
    }

    .hero h1 {
      font-size: clamp(3rem, 6vw, 5rem);
      margin: 0 0 1rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      animation: glow 2.5s ease-in-out infinite alternate;
    }

    .hero p {
      font-size: 1.05rem;
      line-height: 1.7;
      max-width: 600px;
      margin: 0 auto;
      color: #d7dbff;
    }

    .typing {
      display: inline-block;
      font-family: "Courier New", Courier, monospace;
      color: #72c7ff;
      font-size: 1.3rem;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.18em solid #72c7ff;
      min-height: 1.5em;
      animation: blink 0.75s step-end infinite;
    }

    @keyframes glow {
      from {
        text-shadow: 0 0 12px rgba(114, 199, 255, 0.55),
                     0 0 30px rgba(114, 199, 255, 0.2);
      }
      to {
        text-shadow: 0 0 24px rgba(114, 199, 255, 0.95),
                     0 0 45px rgba(114, 199, 255, 0.35);
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Happy MCQ</h1>
    <p class="typing" id="typing"></p>
    <p>Build your quiz app landing page with animated text and a smooth typing effect.</p>
  </div>

  <script>
    const lines = [
      "Fast quizzes.",
      "Interactive topics.",
      "React + Django backend soon.",
      "Learn while you play."
    ];

    const typingEl = document.getElementById("typing");
    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
      const current = lines[lineIndex];
      if (!deleting) {
        typingEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        typingEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
          setTimeout(typeLoop, 500);
          return;
        }
      }
      setTimeout(typeLoop, deleting ? 70 : 120);
    }

    typeLoop();
  </script>
</body>
</html>
