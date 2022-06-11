package db;

import java.sql.*;

public class MySQLSamples {

    public static void main(String[] args) throws SQLException {
//        connectToAndQueryByJDBC1();
//        connectToAndQueryByJDBC2();
        updatePrice(5, "FName6", "LName6");
    }

    private static void updatePrice(long id, String fName, String lName) throws SQLException {
        Connection con = null;
        PreparedStatement pstmt;
        String connectionUrl = "jdbc:mysql://localhost:3306/test";

        try{
            con = DriverManager.getConnection(connectionUrl,
                    "root", "admin");
            con.setAutoCommit(false);
            pstmt = con.prepareStatement("UPDATE person SET ID = ?, " +
                    "FIRST_NAME = ?, LAST_NAME = ? WHERE ID = ?");
            pstmt.setLong(1, 6);
            pstmt.setString(2, fName);
            pstmt.setString(3,lName);
            pstmt.setLong(4,id);
            pstmt.executeUpdate();

            con.commit();
            pstmt.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            if(con != null) con.close();
        }
    }

    private static void connectToAndQueryByJDBC1(){
        String query = "SELECT * FROM person";
        String connectionUrl = "jdbc:mysql://localhost:3306/test";

        try{
            Connection conn = DriverManager.getConnection(connectionUrl,
                    "root", "admin");
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(query);

            System.out.println("*** connectToAndQueryByJDBC-Begin ***");
            while (rs.next()) {
                long id = rs.getLong("ID");
                String fName = rs.getString("FIRST_NAME");
                String lName = rs.getString("LAST_NAME");

                System.out.println("Id:" + id + ",Name:" + fName + ",City: " + lName);
            }
            System.out.println("*** connectToAndQueryByJDBC-End ***");
        } catch (SQLException e) {
            // handle the exception
        }
    }

    private static void connectToAndQueryByJDBC2(){
        String query = "select COF_NAME, SUP_ID, PRICE, SALES, TOTAL from COFFEES";
        String connectionUrl = "jdbc:mysql://localhost:3306/jdbctutorial";

        try{
            Connection conn = DriverManager.getConnection(connectionUrl,
                    "root", "admin");
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(query);

            System.out.println("*** connectToAndQueryByJDBC2-Begin ***");
            while (rs.next()) {
                String coffeeName = rs.getString("COF_NAME");
                int supplierID = rs.getInt("SUP_ID");
                float price = rs.getFloat("PRICE");
                int sales = rs.getInt("SALES");
                int total = rs.getInt("TOTAL");
                System.out.println(coffeeName + ", " + supplierID + ", " + price +
                        ", " + sales + ", " + total);
            }
            System.out.println("*** connectToAndQueryByJDBC2-End ***");
        } catch (SQLException e) {
            // handle the exception
        }
    }

}