public class Record1 {

    public static void main(String[] args){
        record Product(String name, String vendor, int price, boolean inStock) {};
        var product1 = new Product("name1", "vendor1", 400, true);
        System.out.println(product1);
    }
}
