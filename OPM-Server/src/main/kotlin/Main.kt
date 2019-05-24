import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.content.default
import io.ktor.http.content.files
import io.ktor.http.content.resources
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import java.io.File


fun main1(args: Array<String>) {
    val server = embeddedServer(Netty, port = 8083) {
        routing {

            get("/") {
                //call.respondText("<h1>Hello World!</h1>", ContentType.Text.Plain)
                call.respondRedirect("http://localhost:8083/index.html", true);
            }
            get("/demo") {
                call.respondText("HELLO WORLD!")
            }
        }
    }
    server.start(wait = true)
}

fun main(args: Array<String>) {

    val server = embeddedServer(Netty, port = 8083) {
        routing {

            get("/") {
                //call.respondText("<h1>Hello World!</h1>", ContentType.Text.Plain)
                call.respondRedirect("index.html", true);
            }
            get("/demo") {
                call.respondText("HELLO WORLD!")
            }
        }
    }
    server.start(wait = true)
}

