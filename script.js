// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isSum50);
// console.log(isTwoOdd);
// console.log(isOver25);
// console.log(isUnique);
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //checking is divisible by 5
  const isDivBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ==0 ;

  console.log('Meets the divisibility criteria:${isDivBy5}');

// check if first first number is larger than last
  const fnIsLarLast = (n1>n4);
  console.log('first number is greater than 4th number:${fnIsLarLast}');

  //Subtract the first number from the second number.
  const subSecFromFirst =(n1-n2);
  console.log(subSecFromFirst);

  //Multiply the result by the third number

  const mulByThird = (subSecFromFirst * n3);
  console.log(mulByThird);

  //Find the remainder of dividing the result by the fourth number.

  const rem =(mulByThird % n4);
  console.log(rem);

// checked If any of the number is less than 25. 
  const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25; 
  console.log(isUnder25);

  //practical math scenario 
  

  const totDist = 1500;
 const m1=55;
  const m2= 60;
  const m3= 75;
  const g1= 30;
  const g2= 28;
  const g3= 23;
  

  //Toatl Gallons for entire trip 
  let galComp1 = (totDist / g1);
  const galComp2 = (totDist / g2);
  const galComp3 = (totDist / g3);
  console.log (galComp1 , galComp2 , galComp3);

  //budget to cover fuel expenses

const c1 = 3;
const bud1 = ( galComp1 * c1);
console.log('comparinf{bud1}');

const bud2 = (galComp2 * c1);
 console.log(bud2);

 const bud3 = (galComp3 * c1);
 console.log(bud3);

 //Time Duration for Trip

 const time1 = (totDist / m1);
 const time2 = (totDist /m2);
 const time3 = (totDist /m3);
console.log (time1 );
console.log (time2 );
console.log (time3);

// comparing results with average results of 3 distances 

const compBud1 = bud1< bud2 && bud1 < bud3 ;
console.log(`budget efficiency : ${compBud1}`);
const compBud2 =  bud2 > bud1 && bud2 > bud3;
console.log(`budget efficiency : ${compBud2}`);












  









 