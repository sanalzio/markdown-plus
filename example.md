# <div align="center">Center heading</div>

- [Center heading](#center-heading)
  - [navigation](#navigation)
    - [Include the first one.](#include-the-first-one)
    - [Do not include the first one.](#do-not-include-the-first-one)
    - [min heading](#min-heading)
  - [output with command](#output-with-command)
  - [output without command](#output-without-command)
  - [output with custom language](#output-with-custom-language)
  - [csv table](#csv-table)
  - [dot list](#dot-list)
  - [number list](#number-list)
  - [empty checkbox list](#empty-checkbox-list)
  - [checked checkbox list](#checked-checkbox-list)
  - [youtube embed (width 400)](#youtube-embed-width-400)
  - [connect badges](#connect-badges)
    - [github badge (`for-the-badge` style)](#github-badge-for-the-badge-style)
    - [email badge (no custom options)](#email-badge-no-custom-options)
    - [website badge (`for-the-badge` style and custom color)](#website-badge-for-the-badge-style-and-custom-color)
  - [buymeacoffee badge (no custom options)](#buymeacoffee-badge-no-custom-options)
  - [github status badges](#github-status-badges)
    - [profile views badge (no custom options)](#profile-views-badge-no-custom-options)
    - [github stats embed (with `show_icons=true` and `rank_icon=github` options)](#github-stats-embed-with-show_iconstrue-and-rank_icongithub-options)
    - [github top langs embed (with `layout=compact` option)](#github-top-langs-embed-with-layoutcompact-option)
  - [custom badge](#custom-badge)

## navigation
### Include the first one.
mdp:
`$nav`

md:
- [Center heading](#center-heading)
  - [navigation](#navigation)
    - [Include the first one.](#include-the-first-one)
    - [Do not include the first one.](#do-not-include-the-first-one)
    - [min heading](#min-heading)
  - [output with command](#output-with-command)
  - [output without command](#output-without-command)
  - [output with custom language](#output-with-custom-language)
  - [csv table](#csv-table)
  - [dot list](#dot-list)
  - [number list](#number-list)
  - [empty checkbox list](#empty-checkbox-list)
  - [checked checkbox list](#checked-checkbox-list)
  - [youtube embed (width 400)](#youtube-embed-width-400)
  - [connect badges](#connect-badges)
    - [github badge (`for-the-badge` style)](#github-badge-for-the-badge-style)
    - [email badge (no custom options)](#email-badge-no-custom-options)
    - [website badge (`for-the-badge` style and custom color)](#website-badge-for-the-badge-style-and-custom-color)
  - [buymeacoffee badge (no custom options)](#buymeacoffee-badge-no-custom-options)
  - [github status badges](#github-status-badges)
    - [profile views badge (no custom options)](#profile-views-badge-no-custom-options)
    - [github stats embed (with `show_icons=true` and `rank_icon=github` options)](#github-stats-embed-with-show_iconstrue-and-rank_icongithub-options)
    - [github top langs embed (with `layout=compact` option)](#github-top-langs-embed-with-layoutcompact-option)
  - [custom badge](#custom-badge)
### Do not include the first one.
mdp:
`$nav false`

md:
- [Center heading](#center-heading)
  - [navigation](#navigation)
    - [Include the first one.](#include-the-first-one)
    - [Do not include the first one.](#do-not-include-the-first-one)
    - [min heading](#min-heading)
  - [output with command](#output-with-command)
  - [output without command](#output-without-command)
  - [output with custom language](#output-with-custom-language)
  - [csv table](#csv-table)
  - [dot list](#dot-list)
  - [number list](#number-list)
  - [empty checkbox list](#empty-checkbox-list)
  - [checked checkbox list](#checked-checkbox-list)
  - [youtube embed (width 400)](#youtube-embed-width-400)
  - [connect badges](#connect-badges)
    - [github badge (`for-the-badge` style)](#github-badge-for-the-badge-style)
    - [email badge (no custom options)](#email-badge-no-custom-options)
    - [website badge (`for-the-badge` style and custom color)](#website-badge-for-the-badge-style-and-custom-color)
  - [buymeacoffee badge (no custom options)](#buymeacoffee-badge-no-custom-options)
  - [github status badges](#github-status-badges)
    - [profile views badge (no custom options)](#profile-views-badge-no-custom-options)
    - [github stats embed (with `show_icons=true` and `rank_icon=github` options)](#github-stats-embed-with-show_iconstrue-and-rank_icongithub-options)
    - [github top langs embed (with `layout=compact` option)](#github-top-langs-embed-with-layoutcompact-option)
  - [custom badge](#custom-badge)
### min heading
mdp:
`$nav true 2`

md:
- [Center heading](#center-heading)
  - [navigation](#navigation)
    - [Include the first one.](#include-the-first-one)
    - [Do not include the first one.](#do-not-include-the-first-one)
    - [min heading](#min-heading)
  - [output with command](#output-with-command)
  - [output without command](#output-without-command)
  - [output with custom language](#output-with-custom-language)
  - [csv table](#csv-table)
  - [dot list](#dot-list)
  - [number list](#number-list)
  - [empty checkbox list](#empty-checkbox-list)
  - [checked checkbox list](#checked-checkbox-list)
  - [youtube embed (width 400)](#youtube-embed-width-400)
  - [connect badges](#connect-badges)
    - [github badge (`for-the-badge` style)](#github-badge-for-the-badge-style)
    - [email badge (no custom options)](#email-badge-no-custom-options)
    - [website badge (`for-the-badge` style and custom color)](#website-badge-for-the-badge-style-and-custom-color)
  - [buymeacoffee badge (no custom options)](#buymeacoffee-badge-no-custom-options)
  - [github status badges](#github-status-badges)
    - [profile views badge (no custom options)](#profile-views-badge-no-custom-options)
    - [github stats embed (with `show_icons=true` and `rank_icon=github` options)](#github-stats-embed-with-show_iconstrue-and-rank_icongithub-options)
    - [github top langs embed (with `layout=compact` option)](#github-top-langs-embed-with-layoutcompact-option)
  - [custom badge](#custom-badge)

## output with command
```bash
gh@repo:/$ python3 print('Hello!')
Hello!
gh@repo:/$ █
```

## output without command
```bash
gh@repo:/$ 
Deneme
gh@repo:/$ █
```

## output with custom language
```python
gh@repo:/$ python3 print('Hello!')
Hello!
gh@repo:/$ █
```

## csv table
| Name | Surname | Age |
| --- | --- | --- |
| John | Doe | 25 |
| Jane | Smith | 30 |
| Mike | Johnson | 27 |


## dot list
- John
  - Jane
    - Mike


## number list
1) John
2) Jane
3) Mike


## empty checkbox list
- [ ] John
- [ ] Jane
- [ ] Mike


## checked checkbox list
- [X] John
- [X] Jane
- [X] Mike


## youtube embed (width 400)
[<img src="https://img.youtube.com/vi/R2dqWt81lxo/maxresdefault.jpg" width="400" />](https://www.youtube.com/watch?v=R2dqWt81lxo)

## connect badges
### github badge (`for-the-badge` style)

[<img src="https://img.shields.io/badge/Github-%2324292e.svg?&logo=github&style=for-the-badge" />](https://github.com/sanalzio)
### email badge (no custom options)

[<img src="https://img.shields.io/badge/E--Mail-gray.svg?&logo=maildotru&logoColor=white" />](mailto:sanalzio@duck.com)
### website badge (`for-the-badge` style and custom color)

[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-darkred.svg?&logo=globe&style=for-the-badge" />](https://sanalzio.github.io)

## buymeacoffee badge (no custom options)
[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/sanalzio)

## github status badges
### profile views badge (no custom options)

![profile views](https://komarev.com/ghpvc/?username=sanalzio&)
### github stats embed (with `show_icons=true` and `rank_icon=github` options)

![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=sanalzio&show_icons=true&rank_icon=github)
### github top langs embed (with `layout=compact` option)

![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=sanalzio&layout=compact)

## custom badge
![custom badge](https://img.shields.io/badge/Hello-World!-darkred.svg?&style=for-the-badge)
        