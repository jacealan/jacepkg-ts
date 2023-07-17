# @jacepkg/korean

> github: https://github.com/jacealan/jacepkg-ts  
> npm: https://www.npmjs.com/package/@jacepkg/korean

- syllable(): 한글 음절 생성기
  > Korean-Syllable is the module that make any korean syllable.

# Installation

```shell
npm install @jacepkg/korean
```

# Usage

## Importing

```js
import { syllable } from "@jacepkg/korean"
```

## Making any korean syllable(s)

### 1 syllable

```ts
const ex: string = syllable()
console.log(ex) // 촒
```

### more syllables

```ts
const length: number = 10
const ex: string = syllable(length)
console.log(ex) // 줩뇅쳱펻뻘껨즰쌍쉁뺼죓
```

`length` is the length of syllables

### with space

```ts
const length: number = 10
const withspace: boolean = true
const ex: string = syllable(length, withspace)
console.log(ex) // 둎찍굍 뺍푡롁 쯚럔
```

### parameters

- length, withspace가 없으면 한 음절 생성
- withspace가 없거나 false면 공백 없이 원하는 길이의 음절 생성

### at node console

```sh
$ node
Welcome to Node.js v16.13.1.
Type ".help" for more information.
> const { syllable } = require("@jacepkg/korean")
undefined
> syllable()
'휒'
> syllable(30)
'잂쬦룁캩탧릝쾹뭧퍱툾뛺땃뙾묧밟궯턉짋깖눅튰뇎깦쳟퐢옭헠힜솾뱬'
> syllable(30, true)
'녂퀘궠뮇 톫륂쥢뉓뎋맘 쁗푋혌잞 셇뛅듵놸 튚쯯 횓왒캔롛깴'
>
```

## references

- https://github.com/pengooseDev/goose
- https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B8%80_%EC%9D%8C%EC%A0%88
- https://jsikim1.tistory.com/161
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
