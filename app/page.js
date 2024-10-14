import About from "@/components/pages/index/about/about"
import Contacts from "@/components/pages/index/contacts"
import Start from "@/components/pages/index/start"
import Template from "@/components/pages/template"

export const metadata = {
  title: 'Пластилин - детский центр в Раменском',
  description: 'Детский центр в г. Раменское, Свободы 6А. Группы от 1 года и 2 месяцев. Развитие софт скилс. Опытные педагоги, которые знают, как работать с детьми нового поколения.',
}

export default function Page() {
  return (
    <Template main>
      <Start />
      <About />
      <Contacts />
    </Template>
  )
}