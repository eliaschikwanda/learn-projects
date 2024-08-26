package com.jphanos.book_network.common;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PageResponse<T> {
    private List<T> content;
    private int number;
    private int size;
    private long totalElements;
    private long totalPages;
    private boolean first; // If page is first
    private boolean last; // If page is last
}
