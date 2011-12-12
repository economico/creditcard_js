$(document).ready(function() {

  module("CreditCard");

  test("detectsType", function() {
    equals('Visa', CreditCard.type('4111111111111111'));
    equals('MasterCard', CreditCard.type('5555555555554444'));
    equals('DinersClub', CreditCard.type('30569309025904'));
    equals('Amex', CreditCard.type('371449635398431'));
    equals('Discover', CreditCard.type('6011000990139424'));
  });

  test("testDetectsVerifiesTypeByCard", function() {
    ok(CreditCard.isVisa('4111111111111111'));
    ok(!CreditCard.isVisa('5555555555554444'));
    ok(!CreditCard.isVisa('30569309025904'));
    ok(!CreditCard.isVisa('371449635398431'));
    ok(!CreditCard.isVisa('6011000990139424'));

    ok(CreditCard.isMasterCard('5555555555554444'));
    ok(CreditCard.isDinersClub('30569309025904'));
    ok(CreditCard.isAmex('371449635398431'));
    ok(CreditCard.isDiscover('6011000990139424'));
  });

  test("testLuhn10Verification", function() {
    ok(CreditCard.verifyLuhn10('49927398716'));
    ok(CreditCard.verifyLuhn10('049927398716'));
    ok(CreditCard.verifyLuhn10('0049927398716'));
    ok(!CreditCard.verifyLuhn10('49927398715'));
    ok(!CreditCard.verifyLuhn10('49927398717'));
  });

  test("testDetectsTestNumbers", function() {
    var TEST_NUMBERS = ['378282246310005', '371449635398431', '378734493671000',
      '30569309025904', '38520000023237', '6011111111111117',
      '6011000990139424', '5555555555554444', '5105105105105100',
      '4111111111111111', '4012888888881881', '4222222222222'];

    _(TEST_NUMBERS).each(function(number){
      ok(CreditCard.isTestNumber(number));
    });

    ok(!CreditCard.isTestNumber('1'));
  });

  test("testIgnoresWhiteSpace", function() {
    equals('4111111111111111', CreditCard.strip('4111 1111 1111 1111 '));

    equals('Visa', CreditCard.type('4111 1111 1111 1111 '));
    equals('Visa', CreditCard.type(' 4111 1111 1111 1111 '));
    equals('Visa', CreditCard.type('\n4111 1111\t 1111 1111 '));
    ok(CreditCard.verifyLuhn10('  004 992739 87 16'));
    ok(CreditCard.isTestNumber('601 11111111111 17'));
  });
  
});
