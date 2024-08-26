package com.jphanos.book_network.feedback;

import com.jphanos.book_network.book.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .notes(request.notes())
                .comment(request.comment())
                .book(Book.builder()
                        .id(request.bookId())
                        .archived(false) // Not required and has no impact
                        .shareable(false) // Not required just to satisfy Lombok
                        .build())
                .build();
    }

    public FeedbackResponse toFeedBackResponse(Feedback feedback, Integer userId) {
        return FeedbackResponse.builder()
                .notes(feedback.getNotes())
                .comment(feedback.getComment())
                .ownFeedback(Objects.equals((feedback.getCreatedBy()), userId))
                .build();
    }
}
