import Moon from "../SVG/Moon"

export default function Header() {
  return (
    <div className="text-white text-4xl font-bold tracking-widest uppercase">
      <div className="wrapper flex justify-between">
        <div className="h1">todo</div>
        <Moon />
      </div>
    </div>
  )
}
