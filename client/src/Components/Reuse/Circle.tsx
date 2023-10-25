type Props = {
  onClick?: () => void
}
export default function Circle({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="border border-1 border-gray-border-light cursor-pointer rounded-full w-7 h-7"
    ></div>
  )
}
