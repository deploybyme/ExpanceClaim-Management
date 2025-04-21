// <!-- Custom Script for Handling Claims -->

// Populate Job Dropdown
const jobList = JSON.parse(localStorage.getItem("jobList")) || [];

const jobSelect = document.getElementById("jobSelect");
jobList.forEach(job => {
  const option = document.createElement("option");
  option.value = job.JobID;
  option.textContent = `${job.JobID} - ${job.JobName}`;
  jobSelect.appendChild(option);
});

// Check if user is logged in (Staff)
const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
const userRole = localStorage.getItem("userRole");

if (!loggedInUser || userRole !== "staff") {
  window.location.href = "login.html"; // Redirect to login page if not logged in
}

// Show or hide meal input fields based on checkbox status
document.getElementById("claimBreakfast").addEventListener("change", function () {
  document.getElementById("breakfastDiv").style.display = this.checked ? "block" : "none";
});
document.getElementById("claimLunch").addEventListener("change", function () {
  document.getElementById("lunchDiv").style.display = this.checked ? "block" : "none";
});
document.getElementById("claimDinner").addEventListener("change", function () {
  document.getElementById("dinnerDiv").style.display = this.checked ? "block" : "none";
});

// Handling claim form submission
document.getElementById("claimForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const breakfastAmount = parseFloat(document.getElementById("breakfast").value) || 0;
  const lunchAmount = parseFloat(document.getElementById("lunch").value) || 0;
  const dinnerAmount = parseFloat(document.getElementById("dinner").value) || 0;
  const claimDate = document.getElementById("claimDate").value;
  const claimList = JSON.parse(localStorage.getItem("claimList")) || [];

  // Generate ClaimID: CLM### based on last stored +1
  let lastIdNum = 0;
  if (claimList.length > 0) {
    const lastClaim = claimList[claimList.length - 1];
    const lastClaimID = lastClaim.ClaimID;
    const match = lastClaimID.match(/\d+/);
    if (match) {
      lastIdNum = parseInt(match[0]);
    }
  }
  const newClaimID = "CLM" + String(lastIdNum + 1).padStart(3, "0");


  const claimData = {
    ClaimID: newClaimID,
    StaffID: loggedInUser.StaffID,
    JobID: jobSelect.value,
    ClaimDate: claimDate,
    Meals: {
      Breakfast: { Claimed: breakfastAmount > 0, Amount: breakfastAmount },
      Lunch: { Claimed: lunchAmount > 0, Amount: lunchAmount },
      Dinner: { Claimed: dinnerAmount > 0, Amount: dinnerAmount }
    },
    ApprovedBy: null,
    ApprovalDate: null
  };


  // Save the claim to localStorage
  claimList.push(claimData);
  localStorage.setItem("claimList", JSON.stringify(claimList));

  // Show confirmation message
  document.getElementById("claimStatus").innerHTML = `
      <div class="alert alert-success">
        Your claim has been successfully submitted!
      </div>
    `;

  // Optionally, reset the form
  document.getElementById("claimForm").reset();
  document.getElementById("breakfastDiv").style.display = "none";
  document.getElementById("lunchDiv").style.display = "none";
  document.getElementById("dinnerDiv").style.display = "none";

  setTimeout(() => {
    window.location.reload();
  }, 3000);

});

const CurrentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const claimList = JSON.parse(localStorage.getItem("claimList")) || [];

function loadUserClaims() {
  const tbody = document.getElementById("claimHistoryBody");
  tbody.innerHTML = "";

  const userClaims = claimList.filter(c => c.StaffID === CurrentUser.StaffID);

  if (userClaims.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">No claims submitted yet.</td></tr>`;
    return;
  }

  userClaims.forEach(claim => {
    const job = jobList.find(j => j.JobID === claim.JobID);

    const status = claim.Status || "Pending";
    let rowColor = "";
  
    if (status === "Rejected") {
      rowColor = "background-color: #ff9aa3;"; // Light red
    } else if (status === "Pending") {
      rowColor = "background-color: #ffe07e;"; // Light orange
    } else if (status === "Approved") {
      rowColor = "background-color: #64ff89;"; // Light lime
    }
  
      const row = document.createElement("tr");
      row.setAttribute("style", rowColor);

    row.innerHTML = `
     
      <td class="bg-transparent">${claim.ClaimID}</td>

      <td class="bg-transparent">${job ? job.JobName : 'N/A'}</td>
      <td class="bg-transparent">${claim.ClaimDate}</td>
      <td class="bg-transparent">
        ₹${claim.Meals.Breakfast.Amount}
        ${claim.Meals.Breakfast.Claimed ? "✔️" : ""} 
      </td>
      <td class="bg-transparent">
        ₹${claim.Meals.Lunch.Amount}
        ${claim.Meals.Lunch.Claimed ? "✔️" : ""}
      </td>
      <td class="bg-transparent">
        ₹${claim.Meals.Dinner.Amount}
        ${claim.Meals.Dinner.Claimed ? "✔️" : ""}
      </td>
        <td class="bg-transparent">${claim.Status || "Pending"}</td>
     
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadUserClaims);
