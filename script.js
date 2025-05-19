function signUp() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check for empty fields
  if (!name || !password) {
    document.getElementById("message").textContent = "Fill all fields.";
    return;
  }

  // Check if user already exists
  const existingUser = localStorage.getItem("studentName");
  if (existingUser === name) {
    document.getElementById("message").textContent = "Username already taken.";
    return;
  }

  // Save user data
  localStorage.setItem("studentName", name);
  localStorage.setItem("studentPass", password);
  document.getElementById("message").textContent = "Sign up successful!";
}

function signIn() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const savedName = localStorage.getItem("studentName");
  const savedPass = localStorage.getItem("studentPass");

  if (name === savedName && password === savedPass) {
    window.location.href = "home.html";
  } else {
    document.getElementById("message").textContent = "Invalid credentials.";
  }
}