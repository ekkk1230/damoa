package com.example.card_api.controller.spending;

import com.example.card_api.dto.SpendingRequest;
import com.example.card_api.dto.SpendingResponse;
import com.example.card_api.model.spending.Spending;
import com.example.card_api.service.spending.SpendingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/spending")
@RequiredArgsConstructor()
@CrossOrigin(origins = "http://localhost:5173")
public class SpendingController {
    private final SpendingService spendingService;

    @GetMapping("/{userId}")
    public List<SpendingResponse> getSpendingHistory(@PathVariable Long userId) {
        return spendingService.getSpendingHistory(userId);
    }

    @PostMapping("/add")
    public ResponseEntity<SpendingResponse> saveSpending(@RequestBody SpendingRequest request) {
        SpendingResponse saved = spendingService.saveSpending(request);
        return ResponseEntity.ok(saved);
    }
}
