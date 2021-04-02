public class Car {
    private Integer id;
    private String license;
    private Driver driver;
    private Integer passenger;

    public Car (String license, Driver driver){
        this.license = license;
        this.driver = driver;
    }
    void printDataCard(){
        if(this.passenger != null){
            System.out.println("License: " + this.license + " " + "Driver: " + driver.name + " " + "Passenger: " + this.passenger);
        }
    }
    public Integer getPassenger(){
        return passenger;
    }
    public void setPassenger(Integer passenger){
        if (passenger == 4){
            this.passenger = passenger;
        }
        else{
            System.out.println("Necesitas 4 Pasajeros");
        }
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getLicense() {
        return license;
    }
    public void setLicense(String license) {
        this.license = license;
    }
    public Driver getDriver() {
        return driver;
    }
    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}