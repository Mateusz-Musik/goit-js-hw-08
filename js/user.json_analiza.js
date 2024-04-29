// 1. Analiza pliku JSON:
// {
//     "name": "Josh",
//     "weight": 175,
//     "age": 30,
//     "eyecolor": "brown"
//     "isHappy": true
//     "cars": ["Chevy", "Honda"],
//     "favoriteBook": {
//         "title": "The Last Kingdom",
//         "author": "Bernard Cornwell",
//         "rating": 8.38
//      }
//     }
    
// 1.	Klucz: "name", Wartość: "Josh"		//String (ciąg znaków)
// 2.	Klucz: "weight", Wartość: 175		//Number (liczba)
// 3.	Klucz: "age", Wartość: 30			//Number (liczba)
// 4.	Klucz: "eyecolor", Wartość: "brown"	//String (ciąg znaków)
// 5.	Klucz: "isHappy", Wartość: true		//Boolean (wartość logiczna)
// 6.	Klucz: "cars", Wartość: ["Chevy", "Honda"]	//Array (tablica), zawierająca ciągi znaków
// 7.	Klucz: "favoriteBook", Wartość: { "title": "The Last Kingdom", "author": "Bernard Cornwell", "rating": 8.38 }	//Object (obiekt), zawierający klucze: "title" (String), "author" (String), "rating" (Number).


/*Struktura JSON (JavaScript Object Notation) to tekstowy format wymiany danych. Składa się z par klucz: wartość, gdzie klucze są ciągami znaków (string), a wartości mogą być ciągami znaków, liczbami, logicznymi wartościami, tablicami lub obiektami JSON. W powyższym pliku "user.json" obiekt user zawiera informacje o użytkowniku, takie jak jego imię, wagę, wiek, kolor oczu, czy jest szczęśliwy, jakie ma samochody, a także ulubioną książkę zapisaną jako "wewnętrzny" obiekt JSON, zawierający klucze: tytuł, autor i ocena.*/