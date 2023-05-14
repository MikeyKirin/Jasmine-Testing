it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 100,
    years: 1,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('9.16');
});



it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 3,
    rate: 0.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('150.00');
});

