package com.example.clubhubfinal.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String content;
    private String status;
    private String author;
    private int participantsLimit;
    @Value("0")
    private int participantsNumber;

    @Lob
    @Nullable
    private String image;
    @Nullable
    private String departure_date;
    @Nullable
    private String arrival_date;
    @Nullable
    @ManyToMany(cascade = CascadeType.REMOVE)
    private List<XUser> members = new ArrayList<>();
}
