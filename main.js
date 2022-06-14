function funkcja(liczba1, liczba2) {
    if (liczba1 === 20 ) {
        return true;
    }

    else if (liczba2 === 20){
        return true;
    }

    else if ((liczba1 + liczba2) <= 20) {
        return true;
    }
    else {
        return false;
    }
}

console.log(funkcja(2, 12));
