async function getFox() {
  const response = await fetch("https://randomfox.ca/floof/");
  const foxData = await response.json();
}

getFox();
