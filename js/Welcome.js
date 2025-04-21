  window.addEventListener('load', () => {
    const staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    const imprestMasterList = JSON.parse(localStorage.getItem("imprestMasterList")) || [];

    const loginEmailsList = document.getElementById("loginEmailsList");

    // Combine and map all emails
    const allEmails = [
      ...staffList.map(staff => staff.Email),
      ...imprestMasterList.map(master => master.Email)
    ];

    // Create list items for each email
    allEmails.forEach(email => {
      const li = document.createElement("li");
      li.textContent = email;
      loginEmailsList.appendChild(li);
    });
  });

