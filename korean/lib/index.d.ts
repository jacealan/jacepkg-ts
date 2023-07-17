/**
 * 한글 음절 생성하기
 * @param {number=} length - 음절 수(default: 1)
 * @param {bollean=} withspace - 빈칸 유무(default: false)
 */
export declare function syllable(length?: number, withspace?: boolean): string;
declare const korean: {
    syllable: typeof syllable;
};
export default korean;
