package com.jphanos.book_network.book;

import com.jphanos.book_network.common.BaseEntity;
import com.jphanos.book_network.feedback.Feedback;
import com.jphanos.book_network.history.BookTransactionHistory;
import com.jphanos.book_network.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book extends BaseEntity {

    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String bookCover;
    private boolean archived;
    private boolean shareable;

    // relationships
    @ManyToOne
    @JoinColumn(name = "owner_id") // The name of the joining table
    private User owner; // The field you use when mapping it to the user

    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "book")
    private List<BookTransactionHistory> histories;

}
