class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo!!");
        UberX uberx = new UberX("ABC123", new Driver("David Ángel", "1018481424"), "Chevrolet", "Spark");
        uberx.setPassenger(4);
        uberx.printDataCard();
        new PayPal(5, "carlosdavid_9652@hotmail.com");
        UberVan ubervan = new UberVan("DEF456", new Driver("Daniel Ángel", "95120709381"));
        ubervan.setPassenger(6);
        System.exit(0);
    }
}