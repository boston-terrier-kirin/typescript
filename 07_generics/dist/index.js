"use strict";
// ■■■■■例1)
function identity(item) {
    return item;
}
identity('aaa');
identity(123);
// ■■■■■例2)
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
getRandomElement(['a', 'b', 'c']);
getRandomElement([1, 2, 3]);
// type inferred
getRandomElement([1, 2, 3]);
// ■■■■■例3)
const getRandomElement2 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
// ■■■■■例4)
// 戻りはintercetion(T & U)になる。
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combo = merge({ name: 'kohei' }, { pets: ['kirin', 'kuroro'] });
console.log(combo);
// ■■■■■例5)
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function mergeHumanDog(human, dog) {
    return Object.assign(Object.assign({}, human), dog);
}
const petDog = mergeHumanDog({ name: 'kohei', age: 45, hobby: 'typescript' }, { name: 'kirin' });
// ■■■■■例6)
// Tのデフォルト型を決められる。
function makeEmptyArray() {
    return [];
}
const values = makeEmptyArray();
