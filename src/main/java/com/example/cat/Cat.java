package com.example.cat;

import com.example.type.Type;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.util.List;

@Entity(name = "cat")
public class Cat extends PanacheEntity {

    public String name;
    public String color;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonbTransient
    public Type type;

    public static List<PanacheEntityBase> findByName(String name){
        return find("name", name).list();
    }
}
