# Используем официальный образ SDK для сборки
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем csproj и восстанавливаем зависимости
COPY ["backend.csproj", "./"]
RUN dotnet restore "backend.csproj"

# Копируем все остальные файлы проекта
COPY . .

# Публикуем приложение в папку /app/publish с конфигурацией Release
RUN dotnet publish "backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Используем легковесный runtime образ для запуска приложения
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Копируем опубликованные файлы из build-этапа
COPY --from=build /app/publish .

# Открываем порт 80 (стандартный для ASP.NET Core)
EXPOSE 80

# Запускаем приложение
ENTRYPOINT ["dotnet", "backend.dll"]
