module.exports = (data, key) => {
  let result = {};
  console.log(data);
  data.forEach((element) => {
    if (result.hasOwnProperty(element[key])) {
      result[element[key]].push(element);
    } else {
      result[element[key]] = [element];
    }
  });
  return result;
};
