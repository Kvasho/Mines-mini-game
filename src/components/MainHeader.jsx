import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../components/component-styles.css';
import howToPlay from '../assets/image.PNG';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function MainHeader(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='main-header'>
        <div className='main-header-left'>
            <div onClick={handleOpen} className='how-to-play'>how to play</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography className='modal-title' id="transition-modal-title" variant="h6" component="h2">
                    <h4 className='modal-title-style'>How to Play</h4> 
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <img src={howToPlay} alt="image" className='modal-img'/>
                    </Typography>
                </Box>
                </Fade>
            </Modal>
        </div>    
        <div className='main-header-right'>
            <div className='wallet'>{props.bank} <span>usd</span></div>
        </div>
    </div>
  )
}

export default MainHeader