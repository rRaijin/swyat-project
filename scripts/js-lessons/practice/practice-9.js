// Задача 1. Написати функцію, яка приймає будь-який тип даних, якщо це число і 
// воно більше 5 - повертає результат, інакше -- викидує помилку
function homework1(x) {
    const Err = new Error('це не число');
    if (typeof x === 'number') {
        if (x > 5) {
            return x;
        }
    } else {
        console.log(Err)
    }
}
homework1(6);
