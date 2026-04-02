package com.example.card_api.controller.card;

import com.example.card_api.service.card.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CardApiController {
    private final CardService cardService;
}
