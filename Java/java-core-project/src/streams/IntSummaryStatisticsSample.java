package streams;

import java.util.IntSummaryStatistics;
import java.util.stream.IntStream;

public class IntSummaryStatisticsSample {
    public static void main(String[] args){
        int[] numbers = {4, 1, 13, 90, 16, 2, 0 };

        IntSummaryStatistics statistics = IntStream.of(numbers).summaryStatistics();
        System.out.println(statistics.getMax());
        System.out.println(statistics.getMin());
        System.out.println(statistics.getSum());
        System.out.println(statistics.getAverage());
        System.out.println(statistics.getCount());
    }

}
