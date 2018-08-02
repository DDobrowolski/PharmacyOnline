package com.damek.pharmacy.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.damek.pharmacy.repository.UserRepository;


	@Configurable
	@EnableWebSecurity
	  public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    	@Autowired
    	UserRepository userRepository;
    	
    	@Bean
    	public PasswordEncoder passwordEncoder() {
    	    return new BCryptPasswordEncoder();
    	}
  
    	
    	@Override
    	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    		auth.userDetailsService(new UserDetailsService() {
    			@Override
    			public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    				return userRepository.findByUsername(username);
    			}
    		}).passwordEncoder(passwordEncoder());
    	}
    	
    	@Override
        protected void configure(HttpSecurity http) throws Exception {
            // @formatter:off
            http
            .httpBasic()
            .and()
            .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/index.html", "/", "/login","/users").permitAll()
                    .antMatchers("/user", "/buy").authenticated()
            		.antMatchers("/admin/**").hasRole("ADMIN");
            // @formatter:on
        }
    }
	  


