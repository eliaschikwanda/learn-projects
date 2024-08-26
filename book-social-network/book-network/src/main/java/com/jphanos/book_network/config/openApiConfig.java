package com.jphanos.book_network.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Elias",
                        email = "contact@jphanos.com",
                        url = "https://jphanos.com"
                ),
                description = "OpenApi documention for Spring security",
                title = "OpenApi specification - Elias",
                version = "1.0",
                license = @License(
                        name = "Licence name",
                        url = "https://licence.com"
                ),
                termsOfService = "Terms of Service"
        ),
        servers = {
                @Server(
                        description = "Local ENV",
                        url = "http://localhost:8088/api/v1"
                ),
                @Server(
                        description = "Prod ENV",
                        url = "https://someurl.com"
                )
        },
        // For every controller class we need a security requirement
        security = {
                @SecurityRequirement(
                        name = "bearerAuth"
                )
        }
)
// Should be the same as that of the security requirement name
@SecurityScheme(
        name = "bearerAuth",
        description = "JWT auth description",
        scheme = "bearer",
        // Security for HTTP
        type =  SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class openApiConfig {
}
