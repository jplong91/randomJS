// let boy = {hair: "blue"}
// console.log(boy)

// function removeProperty(obj, prop) {
//   let output = true
//   if (obj[prop]) {
//     delete obj[prop];
//   } else {
//     output = false;
//   }
//   return output;
// };

// console.log(removeProperty(boy, "hair"))

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  dayArray = userDate.split("/")
  output = ""
  for (i = dayArray.length - 1; i >= 0; i--) {
    output.concat(dayArray[i]);
    console.log(output);
  }
  return output;
}

console.log(formatDate("12/31/2014"));