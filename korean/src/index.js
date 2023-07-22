"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSpace = exports.countWord = exports.countByte = exports.countLetter = exports.syllable = void 0;
/** min~max(포함) 사이의 랜덤 수 만들기 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}
// function getRandomHangulSyllable(): string {
//   const min: number = 44032
//   const max: number = 55203
//   const unicodeHangulSyllable: string = getRandomIntInclusive(
//     min,
//     max
//   ).toString(16)
//   return unicodeHangulSyllable
// }
/**
 * 한글 음절 생성하기
 * @param {number=} length - 음절 수(default: 1)
 * @param {boolean} [withspace=false] - 빈칸 유무(default: false)
 * @returns {string} 한글 문자열
 */
function syllable(length, withspace) {
    if (length === void 0) { length = 1; }
    if (withspace === void 0) { withspace = false; }
    var min = 44032; // 가 AC00
    var max = 55203; // 힣 D7AF
    var koreanSyllables = "";
    for (var i = 0; i < length; i++) {
        if (withspace &&
            i > 1 &&
            i < length - 2 &&
            koreanSyllables[koreanSyllables.length - 1] !== " ") {
            if (Math.random() < 0.3) {
                koreanSyllables += " ";
                continue;
            }
        }
        koreanSyllables += String.fromCharCode(getRandomIntInclusive(min, max));
    }
    return koreanSyllables;
}
exports.syllable = syllable;
/**
 * 문자열 글자수 세기
 * @param {string} text - 문자열
 * @param {boolean} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 글자수
 */
function countLetter(text, withspace) {
    if (withspace === void 0) { withspace = true; }
    if (withspace) {
        return text.length;
    }
    else {
        return text.replace(/ /gim, "").length;
    }
}
exports.countLetter = countLetter;
/**
 * 문자열 바이트(byte)수 세기
 * @param {string} text - 문자열
 * @param {boolean=} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 바이트(byte)수
 */
function countByte(text, withspace) {
    if (withspace === void 0) { withspace = true; }
    var t = text;
    if (!withspace) {
        t = text.replace(/ /gim, "");
    }
    if (t != undefined && t != "") {
        var b = void 0, i = void 0;
        var c = void 0;
        for (b = i = 0; (c = t.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1)
            ;
        return b;
    }
    else {
        return 0;
    }
}
exports.countByte = countByte;
/**
 * 단어수(띄어쓰기 기준) 세기
 * @param {string} text - 문자열
 * @returns {number} 단어수
 */
function countWord(text) {
    var words = text.replace("\t", " ").split(" ");
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > 0)
            count++;
    }
    return count;
}
exports.countWord = countWord;
/**
 * 문자열 정리: 탭(tab) -> 빈칸, 연속된 빈칸 -> 빈칸1개
 * @param {string} text - 문자열
 * @returns {string} 정리된 문자열
 */
function clearSpace(text, allowEmptyLine) {
    if (allowEmptyLine === void 0) { allowEmptyLine = 0; }
    var words = text.replace("\t", " ").split(" ");
    var newWords = [];
    for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
        var word = words_2[_i];
        if (word.length > 0)
            newWords.push(word);
    }
    var lines = newWords.join(" ").split("\n");
    var newLines = [];
    var emptyLine = 0;
    for (var _a = 0, lines_1 = lines; _a < lines_1.length; _a++) {
        var line = lines_1[_a];
        if (line.length > 0) {
            newLines.push(line);
            emptyLine = 0;
        }
        else {
            if (++emptyLine <= allowEmptyLine)
                newLines.push(line);
        }
    }
    return newLines.join("\n");
}
exports.clearSpace = clearSpace;
var text = "I love 🚀🚀🚀 so much   😍 가나다락     \n\n\n\n\nasdf\nzxcv dfg";
// const text = "가"
console.log(countLetter(text));
console.log(countLetter(text, false));
console.log(countByte(text));
console.log(countByte(text, false));
console.log(countWord(text));
console.log(clearSpace(text));
console.log(clearSpace(text, 1));
console.log(clearSpace(text, 2));
var korean = { syllable: syllable, countLetter: countLetter, countByte: countByte, countWord: countWord, clearSpace: clearSpace };
exports.default = korean;
