function updateDateTime() {
    const datetime = new Date();
    const now = datetime.toLocaleString();
    document.getElementById("current-date-time").innerHTML = "1. " + now;
  }
  
  setInterval(updateDateTime, 1000);
  
  function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer == 7) {
      alert("Congrats");
    } else {
      alert("Sorry! Try Again");
    }
    document.getElementById("answer").value = "";
  }
  
  function utcTime() {
    const utc = new Date();
    const utcnow = utc.toUTCString();
    document.getElementById("utc").innerHTML = "3. " + utcnow;
  }
  setInterval(utcTime, 1000);
  
  const students = ["Mohit", "Prince", "Arjun", "Ritik", "Yogesh"];
  const randomIndex = Math.floor(Math.random() * students.length);
  const picked = students[randomIndex];
  alert(`Random picked student ` + picked);
  
  const numbers = [2, 4, 7, 9, 10];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  alert(`Average of numbers: ${average}`);
  
  const names = [];
  function getNames() {
    const name = prompt("Enter a name:");
    if (name !== null && name !== "") {
      names.push(name);
      newName();
    } else {
      alert("Please enter a name");
      getNames();
    }
  }
  
  function newName() {
    const stop = confirm("Do you want to add another name?");
    if (!stop) {
      names.sort();
      alert(`The entered names are: \n${names.join(",")}`);
      const enteredNames = document.getElementById("entered-names");
      enteredNames.textContent = names.join(", ");
    } else {
      getNames();
    }
  }

function goBack(){ history.back();
}

function goForward() {
  history.forward();
}

function reloadPage() {
  location.reload();
}
  