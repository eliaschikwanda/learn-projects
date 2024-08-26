package com.jphanos.book_network.book;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("books") // --> set the context path in the application properties
@RequiredArgsConstructor // --> Automatically inject the requirements without the need of building the constructor
@Tag(name = "book")
public class BookController {
    private final BookService service;

    @PostMapping
    public ResponseEntity<Integer> saveBook(
            @Valid @RequestBody BookRequest request, // We need a valid book request and create a request object to validate
            Authentication connectUser
    ) {
        return ResponseEntity.ok(service.save(request, connectUser));
    }
}
