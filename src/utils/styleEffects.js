import {Open_Sans } from 'next/font/google'
const os = Open_Sans({ subsets: ['latin'] })

const defDark = {
    '--color': '#207DD2',
    '--colorAlter': '#207DD2',
    '--pagePadding': '0 10px 10px 10px',
    '--font': 'font-family: "Comic Sans MS", "Comic Sans", cursive',
    '--fontColor': '#fafafa',
    '--fontColorAlter': '#46a6ff',
    '--borderRadius': '10px',
    '--borderRadiusTruncatedUp': '10px 10px 0 0',
    '--borderRadiusTruncatedDown': '0 0 10px 10px',
    '--bgColorDark': '#151515',
    '--bgColor': '#212121',
    '--bgColorLight': '#303030',
    '--buttonColor':'#409cf1',
    '--gradient': 'linear-gradient(to right, var(--bgColorDark) , var(--bgColorDark))',
    '--border': 'none',
    '--boxShadow': '0 4px 7px rgba(0, 0, 0, 0.2)',
    '--boxShadowStrong': '0 4px 3px rgba(0, 0, 0, 0.5);',
    '--productSize': '380px'
}
const defLight = {
    '--color': '#3590e6',
    '--colorAlter': '#3590e6',
    '--pagePadding': '0 10px 10px 10px',
    '--fontColor': '#313131',
    '--fontColorAlter': 'black',
    '--borderRadius': '10px',
    '--borderRadiusTruncatedUp': '10px 10px 0 0',
    '--borderRadiusTruncatedDown': '0 0 10px 10px',
    '--bgColorDark': '#dbe2eb',
    '--bgColor': '#dbe2eb',
    '--bgColorLight': '#fff',
    '--bgImage':'none',
    '--buttonColor':'#409cf1',
    '--gradient': 'linear-gradient(to right, #dbe2eb , #dbe2eb)',//'linear-gradient(to right, #1a6dbb , #207DD2)'
    '--border': 'none',
    '--boxShadow': '0 4px 4px rgba(0, 0, 0, 0.05)',
    '--boxShadowStrong': 'none',
    '--productSize': '380px'
}
const nineties = {
    '--color': 'grey',
    '--colorAlter': 'blue',
    '--pagePadding': '10px',
    '--font': 'Times New Roman, Times, serif',
    '--fontColor': 'blue',
    '--fontColorAlter': 'blue',
    '--borderRadius': '0',
    '--borderRadiusTruncatedUp': '0',
    '--borderRadiusTruncatedDown': '0',
    '--bgColorDark': 'rgb(211, 211, 211)',
    '--bgColor': '#d6d6d6',
    '--bgColorLight': '#ebebeb',
    '--buttonColor':'#409cf1',
    '--bgImage':'url("/images/backgroundnineties.png")',
    '--gradient': 'linear-gradient(to right, rgb(190, 190, 190) , rgb(190, 190, 190))',
    '--border': '2px solid blue',
    '--boxShadow': '4px 4px grey',
    '--boxShadowStrong': 'none',
    '--productSize': '378px'
}
const neobrutalism = {
    '--color': '#AAC7FF',
    '--colorAlter': 'black',
    '--pagePadding': '10px',
    '--font': os,
    '--fontColor': '#040200',
    '--fontColorAlter': '#040200',
    '--borderRadius': '10px',
    '--borderRadiusTruncatedUp': '10px',
    '--borderRadiusTruncatedDown': '10px',
    '--bgColorDark': 'rgb(237, 237, 237)',
    '--bgColor': '#FFF2AB',
    '--bgColorLight': 'rgb(250, 250, 250)',
    '--bgImage':'none',
    '--buttonColor':'#409cf1',
    '--gradient': 'linear-gradient(to right, #AAC7FF , #AAC7FF)',
    '--border': '2px solid #040200',
    '--boxShadow': '4px 4px #040200',
    '--boxShadowStrong': 'none',
    '--productSize': '378px'
}
const pixels = {
    '--color': '#AAC7FF',
    '--font': "'VT323', monospace",
    '--fontColor': '#040200',
    '--fontColorAlter': '#040200',
    '--borderRadius': '10px',
    '--borderRadiusTruncatedUp': '10px 10px 0 0',
    '--borderRadiusTruncatedDown': '0 0 10px 10px',
    '--bgColorDark': 'rgb(237, 237, 237)',
    '--bgColor': '#FFF2AB',
    '--bgColorLight': 'rgb(250, 250, 250)',
    '--bgImage':'none',
    '--buttonColor':'#409cf1',
    '--gradient': 'linear-gradient(to right, #AAC7FF , #AAC7FF)',
    '--border': '2px solid #040200',
    '--boxShadow': '3px 3px #040200',
    '--boxShadowStrong': 'none'
}

const styleEffects = {nineties, defDark,defLight,neobrutalism, pixels}
export default styleEffects;