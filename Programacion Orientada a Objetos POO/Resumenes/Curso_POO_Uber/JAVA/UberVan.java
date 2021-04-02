import java.util.ArrayList;
import java.util.Map;

class UberVan extends Car {
    private Integer passenger;
   /* Map<String, Map<String,Integer>> typeCarAccepted;
    Map<String> seatsMaterial;

    public UberVan (String license, Driver driver, Map<String, Map<String,Integer>> typeCarAccepted, Map<String> seatsMaterial){
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;;
        this.seatsMaterial = seatsMaterial;
    } */
    public UberVan (String license, Driver driver){
        super(license, driver);
    }

    @Override
    public void setPassenger(Integer passenger) {
        if (passenger == 6){
            this.passenger = passenger;
        }
        else{
            System.out.println("Necesitas 6 Pasajeros");
        }
    }
}