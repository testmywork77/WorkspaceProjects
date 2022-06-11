package core;

interface Vehicle {
    String getBrand();

    String speedUp();

    String slowDown();

    default String turnAlarmOn(){
        return "turning vehicle alarm on";
    }

    default String turnAlarmOff(){
        return "turning vehicle alarm off";
    }
}

class Car implements Vehicle{

    @Override
    public String getBrand() {
        return "BMW";
    }

    @Override
    public String speedUp() {
        return "car is speeding up";
    }

    @Override
    public String slowDown() {
        return "car is slowing Down";
    }
}

public class DefaultMethodsDemo {

    public static void main(String[] args){
        Car car = new Car();
        //abstract methods
        System.out.println(car.getBrand());
        System.out.println(car.speedUp());
        System.out.println(car.slowDown());
        //default methods
        System.out.println(car.turnAlarmOn());
        System.out.println(car.turnAlarmOff());
    }

}
