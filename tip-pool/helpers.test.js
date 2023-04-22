    it('Sum up all tips', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    it('Should sum up all payments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 150;
      tipAmtInput.value = 10;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(160);
    });
  
    it('Should give us the tip percent', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23);
      expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });