import React, {useState} from 'react'
import {Button, Grid, TextField} from '@mui/material'

import {IApiWindow} from '../../src/types/types'

declare const window: Window & typeof globalThis & IApiWindow

export function App() {
    const [time, setTime] = useState('1')
    const [result, setResult] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    const onClickSend = async () => {
        const result = await window.api.runShutdown(time)
        setResult(result)
    }

    return (
        <div className={'app'}>
            <Grid container spacing={2} direction={'row'} alignItems={'center'}>
                <Grid item xs={8}>
                    <TextField
                        label="Завершение работы компьютера через (в минутах)" variant="outlined"
                        value={time}
                        onChange={(event) => {
                            setTime(event.target.value)
                            const value = Number(event.target.value)
                            if (isNaN(value) || event.target.value.trim() === '' || value < 0) {
                                setResult('Ошибка ввода, введите число')
                                setIsDisabled(true)
                            } else {
                                setResult('')
                                setIsDisabled(false)
                            }
                        }}
                        fullWidth={true}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={onClickSend}
                        disabled={isDisabled}
                    >
                        Отправить
                    </Button>
                </Grid>
            </Grid>

            <div className={'br' + (isDisabled ? ' red' : '')}>
                {result}
            </div>
        </div>
    )
}