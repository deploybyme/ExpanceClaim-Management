const claimList = JSON.parse(localStorage.getItem("claimList") || "[]");
const staffList = JSON.parse(localStorage.getItem("staffList") || "[]");
const jobList = JSON.parse(localStorage.getItem("jobList") || "[]");

const tableBody = document.querySelector("#claimsTable tbody");

claimList.forEach(claim => {
    const staff = staffList.find(s => s.StaffID === claim.StaffID);
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
      <td class="bg-transparent">${staff ? staff.StaffName : 'N/A'}</td>
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
      
<td class="bg-transparent">
  <select class="form-select form-select-sm status-dropdown" data-id="${claim.ClaimID}">
    <option value="Pending" ${claim.Status === "Pending" ? "selected" : ""}>Pending</option>
    <option value="Approved" ${claim.Status === "Approved" ? "selected" : ""}>Approved</option>
    <option value="Rejected" ${claim.Status === "Rejected" ? "selected" : ""}>Rejected</option>
  </select>
</td>

    `;
    tableBody.appendChild(row);
});

// Attach change event to each dropdown
document.querySelectorAll(".status-dropdown").forEach(select => {
    select.addEventListener("change", (e) => {
      const claimId = e.target.getAttribute("data-id");
      const newStatus = e.target.value;
  
      // Update in localStorage
      const updatedClaims = claimList.map(claim => {
        if (claim.ClaimID === claimId) {
          return { ...claim, Status: newStatus };
        }
        return claim;
      });
  
      localStorage.setItem("claimList", JSON.stringify(updatedClaims));
      window.location.reload();
    });
  });
  

