let birthYear = prompt('Введіть рік свого народження');
let currentYear = 2022;
let city = prompt('Введіть місто, в якому проживаєте');
let favSport = prompt('Введіть улюблений вид спорту');

switch(birthYear) {
    case null:
        alert("Шкода, ви не вказали рік народження");
        break;
    default:
        alert(`Тобі ${currentYear - birthYear} років`);
}


    if (birthYear === null || city === null && favSport === null) {

        alert("шкода, не ответили");
}
else if (city === "Вашингтон" && favSport === "футбол") {
    alert(`Тобі ${currentYear - birthYear} років` + "\n" + "Ти живеш у столиці США" + "\n" + "Круто! Хочеш стати Ліонель Мессі?");
}
else if (city === "Лондон") {
    alert(`Тобі ${currentYear - birthYear} років` + "\n" + "Ти живеш у столиці Великобританії");
}
else if (city === "Київ") {
    alert(`Тобі ${currentYear - birthYear} років` + "\n" 
    + "Ти живеш у столиці України");
}
else if (city !== "Київ", "Лондон", "Вашингтон") {
    alert(`Тобі ${currentYear - birthYear} років` + "\n" + "Ти живеш у місті " + city);
}
else {
    alert("Шкода, ти не вказав...");
}



















