
import React from 'react';
import Button from '@mui/material/Button';
const CustomButtons = ({paddingX,paddingY, label,fontSize="20px", onClick,borderRadius="50px", backgroundColor="white", variant = 'contained', color = 'primary', ...props }) => {

    
       return (
    <Button
    sx={{
        color:color,
        backgroundColor:backgroundColor,
        borderRadius:borderRadius,
        fontSize:fontSize,
        textTransform: 'none',
        paddingX:paddingX,
        paddingY:paddingY
    }}
    variant={variant}   onClick={onClick} {...props}>
      {label}
    </Button>
  );
    
  
}

export default CustomButtons
