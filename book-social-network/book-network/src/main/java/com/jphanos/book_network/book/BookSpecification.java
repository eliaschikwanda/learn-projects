package com.jphanos.book_network.book;

import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {
    // Always great to use static method
    public static Specification<Book> withOwnerId(Integer ownerId) {
        // Get the owner field from the book
        // The passed id should be equal to the passed ownerID
        // Similar with the query written in the BookRepository but it is another way of doing it.
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("owner").get("id"), ownerId);
    }
}
