package com.jphanos.book_network.book;

import com.jphanos.book_network.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("{book-id}")
    public ResponseEntity<BookResponse> findBookById(
            @PathVariable("book-id") Integer bookId
    ) {
        return ResponseEntity.ok(service.findById(bookId));
    }

    @GetMapping
    public ResponseEntity<PageResponse<BookResponse>> findAllBooks(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication connectUser
    ) {
        return ResponseEntity.ok(service.findAllBooks(page, size, connectUser));
    }
}

