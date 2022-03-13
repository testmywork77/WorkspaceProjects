package model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Product {
    private String name;
    private int price;
    private String color;
    private String[] sellerName;

}
