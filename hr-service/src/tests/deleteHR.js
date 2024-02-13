pm.test("Successful DELETE request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);
});
