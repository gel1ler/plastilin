import image1 from '@/public/1.jpg'
import image2 from '@/public/2.jpg'
import image3 from '@/public/3.jpg'
import image4 from '@/public/4.jpg'
import image5 from '@/public/5.jpg'
import icon from '@/public/arrow.svg'
import theater from '@/public/icons/theater.svg'
import puzzle from '@/public/icons/puzzle.svg'
import eticet from '@/public/icons/eticet.svg'
import mic from '@/public/icons/mic.svg'
import brain from '@/public/icons/brain.svg'
import books from '@/public/icons/books.svg'
import drawing from '@/public/icons/drawing.svg'

export const begin = [
    {
        image: image1,
        text: 'Сначала - мягкий и податливый',
        additionalText: 'Сначала - мягкий и податливый',
    },
    {
        image: image2,
        text: 'Но со временем он твердеет и чтобы что-то изменить, приходится ломать форму'
    },
    {
        image: image3,
        text: (<span>Поэтому так важно все закладывать с самого <b>детства</b></span>)
    },
]

export const what = [
    {
        name: 'Развитие личности и эмоционального интелекта',
        icon: puzzle
    },
    {
        name: 'Театральный кружок',
        icon: theater
    },
    {
        name: 'Уроки этикета',
        icon: eticet
    },
    {
        name: 'Ораторское искусство',
        icon: mic
    },
    {
        name: 'Нейропсихология',
        icon: brain
    },
    {
        name: 'Развивающие программы',
        icon: books
    },
    {
        name: 'Творческие занятия',
        icon: drawing
    }
]