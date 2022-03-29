public class Constructors {
    public static void main(String[] args){
        Dog dog1 = new Dog();
        System.out.println(dog1.name);
        System.out.println(dog1.age);

        Dog dog2 = new Dog("Dog2",2);
        System.out.println(dog2.name);
        System.out.println(dog2.age);
    }
}
