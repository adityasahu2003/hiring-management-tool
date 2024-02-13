pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is a valid JSON object", function () {
    pm.response.to.be.json;
});

pm.test("Response contains cv_path, expected_salary, and other common fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.all.keys('cv_path', 'expected_salary', '_id', 'display_name', 'user_email_id', 'phone_number', 'profile_pic_path', 'skill_tag', 'job_type_pref', 'location_pref', 'notice_period', 'current_company', 'job_tag', 'work_experience', '__v');
});