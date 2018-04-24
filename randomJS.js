let boy = {hair: "blue"}
console.log(boy)

function removeProperty(obj, prop) {
  let output = true
  if (obj[prop]) {
    delete obj[prop];
  } else {
    output = false;
  }
  return output;
};

console.log(removeProperty(boy, "hair"))