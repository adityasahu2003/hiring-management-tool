pm.test("Response status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has a JSON content type", function () {
    pm.expect(pm.response).to.have.header("Content-Type", "application/json; charset=utf-8");
});

pm.test("Response has a message property", function () {
    pm.expect(pm.response.json()).to.have.property('message');
});

pm.test("Interviewer object has required properties", function () {
    var interviewer = pm.response.json().interviewer;
    pm.expect(interviewer).to.have.property('display_name');
    pm.expect(interviewer).to.have.property('work_email_id');
    pm.expect(interviewer).to.have.property('phone_number');
    pm.expect(interviewer).to.have.property('profile_pic_path');
    pm.expect(interviewer).to.have.property('work_experience');
    pm.expect(interviewer).to.have.property('_id');
    pm.expect(interviewer).to.have.property('__v');
});