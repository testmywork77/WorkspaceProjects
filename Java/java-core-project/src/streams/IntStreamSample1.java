package streams;

import java.util.stream.IntStream;

public class IntStreamSample1 {

    public static void main(String[] args){
        //Before Java 8
        int[] numbers = {4, 1, 13, 90, 16, 2, 0 };
        int min = numbers[0];
        for(int number : numbers){
            if (number < min)
                min = number;
        }
        System.out.println("Without Streams, Minimum is: " + min);

        //After Java 8
        // getAsInt(), will throw exception, If min can't be found(i.e. if numbers array is empty)
        min = IntStream.of(numbers).min().getAsInt();
        System.out.println("With Streams, Minimum is: " + min);

        // By Consumer function
        IntStream.of(numbers)
                .min()
                .ifPresent(x -> System.out.println("With Streams, Minimum is: " + x));
        // By Consumer function replace with Method reference
        IntStream.of(numbers)
                .min()
                .ifPresent(System.out::println); // replace Lambda with static method reference

    }

}