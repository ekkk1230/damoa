package com.example.card_api.controller.user;

import com.example.card_api.model.user.UserRole;
import com.example.card_api.service.card.CardService;
import com.example.card_api.service.user.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;
    private final CardService cardService;

    @GetMapping("/login")
    public String loginPage() {
        return "pages/login/login";
    }

    @PostMapping("/login")
    public String loginProcess(@RequestParam String loginId, @RequestParam String password, HttpSession session) {
        return userService.login(loginId, password)
                .filter(u -> u.getRole() == UserRole.ADMIN)
                .map(u -> {
                    session.setAttribute("loginUser", u);
                    return "redirect:/admin/dashboard";
                })
                .orElse("redirect:/admin/login?error");
    }

    @GetMapping("/dashboard")
    public String dashboardPage(Model model) {
        model.addAttribute("recentCards", cardService.getRecentCardsForDashboard());

        model.addAttribute("totalUserCount", userService.getTotalUserCount());

        model.addAttribute("genderStats", userService.getGenderStatistics());
        model.addAttribute("ageStats", userService.getAgeStatistics());

        model.addAttribute("popularCards", cardService.getPopularCards());

        return "pages/dashboard/index";
    }
}
