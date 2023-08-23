import image1 from '@/public/children/1.jpg'
import image2 from '@/public/children/2.jpg'
import image3 from '@/public/children/3.jpg'
import theater from '@/public/icons/theater.svg'
import puzzle from '@/public/icons/puzzle.svg'
import eticet from '@/public/icons/eticet.svg'
import mic from '@/public/icons/mic.svg'
import brain from '@/public/icons/brain.svg'
import books from '@/public/icons/books.svg'
import drawing from '@/public/icons/drawing.svg'
import t1 from '@/public/people/1.jpg'
import t2 from '@/public/people/2.jpg'

export const begin = [
    {
        image: image1,
        text: 'Сначала - мягкий и податливый',
        // additionalText: 'Сначала - мягкий и податливый',
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
    // {
    //     name: 'Развивающие программы',
    //     icon: books
    // },
    {
        name: 'Творческие занятия',
        icon: drawing
    }
]

export const people = [
    {
        photo: t1,
        name: "Наталья",
        fullName: 'Гончарова Наталья Викторовна',
        description: 'Меня зовут Гончарова Наталья Викторовна. Я родилась 21 июня 1988 года в городе Шуя Ивановской области. Там же окончила гимназию с золотой медалью. В 2010 году получила высшее техническое образование - окончила с красным дипломом химико-технологический университет (ИГХТУ). В 2020-2021 г.г. прошла профессиональную переподготовку по программе "Образовательная работа с детьми" в МПГУ на факультете дошкольной педагогики и психологии. Получила квалификацию воспитателя-педагога. В 2021-2022 г.г. работала в монтессори-студии с детьми от 3-х до 7-ми лет.'
    },
    {
        photo: t2,
        name: "Галина",
        fullName: 'Исайкина Галина Валерьевна',
        description: `Цель: Воспитатель, педагог психолог, нейропсихолог. Педагогический стаж более 5 лет.
        Личные качества:  ответственность,  любовь к детям,  внимательность,  доброжелательность,  аккуратность, пунктуальность,  терпеливость,  отзывчивость,  эмоциональная устойчивость.
        `
    },
]
