import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Text, ThemeProvider, FluentTheme, IStyle, Stylesheet } from '@fluentui/react';
import { NavBar } from './components/NavBar';
import { LeftNav } from './components/LeftNav';


const headerStyle: IStyle = {
    width: '100%',
    height: 42,
    borderBottom: '1px solid #666666',
};

function MainPage() {
    return <ThemeProvider theme={FluentTheme}>
        <BrowserRouter>
            <NavBar />
            <LeftNav />
        </BrowserRouter>
    </ThemeProvider>;
}

Stylesheet.getInstance().insertRule("body { margin: 0px; }", true);

ReactDOM.createRoot(document.getElementById("app")!).render(<MainPage />);