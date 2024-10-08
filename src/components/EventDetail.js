import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const EventDetail = ({ event, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={event.bannerUrl}
        alt={event.titulo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.titulo}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          {event.descricao}
        </Typography>
        
        <Typography sx={{ marginTop: 1 }} variant="body2" color="text.secondary">
          Data: {new Date(event.data).toLocaleDateString()}
        </Typography>

        <Box sx={{display: 'flex', gap: 0.5}}>
          <Typography variant="body2" color="text.secondary">
            Horário: {event.horaInicio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            às {event.horaTermino}
          </Typography>
        </Box>
        

        <Box sx={{ marginTop: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Vagas disponíveis: {event.vagas}
          </Typography>
        </Box>

        <Button size="small" onClick={() => onClick(event)} sx={{ marginTop: 2 }}>
          Confirmar Presença
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventDetail;
