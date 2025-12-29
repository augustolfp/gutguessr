import Container from "./Container";
import Hero from "./Hero";
import StartGameSessionForm from "./StartGameSessionForm";

export default function HomePage() {
  return (
    <Container>
      <div className="container mx-auto pt-16 flex flex-col justify-center items-center relative">
        <Hero />
        <StartGameSessionForm />
      </div>
    </Container>
  );
}
