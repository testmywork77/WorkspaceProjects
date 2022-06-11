package general;

import model.Product;
import org.apache.juneau.html.HtmlSerializer;
import org.apache.juneau.json.JsonParser;
import org.apache.juneau.json.JsonSerializer;
import org.apache.juneau.parser.ParseException;
import org.apache.juneau.serializer.SerializeException;
import org.apache.juneau.xml.XmlSerializer;

public class ProductTest {

    public static void main(String[] args) throws SerializeException, ParseException {

        String[] sellerNames = {"ABC", "XYZ", "PQR"};
        //Product product = new Product("MacbookPro", 1000, "White", sellerNames);
        Product product = Product.builder()
                .name("MacbookPro")
                .price(1000)
                .color("White")
                .sellerName(sellerNames)
                .build();

        //POJO to JSON
        JsonSerializer jsonSerializer = JsonSerializer.DEFAULT_READABLE;
        String jsonProduct = jsonSerializer.serialize(product);
        System.out.println(jsonProduct);

        //POJO to XML
        XmlSerializer xmlSerializer = XmlSerializer.DEFAULT_NS_SQ_READABLE;
        String xmlProduct = xmlSerializer.serialize(product);
        System.out.println(xmlProduct);

        //POJO to HTML
        HtmlSerializer htmlSerializer = HtmlSerializer.DEFAULT_SQ_READABLE;
        String htmlProduct = htmlSerializer.serialize(product);
        System.out.println(htmlProduct);

        //Deserialization
        //JSON to POJO
        JsonParser jsonParser = JsonParser.DEFAULT;
        Product product1 = jsonParser.parse(jsonProduct, Product.class);
        System.out.println("Product: " + product1);
    }

}
