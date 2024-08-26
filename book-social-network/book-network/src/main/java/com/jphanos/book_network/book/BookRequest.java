package com.jphanos.book_network.book;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

// The class implemented as a record
// When we're creating a book we will have the minimum required information
public record BookRequest(
        // if the Id is null it creates a new one otherwise
        Integer id,
        @NotNull(message = "100")
        @NotEmpty(message = "100")
        String title,
        @NotNull(message = "101")
        @NotEmpty(message = "101")
        String authorName,
        @NotNull(message = "102")
        @NotEmpty(message = "102")
        String isbn,
        @NotNull(message = "103")
        @NotEmpty(message = "103")
        String synopsis,
        boolean shareable
) {
}
