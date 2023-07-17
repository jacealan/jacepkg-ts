"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syllable = void 0;
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
 * @param {bollean=} withspace - 빈칸 유무(default: false)
 */
function syllable(length, withspace) {
    if (length === void 0) { length = 1; }
    if (withspace === void 0) { withspace = false; }
    var min = 44032; // 가
    var max = 55203; // 힣
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
var korean = { syllable: syllable };
exports.default = korean;
