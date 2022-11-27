import { Box } from '@mui/material'
import React from 'react'
import MissionComponent from './MissionComponent'

function MisionVissionMobile() {

    const misionContent = [
        {
        label: 'MISION',
        body: `To provide the highest standards of safety through our highly 
        trained domestic and international field representatives and customer 
        service personnel.`,
      },
      {
        label: 'VISSION',
        body: `To provide the highest standards of safety through our highly 
        trained domestic and international field representatives and customer 
        service personnel.`,
      },
      {
        label: 'VALUES',
        body: `To provide the highest standards of safety through our highly 
        trained domestic and international field representatives and customer 
        service personnel.`,
      },
      ]
  return (
    <div>
      <Box sx={{
        mt: 16,
        px: 3,
        width: '100%',
        display: {xs: 'block', md: 'none'},
        backgroundColor: '#02103E',
      }}>
        <Box sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}>
          <MissionComponent misionContent={misionContent[0]}/>
        </Box>
        <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
      }}>
          <MissionComponent misionContent={misionContent[1]}/>
        </Box>
        <Box sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}>
          <MissionComponent misionContent={misionContent[2]}/>
        </Box>
      </Box>
    </div>
  )
}

export default MisionVissionMobile
