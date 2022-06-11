package core;

public class MultipleClassesInSameFile {

    public static void main(String[] args){
        System.out.println(GenerateMessage.generateMessage());
        System.out.println(AnotherMessage.anotherMessage());
    }

}

class GenerateMessage {
    static String generateMessage() {
        return "First message";
    }
}

class AnotherMessage{
    static String anotherMessage(){
        return "Another message";
    }

}