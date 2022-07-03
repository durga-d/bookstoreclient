import { Box } from "@mui/system"
import BookFilter from "./BookFilter";

const BookContainer = () => {
    return(
        <Box>
            <BookFilter/>
            <Box>
                Here we will display all books
            </Box>
        </Box>
    )
}

export default BookContainer;