import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import ProSidebar from "./scenes/global/ProSidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>
          <div className="app">
            <ProSidebar/>
            <main className="content">
              <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/team" element={<Team/>}></Route>
                {/* <Route path="/invoices" element={<Invoices/>}></Route> */}
                {/* <Route path="/contacts" element={<Contacts/>}></Route> */}
                {/* <Route path="/bar" element={<Bar/>}></Route> */}
                {/* <Route path="/form" element={<Form/>}></Route> */}
                {/* <Route path="/line" element={<Line/>}></Route> */}
                {/* <Route path="/pie" element={<Pie/>}></Route> */}
                {/* <Route path="/faq" element={<FAQ/>}></Route> */}
                {/* <Route path="/geography" element={<Geography/>}></Route> */}
              </Routes>
            </main>
          </div>
          </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
