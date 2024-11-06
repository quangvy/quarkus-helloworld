package com.example

import jakarta.validation.constraints.NotNull
import org.eclipse.microprofile.openapi.annotations.media.Schema

class CreateExecutionRequest {


    data class CreateExecutionRequest(
        @field:Schema(nullable = false)
        val name: String,

        @NotNull
        val environments: List<String>,

        @NotNull
        val testSuiteIds: List<Long>,
    )

}