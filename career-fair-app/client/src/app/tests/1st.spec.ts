import { Company } from '../registration/company';

describe('1st tests', () => {

  it('true is true', () => expect(true).toBe(true));

  it('2 + 2', () => expect(2 + 2).toBe(4));

  it('', function() {
    let x = new Company();
    x.calculateMoneyOwed('resumeBook');
    let money = x.moneyOwed;
    var _is = false;
    if(money == 150) {
      _is = true;
    }
    expect(_is).toBe(true);
  });

});