package general;

public class EnumTutorial {

    public static void main(String[] args){
        DaysOfTheWeek day = DaysOfTheWeek.FRIDAY;

        if (day == DaysOfTheWeek.FRIDAY){
            System.out.println("Today is Friday!");
        }

        for(DaysOfTheWeek myDay : DaysOfTheWeek.values()){
            System.out.println(myDay);
        }
    }
}