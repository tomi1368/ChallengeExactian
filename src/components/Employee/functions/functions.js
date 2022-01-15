export const employeeSearch = (employee, nav) => {
  let { dni } = employee;
  let regexValidate = /^[\d]{1,2}\.?[\d]{3,3}\.?[\d]{3,3}$/;
  if (dni.trim().length == 0) return nav("/employee/find");
  let param = regexValidate.test(dni) ? `${dni}` : "no";
  nav(`/employee/find/?dni=${param}`);
};
