import { SmartButton } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledPaper = styled(Paper)(
  sx({
    height: "700px",
    width: 300,
  })
);

export const StyledProfile = styled(Paper)(
  sx({
    height: "700px",
    width: 300,
  })
);
export const StyledDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },

    gap: "30px",
  })
);
export const LioAvatar = styled(Avatar)(sx({}));
