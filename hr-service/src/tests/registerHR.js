pm.test("Response status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has a JSON content type", function () {
    pm.expect(pm.response).to.have.header("Content-Type", "application/json; charset=utf-8");
});

pm.test("Response has a message property", function () {
    pm.expect(pm.response.json()).to.have.property('message');
});

pm.test("HR object has required properties", function () {
    var hr = pm.response.json().hr;
    pm.expect(hr).to.have.property('display_name');
    pm.expect(hr).to.have.property('work_email_id');
    pm.expect(hr).to.have.property('phone_number');
    pm.expect(hr).to.have.property('profile_pic_path');
    pm.expect(hr).to.have.property('work_experience');
    pm.expect(hr).to.have.property('_id');
    pm.expect(hr).to.have.property('__v');
});