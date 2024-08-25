package com.jphanos.book_network.role;

import com.jphanos.book_network.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "role")
@EntityListeners(AuditingEntityListener.class)
public class Role {

    @Id
    @GeneratedValue
    private Integer id;
    @Column(unique = true)
    private String name;

    @ManyToMany(mappedBy = "roles") // Should be the same name in the User class field
    private List<User> users;

    @CreatedDate
    @Column(nullable = false, updatable = false) // So that it doesn't get changed once the field is fixed.
    private LocalDateTime createdDate;
    @LastModifiedDate
    @Column(insertable = false) // When we create a new record we don't want to initialize the value of the record.
    private LocalDateTime lastModifiedDate;
}
