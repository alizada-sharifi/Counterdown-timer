let input = document.querySelector("input");
let hour = document.querySelector(".hour");
let min = document.querySelector(".minute");
let second = document.querySelector(".second");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timer;
let totalSeconds = 0;

// =====================================
input.addEventListener("input", function () {
  totalSeconds = parseInt(this.value);
  if (!isNaN(totalSeconds) && totalSeconds >= 0) {
    updateDisplay(totalSeconds);
  } else {
    totalSeconds = 0;
    updateDisplay(totalSeconds);
  }
});

function updateDisplay(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  hour.innerHTML = String(hours).padStart(2, "0");
  min.innerHTML = String(minutes).padStart(2, "0");
  second.innerHTML = String(secs).padStart(2, "0");

  // =============  change color ============
  if (seconds < 10) {
    document.querySelector(".time-display").classList.add("blink");
    document.querySelector(".time-display").style.color = "red";
  } else {
    document.querySelector(".time-display").classList.remove("blink");
    document.querySelector(".time-display").style.color = "black";
  }
}

// ============= start btn ===============
startBtn.addEventListener("click", function () {
  if (totalSeconds > 0) {
    timer = setInterval(timerHandler, 1000);
    startBtn.disabled = true;
    input.disabled = true;
  }
});

// =========== stop btn =================
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  startBtn.disabled = false;
  input.disabled = false;
});

// ============= reset btn ============
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  totalSeconds = 0; // Reset totalSeconds
  hour.innerHTML = `00`;
  min.innerHTML = `00`;
  second.innerHTML = `00`;
  startBtn.disabled = false; // Re-enable start button
  input.disabled = false; // Re-enable input
  input.value = ""; // Clear input field
  document.querySelector(".time-display").classList.remove("blink");
  document.querySelector(".time-display").style.color = "black";
});

function timerHandler() {
  if (totalSeconds <= 0) {
    clearInterval(timer);
    startBtn.disabled = false;
    input.disabled = false;
    document.querySelector(".time-display").classList.remove("blink");
    return;
  }
  totalSeconds--;
  updateDisplay(totalSeconds);
}
