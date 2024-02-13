pm.test("Response status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has a JSON content type", function () {
    pm.expect(pm.response).to.have.header("Content-Type", "application/json; charset=utf-8");
});

pm.test("Response has a message property", function () {
    pm.expect(pm.response.json()).to.have.property('message');
});

pm.test("Applicant object has required properties", function () {
    var applicant = pm.response.json().applicant;
    pm.expect(applicant).to.have.property('display_name');
    pm.expect(applicant).to.have.property('user_email_id');
    pm.expect(applicant).to.have.property('phone_number');
    pm.expect(applicant).to.have.property('profile_pic_path');
    pm.expect(applicant).to.have.property('cv_path');
    pm.expect(applicant).to.have.property('skill_tag');
    pm.expect(applicant).to.have.property('job_type_pref');
    pm.expect(applicant).to.have.property('location_pref');
    pm.expect(applicant).to.have.property('notice_period');
    pm.expect(applicant).to.have.property('current_company');
    pm.expect(applicant).to.have.property('job_tag');
    pm.expect(applicant).to.have.property('work_experience');
    pm.expect(applicant).to.have.property('expected_salary');
    pm.expect(applicant).to.have.property('_id');
    pm.expect(applicant).to.have.property('__v');
});