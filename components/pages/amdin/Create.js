import RHookFormInputWithMask from '@/components/UI/forms/RHookFormInputWithMask'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { changelesson, createLesson } from '@/firebase/clientApp'
import { Box, Button, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const days = ['понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу', 'воскресенье'];

const Create = ({ setOpen, open, change, lesson, selectedDay }) => {
    const router = useRouter()

    const methods = useForm({
        defaultValues: useMemo(() => {
            return lesson
        }, [lesson])
    })

    useEffect(() => {
        methods.reset(lesson)
    }, [lesson, methods])

    const onSubmit = async (data) => {
        console.log(methods.getValues())
        try {
            if (change && lesson) {
                await changelesson(lesson.id, { ...data }, selectedDay)
            } else {
                await createLesson({ ...data }, selectedDay)
            }

            //Progress circle

            setTimeout(() => {
                router.refresh()
                setOpen(false)
            }, 1000)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                bgcolor='white'
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                    p: 4,
                    overflowY: 'scroll',
                    bgColor: 'white',
                    width: '400px',
                    maxHeight: '80vh',
                    overflow: 'scroll',
                    borderRadius: '10px'
                }}
            >
                <Typography variant='h6' textAlign='center'>
                    {change ? 'Изменение занятия' : 'Добавление занятия на ' + days[selectedDay]}
                </Typography>
                <FormProvider {...methods}>
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            marginTop: '20px',
                        }}
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <Typography>
                            Общая информация
                        </Typography>
                        <RHookFormTextField fullWidth label='Наименование' name='name' />
                        <RHookFormTextField notRequired fullWidth multiline label='Описание' name='description' />

                        <Typography>
                            Время
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <RHookFormInputWithMask name='timeFrom' label='От' mask='99:99' />
                            <RHookFormInputWithMask name='timeTo' label='До' mask='99:99' />
                        </Box>

                        <Box>
                            <Typography textAlign='center'>
                                Возраст
                            </Typography>
                            <Typography variant='body2' color='gray'>
                                *До - необязательно
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <RHookFormTextField label='От' name='ageFrom' />
                            <RHookFormTextField notRequired label='До' name='ageTo' />
                        </Box>

                        <Button
                            sx={{
                                width: 'min-content',
                            }}
                            variant="contained"
                            type="submit"
                            color='secondary'
                        >
                            {change ? 'Изменить' : 'Создать'}
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </Modal>
    )
}

export default Create