import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Index() {

  return (
    <div>
      <AvatarGroup>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Stack direction="row" spacing={1}>
        <Chip label="Deletable" />
        <Chip label="Deletable" variant="outlined" />
        <Chip label="Small" size="medium" />
        <Chip label="Small" size="small" variant="outlined" /> 
      </Stack>
    </div>
  );
}