const services = [
  {
    name: "Gestionali su misura",
    desc: "Cassa, magazzino, schede clienti, provvigioni: costruiamo lo strumento attorno a come lavori davvero, non il contrario.",
  },
  {
    name: "Siti e app web",
    desc: "Siti veloci e applicazioni web moderne, pensati per essere usati ogni giorno — anche da chi non ama i computer.",
  },
  {
    name: "Manutenzione ed evoluzione",
    desc: "Teniamo in vita e facciamo crescere il software che già usi: aggiornamenti, correzioni, nuove funzioni, backup.",
  },
  {
    name: "Hosting e messa in produzione",
    desc: "Ci occupiamo noi di server, dominio e pubblicazione. Tu apri il browser e lavori.",
  },
];

const portfolio = [
  {
    name: "Cassa",
    sector: "Punto vendita",
    desc: "Gestione di cassa e vendite per il negozio: conti chiari a fine giornata, senza fogli volanti.",
  },
  {
    name: "PolliceVerde",
    sector: "Vivaio / Garden",
    desc: "Gestionale per il vivaio: piante, fornitori e clienti in un unico posto.",
  },
  {
    name: "Provvigioni",
    sector: "Reti vendita",
    desc: "Calcolo e rendicontazione delle provvigioni per agenti e collaboratori, senza Excel infiniti.",
  },
  {
    name: "Scheda Trattamenti",
    sector: "Saloni / Estetica",
    desc: "Schede clienti e storico trattamenti per saloni e centri estetici, sempre a portata di mano.",
  },
];

const contactEmail = "puntoelettronica21@gmail.com";

export default function Home() {
  return (
    <>
      <header className="container">
        <nav className="nav" aria-label="Principale">
          <a className="wordmark" href="#top">
            Mad<span>Tech</span>
          </a>
          <div className="nav-links">
            <a href="#chi-siamo">Chi siamo</a>
            <a href="#servizi">Servizi</a>
            <a href="#lavori">Lavori</a>
            <a href="#contatti">Contatti</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">Studio software · Italia</p>
          <h1>
            Il tuo lavoro, fuori dal quaderno.{" "}
            <span className="pen-underline">
              Dentro un software
              <svg viewBox="0 0 300 20" aria-hidden="true">
                <path d="M2 12 C 60 4, 140 18, 298 8" />
              </svg>
            </span>
            .
          </h1>
          <p>
            MadTech progetta e mantiene gestionali su misura per negozi,
            saloni, vivai e piccole imprese. Prendiamo i conti, le schede e
            gli appunti che oggi vivono su carta e li trasformiamo in
            strumenti semplici, veloci e sempre aggiornati.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contatti">
              Parliamo del tuo progetto
            </a>
            <a className="btn btn-ghost" href="#lavori">
              Guarda i lavori
            </a>
          </div>
        </section>

        <section id="chi-siamo" className="section container">
          <h2>Chi siamo</h2>
          <p className="section-intro">
            Siamo uno studio software piccolo per scelta. Lavoriamo a stretto
            contatto con chi userà il programma ogni giorno, e restiamo al tuo
            fianco anche dopo la consegna.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>Su misura, davvero</h3>
              <p>
                Niente pacchetti preconfezionati da adattare a fatica: partiamo
                da come lavori tu e costruiamo attorno a quello.
              </p>
            </div>
            <div className="about-card">
              <h3>Un referente, non un call center</h3>
              <p>
                Parli sempre con chi ha scritto il codice. Le richieste non si
                perdono in un ticket.
              </p>
            </div>
            <div className="about-card">
              <h3>Software che dura</h3>
              <p>
                Manteniamo i nostri progetti nel tempo: aggiornamenti, backup e
                nuove funzioni quando il tuo lavoro cresce.
              </p>
            </div>
          </div>
        </section>

        <section id="servizi" className="section container">
          <h2>Servizi</h2>
          <p className="section-intro">
            Dal primo preventivo alla messa in produzione, ci occupiamo di
            tutto il ciclo di vita del software.
          </p>
          <ul className="service-list">
            {services.map((s) => (
              <li className="service-item" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="lavori" className="section container">
          <h2>Lavori</h2>
          <p className="section-intro">
            Applicazioni in produzione oggi, usate ogni giorno da attività
            reali.
          </p>
          <div className="ledger">
            <div className="ledger-head" aria-hidden="true">
              <span>Progetto</span>
              <span>Descrizione</span>
              <span>Settore</span>
            </div>
            {portfolio.map((p) => (
              <div className="ledger-row" key={p.name}>
                <h3>{p.name}</h3>
                <p className="campo">{p.desc}</p>
                <p className="settore">{p.sector}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contatti" className="section container">
          <div className="contact">
            <h2>Contatti</h2>
            <p>
              Raccontaci come lavori oggi — anche se è un quaderno pieno di
              appunti. Ti rispondiamo con una proposta concreta, senza
              impegno.
            </p>
            <a className="btn btn-primary" href={`mailto:${contactEmail}`}>
              Scrivici
            </a>
            <p className="mono" style={{ marginTop: 20, marginBottom: 0 }}>
              {contactEmail}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} MadTech</span>
        <span>Software su misura, fatto in Italia</span>
      </footer>
    </>
  );
}
