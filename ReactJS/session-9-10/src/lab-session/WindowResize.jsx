import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function WindowSize() {
    const { theme,updateTheme } = useContext(ThemeContext)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return (() => {
            window.removeEventListener('resize', handleResize);
        })
    }, [])
    return (
        <div>
            <h3>Window Resizing Example</h3>
            <h4>Width: {width}px</h4>
            <div className="form-check form-switch float-end">
                <input className="form-check-input" type="checkbox" role="switch" onClick={updateTheme}/>
                <label className="form-check-label">{theme=='light'?'Dark Theme':'Light Theme'}</label>
            </div>
            {/* <button onClick={updateTheme} type="checkbox" role="switch">Toggle Theme</button> */}
        </div>
    );
}

export default WindowSize;