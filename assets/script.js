const button = document.getElementById("countBtn");
const error = document.getElementById("error");
const birthday = document.getElementById("inputDate");
const result = document.getElementById("result");

button.addEventListener("click", calculateDate);

function calculateDate() {
  const date = new Date(birthday.value);
  const today = new Date();
  const nextBirthday = new Date(
    today.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (birthday.value === "") {
    error.style.display = "block";
    result.textContent = "";
    return;
  }
  error.style.display = "none";

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  result.textContent = `До вашего дня рождения ${verb(
    diffDays
  )} ${diffDays} ${dayWord(diffDays)}.`;
}
function verb(num) {
  if (num === 11) {
    return "осталось";
  } else if (num % 10 === 1) {
    return "остался";
  } else {
    return "осталось";
  }
}

function dayWord(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastDigit >= 11 && lastTwoDigits <= 14) {
    return "дней";
  } else if (lastDigit === 1) {
    return "день";
  } else if (lastDigit === 5) {
    return "дней";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "дня";
  } else {
    return "дней";
  }
}
