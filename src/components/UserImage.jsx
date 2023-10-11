import { Box } from '@mui/material';

const UserImage = ({ image, size }) => {

    return (
        <Box width={size} height={size}>
            <img 
                src={`http://localhost:3001/assets/${image}`} 
                alt="My User Profile" 
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                width={size}
                height={size}
            />
        </Box>
    );
};

export default UserImage;