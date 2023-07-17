/** min~max(포함) 사이의 랜덤 수 만들기 */
function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //최댓값도 포함, 최솟값도 포함
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
export function syllable(
  length: number = 1,
  withspace: boolean = false
): string {
  const min: number = 44032 // 가
  const max: number = 55203 // 힣
  let koreanSyllables: string = ""

  for (let i = 0; i < length; i++) {
    if (
      withspace &&
      i > 1 &&
      i < length - 2 &&
      koreanSyllables[koreanSyllables.length - 1] !== " "
    ) {
      if (Math.random() < 0.3) {
        koreanSyllables += " "
        continue
      }
    }
    koreanSyllables += String.fromCharCode(getRandomIntInclusive(min, max))
  }

  return koreanSyllables
}

const korean = { syllable }
export default korean
