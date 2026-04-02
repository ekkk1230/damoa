package com.example.card_api.controller.card;

import com.example.card_api.dto.UserCardRequest;
import com.example.card_api.model.user.UserCard;
import com.example.card_api.service.user.UserCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/damoa/my-cards")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserCardController {
    private final UserCardService userCardService;

    // addCard (POST)
    @PostMapping("/register")
    public ResponseEntity<UserCard> register(@RequestBody UserCard userCard) {
        UserCard saved = userCardService.registerCard(userCard);
        return ResponseEntity.ok(saved);
    }

    // fetchCards (GET)
    @GetMapping("/list/{userId}")
    public ResponseEntity<List<UserCard>> getMyCards(@PathVariable Long userId) {
        List<UserCard> cards = userCardService.getMyCards(userId);
        return ResponseEntity.ok(cards);
    }

    @PostMapping("/add")
    public ResponseEntity<UserCard> addCard(@RequestBody UserCardRequest request) {
        UserCard savedCard = userCardService.addCardToUser(request);
        return ResponseEntity.ok(savedCard);
    }
}
