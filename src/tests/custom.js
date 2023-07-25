import "../tests/setup";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import theme from "../styles/theme";

const wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>{children}</MemoryRouter>
  </ThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper, ...options });

export * from "@testing-library/react";

// override
export { customRender as render };
