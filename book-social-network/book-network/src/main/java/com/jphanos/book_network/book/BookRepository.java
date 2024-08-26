package com.jphanos.book_network.book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

// The JpaSpecificationExecutor is used so that it will be able to process Specifications
public interface BookRepository extends JpaRepository<Book, Integer>, JpaSpecificationExecutor<Book> {
    @Query("""
        SELECT book
        FROM Book book
        WHERE book.archived = false
        AND book.shareable = true
        AND book.owner.id != :userId
""")
    Page<Book> findAllDisplayableBooks(Pageable pageable, Integer userId);
}
