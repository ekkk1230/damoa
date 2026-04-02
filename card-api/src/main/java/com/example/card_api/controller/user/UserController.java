package com.example.card_api.controller.user;

import com.example.card_api.model.user.User;
import com.example.card_api.service.card.CardService;
import com.example.card_api.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/damoa/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
            User savedUser = userService.signUp(user);

            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("회원가입 실패: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userService.login(user.getLoginId(), user.getPassword()) // 💡 기존 아이디/비번 체크 로직 사용
                .map(u -> ResponseEntity.ok(u)) // 성공 시 200 OK + 유저 정보
                .orElse(ResponseEntity.status(401).body(null));
    }


}
