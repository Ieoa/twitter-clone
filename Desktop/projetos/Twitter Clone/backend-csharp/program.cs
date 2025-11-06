using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapPost("/api/login", async (HttpContext ctx) =>
{
    var req = await ctx.Request.ReadFromJsonAsync<LoginReq>();
    if (req?.Username == "admin" && req?.Password == "1234")
    {
        return Results.Json(new { token = "dummy-token-admin" });
    }
    return Results.Json(new { message = "Usuário ou senha inválidos" }, statusCode: 401);
});

app.MapGet("/api/tweets", () =>
{
    var tweets = new[]
    {
        new { id=1, user="alice", time="1h", content="Quero voltar ao Twitter antigo 😅" },
        new { id=2, user="bob", time="2h", content="Aprendendo React + Node hoje!" },
        new { id=3, user="carol", time="3h", content="Modo escuro sempre <3" },
        new { id=4, user="dave", time="Ontem", content="Projeto simples e rápido — vamo codar!" }
    };
    return Results.Json(tweets);
});

app.Run("http://localhost:4000");

public record LoginReq(string Username, string Password);

