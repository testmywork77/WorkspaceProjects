package streams;

import java.util.Arrays;
import java.util.stream.IntStream;

// find 3 distinct smallest numbers of array of int
public class IntStreamSample2 {

    public static void main(String[] args) {
        //Before Java 8
        int[] numbers = {4, 1, 13, 1, 90, 16, 2, 0};

        // clone -Avoiding mutating original array
        int[] copy = Arrays.copyOf(numbers, numbers.length);

        // sort
        Arrays.sort(copy);

        for (int i = 0; i < 3; i++) {
            System.out.println(copy[i]); //Oops, forgot to only distinct
        }

        // after Java 8
        // method chaining for complicated logic, original array not muted
        System.out.println("After Java 8: ");
        IntStream.of(numbers)
                .distinct()
                .sorted()
                .limit(3)
                .forEach(x -> System.out.println(x) );

        int sum = IntStream.of(numbers)
                .distinct()
                .sorted()
                .limit(3)
                .sum();
        System.out.println("Sum: " + sum);
    }
}