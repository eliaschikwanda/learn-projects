package com.jphanos.book_network.history;

import com.jphanos.book_network.book.Book;
import com.jphanos.book_network.common.BaseEntity;
import com.jphanos.book_network.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class BookTransactionHistory extends BaseEntity {

    // one user can borrow many books and one book can be borrowed by many users

    // user relationship
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    // book relationship
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    private boolean returned;
    private boolean returnApproved;

}
