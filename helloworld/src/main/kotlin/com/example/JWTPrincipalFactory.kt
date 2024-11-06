package com.example


import io.smallrye.jwt.auth.principal.*
import jakarta.annotation.Priority
import jakarta.enterprise.context.ApplicationScoped
import jakarta.enterprise.inject.Alternative
import org.jose4j.jwt.JwtClaims
import org.jose4j.jwt.consumer.InvalidJwtException
import java.nio.charset.StandardCharsets
import java.util.*

@ApplicationScoped
@Alternative
@Priority(1)
class JWTPrincipalFactory : JWTCallerPrincipalFactory() {
    override fun parse(token: String, contextInfo: JWTAuthContextInfo): JWTCallerPrincipal {
        try {
            // https://github.com/smallrye/smallrye-jwt/blob/bf989e1/doc/modules/ROOT/pages/configuration.adoc#custom-factories
            // Token has already been verified, parse the token claims only
            val json = String(Base64.getUrlDecoder().decode(token.split(".")[1]), StandardCharsets.UTF_8)
            return DefaultJWTCallerPrincipal(JwtClaims.parse(json))
        } catch (ex: Exception) {
            throw Exception("Failed to parse JWT claims")
        }
    }
}