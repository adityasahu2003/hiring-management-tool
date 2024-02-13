pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is a valid JSON object", function () {
    pm.response.to.be.json;
});

pm.test("Response contains display_name, work_email_id, and other common fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.all.keys('_id', 'display_name', 'work_email_id', 'phone_number', 'profile_pic_path', 'work_experience', '__v');
});