type Props = {
  className?: string
}

export default function Logo({ className }: Props) {
  return <div className={"inline-block text-4xl uppercase border-2 border-black bg-white py-3 px-10 " + (className ?? '')}>logo</div>
}