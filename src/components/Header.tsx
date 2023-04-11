
import { AppBar, Toolbar, Typography } from '@mui/material';

import { logo } from '../constants/constant';

const Header: React.FunctionComponent = () => {

    return (
        <AppBar position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 50, marginRight: 10 }} />
                <Typography variant="h6">TASK TITAN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;