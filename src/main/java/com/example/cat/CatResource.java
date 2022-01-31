package com.example.cat;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/rest")
public class CatResource {

    @GET
    public List<Cat> cats() {
        return Cat.listAll();
    }

    @GET
    @Path("/{id}")
    public Cat getById(@PathParam("id") Long id) {
        return Cat.findById(id);
    }

    @Transactional
    @POST
    public Cat newCat(Cat cat) {
        Cat cat1 = new Cat();
        cat1.name = cat.name;
        cat1.color = cat.color;
        Cat.persist(cat1);
        return cat1;
    }

    @Transactional
    @PUT
    @Path("/update/{id}")
    public Cat update(@PathParam("id") Long id, Cat cat) {
        Cat cat1 = Cat.findById(id);
        if (cat1 == null) {
            throw new NotFoundException();
        }
        cat1.name = cat.name;
        cat1.color = cat.color;
        return cat1;
    }

    @Transactional
    @DELETE
    @Path("/delete/{id}")
    public void delete(@PathParam("id") Long id) {
        Cat cat = Cat.findById(id);
        if (cat == null) {
            throw new NotFoundException();
        }
        cat.delete();
    }

    @GET
    @Path("/find/{name}")
    public List<PanacheEntityBase> search(@PathParam("name") String name) {
        return Cat.findByName(name);
    }
}