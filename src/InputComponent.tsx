import React, { Component } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import './InputComponent.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    }
  })
)

export default function InputWithIcon () {
  const classes = useStyles()

  return (
    <div className='input'>
      {/* <FormControl className={classes.margin}>
        <InputLabel htmlFor='input-with-icon-adornment'>
          With a start adornment
        </InputLabel>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl> */}
      {/* <TextField
        className={classes.margin}
        id='input-with-icon-textfield'
        label='TextField'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          )
        }}
      /> */}
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems='flex-end'>
          {/* <AccountCircle /> */}
          <Grid item>
            <TextField id='input-with-icon-grid' label='Enter Your Id' />
          </Grid>
        </Grid>
        <br></br>
        <TextField
          id='standard-password-input'
          label='Enter Your Password'
          type='password'
          autoComplete='current-password'
          className='password-field'
        />
      </div>
    </div>
  )
}
