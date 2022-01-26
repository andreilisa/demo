package com.example.type;


import com.example.cat.Cat;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

@Path("/type")
public class TypeResource {

    @GET
    public List<Type> type() {
        return Type.listAll();
    }

    @GET
    @Path("/{id}")
    public Type getById(@PathParam("id") Long id) {
        return Type.findById(id);
    }

    @Transactional
    @POST
    public Response createType(@RequestBody Type type) {
        type.persist();
        return Response.ok(type).status(201).build();
    }

    @Transactional
    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        Type type = Type.findById(id);
        if (type == null) {
            throw new NotFoundException();
        }
        type.delete();
    }

    @Transactional
    @PUT
    @Path("/{id}")
    public Type update(@PathParam("id") Long id, Type type) {
        Type type1 = Type.findById(id);
        if (type == null) {
            throw new NotFoundException();
        }
        type1.typeName = type.typeName;
        type1.description = type.description;
        return type1;
    }
}
