import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Stream1 {

    public static void main(String[] args){

        // Lambda
        Function<Integer, Integer> increment = (Integer value) -> value + 1;

        // Stream
        List<Integer> incrementStream = Stream.of(1,2,3,4)
                .filter(i -> i > 2)
                .map(increment)
                .collect(Collectors.toList());

        System.out.println(incrementStream);

    }
}
