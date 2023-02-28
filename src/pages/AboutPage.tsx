export default function AboutPage() {
  // write big text about Marvel API project on React and Tailwind CSS in russian
  return (
    <div className="p-4 max-w-full">
      <h1 className="text-2xl font-bold mb-4">Marvel Char</h1>
      <p>Marvel Char - это проект, который позволяет просматривать информацию о персонажах Marvel, комиксах и сериях.</p>
      <p>
        В проекте используется официальный <a href="https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0">API Marvel.</a>
      </p>
      <p>В проекте используются следующий стэк технологий:</p>
      <ul className="px-4">
        <li>React</li>
        <li>React Router Dom</li>

        <li>Uno CSS</li>

        <li>Typescript</li>
      </ul>
    </div>
  )
}
