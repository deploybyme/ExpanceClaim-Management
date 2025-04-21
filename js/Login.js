    function PasswordToggle(){
        let passwordToggle = document.getElementById('checkbox')
        let password = document.getElementById('password')
        passwordToggle.checked ?  password.type = 'text' : password.type = 'password';
        console.log(passwordToggle.checked);      
    }
    PasswordToggle()

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    const imprestMasterList = JSON.parse(localStorage.getItem("imprestMasterList")) || [];

    const isValidPassword = password === "123456"; // Dummy password for demo

    const matchedStaff = staffList.find(user => user.Email === email);
    const matchedImprest = imprestMasterList.find(user => user.Email === email);

    if (matchedStaff && isValidPassword) {
      localStorage.setItem("currentUser", JSON.stringify(matchedStaff));
      localStorage.setItem("userRole", "staff");
      alert("Logged in as Staff!");
      window.location.href = "claim.html";
    } else if (matchedImprest && isValidPassword) {
      localStorage.setItem("currentUser", JSON.stringify(matchedImprest));
      localStorage.setItem("userRole", "imprest");
      alert("Logged in as Imprest Master!");
      window.location.href = "approver.html";
    } else {
      alert("Invalid email or password");
    }
  });

