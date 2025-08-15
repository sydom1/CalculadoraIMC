# Usar a imagem oficial do .NET 7 SDK para build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copiar csproj e restaurar dependências
COPY *.sln ./
COPY CalculadoraImcApi/*.csproj ./CalculadoraImcApi/
RUN dotnet restore

# Copiar todo o projeto e publicar
COPY CalculadoraImcApi/. ./CalculadoraImcApi/
RUN dotnet publish ./CalculadoraImcApi/CalculadoraImcApi.csproj -c Release -o /app/publish

# Imagem final runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish ./

# Expor a porta padrão do .NET
EXPOSE 80
EXPOSE 443

# Comando para iniciar a aplicação
ENTRYPOINT ["dotnet", "CalculadoraImcApi.dll"]
