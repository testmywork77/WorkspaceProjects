package model;

public class Employee {
    private int empNo;
    private String empName;
    private int salary;

    public int getEmpNo() {
        return empNo;
    }

    public void setEmpNo(int empNo) {
        this.empNo = empNo;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String eName) {
        this.empName = eName;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Employee(int empNo, String empName, int salary) {
        this.empNo = empNo;
        this.empName = empName;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "model{" +
                "empNo=" + empNo +
                ", empName='" + empName + '\'' +
                ", salary=" + salary +
                '}';
    }
}
