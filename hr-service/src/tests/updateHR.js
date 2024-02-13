pm.test("Successful PUT request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);
});

pm.test("Response is a valid JSON object", function () {
    pm.response.to.be.json;
});

pm.test("Response contains display_name, work_email_id, and other common fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('_id');
    pm.expect(jsonData).to.have.property('display_name');
    pm.expect(jsonData).to.have.property('work_email_id');
    pm.expect(jsonData).to.have.property('phone_number');
    pm.expect(jsonData).to.have.property('profile_pic_path');
    pm.expect(jsonData).to.have.property('work_experience');
    pm.expect(jsonData).to.have.property('__v');
});