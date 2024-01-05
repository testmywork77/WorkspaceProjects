package practice;

import java.util.stream.Collectors;

public class RemoveChar {

    public static void main(String[] args){

        String str = "Hello World1";

        System.out.println("removeChar1: " + removeChar1(str, '1'));
        System.out.println("removeChar2: " + removeChar2(str, '1'));
    }

    // Imperative/Non-functional approach
    private static String removeChar1(String input , char c){
        StringBuilder sb = new StringBuilder();
        char[] charArray = input.toCharArray();
        for(char ch : charArray){
            if(ch != c){
                sb.append(ch);
            }
        }
        return sb.toString();
    }

    // Functional approach
    private static String removeChar2(String input, char c){
        return input.chars()
                .filter(ch -> ch != c)
                .mapToObj(ch-> String.valueOf((char) ch))
                .collect(Collectors.joining());
    }

}
