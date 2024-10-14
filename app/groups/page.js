import Info from "@/components/pages/groups/info"
import Template from "@/components/pages/template"
import { additionalGroupsData, groupsData } from "@/data"

export const metadata = {
  title: 'Пластилин - группы',
  description: '5 возрастных групп от 1 года и 2 месяцев.',
}

export default function Page() {
  return (
    <Template>
      <Info
        data={groupsData}
        additionalData={additionalGroupsData}
      />
    </Template>
  )
}