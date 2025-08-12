const responsesDiv = document.getElementById("responses");
const myForm = document.querySelector("form");

myForm.addEventListener("submit", sendChatRequest);

async function sendChatRequest(event) {
  event.preventDefault();
  const userPrompt = event.target.prompt.value;
  console.log(userPrompt);

  const response = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ userPrompt }),
  });

  // Seeing what comes back from our server:
  const data = await response.json();
  console.log(data);

  const responseP = document.createElement("p");
  responseP.textContent = data;
  responsesDiv.appendChild(responseP);
}
