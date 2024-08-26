package com.jphanos.book_network.config;

import com.jphanos.book_network.user.User;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

// The ID of the user is integer that's why we're putting it as a type to the AuditAware
public class ApplicationAuditAware implements AuditorAware<Integer> {
    @Override
    public Optional<Integer> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // authentication == null --> if the user is not authenticated
        // isAuthenticated --> checks if the user is authenticated or not
        // AnonymousAuthenticationToken --> if we don't know the user yet
        if (authentication == null ||
                !authentication.isAuthenticated() ||
                authentication instanceof AnonymousAuthenticationToken) {
            return Optional.empty();
        }
        // Otherwise if the user is authenticated just get the user
        User userPrincipal = (User) authentication.getPrincipal();
        return Optional.ofNullable(userPrincipal.getId());
    }
}
