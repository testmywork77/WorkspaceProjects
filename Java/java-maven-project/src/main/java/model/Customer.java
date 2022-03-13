package model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Customer {
    private String name;
    private int age;
    private String city;
    private Boolean isActive;
    private String dob;
}