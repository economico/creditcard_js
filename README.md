This was extracted from http://letsfreckle.com.

This version was converted to remove any dependencies by http://picomoney.com

    CreditCard.validate('1111 2222 3333 4444') # -> true/false

the given string is automatically stripped of whitespace, so it can be  plugged directly into form validations

The following things are tested:

  1. does the luhn validation code add up? (see http://en.wikipedia.org/wiki/Luhn_algorithm)
  2. does the number range and length seem right? (see http://en.wikipedia.org/wiki/Bank_card_number)
  3. is it one of several well-known test numbers?

Card identification via CreditCard.type(string) -> "Visa", "MasterCard", etc.
Also, CreditCard.isVisa(string) -> true/false (works for all cards given in CARDS)

Be sure to adapt the CARDS array to the credit cards you accept.