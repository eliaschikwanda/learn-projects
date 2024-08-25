package com.jphanos.book_network.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequest {
    @NotEmpty(message = "email is required")
    @NotBlank(message = "email can not be blank")
    @Email(message = "email format not valid")
    private String email;
    @NotEmpty(message = "password is required")
    @NotBlank(message = "password can not be blank")
    @Size(min = 8, message = "Password should be at least 8 characters")
    private String password;
}
