# Random password generator

This is a Java class named `PasswordGenerator` that generates a random password consisting of lowercase letters and digits. The `generatePassword()` method uses a `StringBuilder` to build the password and a `Random` object to randomly select characters from the `charset` string, which contains all the possible characters that can be included in the password.

The length of the password is set to 10, but this can be changed by modifying the `length` variable in the `generatePassword()` method. Similarly, the characters that can be included in the password can be modified by changing the `charset` string.

The `main()` method simply calls the `generatePassword()` method and prints the resulting password to the console. This class can be used as a utility to generate random passwords for various applications.
