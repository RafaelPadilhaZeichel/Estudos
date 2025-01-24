// Varável que representa a previsão do tempo
// pode ser "rainy" (Chuvoso), "sunny" (Ensolarado) ou "cloudy" (Nublado)

let weatherForecast = "cloudy";

// Analogia com a vida real: decidindo se devemos levar um guarda-chuva

if (weatherForecast === "rainy") {
    console.log("É melhor levar um guarda-chuva hoje!");
}   else if (weatherForecast === "cloudy"){ // senão se
    console.log("Leve um guarda-chuva, pois pode chover!");
} else {
    console.log("Não é necessário levar um guarda-chuva hoje!");
}