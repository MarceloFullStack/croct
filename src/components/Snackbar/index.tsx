import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const SimpleSnackbar = ({isSaved, message, classe}: any) => {
    const [open, setOpen] = React.useState(false);
    const cat = '🐱';
    const dog = '🐶';
    useEffect(() => {
        if (isSaved === true) {
            setOpen(true);
        }
    }, [isSaved]);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={classe ? 6000 : 10000}
                onClose={handleClose}
                message={message}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            {
                                classe === 'a dog' ? dog : classe === 'a cat' ? cat : 'voltar'
                            }
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
};
