package streams;

import model.Employee;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

// names of 3 highest earning employees
public class StreamWithObjects {

    public static void main(String[] args){

        // create list of Employee objects
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1,"Venkat", 2000));
        employees.add(new Employee(1,"Babu", 5000));
        employees.add(new Employee(1,"Ram", 1000));
        employees.add(new Employee(1,"Krishna", 6000));
        employees.add(new Employee(1,"Hari", 3000));

        // new list
        List<Employee> copy = new ArrayList<>(employees);

        // sort descending
        copy.sort((e1, e2) -> e2.getSalary() - e1.getSalary());

        // get first 3
        for(int i= 0; i<3; i++){
            Employee employee = copy.get(i);
            System.out.println(employee.getEmpName());
        }

        // using Streams API
        System.out.println("After Java 8 -Streams API: ");
        employees.stream()
                .sorted(Comparator.comparingInt(Employee::getSalary).reversed())
                .limit(3)
                .map(Employee::getEmpName)
                .forEach(System.out::println);
    }
}