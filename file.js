document.getElementById("calculateFare").addEventListener("click", () => {
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
  
    if (pickup && dropoff) {
      const estimatedFare = Math.floor(Math.random() * (1000 - 300) + 300);
      document.getElementById("fareResult").innerText = `Estimated fare: Ksh ${estimatedFare}`;
    } else {
      document.getElementById("fareResult").innerText = "Please enter both locations!";
    }
  });
  