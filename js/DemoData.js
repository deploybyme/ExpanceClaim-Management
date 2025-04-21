// Demo Data Arrays
const staffList = [
    {
      StaffID: "STF001",
      StaffName: "Faizan Mirza",
      Designation: "Technician",
      Email: "faizan@example.com",
      Phone: "9876543210"
    },
    {
      StaffID: "STF002",
      StaffName: "Anjali Mehta",
      Designation: "Electrician",
      Email: "anjali.mehta@example.com",
      Phone: "9876543211"
    },
    {
      StaffID: "STF003",
      StaffName: "Rahul Verma",
      Designation: "Helper",
      Email: "rahul.verma@example.com",
      Phone: "9876543212"
    },
    {
      StaffID: "STF004",
      StaffName: "Priya Sharma",
      Designation: "Lighting Technician",
      Email: "priya.sharma@example.com",
      Phone: "9876543213"
    },
    {
      StaffID: "STF005",
      StaffName: "Vikram Patel",
      Designation: "Sound Engineer",
      Email: "vikram.patel@example.com",
      Phone: "9876543214"
    }
  ];
  
  const jobList = [
    {
      JobID: "J101",
      JobName: "Wedding Event",
      JobNumber: "EM-2025-001",
      JobVenueID: "VEN001",
      RequiredAtWH: "2025-05-01T08:00:00",
      ExpectedReturnAtWH: "2025-05-02T18:00:00",
      ImprestInchargeID: "IMP001"
    },
    {
      JobID: "J102",
      JobName: "Corporate Meeting",
      JobNumber: "EM-2025-002",
      JobVenueID: "VEN002",
      RequiredAtWH: "2025-05-03T09:00:00",
      ExpectedReturnAtWH: "2025-05-04T17:00:00",
      ImprestInchargeID: "IMP002"
    },
    {
      JobID: "J103",
      JobName: "Product Launch",
      JobNumber: "EM-2025-003",
      JobVenueID: "VEN003",
      RequiredAtWH: "2025-05-05T07:30:00",
      ExpectedReturnAtWH: "2025-05-06T20:00:00",
      ImprestInchargeID: "IMP001"
    },
    {
      JobID: "J104",
      JobName: "Music Concert",
      JobNumber: "EM-2025-004",
      JobVenueID: "VEN004",
      RequiredAtWH: "2025-05-07T10:00:00",
      ExpectedReturnAtWH: "2025-05-09T19:30:00",
      ImprestInchargeID: "IMP003"
    },
    {
      JobID: "J105",
      JobName: "College Fest",
      JobNumber: "EM-2025-005",
      JobVenueID: "VEN005",
      RequiredAtWH: "2025-05-10T08:30:00",
      ExpectedReturnAtWH: "2025-05-11T21:00:00",
      ImprestInchargeID: "IMP002"
    }
  ];
  
  const imprestMasterList = [
    {
      ImprestInchargeID: "IMP001",
      Name: "Rajeev Ranjan",
      Email: "rajeev.ranjan@example.com",
      Phone: "9012345678"
    },
    {
      ImprestInchargeID: "IMP002",
      Name: "Sneha Das",
      Email: "sneha.das@example.com",
      Phone: "9012345679"
    },
    {
      ImprestInchargeID: "IMP003",
      Name: "Amitabh Joshi",
      Email: "amitabh.joshi@example.com",
      Phone: "9012345680"
    },
    {
      ImprestInchargeID: "IMP004",
      Name: "Neha Kapoor",
      Email: "neha.kapoor@example.com",
      Phone: "9012345681"
    },
    {
      ImprestInchargeID: "IMP005",
      Name: "Sunil Bhat",
      Email: "sunil.bhat@example.com",
      Phone: "9012345682"
    }
  ];
  
  const claimList = [
    {
      ClaimID: "CLM001",
      StaffID: "STF001",
      JobID: "J101",
      ClaimDate: "2025-05-01",
      Meals: {
        Breakfast: { Claimed: true, Amount: 5.00, Approved: true },
        Lunch: { Claimed: true, Amount: 10.00, Approved: false },
        Dinner: { Claimed: false, Amount: 0.00, Approved: false }
      },
      ApprovedBy: "IMP001",
      ApprovalDate: "2025-05-02T10:30:00"
    },
    {
      ClaimID: "CLM002",
      StaffID: "STF002",
      JobID: "J102",
      ClaimDate: "2025-05-03",
      Meals: {
        Breakfast: { Claimed: true, Amount: 5.00, Approved: true },
        Lunch: { Claimed: true, Amount: 10.00, Approved: true },
        Dinner: { Claimed: true, Amount: 8.00, Approved: true }
      },
      ApprovedBy: "IMP002",
      ApprovalDate: "2025-05-04T11:00:00"
    },
    {
      ClaimID: "CLM003",
      StaffID: "STF003",
      JobID: "J103",
      ClaimDate: "2025-05-05",
      Meals: {
        Breakfast: { Claimed: false, Amount: 0.00, Approved: false },
        Lunch: { Claimed: true, Amount: 10.00, Approved: true },
        Dinner: { Claimed: true, Amount: 8.00, Approved: false }
      },
      ApprovedBy: "IMP001",
      ApprovalDate: "2025-05-06T09:45:00"
    },
    {
      ClaimID: "CLM004",
      StaffID: "STF004",
      JobID: "J104",
      ClaimDate: "2025-05-07",
      Meals: {
        Breakfast: { Claimed: true, Amount: 5.00, Approved: true },
        Lunch: { Claimed: false, Amount: 0.00, Approved: false },
        Dinner: { Claimed: true, Amount: 8.00, Approved: true }
      },
      ApprovedBy: "IMP003",
      ApprovalDate: "2025-05-08T14:20:00"
    },
    {
      ClaimID: "CLM005",
      StaffID: "STF005",
      JobID: "J105",
      ClaimDate: "2025-05-10",
      Meals: {
        Breakfast: { Claimed: true, Amount: 5.00, Approved: false },
        Lunch: { Claimed: true, Amount: 10.00, Approved: false },
        Dinner: { Claimed: true, Amount: 8.00, Approved: false }
      },
      ApprovedBy: "IMP002",
      ApprovalDate: "2025-05-11T12:00:00"
    }
  ];
  
  
  if(!localStorage.getItem('staffList') ||
  !localStorage.getItem('imprestMasterList') ||
            !localStorage.getItem('claimList')  ||
            !localStorage.getItem('jobList')
    ){
      alert('Demo Data saved to localStorage!');
      // Save arrays to localStorage
      localStorage.setItem('staffList', JSON.stringify(staffList));
      localStorage.setItem('imprestMasterList', JSON.stringify(imprestMasterList));
      localStorage.setItem('claimList', JSON.stringify(claimList));    
      localStorage.setItem('jobList', JSON.stringify(jobList));
    }
  