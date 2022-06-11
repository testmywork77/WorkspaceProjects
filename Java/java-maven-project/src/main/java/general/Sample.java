package general;

import utils.FileResourcesUtils;

import java.io.InputStream;

public class Sample {

    public static void main(String[] args){
        Sample sample = new Sample();
        sample.printFileFromResourceFolder();
    }

    private void printFileFromResourceFolder(){
        FileResourcesUtils app = new FileResourcesUtils();

        //String fileName = "json/author.json";
        String fileName = "json/employee/employee.json";
        System.out.println("getResourceAsStream : " + fileName);
        InputStream is = app.getFileFromResourceAsStream(fileName);
        app.printInputStream(is);

       //app.convertJsonToJavaClass(fileName, "Employee1", "model",);
    }


}
