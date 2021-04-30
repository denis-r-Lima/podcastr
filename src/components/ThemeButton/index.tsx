import { FaLightbulb , FaRegLightbulb} from 'react-icons/fa'

import { useThemeContext } from "../../contexts/themeContext";
import { Container, Handle, Tracker } from "./styles";


export function ThemeButton(){
    const { isDarkTheme , toggleTheme} = useThemeContext()
    return(
        <Container>
            <Tracker onClick={toggleTheme}>
                <Handle className={isDarkTheme ? "Dark": ""}>
                    {isDarkTheme ? 
                        <FaLightbulb />:
                        <FaRegLightbulb />
                    }
                </Handle>
            </Tracker>
        </Container>
    )
}