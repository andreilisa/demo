package com.example.cat;

import com.example.type.Type;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity(name = "cat")
public class Cat extends PanacheEntity {

    public String name;
    public String color;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonbTransient
    public Type type;

}
