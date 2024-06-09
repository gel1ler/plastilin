import Template from "@/components/pages/template"
import Index from "@/components/pages/video/Index"
import { Box } from "@mui/material"

export const metadata = {
  title: 'Пластилин - камеры',
  // description: 'Смотрите за своими детьми через камеры.',
}

export default function Page() {
  return (
    <Template noBg>
      <Box sx={{ p: 2, width: ['100vw', '100vw', '90vw'], mt: 12, flexGrow: 1, display: 'flex' }}>
        <Index />
      </Box>
    </Template>
  )
}