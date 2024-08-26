package com.jphanos.book_network.feedback;

import com.jphanos.book_network.book.Book;
import com.jphanos.book_network.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Feedback extends BaseEntity {
    private Double notes;
    private String comment;

    // Relationships
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

}
