package general;

import model.User;

public class UserTest {
    public static void main(String[] args) {

        User u1 = User.builder()
                .name("Tom")
                .age(21)
                .build();

        System.out.println(u1.getName() + " " + u1.getAge());
    }
}
