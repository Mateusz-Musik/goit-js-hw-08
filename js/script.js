//2. Analiza metody JSON.parse():
const json = '{"name": "Mango","age": 3,"isHappy": true}';  // przypisanie do zmiennej "json" ciągu znaków (JSON)
const objectJS = JSON.parse(json);  // przypisanie do zmiennej "objectJS" wyniku metody, która parsuje (zamienia) JSON'a na obiekt
console.log(objectJS);  // wyświetlenie w konsoli efektu parsowania


//3. Obsługa błędów:
const wrongJSONstring = '{{"name": "Mango","age": 3,"isHappy": true}}'; //przypisanie do zmiennej "wrongJSONstring" nieprawidłowego ciąg znaków (JSON)

// try wyświetla wynik, gdy kod nie zawiera błędów 
try {
    const objectJS = JSON.parse(wrongJSONstring);   // przypisanie do zmiennej "objectJS" wyniku metody, która parsuje (zamienia) JSON'a na obiekt
    console.log(objectJS);  // wyświetlenie w konsoli efektu parsowania - ta linia kodu nie zostanie wykonana, ponieważ nasz JSON jest nieprawidłowy

// catch wyświetla informacje o błędzie (error), gdy podczas wykonywania kodu napotka na błąd (runtime error)
} catch (error) {
    console.error("name:", error.name); //po wystąpieni błędu w kodzie, konsola wyswietla jego nazwę
    console.error("message:", error.message);   //po wystąpieni błędu w kodzie, konsola wyswietla informację z opisem danego błędu
}

console.log("Mimo błędów, kod uruchamia się do końca.");    //kod wyświetla tego loga mi wystąpienia błedów.

/*Konstrukcja try...catch wyłapuje tylko błędy, które wystąpiły podczas wykonywania kodu (runtime errors). Tzn., że kod musi być poprawny składniowo, w przeciwnym razie faza wykonania po prostu nie rozpocznie się. Mimo występienia błędów (runtime errors) działanie kodu nie zostaje przerwane. Kod wykonuje się do końca. */