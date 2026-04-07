package com.example.card_api.service.user;

import com.example.card_api.model.user.User;
import com.example.card_api.model.user.UserRole;
import com.example.card_api.repository.user.UserRepository;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public Optional<User> login(String loginId, String password) {
        return userRepository.findByLoginId(loginId)
                .filter(u -> u.getPassword().equals(password));
    }

    public String getTotalUserCount() {
        return userRepository.count() + " 명";
    }

    public Map<String, Long> getGenderStatistics() {
        long maleCount = userRepository.countByGender("M");
        long femaleCount = userRepository.countByGender("F");

        return Map.of(
            "male", maleCount,
            "female", femaleCount
        );
    }

    public Map<String, Long> getAgeStatistics() {
        // 현재 날짜 기준으로 나이를 계산해서 각 연령대별 카운트 추출
        return Map.of(
            "age20", userRepository.countByAgeRange(20, 29),
            "age30", userRepository.countByAgeRange(30, 39),
            "age40", userRepository.countByAgeRange(40, 49),
            "age50Plus", userRepository.countByAgeRange(50, 120) // 50대 이상
        );
    }

    public User signUp(User user) {
        User newUser = new User();
        newUser.setLoginId(user.getLoginId());
        newUser.setPassword(user.getPassword());
        newUser.setName(user.getName());
        newUser.setGender(user.getGender());
        newUser.setBirthDate(user.getBirthDate());

        return userRepository.save(newUser);
    }

    public Optional<User> login(User user) {
        return userRepository.findByLoginId(user.getLoginId());
    }
}
