package com.jphanos.book_network.feedback;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackResponse {
    private Double notes;
    private String comment;
    private boolean ownFeedback;
}
