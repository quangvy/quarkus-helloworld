package com.example

import org.jboss.resteasy.reactive.RestResponse
import java.net.URI

object Response {

    @JvmStatic
    fun <T> buildResponse(status: RestResponse.Status, entity: T): RestResponse<T>
            = RestResponse.ResponseBuilder.create(status, entity).build()

    @JvmStatic
    fun <T> created(entity: T): RestResponse<T> = buildResponse(RestResponse.Status.CREATED, entity)

    @JvmStatic
    fun created(): RestResponse<Unit> = RestResponse.created(URI.create(""))

    @JvmStatic
    fun <T> ok(entity: T): RestResponse<T> = buildResponse(RestResponse.Status.OK, entity)

    @JvmStatic
    fun ok(): RestResponse<Unit> = RestResponse.ok()
}