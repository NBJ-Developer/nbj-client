import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './ContainedButtons.module.css'

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className={`${styles.button}`}>
        Link
      </Button>
    </Stack>
  );
}