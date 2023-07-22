/**
 * 한글 음절 생성하기
 * @param {number=} length - 음절 수(default: 1)
 * @param {boolean} [withspace=false] - 빈칸 유무(default: false)
 * @returns {string} 한글 문자열
 */
export declare function syllable(length?: number, withspace?: boolean): string;
/**
 * 글자수 세기
 * @param {string} text - 문자열
 * @param {boolean} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 글자수
 */
export declare function countLetter(text: string, withspace?: boolean): number;
/**
 * 문자열 바이트(byte)수 세기
 * @param {string} text - 문자열
 * @param {boolean=} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 바이트(byte)수
 */
export declare function countByte(text: string, withspace?: boolean): number;
/**
 * 단어수(띄어쓰기 기준) 세기
 * @param {string} text - 문자열
 * @returns {number} 단어수
 */
export declare function countWord(text: string): number;
/**
 * 문자열 정리: 탭(tab) -> 빈칸, 연속된 빈칸 -> 빈칸1개
 * @param {string} text - 문자열
 * @param {number} [allowEmptyLine = 0] - 가능한 빈 줄 수
 * @returns {string} 정리된 문자열
 */
export declare function clearSpace(text: string, allowEmptyLine?: number): string;
declare const korean: {
    syllable: typeof syllable;
    countLetter: typeof countLetter;
    countByte: typeof countByte;
    countWord: typeof countWord;
    clearSpace: typeof clearSpace;
};
export default korean;
