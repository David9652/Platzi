import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;  

public class regex2 {
    public static void main(String[] args) {
        String file = "../results.csv";
        // 2018-06-04,Slovakia,Morocco,1,2,Friendly,Geneva,Switzerland,TRUE
        Pattern pat = Pattern.compile("^\\d{4,4}\\-\\d{2,2}\\-\\d{2,2},Colombia.*$");

        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            while((line = br.readLine()) != null) {
                Matcher matcher = pat.matcher(line);
                if(matcher.find()){
                    System.out.println(line);
                }
            }
            br.close();
        } catch(IOException errException) {
            System.out.println(errException);
        }
    }
}