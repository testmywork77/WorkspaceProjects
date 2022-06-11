package general;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FilePath {
    static String absolutePath;
    static File file;
    public static void main(String[] args){
        FilePath filePath = new FilePath();

        String path = "src/test/resources";
        file = new File(path);
        absolutePath = file.getAbsolutePath();
        System.out.println("AbsolutePath Using java.io.File: " + absolutePath);

        Path resourceDirectory = Paths.get("src","test","resources");
        absolutePath = resourceDirectory.toFile().getAbsolutePath();
        System.out.println("AbsolutePath Using Path: " + absolutePath);

        String resourceName = "json/employee/employee.json";
        ClassLoader classLoader = filePath.getClass().getClassLoader();
        file = new File(classLoader.getResource(resourceName).getFile());
        absolutePath = file.getAbsolutePath();
        System.out.println("File Path: " + file);
        System.out.println("AbsolutePath Using ClassLoader: " + absolutePath);

    }

}
