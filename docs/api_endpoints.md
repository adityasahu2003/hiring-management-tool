## **API Endpoints Documentation**

## Applicant 
#### **1. Register Applicant**
- **Role:** Applicant
- **API Name:** `registerApplicant`
- **Description:** This endpoint registers a new applicant in the system.
- **HTTP Method:** POST
- **Endpoint:** `/api/applicant/register`
- **Request Body:**
  ```json
  {
    "display_name": "string",
    "user_email_id": "string",
    "password": "string",
    "phone_number": "string",
    "profile_pic": "file",
    "cv": "file",
    "skill_tag": ["string"],
    "job_type_pref": ["string"],
    "location_pref": ["string"],
    "notice_period": "number",
    "current_company": "string",
    "job_tag": ["string"],
    "work_experience": "string",
    "expected_salary": {
      "lower_limit": "number",
      "higher_limit": "number"
    }
  }
  ```
- **Response:**
  ```json
  {
    "message": "Applicant registered successfully.",
    "applicantId": "string"
  }
  ```

#### **2. Login Applicant**
- **Role:** Applicant
- **API Name:** `loginApplicant`
- **Description:** This endpoint authenticates an applicant and returns a session token.
- **HTTP Method:** POST
- **Endpoint:** `/api/applicant/login`
- **Request Body:**
  ```json
  {
    "user_email_id": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string"
  }
  ```

#### **3. View Job Postings**
- **Role:** Applicant
- **API Name:** `getJobPostings`
- **Description:** Retrieves a list of all job postings with the ability to search, filter, and sort.
- **HTTP Method:** GET
- **Endpoint:** `/api/jobs`
- **Query Parameters:** `search`, `filter`, `sort`
- **Response:**
  ```json
  [
    {
      "job_id": "string",
      "job_role": "string",
      "date_added": "date",
      "number_of_applicants": "number",
      "BU": "string",
      "status": "string",
      "location": "string",
      "description": "string",
      "compensation_range": {
        "lower_limit": "number",
        "higher_limit": "number"
      },
      "number_of_openings": "number",
      "last_date_to_apply": "date",
      "job_tag": ["string"],
      "job_type": "string",
      "skill_tag": ["string"],
      "experience_level": "string"
    }
  ]
  ```

#### **4. Apply for Job**
- **Role:** Applicant
- **API Name:** `applyForJob`
- **Description:** Submits an application for a job posting.
- **HTTP Method:** POST
- **Endpoint:** `/api/jobs/apply`
- **Request Body:**
  ```json
  {
    "user_email_id": "string",
    "job_id": "string",
    "cv_timestamp": "date"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Application submitted successfully.",
    "application_id": "string"
  }
  ```

