import { Navbar, Aside, Nav, Header } from "./components/index";
export default function Layout({ children }) {
  return (
    <main className="">
      <Navbar />
      <Header />
      <section className="wrapper container">
          <Aside />
        <div className="wrapper__content">
          <Nav className="wrapper__nav" />
          {children}
        </div>
      </section>
    </main>
  );
}
