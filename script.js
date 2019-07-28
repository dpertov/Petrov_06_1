
var lenString = prompt ('Введите строку для поиска символа','Введите строку');
var symbol = prompt ('Введите символ','о');

 function charIndexOf (allString,foundIndex) {
 	allString = allString || 'Введите строку';
 	foundIndex = foundIndex || 'о';
 	for (var i = 0; i < allString.length; i++) {
 		if (allString[i] === foundIndex) {
 			return i;
 		}
 	}
 		return -1;
 }

alert (charIndexOf (lenString, symbol) === -1 ? 'Такого символа в строке нет!' : charIndexOf (lenString, symbol) );