#### **5. View Applied Jobs**
- **Role:** Applicant
- **API Name:** `getAppliedJobs`
- **Description:** Retrieves a list of jobs the applicant has applied for, along with their status.
- **HTTP Method:** GET
- **Endpoint:** `/api/applicant/applied-jobs`
- **Request Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  [
    {
      "job_id": "string",
      "application_id": "string",
      "status": "string"
    }
  ]
  ```

#### **6. Update Profile**
- **Role:** Applicant
- **API Name:** `updateApplicantProfile`
- **Description:** Allows an applicant to update their profile information.
- **HTTP Method:** PUT
- **Endpoint:** `/api/applicant/profile`
- **Request Body:**
  ```json
  {
    "display_name": "string",
    "phone_number": "string",
    "profile_pic_path": "string",
    "cv_path": {
      "timestamp": "date",
      "cv_url": "string"
    },
    "skill_tag": ["string"],
    "job_type_pref": ["string"],
    "location_pref": ["string"],
    "notice_period": "number",
    "current_company": "string"
    "job_tag": ["string"],
    "work_experience": "enum(entry, mid, senior)",
    "expected_salary": {
      "lower_limit": "number",
      "higher_limit": "number"
    }
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Profile updated successfully.",
      "updatedProfile": {
        "display_name": "string",
        "phone_number": "string",
        "profile_pic_path": "string",
        "cv_path": "string",
        "skill_tag": ["string"],
        "job_type_pref": ["string"],
        "location_pref": ["string"],
        "notice_period": "number",
        "current_company": "string",
        "job_tag": ["string"],
        "work_experience": "string",
        "expected_salary": {
          "lower_limit": "number",
          "higher_limit": "number"
        }
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update profile.",
      "details": "Error details or validation messages."
    }
    ```
## HR Admin 

#### **1. Create Job Posting**
- **Role:** HR Admin
- **API Name:** `createJobPosting`
- **Description:** Allows HR Admin to create a new job posting.
- **HTTP Method:** POST
- **Endpoint:** `/api/hr/jobs`
- **Request Body:**
  ```json
  {
    "job_role": "string",
    "BU": "string",
    "status": "string",
    "location": "string",
    "description": "string",
    "compensation_range": {
      "lower_limit": "number",
      "higher_limit": "number"
    },
    "number_of_openings": "number",
    "last_date_to_apply": "date",
    "job_tag": ["string"],
    "job_type": "string",
    "skill_tag": ["string"],
    "experience_level": "string",
    "number_of_rounds": "number"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Job posting created successfully.",
      "jobDetails": {
        "job_id": "string",
        "job_role": "string",
        // ... other job details
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to create job posting.",
      "details": "Error details or validation messages."
    }
    ```

#### **2. Update Job Posting**
- **Role:** HR Admin
- **API Name:** `updateJobPosting`
- **Description:** Allows HR Admin to update details of a job posting.
- **HTTP Method:** PUT
- **Endpoint:** `/api/hr/jobs/{job_id}`
- **Request Body:**
  ```json
  {
    "job_role": "string",
    // ... other job details that can be updated
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Job posting updated successfully.",
      "jobDetails": {
        "job_id": "string",
        // ... updated job details
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update job posting.",
      "details": "Error details or validation messages."
    }
    ```

#### **3. View All Applications**
- **Role:** HR Admin
- **API Name:** `getAllApplications`
- **Description:** Retrieves a list of all applications submitted to various job postings.
- **HTTP Method:** GET
- **Endpoint:** `/api/hr/applications`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "applications": [
        {
          "application_id": "string",
          "user_email_id": "string",
          "job_id": "string",
          "date_of_applied": "date",
          "status": "string",
          // ... other application details
        }
        // ... more applications
      ]
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to fetch applications.",
      "details": "Error details."
    }
    ```

#### **4. Update Application Status**
- **Role:** HR Admin
- **API Name:** `updateApplicationStatus`
- **Description:** Allows HR Admin to update the status of a candidate's application.
- **HTTP Method:** PUT
- **Endpoint:** `/api/hr/applications/{application_id}`
- **Request Body:**
  ```json
  {
    "status": "enum(rejected, offered, hired, etc.)"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Application status updated successfully.",
      "applicationDetails": {
        "application_id": "string",
        "status": "string"
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update application status.",
      "details": "Error details or validation messages."
    }
    ```

#### **5. Schedule Interview**
- **Role:** HR Admin
- **API Name:** `scheduleInterview`
- **Description:** Schedules an interview for a candidate and sends a calendar invite.
- **HTTP Method:** POST
- **Endpoint:** `/api/hr/interviews`
- **Request Body:**
  ```json
  {
    "user_email_id": "string",
    "interviewer_email_id": "string",
    "start_time": "datetime",
    "duration": "number",
    "job_id": "string",
    "round_number": "number"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Interview scheduled successfully and invitessent.",
      "interviewDetails": {
        "interview_id": "string",
        "user_email_id": "string",
        "interviewer_email_id": "string",
        "start_time": "datetime",
        "duration": "number",
        "job_id": "string",
        "round_number": "number"
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to schedule interview.",
      "details": "Error details or validation messages."
    }
    ```

#### **6. Assign Interviewer**
- **Role:** HR Admin
- **API Name:** `assignInterviewer`
- **Description:** Assigns an interviewer to a job application and updates the interview details.
- **HTTP Method:** PUT
- **Endpoint:** `/api/hr/interviews/assign`
- **Request Body:**
  ```json
  {
    "application_id": "string",
    "interviewer_email_id": "string"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Interviewer assigned successfully.",
      "interviewDetails": {
        "application_id": "string",
        "interviewer_email_id": "string"
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to assign interviewer.",
      "details": "Error details or validation messages."
    }
    ```

#### **7. Get Interview Schedule**
- **Role:** HR Admin
- **API Name:** `getInterviewSchedule`
- **Description:** Retrieves the schedule of interviews for different job positions.
- **HTTP Method:** GET
- **Endpoint:** `/api/hr/interviews/schedule`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "interviews": [
        {
          "interview_id": "string",
          "job_id": "string",
          "user_email_id": "string",
          "interviewer_email_id": "string",
          "start_time": "datetime",
          "duration": "number",
          "round_number": "number"
          // ... additional interview details
        }
        // ... more interviews
      ]
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to retrieve interview schedule.",
      "details": "Error details."
    }
    ```

#### **8. Analytics and Reporting**
- **Role:** HR Admin
- **API Name:** `getAnalyticsReports`
- **Description:** Provides analytics and reporting on various HR metrics like application status, job opening fill rates, etc.
- **HTTP Method:** GET
- **Endpoint:** `/api/hr/analytics`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
        "analytics": {
            "total_applications": "number",
            "applications_per_status": {
                "shortlisted": "number",
                "rejected": "number",
                "on_hold": "number",
                "hired": "number",
            },
            "total_job_openings": "number",
            "openings_per_status": {
                "open": "number",
                "pending": "number",
                "closed": "number"
            }
        }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to fetch analytics reports.",
      "details": "Error details."
    }
    ```
## Interviewer
#### **1. View Scheduled Interviews**
- **Role:** Interviewer
- **API Name:** `getScheduledInterviews`
- **Description:** Retrieves a list of interviews scheduled for the interviewer.
- **HTTP Method:** GET
- **Endpoint:** `/api/interviewer/interviews`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "interviews": [
        {
          "interview_id": "string",
          "candidate_name": "string",
          "candidate_email": "string",
          "job_role": "string",
          "date": "date",
          "time": "string",
          "meeting_link": "string",
          "round_number": "number",
          "feedback_template_url": "string"
        }
        // ... more interviews
      ]
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to retrieve scheduled interviews.",
      "details": "Error details."
    }
    ```

#### **2. Submit Interview Feedback**
- **Role:** Interviewer
- **API Name:** `submitInterviewFeedback`
- **Description:** Allows the interviewer to submit feedback for a completed interview.
- **HTTP Method:** POST
- **Endpoint:** `/api/interviewer/feedback`
- **Request Body:**
  ```json
  {
    "interview_id": "string",
    "candidate_email": "string",
    "feedback": {
      "metrics": {
        "communication": "number",
        "problem_solving": "number",
        // ... additional metrics
      },
      "comments": "string",
      "recommendation": "enum(recommend, neutral, do not recommend)"
    }
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Feedback submitted successfully.",
      "feedbackDetails": {
        "interview_id": "string",
        "submitted_at": "datetime"
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to submit feedback.",
      "details": "Error details or validation messages."
    }
    ```

#### **3. View Candidate Profile**
- **Role:** Interviewer
- **API Name:** `getCandidateProfile`
- **Description:** Retrieves the profile details of a candidate scheduled for an interview.
- **HTTP Method:** GET
- **Endpoint:** `/api/interviewer/candidate/{candidate_email}`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "candidateProfile": {
        "display_name": "string",
        "email": "string",
        "phone_number": "string",
        "profile_pic_url": "string",
        "cv_url": "string",
        "skill_tags": ["string"],
        "work_experience": "string",
        "education": "string",
        "personal_projects": ["string"],
        // ... other relevant profile details
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to retrieve candidate profile.",
      "details": "Error details."
    }
    ```

#### **4. Update Interview Availability**
- **Role:** Interviewer
- **API Name:** `updateAvailability`
- **Description:** Allows the interviewer to update their availability for conducting interviews.
- **HTTP Method:** PUT
- **Endpoint:** `/api/interviewer/availability`
- **Request Body:**
  ```json
  {
    "available_dates": ["date"],
    "time_slots": ["string"]
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Availability updated successfully.",
      "availabilityDetails": {
        "updated_dates": ["date"],
        "time_slots": ["string"]
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update availability.",
      "details": "Error details or validation messages."
    }
    ```

#### **5. View Interview Feedback Templates**
- **Role:** Interviewer
- **API Name:** `getFeedbackTemplates`
- **Description:** Retrieves the feedback templates associated with the interviewer's upcoming interviews.
- **HTTP Method:** GET
- **Endpoint:** `/api/interviewer/feedback/templates`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "templates": [
        {
          "job_role": "string",
          "template_url": "string"
        }
        // ... more templates
      ]
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to retrieve feedback templates.",
      "details": "Error details."
    }
    ```

#### **6. Update Interviewer Profile**
- **Role:** Interviewer
- **API Name:** `updateInterviewerProfile`
- **Description:** Allows the interviewer to update their profile information, including consent to share social links with interviewees.
- **HTTP Method:** PUT
- **Endpoint:** `/api/interviewer/profile`
- **Request Body:**
  ```json
  {
    "display_name": "string",
    "socials": {
      "linkedin": "string",
      "github": "string",
      "twitter": "string",
      // ... other social platforms
    },
    "consent": "boolean"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Profile updated successfully.",
      "profileDetails": {
        "display_name": "string",
        "socials": {
          "linkedin": "string",
          // ... other socials
        },
        "consent": "boolean"
      }
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update profile.",
      "details": "Error details or validation messages."
    }
    ```

#### **7. Consent to Share Profile**
- **Role:** Interviewer
- **API Name:** `setProfileSharingConsent`
- **Description:** Allows the interviewer to set their consent preference for sharing their profile with candidates.
- **HTTP Method:** PATCH
- **Endpoint:** `/api/interviewer/profile/consent`
- **Request Body:**
  ```json
  {
    "consent": "boolean"
  }
  ```
- **Response:**
  - **Success:**
    ```json
    {
      "message": "Consent updated successfully.",
      "consent": "boolean"
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to update consent.",
      "details": "Error details or validation messages."
    }
    ```

#### **8. Access Candidate CV**
- **Role:** Interviewer
- **API Name:** `getCandidateCV`
- **Description:** Provides the interviewer with access to the candidate's CV if consent has been given.
- **HTTP Method:** GET
- **Endpoint:** `/api/interviewer/candidate/{candidate_email}/cv`
- **Request Body:** None
- **Response:**
  - **Success:**
    ```json
    {
      "cv_url": "string"
    }
    ```
  - **Error:**
    ```json
    {
      "error": "Unable to access candidate CV.",
      "details": "Error details or consent not given message."
    }
    ```
