# <div align="center">Markdown Plus Documenetion</div>

- [Custom elements](#custom-elements)
  - [center element support](#center-element-support)
  - [list](#list)
    - [dot list](#dot-list)
    - [number list](#number-list)
    - [empty checkbox list](#empty-checkbox-list)
    - [checked checkbox list](#checked-checkbox-list)
  - [csv table](#csv-table)
  - [output element](#output-element)
    - [output with command](#output-with-command)
    - [output without command](#output-without-command)
    - [output with custom lang](#output-with-custom-lang)
- [youtube embed (width 400)](#youtube-embed-width-400)
- [badges](#badges)
- [Example files](#example-files)

## Custom elements
### `<center>` element support
You can use the `<center>` tag to center your text. It's not a part of Markdown, but some renderers like Github
.mdb:
```html
<center> Some text </center>
```
md:
<center> Some text </center>

### list
list element `<l>content</l>`
#### dot list
.mdp:
```html
<l> 
John
  Doe
Jane
  Smith
Mike
  Johnson
    27
</l> 
```
.md:
- John
  - Doe
- Jane
  - Smith
- Mike
  - Johnson
    - 27
#### number list
.mdp:
```html
<l type="num"> 
John
Jane
Mike
</l> 
```
md:
1) John
2) Jane
3) Mike
#### empty checkbox list
.mdp:
```html
<l type="chbox"> 
John
Jane
Mike
</l> 
```
md:
- [ ] John
- [ ] Jane
- [ ] Mike
#### checked checkbox list
.mdp:
```html
<l type="chedbox"> 
John
Jane
Mike
</l> 
```
md:
- [X] John
- [X] Jane
- [X] Mike
### csv table
.mdp:
```html
<csv> 
Name,Surname,Age
John,Doe,25
Jane,Smith,30
Mike,Johnson,27
</csv> 
```
.md:
| Name | Surname | Age |
| --- | --- | --- |
| John | Doe | 25 |
| Jane | Smith | 30 |
| Mike | Johnson | 27 |
### output element
#### output with command
mdp:
```html
<o cmd="echo Hello"> 
Hello
</o> 
```
md:
```bash
gh@repo:/$ echo Hello
Hello
gh@repo:/$ █
```
#### output without command
mdp:
```html
<o> 
Deneme
</o> 
```
md:
```bash
gh@repo:/$ 
Deneme
gh@repo:/$ █
```
#### output with custom lang
mdp:
```html
<o cmd="echo Hello" lang="python"> 
Hello
</o> 
```
md:
```python
gh@repo:/$ echo Hello
Hello
gh@repo:/$ █
```
## youtube embed (width 400)
`$ytembed R2dqWt81lxo`

[<img src="https://img.youtube.com/vi/R2dqWt81lxo/maxresdefault.jpg" width="400" />](https://www.youtube.com/watch?v=R2dqWt81lxo)

## badges
### github badge (`for-the-badge` style)

`$github sanalzio  style=for-the-badge`

[<img src="https://img.shields.io/badge/Github-%2324292e.svg?&logo=github&style=for-the-badge" />](https://github.com/sanalzio)
### email badge (no custom options)

`$email sanalzio@duck.com`

[<img src="https://img.shields.io/badge/E--Mail-gray.svg?&logo=maildotru&logoColor=white" />](mailto:sanalzio@duck.com)
### website badge (`for-the-badge` style and custom color)

`$website sanalzio.github.io darkred style=for-the-badge`

[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-darkred.svg?&logo=globe&style=for-the-badge" />](https://sanalzio.github.io)

## buymeacoffee badge (no custom options)
`$buymeacoffee sanalzio`

[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/sanalzio)

## github status badges
### profile views badge (no custom options)

`$views sanalzio`

![profile views](https://komarev.com/ghpvc/?username=sanalzio&)
### github stats embed (with `show_icons=true` and `rank_icon=github` options)

`$stats sanalzio true rank_icon=github`

![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=sanalzio&show_icons=true&rank_icon=github)
### github top langs embed (with `layout=compact` option)

`$toplangs sanalzio compact`

![My top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=sanalzio&layout=compact)

## custom badge
`$badge Hello-World! darkred style=for-the-badge`

![custom badge](https://img.shields.io/badge/Hello-World!-darkred.svg?&style=for-the-badge)

## Example files
[**example .mdp file**](https://github.com/sanalzio/markdown-plus/blob/master/example.mdp)

[**converted example file**](https://github.com/sanalzio/markdown-plus/blob/master/example.md)