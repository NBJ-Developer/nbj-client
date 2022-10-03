import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ServiceSummary() {
  return (
    <Box sx={{
        width: '100%'
    }}>
        {/* SMALL DEVICE */}
        <Box sx={{
            display: { xs: 'flex', md: 'none'},
        }}>
        </Box>

        {/* MEDIUM DEVICE */}
      <Box sx={{
            display: { xs: 'none', md: 'flex'},
            justifyContent: 'center',
            marginTop: '140px'
        }}>
            <Box sx={{
                width: '90%',
                height: '590px',
                display: 'flex'
            }}>
                <Box sx={{
                    width: '50%'
                }}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '18px',
                        lineHeight: '24.51px',
                        color: '#000000',
                        textAlign: 'justify'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies malesuada 
                        urna faucibus consectetur neque, a tristique aenean. Velit egestas semper interdum massa 
                        condimentum imperdiet vulputate. Laoreet suspendisse nulla sem sed fusce. Enim, sit euismod 
                        proin egestas fames dui. Mi cursus enim, interdum bibendum scelerisque tincidunt egestas. 
                        Dolor mattis diam at non libero ut. Amet sed volutpat pharetra placerat lacinia convallis 
                        dignissim est. Lacinia dis porta ac dui. Vestibulum amet elementum ultrices feugiat pulvinar. 
                        Arcu urna posuere a sit. Tellus sit sollicitudin integer pretium metus semper mus iaculis. 
                        Augue laoreet tincidunt elit nunc rhoncus bibendum diam. Diam sapien, vel, volutpat ligula eu, 
                        a vestibulum. Quis rhoncus, tincidunt mattis dis nec. Sollicitudin placerat eu sed eu at scelerisque
                        nam ut ornare. Vestibulum non viverra sit a libero sem aliquam semper non. Velit purus nunc in 
                        malesuada duis feugiat nulla. Ullamcorper vel congue viverra dui integer et mollis eget integer. 
                        Ac enim, mi magnis duis congue dui. Massa id condimentum dictumst pellentesque aliquam. Pulvinar 
                        porta pharetra nec aenean placerat a, et. Vitae sed lacus vitae quis lacinia ac. Ultricies duis 
                        dignissim elit sit tempor, ligula non. Luctus volutpat egestas at felis penatibus adipiscing est 
                        non id. A viverra nunc viverra sed imperdiet aliquam, elit ut. Cras commodo quisque mi semper amet.
                        Commodo, semper risus viverra scelerisque nullam vitae eleifend scelerisque ut. Urna et, sit faucibus 
                        dignissim feugiat at. Quis enim, orci dis interdum orci eleifend tempus feugiat. Feugiat cras donec 
                        amet convallis suscipit ut. Integer ullamcorper in quisque at cum ultrices. Leo nulla sed porttitor 
                        velit cras nunc faucibus maecenas. Malesuada ut arcu feugiat lacus, aenean a, imperdiet.
                    </Typography>
                </Box>
                <Box sx={{
                    width: '50%',
                    background: '#d9d9d9',
                    marginLeft: '10px'
                }}></Box>
            </Box>
      </Box>
    </Box>
  )
}

export default ServiceSummary