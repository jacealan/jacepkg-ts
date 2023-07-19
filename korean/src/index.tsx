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
 * @param {boolean} [withspace=false] - 빈칸 유무(default: false)
 * @returns {string} 한글 문자열
 */
export function syllable(
  length: number = 1,
  withspace: boolean = false
): string {
  const min: number = 44032 // 가 AC00
  const max: number = 55203 // 힣 D7AF
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

/**
 * 문자열 글자수 세기
 * @param {string} text - 문자열
 * @param {boolean} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 글자수
 */
export function countLetter(text: string, withspace: boolean = true): number {
  if (withspace) {
    return text.length
  } else {
    return text.replace(/ /gim, "").length
  }
}

/**
 * 문자열 바이트(byte)수 세기
 * @param {string} text - 문자열
 * @param {boolean=} [withspace=true] - 빈칸 포함 여부(default: true)
 * @returns {number} 바이트(byte)수
 */
export function countByte(text: string, withspace: boolean = true): number {
  let t: string = text

  if (!withspace) {
    t = text.replace(/ /gim, "")
  }

  if (t != undefined && t != "") {
    let b, i: number
    let c: number
    for (b = i = 0; (c = t.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b
  } else {
    return 0
  }
}

/**
 * 단어수(띄어쓰기 기준) 세기
 * @param {string} text - 문자열
 * @returns {number} 단어수
 */
export function countWord(text: string): number {
  let words: string[] = text.replace("\t", " ").split(" ")

  let count: number = 0
  for (const word of words) {
    if (word.length > 0) count++
  }

  return count
}

/**
 * 문자열 정리: 탭(tab) -> 빈칸, 연속된 빈칸 -> 빈칸1개
 * @param {string} text - 문자열
 * @param {number} [allowEmptyLine = 0] - 가능한 빈 줄 수
 * @returns {string} 정리된 문자열
 */
export function clearSpace(text: string, allowEmptyLine: number = 0) {
  const words: string[] = text.replace("\t", " ").split(" ")

  let newWords: string[] = []
  for (const word of words) {
    if (word.length > 0) newWords.push(word)
  }

  const lines: string[] = newWords.join(" ").split("\n")

  let newLines: string[] = []
  let emptyLine: number = 0
  for (const line of lines) {
    if (line.length > 0) {
      newLines.push(line)
      emptyLine = 0
    } else {
      if (++emptyLine <= allowEmptyLine) newLines.push(line)
    }
  }

  return newLines.join("\n")
}

// const text = "I love 🚀🚀🚀 so much   😍 가나다락     \n\n\n\n\nasdf\nzxcv dfg"

const korean = { syllable, countLetter, countByte, countWord, clearSpace }
export default korean
