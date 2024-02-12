import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import DropDownBtn from "./Components/atoms/buttons/DropDownBtn";
import Button from "./Components/atoms/buttons/Button";
import { IoIosPeople } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import Sidebar from "./Components/organisms/sidebar/SideBar.jsx";
function App() {

  const handleShareProfileToggle = (isChecked) => {
    if (isChecked) {
      console.log("Sharing profile");
      // Add your logic for sharing the profile
    } else {
      console.log("Not sharing profile");
      // Add your logic for not sharing the profile
    }
  };

  const handleCandidatesClick = () => {
    console.log("Candidates Icon Clicked");
    // Add your logic for Candidates icon click here
  };
  const handleRecruitmentBoardClick = () => {
    console.log("Recruitment Board Icon Clicked");
    // Add your logic for Recruitment Board icon click here
  };
  const handleCalendarClick = () => {
    console.log("Calendar Icon Clicked");
    // Add your logic for Calendar icon click here
  };

  const handleDeleteProfile = () => {
    console.log("Deleting profile");
    // Add your delete profile logic here
  };

  const handleEditProfile = () => {
    console.log("Editing profile");
    // Add your edit profile logic here
  };

  const handleEasyApply = () => {
    console.log("Easy Apply Using LinkedIn");
    // Add your easy apply logic here
  };

  const handleDropdownSelect = (selectedKey) => {
    console.log(`Selected: ${selectedKey}`);
    // Add your dropdown select logic here
  };

  const middleIcons = [
    { icon: <IoIosPeople />, route: "/Candidates", text: "Candidates", onClick: handleCandidatesClick },
    { icon: <MdDashboard />, route: "/RecruitmentBoard", text: "Recruitment Board", onClick: handleRecruitmentBoardClick },
    { icon: <IoCalendar />, route: "/Calendar", text: "Calendar", onClick: handleCalendarClick },
    // Add more icons as needed
  ];


  const dropdownItemsJobType = [
    { label: "Full Time", action: "full-time" },
    { label: "Part Time", action: "part-time" },
    { label: "Contract", action: "contract" },
    { label: "Internship", action: "internship" },
    { label: "Temporary", action: "temporary" },
  ];

  const dropdownItemsExp = [
    { label: "Internship", action: "internship" },
    { label: "Entry Level", action: "entry-level" },
    { label: "Associate", action: "associate" },
    { label: "Mid-Senior Level", action: "mid-senior-level" },
  ];

  const dropdownItemsDatePosted = [
    { label: "Any time", action: "any-time" },
    { label: "Past month", action: "past-month" },
    { label: "Past week", action: "past-week" },
    { label: "Past 24 hours", action: "past-24-hours" },
  ];

  return (
    <div className="App">
      <Router>
        <h1>Hiring Manager Tool......</h1> 

        {/* <Button onClick={handleDeleteProfile} type="deleteProfile">
          Delete Profile
        </Button>

        <Button type="editProfile" onClick={handleEditProfile}>
          Edit Profile
        </Button>

        <Button type="easyApply" onClick={handleEasyApply}>
          Easy Apply
        </Button>

        <Button
          type="shareProfile"
          switchLabel={{ onChange: handleShareProfileToggle }}
        >
          Share
        </Button>

        <DropDownBtn
          title="Job Type"
          items={dropdownItemsJobType}
          onSelect={handleDropdownSelect}
        />*/}

        {/* <DropDownBtn
          title="Experience Level"
          items={dropdownItemsExp}
          onSelect={handleDropdownSelect}
        />*/}

{/* <Button onClick={handleDeleteProfile} type="deleteProfile">
          Delete Profile
        </Button>

<Button
          type="shareProfile"
          switchLabel={{ onChange: handleShareProfileToggle }}
        >
          Share
        </Button>

        <DropDownBtn
          title="Date Posted"
          items={dropdownItemsDatePosted}
          onSelect={handleDropdownSelect}
        />   */}

        <div className="sidebar-area">
          <Sidebar
            middleIcons={middleIcons}
          />
        </div>
      </Router>
    </div >
  );
}

export default App;
