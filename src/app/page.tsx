"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Toggle } from "@/components/Toggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Container>
        <header className="w-full flex justify-between">
          <h1 className={`tracking-widest text-2xl`}>Dark Theme Project</h1>
          <Toggle />
        </header>

        <div className="mt-14">
          <p className={`text-justify mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a quam
            eu elit pellentesque interdum eu vel magna. Phasellus lorem neque,
            sodales condimentum tempus vitae, sollicitudin nec elit. Quisque sit
            amet pharetra dolor. Nam ligula augue, tempus eget pellentesque ac,
            elementum non dui. Proin ac augue at urna vulputate eleifend et a
            magna. Duis et ex at elit sagittis eleifend. Ut quis luctus felis,
            varius volutpat ipsum. Nulla viverra porta odio sit amet mattis.
          </p>
          <Button />
        </div>
      </Container>
    </ThemeProvider>
  );
}
