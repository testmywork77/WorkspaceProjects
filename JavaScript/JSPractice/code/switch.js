let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date(2016, 01, 03),
    numYearsService: 7,
    isActive: true,
    department: "HR",
    title: "VP Engineering"
  };

  
  switch (employee.department) {
    case 'Engineering':
    case 'HR': 
      console.log('Meet in Building 1');
      break;
  
    case 'Marketing':
      console.log('Meet in Building 2');
      break;
  
    default:
      console.log('Meet in Building 3');
  }
  
  