import Box from '@mui/material/Box'
import React from 'react'
import VisionComponent from '../../elements/Vision/VisionComponent'
import VisionPapper from '../../elements/Vision/VisionPapper'

function MissionVision() {
  const componentContents = [
  {
    label: 'MISSION',
    body: `To provide the highest standards of safety through our highly 
    trained domestic and international field representatives and customer 
    service personnel.`,
  },
  {
    label: 'MISSION',
    body: `To provide the highest standards of safety through our highly 
    trained domestic and international field representatives and customer 
    service personnel.`,
  },
  {
    label: 'MISSION',
    body: `To provide the highest standards of safety through our highly 
    trained domestic and international field representatives and customer 
    service personnel.`,
  }
]

  const paperContents = [
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  },
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  },
  {
    image: 'visionLogo.png',
    label: 'Over +87',
    body: 'Safe & Enjoyable Flights'
  }
]
  return (
    <Box sx={{
      position: 'relative',
    }}>
      <Box sx={{
        display: 'flex',
        mt: 6,
        justifyContent: 'space-between',
        backgroundColor: '#2B47A1',
        position: 'relative',
      }}>
        {componentContents.map(content => 
        (<Box key={content.label}>
          <VisionComponent contents={content}/>
        </Box>)
      )}
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        position: 'absolute',
        bottom: '-65px',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '85%',
        }}>
        {paperContents.map(content => 
        (<Box key={content.label}>
          <VisionPapper contents={content}/>
        </Box>)
        )}
        </Box>
      </Box>
      
    </Box>
    
  )
}

export default MissionVision
