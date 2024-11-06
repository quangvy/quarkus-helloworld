package com.example

import jakarta.validation.Valid
import jakarta.ws.rs.GET
import jakarta.ws.rs.POST
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType
import org.eclipse.microprofile.openapi.annotations.Operation
import org.jboss.resteasy.reactive.RestResponse


@Path("/hello")
class ExampleResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    fun hello() = "Hello from Quarkus REST"

    @POST
    @Operation(summary = "Create a new execution")
    fun createExecution(
        @Valid body: CreateExecutionRequest,
    ): RestResponse<Unit> {
        //val execution = executionService.createExecution(body)
        return RestResponse.ok()
    }

    @POST
    @Operation(summary = "Create a new execution")
    @Path("/res")
    fun createExecutionRes(
        @Valid body: CreateExecutionRequest,
    ): RestResponse<Unit> {
        //val execution = executionService.createExecution(body)
        return Response.ok()
    }
}