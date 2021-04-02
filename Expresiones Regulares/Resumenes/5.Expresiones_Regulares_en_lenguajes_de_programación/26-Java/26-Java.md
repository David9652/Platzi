# Sesión 26 - Java

* Teniendo en cuenta el archivo results.csv, realizar un programa en Java que pueda abrir y leer un documento.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class regex {
    public static void main(String[] args) {
        String file = "../results.csv";

        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            while((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close();
        } catch(IOException errException) {
            System.out.println(errException);
        }
    }
}
```

* Si no tenemos un IDE para compilar nuestro proyecto de Java, podemos hacerlo desde la consola. El primer paso sería compilar nuestro archivo `$ javac regex.java` y después ejecutarlo `$ java regex`