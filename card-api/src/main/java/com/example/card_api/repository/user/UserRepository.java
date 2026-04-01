package com.example.card_api.repository.user;

import com.example.card_api.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginId(String loginId);
    Long countByGender(String gender);

    @Query("SELECT COUNT(u) FROM User u WHERE " +
            "FUNCTION('TIMESTAMPDIFF', YEAR, u.birthDate, CURRENT_DATE) BETWEEN :start AND :end")
    long countByAgeRange(@Param("start") Integer start, @Param("end") Integer end);
}
