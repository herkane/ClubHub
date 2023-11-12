package com.example.clubhubfinal.security;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Un filtre qui a la charge de récupérer le JWT dans les en-tetes, et de le
 * vérifier si il existe afin de construire le contexte de sécurité Spring
 * Security.
 */
@Component
public class JwtFilter extends OncePerRequestFilter {

    private JwtProvider jwtTokenProvider;

    public JwtFilter(JwtProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
        System.out.println("Init JWT filter");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {
        String token = jwtTokenProvider.resolveToken(httpServletRequest);
        try {
            if (token != null && jwtTokenProvider.validateToken(token)) {
                Authentication auth = jwtTokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        } catch (RuntimeException ex) {
            // Cette ligne est très importante pour garantir que
            // le contexte de sécurité est bien supprimé.
            SecurityContextHolder.clearContext();
            httpServletResponse.sendError( HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage() );
            return;
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

}
