# @jacepkg/korean

한글과 관련된 모듈 모음

> github: https://github.com/jacealan/jacepkg-ts  
> npm: https://www.npmjs.com/package/@jacepkg/korean

- syllable(): 한글 음절 생성기
  > syllable() is the module that make any korean syllable.
- countLetter(): 글자수 세기
  > countLetter() is the module that count letter of strings
- countByte(): 바이트(Byte)크기 세기
  > countByte() is the module that count byte of strings
- countWord(): 단어수(띄어쓰기 기준) 세기
  > countWord() is the module that count word of strings by space
- clearSpace(): 문자열 정리: 탭(tab) -> 빈칸, 연속된 빈칸 -> 빈칸1개
  > clearSpace() is the module that make tab, double space to ONE space

# Installation

```shell
npm install @jacepkg/korean
```

# Usage

## Importing

```ts
import {
  syllable,
  countLetter,
  countByte,
  countWord,
  clearSpace,
} from "@jacepkg/korean"

syllable()
```

```ts
import korean from "@jacepkg/korean"

korean.syllable()
```

## syllable(length: number = 1, withspace: boolean = false): number

- length, withspace가 없으면 한 음절 생성
- withspace가 없거나 false면 공백 없이 원하는 길이의 음절 생성

```ts
syllable() // 촒
syllable(10) // 줩뇅쳱펻뻘껨즰쌍쉁뺼죓
syllable(10, true // 둎찍굍 뺍푡롁 쯚럔
```

## countLetter(text: string, withspace: boolean = true): number

```ts
countLetter("둎찍굍 뺍푡롁 쯚럔") // 10
countLetter("둎찍굍 뺍푡롁 쯚럔", false) // 8
```

## countByte(text: string, withspace: boolean = true): number

```ts
countByte("둎찍굍 뺍푡롁 쯚럔") // 26
countByte("둎찍굍 뺍푡롁 쯚럔", false) // 24
```

## countWord(text: string): number

```ts
countWord("둎찍굍 뺍푡롁 쯚럔") // 3
countWord("둎찍굍 뺍푡롁   쯚럔") // 3
```

## clearSpace(text: string, allowEmptyLine: number = 0): string

```ts
clearSpace("가나다    라마 바         사아") // 가나다 라마 바 사아
clearSpace("가나다  라마 바 사아\n하하하하\n\n\n\n대한민국 최고")
// 가나다 라마 바 사아
// 하하하하
// 대한민국 최고
clearSpace("가나다  라마 바 사아\n하하하하\n\n\n\n대한민국 최고", 1)
// 가나다 라마 바 사아
// 하하하하
//
// 대한민국 최고
clearSpace("가나다  라마 바 사아\n하하하하\n\n\n\n대한민국 최고", 2)
// 가나다 라마 바 사아
// 하하하하
//
//
// 대한민국 최고
```

## references

- https://github.com/pengooseDev/goose
- https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_%EC%9D%8C%EC%A0%88
- https://jsikim1.tistory.com/161
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
