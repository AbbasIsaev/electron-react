import React, {useState} from 'react'
import {Button, Grid, TextField} from '@mui/material'

import {IApiWindow} from '../../src/types/types'

declare const window: Window & typeof globalThis & IApiWindow

export function App() {
    const [time, setTime] = useState('1')
    const [text, setText] = useState('')

    const onClickSend = async () => {
        setText('')
        const result = await window.api.runShutdown(time)
        setText(result)
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
                        }}
                        fullWidth={true}
                    />
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={onClickSend}>Отправить</Button>
                </Grid>
            </Grid>
            <div className={'br'}>
                {text}
            </div>
        </div>
    )
}