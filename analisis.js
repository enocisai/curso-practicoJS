
//Helpers//
function itsEven (number) {
    return (number % 2 ===0);
 
 }

 // Calculator of median //
 function medianSalaries(list) {
    const mitad = parseInt(list.length / 2);

    if (itsEven(list.length)) {
    const personmitad1 = list[mitad - 1];
    const personmitad2 = list[mitad];

    const median = calculateMath([personmitad1, personmitad2]);
    return median;
    } else {
     const personmitad = list[mitad];
     return personmitad;
    }
}
//General Median//
const salariesUSA = UnitedStates.map(
    ({salary}) => salary);

const salarySortedUSA = salariesUSA.sort(
function (salaryA, salaryB) {
 return salaryA - salaryB;
}

);

function calculateMath(list){
  const additionList = list.reduce(
      function(accumulateValue = 0, newElement){
    return accumulateValue + newElement
  }
  );
  const medianList = additionList /  list.length;
  return medianList;
}

 const medianGeneralSalary = medianSalaries(salarySortedUSA)



 //Median top10%//

 const spliceStart = (salarySortedUSA.length *(90) /100 );
 const spliceCount = salarySortedUSA.length - spliceStart;


 const salariesTop10 = salarySortedUSA.splice(
     spliceStart,
     spliceCount,
 );

 const medianTop10USA = medianSalaries(salariesTop10);

 console.log({
    medianGeneralSalary,
    medianTop10USA
});