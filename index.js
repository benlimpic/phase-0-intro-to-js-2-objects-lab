const employee = {
  name: "Ben",
  streetAddress: "1234 number st",
};

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
  return { ...obj, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const clone = { ...employee };
  delete clone[key];
  return clone;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
deleteFromEmployeeBy;
