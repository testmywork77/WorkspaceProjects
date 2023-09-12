import java.util.HashSet;
import java.util.Set;

public class Employee {

    private int empId;
    private String empName;

    public Employee(int empId, String empName) {
        super();
        this.empId = empId;
        this.empName = empName;
    }

    /**
     * @return the empId
     */
    public final int getEmpId() {
        return empId;
    }

    /**
     * @param empId
     *            the empId to set
     */
    public final void setEmpId(int empId) {
        this.empId = empId;
    }

    /**
     * @return the empName
     */
    public final String getEmpName() {
        return empName;
    }

    /**
     * @param empName
     *            the empName to set
     */
    public final void setEmpName(String empName) {
        this.empName = empName;
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return "Employee [empId=" + empId + ", empName=" + empName + "]";
    }

    @Override
    public int hashCode() {
        return this.empId;
    }

    @Override
    public boolean equals(Object obj) {
        Employee employee = (Employee) obj;
        if (employee.empId == this.empId) {
            employee.setEmpName(this.empName);
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        Set<Employee> employees = new HashSet<>();
        employees.add(new Employee(1, "Raj"));
        employees.add(new Employee(1, "Pradeep"));
        employees.add(new Employee(1, "Kumar"));
        employees.add(new Employee(2, "Chandan"));
        employees.add(new Employee(2, "Amitava"));

        System.out.println(employees);
    }
}

