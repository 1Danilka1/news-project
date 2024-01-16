import css from "../styles/About.module.css"

export default function About() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <h1 className={css.title}>Here you can find contacts to our team</h1>
        <ul className={css.item_contact}>
          <li>
            <p>Email: <a href="mailto:danylbragan@gmail.com">danylbragan@gmail.com</a></p>
          </li>
          <li>
            <p>GitHub: <a href="https://github.com/1Danilka1">link</a></p>
          </li>
          <li>
            <p>Upwork: <a href="https://www.upwork.com/freelancers/~011a6ba57c00daccaf">link</a></p>
          </li>
        </ul>
      </main>
    </div>
  )
}
