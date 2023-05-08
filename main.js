import java.util.Random;

public class PasswordGenerator {

    public static void main(String[] args) {
        String password = generatePassword();
        System.out.println(password);
    }

    public static String generatePassword() {
        int length = 10;
        String charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(charset.length());
            char randomChar = charset.charAt(index);
            sb.append(randomChar);
        }
        return sb.toString();
    }
}
