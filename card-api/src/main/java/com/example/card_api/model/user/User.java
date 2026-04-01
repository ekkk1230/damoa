package com.example.card_api.model.user;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    private String gender; // "M", "F"
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private LocalDateTime joinDate;

    @PrePersist
    public void prePersist() {
        this.joinDate = LocalDateTime.now();
        if (this.role == null) this.role = UserRole.USER;
    }
}
