package com.example.type;

import com.example.cat.Cat;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "type")
public class Type extends PanacheEntity {
    public String typeName;
    public String description;
    @OneToMany(cascade= CascadeType.ALL)
    @JoinColumn(name = "type_id")
    public List<Cat> cat = new ArrayList<>();

}
