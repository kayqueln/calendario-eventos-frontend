import React, { useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  CircularProgress,
} from '@mui/material';
import { confirmPresence } from '../api';
import { toast } from 'react-toastify';

const ConfirmPresenceForm = ({ event, open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await confirmPresence(event._id, name, email);      
      toast.success(
        <>
          Presença confirmada com sucesso! <br />
          Por favor, verifique seu e-mail.
        </>, 
        {
          position: "top-right",
          autoClose: 6500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        }
      );
           
      onClose();
    } catch (error) {
      if(error instanceof Error){
        toast.error(error.message);  
      }else{
        toast.error('Ocorreu um erro ao confirmar sua presença.')
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Confirmar presença no evento: {event.titulo}</DialogTitle>
      <DialogContent sx={{ position: 'relative' }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1000,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <TextField
          autoFocus
          margin="dense"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmPresenceForm;
