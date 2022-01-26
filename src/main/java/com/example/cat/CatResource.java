package com.example.cat;

import com.example.type.Type;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.jboss.logging.annotations.Param;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/cat")
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
        cat1.type = cat.type;
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
}