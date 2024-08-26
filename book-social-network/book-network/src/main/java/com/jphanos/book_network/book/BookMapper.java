package com.jphanos.book_network.book;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookMapper {
    public Book toBook(BookRequest request) {
        return Book.builder()
                .id(request.id())
                .title(request.title())
                .authorName(request.authorName())
                .isbn(request.isbn())
                .synopsis(request.synopsis())
                .shareable(request.shareable())
                .build();
    }
}
