// Step 1: Simulate Login API
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "rithu" && password === "1234") {
        resolve("Login successful ✅");
      } else {
        reject("Invalid credentials ❌");
      }
    }, 2000);
  });
}

// Step 2: Fetch User Data
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rithu", role: "Developer" });
    }, 1500);
  });
}

// Step 3: Fetch Dashboard
function fetchDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dashboard Loaded 📊");
    }, 1000);
  });
}

// Async function
async function loginFlow() {
  try {
    console.log("Logging in...");

    const loginMessage = await loginUser("rithu", "1234");
    console.log(loginMessage);

    console.log("Fetching user data...");
    const user = await fetchUserData();
    console.log("Welcome", user.name);

    console.log("Loading dashboard...");
    const dashboard = await fetchDashboard();
    console.log(dashboard);

  } catch (error) {
    console.log(error);
  }
}

loginFlow();
